const { Router } = require('express')
const ProdutosController = require('../controllers/ProdutosController')

const router = Router()

router.get('/produtos', ProdutosController.pegaTodosOsProdutos)
router.get('/produtos/:id', ProdutosController.pegaUmProduto)
router.post('/produtos', ProdutosController.criaProduto)
router.put('/produtos/:id',ProdutosController.atualizaProduto)
router.delete('/produtos/:id',ProdutosController.apagaProduto)

module.exports = router