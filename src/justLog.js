var minion = function(options){
    throw new Error("error on new object")
}

minion.seyHi = ()=>{
    console.log('banana')
}

module.exports ={
    sayHello: minion.seyHi
}