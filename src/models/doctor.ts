import { Schema, model } from "mongoose";

interface IDoctor {
  nombre: string;
  apellido: string;
  edad: number;
  dni: number;
  direccion: string;
  telefono: number;
  mail: string;
  especialidad: string;
  matricula: string;
}

const doctorSchema = new Schema<IDoctor>({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  dni: { type: Number, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number, required: true },
  mail: { type: String, required: true },
  especialidad: { type: String, required: true },
  matricula: { type: String, required: true },
});

export const Doctor = model<IDoctor>("Doctor", doctorSchema);
