class Cat {
  static _tableName = "cats";
  static _client = null;

  static async create(bodyObj) {
    const {name, breed, color, age, weight, favorite} = bodyObj;
    const insertString = `INSERT INTO ${this._tableName} (name, breed, color, age, weight, favorite) VALUES ('${name}', '${breed}', '${color}', ${age}, ${weight}, '${favorite}') RETURNING *;`
    const {rows} = await this._client.query(insertString);
    return rows;
}

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

  static async updateByPk() {
    /*
    UPDATE cats
    SET name = 'Barsik', breed = 'British'
    WHERE id = 5
    */
    // ПРОБЛЕМА: як автоматично створити запит на оновлення?
    /*
    1. У нас має бути об'єкт з відповідностями
        стовбець: тип_даних
    2. Ми можемо автоматично перевіряти вхідні дані на відповідність тому, що ми очікуємо
    3. Динамічно створити рядок запиту з тою інформацією, яка у нас є 
    */
}


  static async deleteByPk(id) {
    const { rows } = await this._client.query(
      `DELETE FROM ${this._tableName} WHERE ID = ${id} RETURNING *`
    );
    return rows;
  }
}

module.exports = Cat;
