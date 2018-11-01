// Import Dependencies
import express from "express";
import color from "colors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

// Import Package.json
import { name, version, description } from "./package.json";

// Import Config Variables
import { port } from "./config/config";

// Initialize Express App
const app = express();

// Use Middlewares
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

// For Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listening For Port
app.listen(port, () => {
  console.log(
    color.green(`==> The server is running on http://localhost:${port}`)
  );
});
