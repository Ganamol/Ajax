let person={
    name:"john",
    age:21
}

let result=JSON.stringify(person);

let data=JSON.parse(result)
console.log(data)