const db = require("../config/db");

const getAllAlbums = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM albums", (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const getAlbumsByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM albums WHERE userId = ?",
      [userId],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

const getAlbumById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM albums WHERE id = ?",
      [id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

const createAlbum = (data) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO albums SET ?", data, (err, result) => {
      if (err) return reject(err);
      resolve(result.insertId);
    });
  });
};

const updateAlbum = (id, data) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE albums SET ? WHERE id = ?", [data, id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

const deleteAlbum = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM albums WHERE id = ?", [id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = {
  getAllAlbums,
  getAlbumsByUserId,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};