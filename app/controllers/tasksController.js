var express = require('express');
var router = express.Router();
var Task = require('../models/task');



/* GET home page. */
router.get('/', function(req, res, next) {
    Task.find((error, tasks) => {
               if(error){
                   res.send(`Ocorreu um err: ${error}`)
               }
               res.json({tasks})
           })
});

router.post('/', function(req, res, next) {
    var task = new Task()
    task.nome = req.body.nome
    task.descricao = req.body.descricao
    task.status = req.body.status

    task.save((error) =>{
        if(error){
           res.send(`erro ocorrido: ${error}`)
        }         
        res.json({message: 'Task adicionada'})
   })
});

// //  método para criar produtos em : POST http://localhost:8000/api/produtos
// .post((req, res) => {
//     var task = new Task()
//     task.nome = req.body.nome
//     task.descricao = req.body.descricao
//     task.status = req.body.status

//     task.save((error) =>{
//         if(error){
//            res.send(`erro ocorrido: ${error}`)
//         }         
//         res.json({message: 'Task adicionada'})
//    })
//  })

// //  //  método para listar produtos em : GET http://localhost:8000/api/produtos
// .get((req, res) => {
//    Task.find((error, tasks) => {
//        if(error){
//            res.send(`Ocorreu um err: ${error}`)
//        }
//        res.json({tasks})
//    })
// })

// //  Rotas que irão terminar em "/produtos/produto_id" (serve para  get, post, put e delete)
// router.route('/produtos/:produto_id')

// //  selecionar produto por ID : localhost:8000/produtos/:produto_id

// .get((req, res) => {
//    // função para selecionar produto por id, caso não encontre ele retorna erro
//    Produto.findById(req.params.produto_id, (error, produto) => {
//        if(error){
//            res.send(`Produto não encontrado: ${error}`)
//        }
//        res.json({produto})

//    })
// })


// //  atualizar produto por ID : localhost:8000/produtos/:produto_id

// .put((req, res) => {
//    // função para selecionar produto por id, caso não encontre ele retorna erro
//    Produto.findById(req.params.produto_id, (error, produto) => {
//        if(error){
//            res.send(`Produto não encontrado: ${error}`)
//        }
//        // altera os dados dos campos
//        produto.nome = req.body.nome
//        produto.preco = req.body.preco
//        produto.descricao = req.body.descricao 
       
//        // salva o produto com os novos dados
//        produto.save((error) =>{
//            if(error){
//               res.send(`erro ao atualizar o produto: ${error}`)
//            }         
//            res.json({message: 'Produto alterado com sucesso!'})
//        })

//    })
// })


// .delete((req, res) => {
//    // função para deletar produto por id, caso não encontre ele retorna erro
//    Produto.remove({_id: req.params.produto_id},(error) => {
//        if(error){
//            res.send(`Produto não encontrado: ${error}`)
//        }
//        res.json({message:"Produto removido"})       
//    })
// })

module.exports = router;