const express = require('express');

const Product = require('../models/productModel');

const router = express.Router(); //take only router method from the express

router.get('/', async (req, res) => {
  try {
    const product = await Product.find().lean().exec();

    res.status(201).send({ data: product });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();

    res.status(201).send({ data: product });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post('/create', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send({ data: product });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .lean()
      .exec();
    return res.status(200).send({ data: product });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete('/:id/delete', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send({ userdata: product });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


module.exports = router;
