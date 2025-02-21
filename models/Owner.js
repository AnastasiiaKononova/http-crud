class Owner {
    static _tableName = 'owners';
    static _client = null;


    static _attributes = {
        first_name: 'string',
        last_name: 'string',
        address: 'string',
        phone: 'string'
    }

    static async create(insertValues) {
        const insertAttr = Object.entries(this._attributes)
        .filter(([attr,domain]) => attr in insertValues)
        .map(([attr]) => attr)

        const insertSchemaAtr = insertAttr.map(attr => `"${attr}"`).join(',');

        const insertValueStr = insertAttr.map(attr => {
            const value = insertValues[attr];
            return typeof value === 'string' ? `'${value}'` : value;
        }).join(',');

        const str = `INSERT INTO ${this._tableName} (${insertSchemaAtr}) VALUES (${insertValueStr}) RETURNING *;`

        const {rows} = await this._client.query(str);

        return rows;
    }

    static async findAll() {
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName}`);
        return rows
    }

    static async findByPk(id) {
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName} WHERE id = ${id}`);
        return rows
    }

    static async deleteByPk(id) {
        const {rows} = await this._client.query(`DELETE FROM ${this._tableName} WHERE id = ${id} RETURNING *`);
        return rows;
    }

    static async updateByPk({id, updateValues}) {
        const insertAttr = Object.entries(this._attributes)
        .filter(([attr,domain]) => attr in updateValues)
        .map(([attr]) => attr)

        const insertValueStr = insertAttr.map(attr => {
            const value = updateValues[attr];
            return `${attr} = ${typeof value === 'string' ? `'${value}'` : value}`
        }).join(',');

        const str = `UPDATE ${this._tableName} SET ${insertValueStr} WHERE id = ${id} RETURNING *;`

        const {rows} = await this._client.query(str);
        return rows;
    }


    static async addCat({catId, ownerId}) {
       const str = `UPDATE cats SET owner_id = ${ownerId} WHERE id = ${catId} RETURNING *`;
       const {rows} = await this._client.query(str);
       return rows; 
    }
}

module.exports = Owner;