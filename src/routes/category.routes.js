import { Router } from "express";

const router = Router();

//--------LISTADO --------------------------------------------//
router.get("/list-categoria", async (req, res) => {
  try {
    res.render("plato_categoria/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------AGREGAR ----------------------------------------//
router.post("/list-categoria", async (req, res) => {
  if (Object.values(req.body).includes("")) {
    res.render("plato_categoria/list", {
      message: "Agregado correctamente",
      Error: "Todos los campos son obligatorios",
    });
  } else {
    res.redirect("/list-categoria");
  }

  console.log(req.body);
  /*try {
    res.redirect("/list-categoria");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }*/
});

router.get("/edit-categoria", (req, res) => {
  res.render("plato_categoria/edit");
});

router.post("/edit-categoria", async (req, res) => {
  try {
    res.redirect("/list-categoria");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/borrar-product", (req, res) => {
  res.render("producto/list", {
    message: "Esstas seguro que quieres Eliminar!?",
  });
});

export default router;
