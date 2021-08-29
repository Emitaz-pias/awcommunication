const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_Gb23o1FPa9sSo82U9L6yt4ua00xuzDEuwC");
const uuid = require("uuid").v4;
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

// process payment
app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "GBP",
        customer: customer.id,
        receipt_email: token.email,

        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );
    // console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.send([{ error }, { status }, { orderedProduct: req.body.product }]);
});

// post order to the server

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iutb3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const orderCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection(`${process.env.COLLECTION_NAME}`);

  app.post("/sendOrder", (req, res) => {
    const order = { order: req.body };
    orderCollection.insertOne(order);
  });

  app.get("/dashboardOwnerHafizVai", (req, res) => {
    orderCollection
      .find({})
      .toArray()
      .then((orders, err) => {
        res.send(orders);
      });
  });
  // perform actions on the collection object
  console.log("db connected");
});

app.listen(
  process.env.PORT || 8080,
  console.log("i'm alive on", process.env.PORT)
);
