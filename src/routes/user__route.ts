import { Router, Request, Response } from "express";
import UserPresentation from "./../modules/User__module/Presentation/user_presentation";
const router__user = Router();
router__user.get("/", async (_req: Request, _res: Response) => {
  _res.setHeader("Content-Type", "application/json");
  const user = new UserPresentation();
  const response = await user.getUser();
  _res.json(response);
});

router__user.post("/auth", async (_req: Request, _res: Response) => {
  _res.setHeader("Content-Type", "application/json");
  const user = new UserPresentation();
  const response = await user.auth(_req.body);
  console.log(response);
  _res.json(response);
});

router__user.get("/:id", async (_req: Request, _res: Response) => {
  const user = new UserPresentation();
  const iduser = _req.params.id;
  const response = await user.getUserById(Number(iduser));
  _res.json(response);
});
router__user.put("/", async (_req: Request, _res: Response) => {
  _res.json("Lista completa de ususario");
});
router__user.delete("/:id", async (_req: Request, _res: Response) => {
  _res.json("Lista completa de usuarios");
});

export default router__user;
