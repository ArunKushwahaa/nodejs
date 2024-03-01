import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PWD.trim());
// clustore url
const connectionString = `mongodb+srv://testMern:${password}@testmern.kwumbm8.mongodb.net/?retryWrites=true&w=majority&appName=testMern`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful");
} catch (e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
