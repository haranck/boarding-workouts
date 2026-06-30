const { MongoClient } = require("mongodb");

const client = new MongoClient(
    "mongodb+srv://haran_user:fuBoZZLYyc9akr4T@projexacluster.r2lbtbr.mongodb.net/project?retryWrites=true&w=majority",
);

async function transferMoney(senderName, recieverName, amount) {
    await client.connect();

    const db = client.db("bankDB");
    const accounts = db.collection("accounts");

    const session = client.startSession();

    try {
        session.startTransaction();

        const sender = await accounts.findOne(
            { name: senderName },
            { session },
        );

        if (!sender) throw new Error("Sender not Found");

        if (sender.balance < amount) throw new Error("Insufficient Balance");

        await accounts.updateOne(
            { name: senderName },
            { $inc: { balance: -amount } },
            { session },
        );

        await accounts.updateOne(
            { name: recieverName },
            { $inc: { balance: amount } },
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

transferMoney("Haran", "John", 500);
