import mongoose, { mongo } from "mongoose"

const connection = mongoose.connect('mongodb+srv://mongodbuser:RUjN3yMKQaUhXZ8t@freecluster.wvgkna4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
})

export default connection