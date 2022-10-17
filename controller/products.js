const { model } = require('mongoose');
const Product=require('../models/product');


module.exports.create=async function(req,res){
    
    try{
        
        let product=await Product.findOne({name:req.body.name});
        console.log(req.body.name);
        if(!product){
            
            Product.create(req.body,function(err,prod){
                if(err){
                    return res.json(500,{
                        message:"Error while creating a product"
                        
                    });
                }
                return res.json(200,{
                    message:"Product is created",
                    data:prod
                    
                });

            })
        }
        else
        {
            return res.json(200,{
                message:"Product is already exist",
                data:product,
                
            });
        }
    }catch(err){
        return res.json(500,{
            message:"Error in creating a product"
        })
    }


}

module.exports.products= async function (req,res){

    try{
        let product=await Product.find({});

        if(product){
            return res.json(200,{
                message:"Products List",
                data:product,
                
            });
        }
    }
    catch(err){
        return res.json(500,{
            message:"Error in finding products"
        })
    }
}

module.exports.delete=async function(req,res){
    try{
        console.log(req.params.id)
        const product=await Product.findOneAndDelete(req.params.id);
        if(!product){
            return res.status(200).json({
                message:"item id is not found",
            })
        }
        return res.status(200).json({
            message:"product deleted successfull !!"
        });

    }catch(err){
        return res.json(500,{
            message:"Error in deleting the product"
        })
    }
    
}


module.exports.update=async function(req,res){
    try{
        // /products/:id/update_quantity/?number=10
    await Product.findByIdAndUpdate(req.params.id,{
        "quantity":req.query.number
        
    });
    // await updated.save();
    // here we are searching for upated product quantity and re assign the value 
    const product=await Product.findById(req.params.id);
    if(!product){
        return res.status(200).json({
            message:"item id is not found",
        })
    }
    return res.status(200).json({
        message:"product update successfull !!",
        data:product,
    });

    }catch(err){
        return res.json(500,{
            message:"Error in updating the product"
        })
    }

}
