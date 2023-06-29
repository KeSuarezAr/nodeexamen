import { Types, Model, Schema, model } from "mongoose";
import { Cliente } from "./cliente";
import { Doctor } from "./doctor";

interface ICita {
  fecha: Date;
  cliente: Types.ObjectId | typeof Cliente;
  doctor: Types.ObjectId | typeof Doctor;
  motivo: string;
  receta: string;
}

const citaSchema = new Schema<ICita>({
  fecha: { type: Date, required: true },
  cliente: { type: Types.ObjectId, ref: "Cliente", required: true },
  doctor: { type: Types.ObjectId, ref: "Doctor", required: true },
  motivo: { type: String, required: true },
  receta: { type: String, required: true },
});

const Cita: Model<ICita> = model("Cita", citaSchema);

export default Cita;
