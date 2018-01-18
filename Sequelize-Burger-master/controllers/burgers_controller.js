var express = require('express');
var router = express.Router();

var Burger = require('../models')['Burgers'];
Burger.sync();

var Menu = require('../models')['Menus'];
Menu.sync();

// page
router.get('/', function(req, res){
  var info = {
    brgr: [],
    itm: []
  };

  Burger.findAll({
    attributes: ['id', 'burger_name', 'devoured']
  }).then(function(data){
    info.brgr = data;

    Menu.findAll({
      attributes: ['id', 'item', 'entree']
    }).then(function(result){
      info.itm = result;

       res.render('index', info);
    });

  });
});

router.get('/menu', function(req, res){
  Menu.findAll({})
    .then(function(data){
      res.render('restaurantmenu', { itm: data });
  });
});

router.post('/create', function(req, res){
  var newBurger = req.body.burgerInput;

  Burger.create({
    burger_name: newBurger,
    devoured: 0
  });

  res.redirect('/');
});

router.put('/update/:id', function(req, res){
  Burger.update({
    devoured: [req.body.devoured],
  },{
    where: {
      id: [req.params.id]
    }
  });

  res.redirect('/');
});

router.delete('/delete/:id', function(req, res){
  Burger.destroy({
    where:{
      id: [req.params.id]
    }
  });

  res.redirect('/');
});

module.exports = router;