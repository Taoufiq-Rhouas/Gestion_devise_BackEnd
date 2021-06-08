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
    // SoldMAD: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    //  V Coins /
    // coins:{
    //     SoldMAD: {
    //         SoldMADdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldMADCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldBTC: {
    //         SoldBTCdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldBTCCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldUSD: {
    //         SoldUSDdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldUSDCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldGBP: {
    //         SoldGBPdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldGBPCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldKWD: {
    //         SoldKWDdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldKWDCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldAED: {
    //         SoldAEDdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldAEDCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldAFN: {
    //         SoldAFNdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldAFNCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldALL: {
    //         SoldALLdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldALLCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldAMD: {
    //         SoldAMDdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldAMDCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldANG: {
    //         SoldANGdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldANGCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldAOA: {
    //         SoldAOAdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldAOACryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldARS: {
    //         SoldARSdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldARSCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldAUD: {
    //         SoldAUDdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldAUDCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    //     SoldAWG: {
    //         SoldAWGdeposit: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         },
    //         SoldAWGCryptobuy: {
    //             type: Number,
    //             require: true,
    //             default: 0
    //         }
    //     },
    // },
    // END V Coins
    SoldMAD: {
        SoldMADdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldMADCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldBTC: {
        SoldBTCdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldBTCCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldUSD: {
        SoldUSDdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldUSDCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldGBP: {
        SoldGBPdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldGBPCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldKWD: {
        SoldKWDdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldKWDCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldAED: {
        SoldAEDdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldAEDCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldAFN: {
        SoldAFNdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldAFNCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldALL: {
        SoldALLdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldALLCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldAMD: {
        SoldAMDdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldAMDCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldANG: {
        SoldANGdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldANGCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldAOA: {
        SoldAOAdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldAOACryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldARS: {
        SoldARSdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldARSCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldAUD: {
        SoldAUDdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldAUDCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    SoldAWG: {
        SoldAWGdeposit: {
            type: Number,
            require: true,
            default: 0
        },
        SoldAWGCryptobuy: {
            type: Number,
            require: true,
            default: 0
        }
    },
    

    // SoldMAD: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldMADCryptobuy: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldBTC: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldUSD: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldGBP: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldKWD: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldAED: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldAFN: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldALL: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldAMD: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldANG: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldAOA: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
    // SoldARS: {
    //     type: Number,
    //     require: true,
    //     default: 0
    // },
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
