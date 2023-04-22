import crypto from "crypto"

const algo = "aes-256-cbc"
const key = crypto.randomBytes(32) //1 byte = 8 bits
const iv = crypto.randomBytes(16)

function encryptData(data){
    let cipher = crypto.createCipheriv(algo, Buffer.from(key), iv)
    let encrypted = cipher.update(data)
    // encrypted += cipher.final()
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return {iv: iv.toString("hex"), encryptedData: encrypted.toString('hex')}
}

function decryptData(data){
    
    let iv = Buffer.from(data.iv, "hex")
    let encryptedData = Buffer.from(data.encryptedData, 'hex')
    let decipher = crypto.createDecipheriv(algo, Buffer.from(key), iv)
    let decryptedData = decipher.update(encryptedData)
    decryptedData = Buffer.concat([decryptedData, decipher.final()])

    return decryptedData.toString()
}


let output = encryptData("This is plain text")
console.log(output)
console.log(decryptData(output))
