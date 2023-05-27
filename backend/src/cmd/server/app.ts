const express = require("express");
import { router } from "./routes";

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
router.init(app);
app.listen(port, () => console.log("listening on " + port));
