// Import Dependencies
import express from "express";
import color from "colors";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

// Import Package.json
import { name, version, description } from "./package.json";

// Import Config Variables
import { port } from "./config/config";

// Initialize Express App
const app = express();

// Use Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup Routes
app.get("/api", (req, res) => {
  res.status(200).json({
    name,
    version,
    description
  });
});

// Listening For Port
app.listen(port, () => {
  console.log(
    color.green(`==> The server is running on http://localhost:${port}`)
  );
});
