const User = require('../models/User')

// exports.signup = (req, res) => {
//     try {
//         const user = new User(req.body)
//         user.save((err, sAdmine) => {
//             if(err) {
//                 return res.status('400').json({error: "this email is already existe"})
//             }
//             res.send(sAdmine)
//         })
//     }
//     catch(error) {

//     }
// }

exports.signup = (req, res) => {
    try {
        const {username, email, password} = req.body;
        console.log(email);
        const user = new User({username, email, password})
        user.save((err, sAdmine) => {
            if(err) {
                return res.status('400').json({error: "this email is already existe"})
            }
            res.send(sAdmine)
        })
    }
    catch(error) {

    }
}

// exports.checkUserIsExistAndDeposit = (req, res) => {
//     User.find({email: req.body.email}, (error, user) => {
//         if(error)
//             return res.status(400).json({error: error})

//         if(user.length > 0){
//             const {currencyDeposit, email} = req.body;
//             if(currencyDeposit === "MAD"){
//                 console.log("MAD");
//             } else if(currencyDeposit === "BTC"){
//                 console.log("BTC");
//             } else if(currencyDeposit === "USD"){
//                 console.log("USD");
//             } else if(currencyDeposit === "GBP"){
//                 console.log("GBP");
//             }
//             // const { sold } = req.body;
//             // console.log(req.body.sold,req.body.email);
//             // user.sold = req.body.sold;

//             return res.json({message : "updated"})
//         }else{
//             return res.json({message : "User not exist"})
//         }
            
        
//     }).catch(err => res.json({ error : err }))
// }
// ----------------------
exports.checkUserIsExistAndDeposit = async (req, res) => {
    let updateUser = await User.findOneAndUpdate({email: req.body.email},{sold:req.body.sold})

    if(updateUser)
        return res.json({userInfo: updateUser})

    res.status(400).json({error: "user not udated"})
};

// info
exports.getProfileInfo = (req, res, next) => {
    User.findOne({email: req.params.email}, (error, Uemail) => {
        if(error)
            return res.status(400).json({error: error})

        req.userUnfo = Uemail
            next()
    })
}

exports.getuserUnfo = (req, res) => {
    res.send(req.userUnfo)
}


exports.getUserTotalAmount = (req, res, next) => {
    User.findOne({email: req.body.email}, (error, Uemail) => {
        if(error)
            return res.status(400).json({error: error})

        req.userSold = Uemail;
        console.log(Uemail.sold)
            next()
    })
}
exports.checkUserTotalAmount = (req, res, next) => {
    if(req.userSold.sold < req.body.SoldBuy)
        return res.status(400).json({error: "you not have enogth money to buy"})

    next()
}

exports.buyCrypto = (req, res, next) => {
    const conditions = {email: req.body.email}
    // const Crypto = req.body.Crypto;
    // console.log("Crypto : ",Crypto)
    // const update = {};
    if(req.body.Crypto == "MAD"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldMAD: req.userSold.SoldMAD + req.body.SoldBuy}
    }else if(req.body.Crypto == "BTC"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldBTC: req.userSold.SoldBTC + req.body.SoldBuy}
    }else if(req.body.Crypto == "USD"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldUSD: req.userSold.SoldUSD + req.body.SoldBuy}
    }else if(req.body.Crypto == "BTC"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldBTC: req.userSold.SoldBTC + req.body.SoldBuy}
    }else if(req.body.Crypto == "GBP"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldGBP: req.userSold.SoldGBP + req.body.SoldBuy}
    }else if(req.body.Crypto == "KWD"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldKWD: req.userSold.SoldKWD + req.body.SoldBuy}
    }else if(req.body.Crypto == "AED"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldAED: req.userSold.SoldAED + req.body.SoldBuy}
    }else if(req.body.Crypto == "AFN"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldAFN: req.userSold.SoldAFN + req.body.SoldBuy}
    }else if(req.body.Crypto == "ALL"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldALL: req.userSold.SoldALL + req.body.SoldBuy}
    }else if(req.body.Crypto == "AMD"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldAMD: req.userSold.SoldAMD + req.body.SoldBuy}
    }else if(req.body.Crypto == "ANG"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldANG: req.userSold.SoldANG + req.body.SoldBuy}
    }else if(req.body.Crypto == "AOA"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldAOA: req.userSold.SoldAOA + req.body.SoldBuy}
    }else if(req.body.Crypto == "ARS"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldARS: req.userSold.SoldARS + req.body.SoldBuy}
    }else if(req.body.Crypto == "AUD"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldAUD: req.userSold.SoldAUD + req.body.SoldBuy}
    }else if(req.body.Crypto == "AWG"){
        update = {sold: req.userSold.sold - req.body.SoldBuy,SoldAWG: req.userSold.SoldAWG + req.body.SoldBuy}
    }
    // const options = {upsert: true}

    // User.findOneAndUpdate(conditions, update, options, (error, afterBuy) => {
    User.findOneAndUpdate(conditions, update, (error, afterBuy) => {
        if(error)
            return res.status(400).json({error: error})

        // next()
        res.send(afterBuy)
    })
}
// exports.buyCrypto = (req, res) => {
//     const conditions = {email: req.body.email}
//     const Crypto = req.body.Crypto;
//     console.log("Crypto : ",Crypto)
//     if(conditions.email === "tof@gmail.com"){
//         update = {sold: req.userSold.sold - req.body.SoldBuy,SoldMAD: req.userSold.SoldMAD + req.body.SoldBuy}
//     }else if(conditions.email === "tof@gmail.comjj"){
//         update = {sold: req.userSold.sold - req.body.SoldBuy,SoldBTC: req.userSold.SoldBTC + req.body.SoldBuy}
//     }
//     res.send(update)
// };

// exports.buyCrypto = async (req, res) => {
//     let updateUser = await User.findOneAndUpdate({email: req.body.email},{sold:req.body.sold})

//     if(updateUser)
//         return res.json({userInfo: updateUser})

//     res.status(400).json({error: "user not udated"})
// };


// exports.getuserUnfovv = (req, res) => {
//     res.send(req.userSold)
// }
// // info
// exports.getInfoUser = (req, res, next) => {
//     User.findOne({email: req.params.email}, (error, Uemail) => {
//         if(error)
//             return res.status(400).json({error: error})

//         req.userUnfo = Uemail
//             next()
//     })
// }

// User.findOne({email: req.body.email}, function(err, user){
//     if(!err) {
//         // if(!user) {
//         //     user = new User();
//         //     user.sold = request.sold;
//         // }
//         user.sold = request.sold;
//         user.save(function(err) {
//             if(!err) {
//                 console.log("contact " + contact.phone + " created at " + contact.createdAt + " updated at " + contact.updatedAt);
//             }
//         }
//     }
// });

// exports.checkUserIsExistAndDeposit = (req, res) => {
//     User.find({email: req.body.email}, function(err, user) {
//         if(!err) { 
//             user.sold = request.sold;
//             user.save(function(err) {
//                 if(!err) {
//                     console.log("Email user : " + user.email + " | Sold user :  " + user.sold );
//                 }
//                 else {
//                     console.log("Error: could not save user ");
//                 }
//             });
//         }
//     });
    
    
    
    
    
//     // .then(user =>{
//     //     if(user.length > 0){
//     //         console.log("user is exist");
//     //         const { sold } = req.body;
//     //         console.log(req.body.email ,sold)
//     //         user.sold = sold;
//     //         user.save().then(() => console.log('user modifié'));
//     //         return res.json({message : "updated"})
//     //     }else{
//     //         return res.json({message : "User not exist"})
//     //     };
        
//     // }).catch(error => res.json({ error : error }));
// };
// -----------------

// exports.checkUserIsExistAndDeposit = (req, res) => {
//     User.find({email: req.body.email})
//     .then(user =>{
//         if(user.length > 0){
//             console.log("user is exist");
//             const { sold } = req.body;
//             console.log(req.body.email ,sold)
//             user.sold = sold;
//             user.save().then(() => console.log('user modifié'));
//             return res.json({message : "updated"})
//         }else{
//             return res.json({message : "User not exist"})
//         };
        
//     }).catch(error => res.json({ error : error }));
    
    
    
    
    
//     // User.find({email: req.body.email}, (error, user) => {
//     //     if(error)
//     //         return res.status(400).json({error: error})

//     //     if(user.length > 0){
//     //         // const {currencyDeposit, email, password} = req.body;
//     //         // if(currencyDeposit === "MAD"){
//     //         //     console.log("MAD");
//     //         // } else if(currencyDeposit === "BTC"){
//     //         //     console.log("BTC");
//     //         // } else if(currencyDeposit === "USD"){
//     //         //     console.log("USD");
//     //         // }
//     //         // const { sold } = req.body;
//     //         console.log(req.body.sold,req.body.email);
//     //         user.sold = req.body.sold;

//     //         return res.json({message : "updated"})
//     //     }else{
//     //         return res.json({message : "User not exist"})
//     //     }
            
        
//     // }).catch(err => res.json({ error : err }))
// }

// exports.checkUserIsExist = (req, res, next) => {
//     User.find({email: req.body.email}, (error, user) => {
//         if(error)
//             return res.status(400).json({error: error})

//         if(user.length > 0)
//             return res.send(user)
        
//         next()
//     })
// }

// exports.getUserTotalAmount = (req, res, next) => {
//     User.findOne({email: req.body.email}, (error, Uemail) => {
//         if(error)
//             return res.status(400).json({error: error})

//         req.userSold = Uemail.sold
//         req.walletSold = Uemail.walletSold
//             next()
//     })
// }

// exports.checkUserTotalAmount = (req, res, next) => {
//     if(req.userSold < req.body.price)
//         return res.status(400).json({error: "you not have enogth money to buy"})

//     next()
// }

// exports.buyCrypto = (req, res, next) => {
//     const conditions = {email: req.body.email}
//     const update = {sold: req.userSold - req.body.price}
//     const options = {upsert: true}

//     User.findOneAndUpdate(conditions, update, options, (error, afterBuy) => {
//         if(error)
//             return res.status(400).json({error: error})

//         next()
//     })
// }

// exports.addBuyToWallet = (req, res) => {
//     const conditions = {email: req.body.email}
//     const update = {walletSold: req.walletSold + req.body.price}
//     const options = {upsert: true}

//     User.findOneAndUpdate(conditions, update, options, (error, afterBuy) => {
//         if(error)
//             return res.status(400).json({error: error})

//         res.send(afterBuy)
//     })
// }

// sell
// exports.checkWalletTotalAmount = (req, res, next) => {
//     if(req.walletSold < req.body.price)
//         return res.status(400).json({error: "you not have enogth money in your wallet"})

//     next()
// }

// exports.sellCrypto = (req, res, next) => {
//     console.log(req.userSold)

//     const conditions = {email: req.body.email}
//     const update = {sold: req.body.price + req.userSold}
//     const options = {upsert: true}

//     User.findOneAndUpdate(conditions, update, options, (error, afterSell) => {
//         if(error)
//             return res.status(400).json({error: error})

//         next()
//     })
// }

// exports.addSellToWallet = (req, res) => {
//     const conditions = {email: req.body.email}
//     const update = {walletSold: req.walletSold - req.body.price}
//     const options = {upsert: true}

//     User.findOneAndUpdate(conditions, update, options, (error, afterBuy) => {
//         if(error)
//             return res.status(400).json({error: error})

//         res.send(afterBuy)
//     })
// }

// info
// exports.getProfileInfo = (req, res, next) => {
//     User.findOne({email: req.params.email}, (error, Uemail) => {
//         if(error)
//             return res.status(400).json({error: error})

//         req.userUnfo = Uemail
//             next()
//     })
// }

// exports.getuserUnfo = (req, res) => {
//     res.send(req.userUnfo)
// }

