var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let products = [
    {
      name:"Iphone 11",
      category:"Mobile",
      description:"This is good phone",
      image:"https://manikmobile.com/wp-content/uploads/2022/01/51c1KR88-tL._AC_SL1000_.jpg"
    },
    {
      name:"Samsung Galaxy M32",
      category:"Mobile",
      description:"This is good phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Redmi note 10 Pro",
      category:"Mobile",
      description:"This is good phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Realme 11 Pro",
      category:"Mobile",
      description:"This is good phone",
      image:"data:image/jpeg;base64,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"
    }
    
  ]
  res.render('admin/view-products',{admin:true, products})
});

module.exports = router;
