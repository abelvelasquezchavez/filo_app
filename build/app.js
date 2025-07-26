"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reglas_routes_1 = __importDefault(require("./routes/reglas.routes"));
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Configuración básica de CORS
const corsOptions = {
    origin: true,
    credentials: true
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/api', reglas_routes_1.default);
exports.default = app;
// 👇 Agrega esta línea antes de las rutas
