const database = require('../db/connection');
const jwt = require('jsonwebtoken');
const registerschema = new database.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        trim: true,
        unique: true

    },
    phone: {
        type: Number,
        trim: true,
        unique: true

    },
    address: {
        type: String,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    district: {
        type: String,
        lowercase: true,
        trim: true
    },
    pincode: {
        type: Number,
        trim: true
    },
    role: {
        type: Number,
        trim: true,
        default: 0
    },
    tokens: [
        {
            token: {
                type: String,
                lowercase: true,
                trim: true
            }
        }
    ]
}, { timestamps: true });


registerschema.methods.generatetoken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ "token": token });
        await this.save();
        return token;

    }
    catch (error) {
        console.log(error);
    }

}

const registermodels = database.model('registration', registerschema);
module.exports = registermodels;