const photoModel = require("../models/photoModel");

const getPhotos = async (req, res) => {
  try {
    const { albumId, id, _start, _limit } = req.query;

    if (id) {
      const photos = await photoModel.getPhotoById(id);
      return res.json(photos);
    }

    if (albumId) {
      const start = Number(_start);
      const limit = Number(_limit);
      const photos = await photoModel.getPhotosByAlbumId(albumId, {
        start: Number.isNaN(start) ? null : start,
        limit: Number.isNaN(limit) ? null : limit,
      });
      return res.json(photos);
    }

    const photos = await photoModel.getAllPhotos();
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPhoto = async (req, res) => {
  try {
    const insertId = await photoModel.createPhoto(req.body);
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    await photoModel.updatePhoto(id, req.body);
    res.json({ ...req.body, id: Number(id) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    await photoModel.deletePhoto(id);
    res.json({ message: "Photo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPhotos, createPhoto, updatePhoto, deletePhoto };