const { MongoClient } = require("mongodb");

const client = new MongoClient(
    "mongodb+srv://haran_user:fuBoZZLYyc9akr4T@projexacluster.r2lbtbr.mongodb.net/project?retryWrites=true&w=majority",
);

async function transferMoney() {
    await client.connect();

    const db = client.db("bankDB");
    const accounts = db.collection("accounts");

    const session = client.startSession();
 
    try {
        session.startTransaction();

        await accounts.updateOne(
            { name: "Haran" },
            { $inc: { balance: -500 } },
            { session }, 
        );

        await accounts.updateOne(
            { name: "John" },
            { $inc: { balance: 500 } },
            { session },
        ); 

        await session.commitTransaction();

        console.log("Transaction Successful");
    } catch (error) {
        await session.abortTransaction();
 
        console.log("Transaction Failed");
        console.log(error);
    } finally {
        await session.endSession();
        await client.close();
    }
}

transferMoney();