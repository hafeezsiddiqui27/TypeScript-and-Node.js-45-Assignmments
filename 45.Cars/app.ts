type car = {
    manufacturer: string
    model:string
   [key:string]:any;
}
function creatCar(manufacturer:string, model:string , optional:Record < string , any > ):car{
    return{
        manufacturer,
        model,
    ...optional
    }
}
const myCar:car=creatCar("honda","city",{color:"black",year:"2012"});
console.log(myCar);