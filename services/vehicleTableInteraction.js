var sqlite = require('sqlite');

var INSERT_DATA = 'INSERT INTO vehicleConfiguration (year, make, harnessNumberOne, harnessNumberTwo, adapterNumber) VALUES (?, ?, ?, ?, ?)';
var SELECT_ALL_DATA = 'SELECT * FROM vehicleConfiguration ORDER BY make ASC, year ASC;';
var UPDATE_DATA = 'UPDATE vehicleConfiguration SET harnessNumberOne = ?, harnessNumberTwo = ?, adapterNumber = ? WHERE year = ? AND make = ?';
var DELETE_DATA = 'DELETE FROM vehicleConfiguration WHERE year = ? AND make = ?';

var INSERT_SPECIAL_DATA = 'INSERT INTO specialVehicleConfiguration (year, make, engine, harnessNumberOne, harnessNumberTwo, adapterNumber) VALUES (?, ?, ?, ?, ?, ?)';
var SELECT_ALL_SPECIAL_DATA = 'SELECT * FROM specialVehicleConfiguration ORDER BY make ASC, year ASC, engine ASC;';
var UPDATE_SPECIAL_DATA = 'UPDATE specialVehicleConfiguration SET harnessNumberOne = ?, harnessNumberTwo = ?, adapterNumber = ? WHERE engine = ? AND year = ? AND make = ?';
var DELETE_SPECIAL_DATA = 'DELETE FROM specialVehicleConfiguration WHERE year = ? AND make = ? AND engine = ? ';

/* Opens database for access */
async function openDataBase() {
  try {
    return await sqlite.open('./db/database.db', {
      Promise
    })
  } catch (error) {
    return Promise.reject(error);
  }
}

/* all database interactions */
const crud = {
  async loadVehicles() {
    try {
      const db = await openDataBase();
      return db.all(SELECT_ALL_DATA);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async insertVehicle(data) {
    try {
      const db = await openDataBase();
      await db.run(INSERT_DATA, data.year, data.make, data.harnessNumberOne, data.harnessNumberTwo, data.adapterNumber);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async deleteVehicle(data) {
    try {
      const db = await openDataBase();
      await db.run(DELETE_DATA, data.yearId, data.makeId);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async updateVehicle(data) {
    try {
      const db = await openDataBase();
      await db.run(UPDATE_DATA, data.harnessNumberOne, data.harnessNumberTwo, data.adapterNumber,  data.yearId, data.makeId);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  /* special table interaction */
  async loadSpecialVehicles() {
    try {
      const db = await openDataBase();
      return db.all(SELECT_ALL_SPECIAL_DATA);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async updateSpecialVehicle(data) {
    try {
      const db = await openDataBase();
      await db.run(UPDATE_SPECIAL_DATA, data.harnessNumberOne, data.harnessNumberTwo, data.adapterNumber, data.engineId, data.yearId, data.makeId);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async insertSpecialVehicle(data) {
      try {
        const db = await openDataBase();
        await db.run(INSERT_SPECIAL_DATA, data.year, data.make, data.engine, data.harnessNumberOne, data.harnessNumberTwo, data.adapterNumber);
      } catch (error) {
        return Promise.reject(error);
      }
  },
  async deleteSpecialVehicle(data) {
    try {
      const db = await openDataBase();
      await db.run(DELETE_SPECIAL_DATA, data.yearId, data.makeId, data.engineId);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = crud;
