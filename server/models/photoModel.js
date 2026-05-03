const db = require("../config/db");

const getAllPhotos = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM photos", (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const getPhotosByAlbumId = (albumId, options = {}) => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM photos WHERE albumId = ?";
    const params = [albumId];

    if (options.start !== null && options.limit !== null) {
      sql += " LIMIT ?, ?";
      params.push(options.start, options.limit);
    }

    db.query(sql, params, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const getPhotoById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM photos WHERE id = ?", [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const createPhoto = (data) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO photos SET ?", data, (err, result) => {
      if (err) return reject(err);
      resolve(result.insertId);
    });
  });
};

const updatePhoto = (id, data) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE photos SET ? WHERE id = ?", [data, id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

const deletePhoto = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM photos WHERE id = ?", [id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = {
  getAllPhotos,
  getPhotosByAlbumId,
  getPhotoById,
  createPhoto,
  updatePhoto,
  deletePhoto,
};