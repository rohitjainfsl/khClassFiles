import mongoose from "mongoose"

const connection = mongoose.connect(ATLAS_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
export default connection;
