class Cat {
  static _tableName = "cats";
  static _client = null;

  static async create() {}

  static async findAll() {
    const { rows } = await this._client.query(
      `SELECT * FROM ${this._tableName}`
    );
    return rows;
  }
  static async findByPk() {
    try {
      const { rows } = await this._client.query(
        `SELECT * FROM ${this._tableName} WHERE id = ${id}`
      );
      return rows;
    } catch (e) {
      console.error(e);
    }
  }

  static async updateByPk() {}

  static async deleteByPk(id) {
    const { rows } = await this._client.query(
      `DELETE FROM ${this._tableName} WHERE ID = ${id} RETURNING *`
    );
    return rows;
  }
}

module.exports = Cat;
