const express = require("express");
const Feeder = require("../model/feeder");
const mongoose = require("mongoose");
const router = express.Router();

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});
const Category = mongoose.model("Category", categorySchema);

// add new feeder
router.post("/add-new", async (req, res) => {
  const { name, phone, address, cname, chapter, category, notes } = req.body;

  try {

    const feeder = await Feeder.create({
      name,
      phone,
      address,
      cname,
      chapter,
      category,
      notes,
    });
    if (feeder) {
      let existingCategory = await Category.findOne({ category });
      if (!existingCategory) {
        existingCategory = await Category.create({ category });
      }

      return res.json({ success: true, feeder, category: existingCategory });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
});

// render all category
router.get("/category" , async(req , res) => {
    try {
        const categories = await Category.find({})
        if(categories) {
            return res.json({ success : true , categories : categories })
        }
    } catch (error) {
        return res.json({ error : error.message })
    }
})

// render feeder
router.get("/:category" , async(req , res) => {
    const {category} = req.params;
    try {
        const feeder = await Feeder.find({ category });
        if(category) {
            return res.json({ success : true , feeder : feeder })
        }
    } catch (error) {
        return res.json({ error : error.message })
    }
});

module.exports = router;
