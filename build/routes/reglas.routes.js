"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const buscarRegla_1 = require("../services/buscarRegla");
const router = express_1.default.Router();
router.post("/accion", (req, res) => {
    const regla = (0, buscarRegla_1.buscarRegla)(req.body);
    if (regla) {
        return res.json({
            paso_1: regla.paso_1,
            paso_2: regla.paso_2,
            paso_3: regla.paso_3
        });
    }
    res.status(404).json({ mensaje: "No se encontró una regla para estos valores." });
});
exports.default = router;
