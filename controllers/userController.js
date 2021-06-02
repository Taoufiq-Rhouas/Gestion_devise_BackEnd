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
    // .then(user =>{
    //     if(user.length > 0){
    //         console.log("user is exist");
    //         const { sold } = req.body;
    //         console.log(req.body.email ,sold)
    //         user.sold = sold;
    //         // 

    //         // 
    //         // user.save().then(() => console.log('user modifié'));
    //         return res.json({message : "updated"})
    //     }else{
    //         return res.json({message : "User not exist"})
    //     };
        
    // }).catch(err => res.json({ error : err }));
};

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

