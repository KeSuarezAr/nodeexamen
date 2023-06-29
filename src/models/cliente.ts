import { Schema, model } from "mongoose";

interface ICliente {
  nombre: string;
  apellido: string;
  edad: number;
  dni: number;
  direccion: string;
  telefono: number;
  mail: string;
}

const clienteSchema = new Schema<ICliente>({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  dni: { type: Number, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number, required: true },
  mail: { type: String, required: true },
});

export const Cliente = model<ICliente>("Cliente", clienteSchema);
