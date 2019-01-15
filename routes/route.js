const controller = require("../controllers/controller")
module.exports = (app) => {
  app.get('/', controller.index)
  app.get('/new', controller.showNew)
  app.post('/createcat', controller.createCat)
  app.get('/cats/:id', controller.showCat)
  app.get('/cats/edit/:id', controller.showEditCat)
  app.post('/cats/:id', controller.editCat)
  app.get('/cats/destroy/:id', controller.deleteCat)
}
