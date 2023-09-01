import { Request, Response, Router } from "express";
import multer from "multer";

const multerConfig = multer();

const router = Router();

router.post(
  "/products",
  multerConfig.single("file"),
  (req: Request, res: Response) => {
    console.log(req.file);
    return res.send();
  }
);

export { router };
