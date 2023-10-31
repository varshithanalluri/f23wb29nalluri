var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/items', function(req, res, next) {
    const items = [
        { item_name: 'laptop', category: 'Electronics', quantity: 5 },
        { item_name: 'Jean', category: 'Clothing', quantity: 3 },
        { item_name: 'Hair Band', category: 'Hair Accessories', quantity: 8 }
    ];

    // Pass the 'items' variable to the 'items' template
    res.render('items', { title: 'Search Results - Items', items: items });
});


module.exports = router;
