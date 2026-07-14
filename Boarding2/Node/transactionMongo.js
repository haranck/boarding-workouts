const { MongoClient} = require("mongodb")

const client = new MongoClient("mongodb+srv://haran_user:fuBoZZLYyc9akr4T@projexacluster.r2lbtbr.mongodb.net/project?retryWrites=true&w=majority")


async function transfermoney (senderName,recieverName,amount){

    await client.connect()
    const db = client.db('bankDB')
    const accounts = db.collection('accounts')

    const session = client.startSession()

    try {
        await session.startTransaction()

        const sender = await accounts.findOne(
            {name:senderName},
            {session}
        )
        if(!sender) throw new Error("sender not found")
        
        if(sender.balance < amount) throw new Error("Insufficient balance")

        await accounts.updateOne(
            {name:senderName},
            {$inc:{balance:-amount}},
            {session}
        )

        await accounts.updateOne(
            {name:recieverName},
            {$inc:{balance:amount}},
            {session}
        )

        await session.commitTransaction()

        console.log("transaction successfull")

    } catch (error) {
        await session.abortTransaction()
    } finally{
        await session.endSession()
        await client.close()
    }
}
transfermoney("John","Haran",500)