import mongoose from "mongoose";

const connection = {};

async function connect() {
    if (connection.isConnected) {
        console.log("Already connected");
        return
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log("Use previous connection");
            return;
        }
        await mongoose.disconnect();
    }

    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("New connection");
    connection.isConnected = db.connections[0].readyState;
}

async function disconnect () {
    if (connection.isConnected){
        connection.isConnected = false
    }
}

function convertDocToObject (document) {
    document._id = document._id?.toString();
    document.createdAt = document.createdAt?.toString();
    document.updatedAt = document.updatedAt?.toString();
    return document;
}

const db = { connect, disconnect, convertDocToObject };
export default db;