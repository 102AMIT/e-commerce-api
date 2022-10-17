const express=require('express');

const router=express.Router();

const productApi=require('../../controller/products');

router.post('/products/create',productApi.create);

router.delete('/products/:id',productApi.delete);

router.put('/products/:id/update_quantity',productApi.update);

router.get('/products',productApi.products);

module.exports=router;