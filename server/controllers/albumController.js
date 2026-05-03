const albumModel = require("../models/albumModel");

const getAlbums = async (req, res) => {
  try {
    const { userId, id } = req.query;

    if (id) {
      const albums = await albumModel.getAlbumById(id);
      return res.json(albums);
    }

    if (userId) {
      const albums = await albumModel.getAlbumsByUserId(userId);
      return res.json(albums);
    }

    const albums = await albumModel.getAllAlbums();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createAlbum = async (req, res) => {
  try {
    const insertId = await albumModel.createAlbum(req.body);
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    await albumModel.updateAlbum(id, req.body);
    res.json({ ...req.body, id: Number(id) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    await albumModel.deleteAlbum(id);
    res.json({ message: "Album deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAlbums, createAlbum, updateAlbum, deleteAlbum };