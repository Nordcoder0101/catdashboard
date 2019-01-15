const Cat = require('../models/Cat')

module.exports = {
  index: function(req, res){
    Cat.find({}, (err, allCats) => {
      if (err){
        console.log('Something went wrong')
      } else {
        let data = {
          allCats: allCats
        }
        res.render('index', {data: data})
      }
    })
    
  },

  showNew: function(req, res) {
    res.render('showcatform')
  },

  createCat: function(req, res) {
    let newCat = new Cat(req.body)
    newCat.save((err) => {
      if (err){
        console.log('Cat not created, something went wrong')
        res.redirect("/new")
      } else {
        console.log('Cat successfully created')
        res.redirect("/")
      }
    })
  },

  showCat: function(req, res) {
    console.log(req.params.id)
    Cat.findOne({_id: req.params.id}, (err, cat)=> {
      console.log(cat.name)
      
      res.render('showcat', {cat: cat})
    })
  },

  showEditCat: function(req, res) {
    Cat.findOne({ _id: req.params.id }, (err, cat) => {
      res.render('editcat', {cat: cat})
    })
  },

  editCat: function(req, res) {
    console.log(req.body.name)
    Cat.findOne({ _id: req.params.id }, (err, cat) =>{
      if (err){
        console.log('Something went wrong upon edit')
      } else {
        console.log(cat)
        cat.name = req.body.name
        cat.owner = req.body.owner
        cat.age = req.body.age
        cat.save()
        console.log('Updated just fine and dandy')
        res.redirect("/")
      }
    })
    
    },

    deleteCat: function(req, res) {
      Cat.remove({_id: req.params.id }, (err) =>{
        if (err) {
          console.log('Something went wrong in the deletion process')
        } else {
          res.redirect('/')
        }
      })
    }
  }

