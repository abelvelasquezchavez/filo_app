import reglas from "../reglas.json";

interface Regla {
  tipotransaccion: string;
  wally: string;
  culqi: string;
  producto_entregado: string;
  evidencia_th: string;
  paso_1: string;
  paso_2: string;
  paso_3: string;
}

export function buscarRegla(input: Partial<Regla>): Regla | null {
  return reglas.find(r =>
    r.tipotransaccion === input.tipotransaccion &&
    r.wally === input.wally &&
    r.culqi === input.culqi &&
    r.producto_entregado === input.producto_entregado &&
    r.evidencia_th === input.evidencia_th
  ) || null;
}
