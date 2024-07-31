const Product = require("../model/Product");
const cloudinary = require("../utils/cloudinary");

exports.createProduct = async(req,res)=>{

    const {pId, name, category} = req.body;

    try {

        if (!req.file) {
        //     throw new Error('File is missing');
        res.status(201).json({
            message: "File is missing",
            success: false

        })
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products",
            // width: 300,
            // crop: "scale"
        })

        const product = await Product.create({
            pId,
            name,
            category,
            image:{
                public_id: result.public_id,
                url: result.secure_url
            }
        });
        res.status(201).json({
            success: true,
            data: product

        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the product"
        })
    }
}
