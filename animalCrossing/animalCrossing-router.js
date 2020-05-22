const express = require("express");
const AC = require("./animalCrossingModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  AC.getAll()
    .then((AC) => {
      res.status(200).json(AC);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to find the villagers" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  AC.insert(data)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "couldn't add a villager ):" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  AC.findById(id)
    .then((AC) => {
      if (AC) {
        AC.update(changes, id).then((updatedAC) => {
          res.json(updatedAC);
        });
      } else {
        res
          .status(404)
          .json({ message: "couldnt find that specific villager" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to update the villager" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  AC.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({ message: "could not find that villager" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete villager" });
    });
});

module.exports = router;
