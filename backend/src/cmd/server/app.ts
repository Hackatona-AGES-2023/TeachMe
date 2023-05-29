const express = require("express");
import { router } from "./routes";
import cors from "cors";
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());
router.init(app);
app.listen(port, () => console.log("listening on " + port));
