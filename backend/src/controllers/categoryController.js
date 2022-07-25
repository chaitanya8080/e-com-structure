


const express = require('express');

const Category = require('../models/categoryModel');

const router = express.Router(); //take only router method from the express

router.get('/', async (req, res) => {
  try {
    const category = await Category.find().lean().exec();

    res.status(201).send({ data: category });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).lean().exec();

    res.status(201).send({ data: category });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post('/create', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).send({ data: category });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .lean()
      .exec();
    return res.status(200).send({ data: category });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete('/:id/delete', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send({ userdata: category });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


module.exports = router;