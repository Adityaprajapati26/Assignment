function sum(...args){
    if(arguments.length===0)
    {
        return "sum invoked without numbers"
    }
    else if(arguments.length==1)
    {
        return "sum is not defined"
    }
    
        const sumVal=[...args].reduce((a,c)=>a+Number(c),0)   
         return Number(sumVal.toFixed(1))
}
module.exports=sum