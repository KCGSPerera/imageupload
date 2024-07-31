const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        pId: {
            type: String,
            // required: [true, "Product must have a ID"],
        },
        name: {
            type: String,
            // required: [true, "Product must have a name"],
        },
        category: {
            type: String,
            // required: [true, "Product must have a category"],
        },
        file: {
            public_id: {
                type: String,
                // required: true
            }
        },
        url: {
            type: String,
            // required: true
        }

    },
    {
        timeStamp: true,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;