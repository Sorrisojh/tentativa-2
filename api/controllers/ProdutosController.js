const database = require('../models')

class ProdutosController {
   static async pegaTodosOsProdutos(req, res){
    try{
        const todosOsProdutos = await database.Produtos.findAll()
    return res.status(200).json(todosOsProdutos)
    }catch (error) {
        return res.status(500).json(error.message)
    } 
  }

  static async pegaUmProduto(req, res){
    const {id} = req.params
    try {
     const umProduto = await database.Produtos.findOne({
     where: {id: 
      Number(id)
    }
  })
   return res.status(200).json(umProduto)
    }catch (error) {
        return res.status(500).json(error.message)
    }
  }

  static async criaProduto(req, res){
    const novoProduto = req.body
    try {
    const novoProdutoCriado = await database.Produtos.create(novoProduto)
    return res.status(200).json(novoProdutoCriado)

    }catch (error) {
        return res.status(500).json(error.message)
    }
  }

  static async atualizaProduto(req, res){
    const {id} = req.params
    const novasInfos = req.body
    try{
        await database.Produtos.update(novasInfos, {where: {id: Number(id) }} )
        const produtoAtualizada = await database.Produtos.findOne( {where: {id: Number(id) }} )
        return res.status(200).json(produtoAtualizada)
    }catch (error) {
        return res.status(500).json(error.message)
    }
  }

  static async apagaProduto(req, res){
    const {id} = req.params
    try {
        await database.Produtos.destroy( {where: {id: Number(id) }} )
        return res.status(200).json({ messagem: `id ${id} deletado`})
        
    }catch (error) {
        return res.status(500).json(error.message)
    }
  }
}

module.exports = ProdutosController