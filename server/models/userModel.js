const db = require("../config/db");

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
      (err, result) => {
        if (err) return reject(err);
        if (!result[0]) return resolve(null);
        resolve(result[0]);
      }
    );
  });
};

const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      (err, result) => {
        if (err) return reject(err);
        if (!result[0]) return resolve(null);
        resolve(result[0]);
      }
    );
  });
};

const getUserWithPasswordByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT u.id, u.username, p.password
       FROM users u
       JOIN userspasswords p ON u.id = p.UserID
       WHERE u.username = ?`,
      [username],
      (err, result) => {
        if (err) return reject(err);
        if (!result[0]) return resolve(null);
        resolve(result[0]);
      }
    );
  });
};

const createUser = (userData) => {
  const insertData = { ...userData };
  if (insertData.address && typeof insertData.address !== "string") {
    insertData.address = JSON.stringify(insertData.address);
  }
  if (insertData.company && typeof insertData.company !== "string") {
    insertData.company = JSON.stringify(insertData.company);
  }

  return new Promise((resolve, reject) => {
    db.query("INSERT INTO users SET ?", insertData, (err, result) => {
      if (err) return reject(err);
      resolve(result.insertId);
    });
  });
};

const createUserPassword = (userId, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO userspasswords (UserID, password) VALUES (?, ?)",
      [userId, password],
      (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      }
    );
  });
};

module.exports = {
  getUserById,
  getUserByUsername,
  getUserWithPasswordByUsername,
  createUser,
  createUserPassword,
};

