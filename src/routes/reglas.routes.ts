import express from "express";
import { buscarRegla } from "../services/buscarRegla";

const router = express.Router();

router.post("/accion", (req, res) => {
  const regla = buscarRegla(req.body);
  if (regla) {
    return res.json({
      paso_1: regla.paso_1,
      paso_2: regla.paso_2,
      paso_3: regla.paso_3
    });
  }
  res.status(404).json({ mensaje: "No se encontró una regla para estos valores." });
});

export default router;
