class Cat {
    static _tableName = 'cats';
    static _client = null;

    static async create() {}

    static async findAll() {
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName}`);
        return rows
    }
    static async findByPk () {}

    static async updateByPk () {}

    static async deleteByPk () {}
}

module.exports = Cat;