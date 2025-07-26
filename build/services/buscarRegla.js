"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarRegla = buscarRegla;
const reglas_json_1 = __importDefault(require("../reglas.json"));
function buscarRegla(input) {
    return reglas_json_1.default.find(r => r.tipotransaccion === input.tipotransaccion &&
        r.wally === input.wally &&
        r.culqi === input.culqi &&
        r.producto_entregado === input.producto_entregado &&
        r.evidencia_th === input.evidencia_th) || null;
}
