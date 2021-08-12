const fs = require('fs');
const crypto = require('crypto');

class Users {
  // create file of all users
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (error) {
      fs.writeFileSync(this.filename, '[]');
    }
  }
  // crate new user
  async create(attrs) {
    attrs.id = this.randomID();
    // create salt
    const salt = crypto.randomBytes(8).toString('hex');
    // hash password
    const hash = crypto
      .createHmac('sha256', salt)
      .update(attrs.password)
      .digest('hex');
    // save as hash + salt
    attrs.password = hash + '|' + salt;

    //save new record to array and write
    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);

    return attrs;
  }

  async verify(attrs) {
    // what we are checking, the user in the repo
    const { username } = attrs;
    const pulledUser = await this.getOneBy({ username });
    const password = pulledUser.password.split('|')[0];
    // puilling the salt off the pulled user
    const salt = pulledUser.password.split('|')[1];
    // hashing the entered password
    const hashTest = crypto
      .createHmac('sha256', salt)
      .update(attrs.password)
      .digest('hex');
    // comapring new hash to saved
    console.log(hashTest === password);
  }
  // get all users
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf8',
      })
    );
  }
  // write all suers
  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }
  // produce random ID for user
  randomID() {
    return crypto.randomBytes(4).toString('hex');
  }
  // get one user by ID
  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }
  // delete one user by ID
  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }
  // update a user
  async update(id, obj) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);
    if (!record) {
      throw new Error(`Record with id ${id} not found.`);
    }
    Object.assign(record, obj);
    await this.writeAll(records);
  }
  // get a user by a filter
  async getOneBy(filters) {
    const records = await this.getAll();
    for (const record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }
}

module.exports = new Users('users.json');
