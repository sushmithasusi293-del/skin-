const express = require('express');
const app = express();
const port = 6543;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello")

})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sushmithasusi293_db_user:test123@cluster0.fazzros.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
 
  }

}
run().catch(console.dir);










app.listen(port, () => {
    console.log(`connect to the port:${port}`)
})