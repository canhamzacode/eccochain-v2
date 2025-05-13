import express from "express";
import { translateCode } from "@/controllers/appController";

const router = express.Router();

router.post("/translate", translateCode)