var express = require('express');
var router = express.Router();
const {database} = require('../config/helpers');


/* GET home page. */
/* GET ALL PRODUCTS */
router.get('/', function (req, res) {       // Sending Page Query Parameter is mandatory http://localhost:3636/api/products?page=1
  let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
  const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;   // set limit of items per page
  let startValue;
  let endValue;
  if (page > 0) {
      startValue = (page * limit) - limit;     // 0, 10, 20, 30
      endValue = page * limit;                  // 10, 20, 30, 40
  } else {
      startValue = 0;
      endValue = 10;
  } 
  database.table('coin as c')
      
      .withFields(['c.coin_id',
          'c.coin_name',
          'c.front_info'
          
      ])
      .slice(startValue, endValue)
      //.sort({id: .1})
      .getAll()
      .then(prods => {
          if (prods.length > 0) {
              res.status(200).json({
                  count: prods.length,
                  products: prods
              });
          } else {
              res.json({message: "No products found"});
          }
      }) 
      .catch(err => console.log(err));
});




module.exports = router;
