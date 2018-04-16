var square=x=> x*x;

console.log(square(4));

var user={
    name:"Abel",
    sayHi:()=> console.log(`Hi. I am ${this.name}`),
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`)
    }
}
user.sayHiAlt(1,2,3,4,5)