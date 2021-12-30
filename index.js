const database = require('./database')
//INSERT
/*
const dados = {
    nome:"Assasins creed Valhalla",
    preco:89.99
}
const query = database.insert(dados).into("games").then(data=>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})
*/

//SELECT

//SELECT ALL
database.select().table('games').then(data =>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

//SELECIONANDO AS COLUNAS DO DB
database.select(["nome","preco"]).table('games').then(data =>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

//UTILIZANDO O WHERE
database.where({nome: "Assasins creed 4"}).orWhere({id:2}).table('games').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

//DELETE
/*
database.where({id:2}).delete().table('games').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
*/

//UPDATE
database.where({id:2}).update({preco:70}).table('games').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

//ORDER BY
database.select().table('games').orderBy('preco','desc').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
}) //desc ou asc