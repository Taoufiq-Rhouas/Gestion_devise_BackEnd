const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // photo_url: {
    //     type: String,
    //     required: true
    // },
    SoldMAD: {
        type: Number,
        require: true,
        default: 0
    },
    SoldBTC: {
        type: Number,
        require: true,
        default: 0
    },
    SoldUSD: {
        type: Number,
        require: true,
        default: 0
    },
    SoldGBP: {
        type: Number,
        require: true,
        default: 0
    },
    SoldKWD: {
        type: Number,
        require: true,
        default: 0
    },
    SoldAED: {
        type: Number,
        require: true,
        default: 0
    },
    SoldAFN: {
        type: Number,
        require: true,
        default: 0
    },
    SoldALL: {
        type: Number,
        require: true,
        default: 0
    },
    SoldAMD: {
        type: Number,
        require: true,
        default: 0
    },
    SoldANG: {
        type: Number,
        require: true,
        default: 0
    },
    SoldAOA: {
        type: Number,
        require: true,
        default: 0
    },
    SoldARS: {
        type: Number,
        require: true,
        default: 0
    },
    sold: {
        type: Number,
        require: true,
        default: 0
    },
    walletSold: {
        type: Number,
        require: true,
        default: 0
    }
    
    
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
