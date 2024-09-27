import { Router } from "express";

const router = Router();

//--------LISTADO --------------------------------------------//
router.get("/list-dish", async (req, res) => {
  try {
    res.render("plato/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------AGREGAR ----------------------------------------//
router.get("/add-plato", (req, res) => {
  res.render("plato/add");
});

router.post("/add-plato", async (req, res) => {
  // if (Object.values(req.body).includes("")) {
  //   console.log("Erroasf");
  // }
  try {
    res.redirect("/list-dish");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//--------------------EDITAR ------------------//
router.get("/edit-plato", (req, res) => {
  res.render("plato/edit");
});

router.post("/edit-plato", async (req, res) => {
  try {
    res.redirect("/list-dish");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
