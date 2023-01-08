import { Router, Request, Response } from "express";
import Client from "../modules/client__module/Presentation/client__presentation";
const router__client = Router();
router__client.get("/client", async (_req: Request, _res: Response) => {
  _res.setHeader("Content-Type", "application/json");
  const client = new Client();
  const response = await client.getClient();
  _res.json(response);
});
router__client.get("/client/:id", async (_req: Request, _res: Response) => {
  const client = new Client();
  const idClient = _req.params.id;
  const response = await client.getClientById(Number(idClient));
  _res.json(response);
});
router__client.put("/client", async (_req: Request, _res: Response) => {
  _res.json("Lista completa de clietes");
});
router__client.delete("/client", async (_req: Request, _res: Response) => {
  _res.json("Lista completa de clietes");
});

export default router__client;
