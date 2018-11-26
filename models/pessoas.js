const findAll = (connection) => {
    return new Promise((resolve,reject)=> {
        connection.query('select * from pessoas',(err,results) => {
            if(err){
                console.log(err)
                reject(err)
            }else{
                resolve(results)
            }
        }) 
    })  
}
const deleteUm = (connection,id) => {
    return new Promise((resolve,reject) => {
        connection.query('delete from pessoas where id='+id+'limit 1',(err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            } 
        })
    })
}
module.exports = {
    findAll,
    deleteUm
}