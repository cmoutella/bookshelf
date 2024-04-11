import "dotenv/config";
import app from "./src/app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("It's alive");
});
