import express from "express";
import cors from "cors";
import { PORT } from "@/utils/env";
import DB from "@/config/db";
import logger from "@/config/logger";
import appRoutes from "@/routes/appRoutes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api", appRoutes);

server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
  // DB();
});