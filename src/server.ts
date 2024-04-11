import "dotenv/config";
import App from "./app";
import connectToDB from "./config/dbConnect";

const PORT = 3000;

(async () => {
  try {
    const db = await connectToDB();
    console.log("MongoDB connected to", db.name);
  } catch (error) {
    console.error(error);
  }
})();

new App().server.listen(PORT, () => {
  console.log("It's alive");
});
