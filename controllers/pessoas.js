const pessoas = require('../models/pessoas')
const index = async(connection,req,res) => {
  const results = await pessoas.findAll(connection) 
  res.render('pessoas/index',{pessoas:results})  
}

const deleteUm = async(connection,req,res) => {
    await pessoas.deleteUm(connection,req.params.id)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    deleteUm
}