import express, { Request, Response } from "express";
import logger from "./logger";
import { Cliente } from "./models/cliente";
import { Doctor } from "./models/doctor";
import Cita from "./models/cita";

const router = express.Router();

// Cliente routes
router.get("/cliente", async (req: Request, res: Response) => {
  try {
    const clientes = await Cliente.find();
    res.send(clientes);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error retrieving clients");
  }
});

router.post("/cliente", async (req: Request, res: Response) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.send(cliente);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error creating client");
  }
});

router.get("/cliente/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const cliente = await Cliente.findById(id);
    res.send(cliente);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error retrieving client");
  }
});

router.delete("/cliente/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Cliente.findByIdAndDelete(id);
    res.send("Client deleted successfully");
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error deleting client");
  }
});

router.put("/cliente/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const cliente = await Cliente.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.send(cliente);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error updating client");
  }
});

router.put("/cliente/:nombre", async (req: Request, res: Response) => {
  try {
    const nombre = req.params.nombre;

    const cliente = await Cliente.findOneAndUpdate({ nombre });

    res.send(cliente);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error updating client");
  }
});

// Doctor routes
router.get("/doctor", async (req: Request, res: Response) => {
  try {
    const doctores = await Doctor.find();
    res.send(doctores);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error retrieving doctors");
  }
});

router.post("/doctor", async (req: Request, res: Response) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.send(doctor);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error creating doctor");
  }
});

router.get("/doctor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findById(id);
    res.send(doctor);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error retrieving doctor");
  }
});

router.delete("/doctor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Doctor.findByIdAndDelete(id);
    res.send("Doctor deleted successfully");
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error deleting doctor");
  }
});

router.put("/doctor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const doctor = await Doctor.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.send(doctor);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error updating doctor");
  }
});

// Cita routes
router.get("/cita", async (req: Request, res: Response) => {
  try {
    const citas = await Cita.find().populate("cliente doctor");
    res.send(citas);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error retrieving citas");
  }
});

router.post("/cita", async (req: Request, res: Response) => {
  try {
    const cita = new Cita(req.body);
    await cita.save();
    res.send(cita);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error creating cita");
  }
});

router.get("/cita/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const cita = await Cita.findById(id).populate("cliente, doctor");
    res.send(cita);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error retrieving cita");
  }
});

router.delete("/cita/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Cita.findByIdAndDelete(id);
    res.send("Cita deleted successfully");
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error deleting cita");
  }
});

router.put("/cita/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const cita = await Cita.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.send(cita);
  } catch (error) {
    logger.error(error);
    res.status(500).send("Error updating cita");
  }
});

export default router;
