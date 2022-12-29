// 1.By using object litreal:{};

    let personn={
        name:"ram",
        age:23
    };
    console.log(personn)
    console.log(personn.age);

// 2.By using new keyword
    // let person= new object();
    // person.name="sita"
    // person.age=12
    // console.log(person)
    // console.log(person.name)
    // console.log(person.age)
// 3.By using constructor function.

    function pperson(){
        this.name="Shiv",
        this.age=22
        this.hobbies=['swim','reading books','browsing net']
    }
    const data = new pperson();
    console.log(data.name)
    console.log(data.age)
    console.log(data.hobbies)
    console.log(data.hobbies[1])

// function constructor
function user(name,age){
    this.name=name;
    this.age=age;
}
var user1= new user('pinky',22);
var user2=new user('sweety',21);
// callbacks
function person1(myFunction){
    return myFunction;
}
function person2(){
    return ("Hi Everyone!!!")
}
let persondata=person1(person2);
console.log(persondata);

//prototypes
function Person(name,age){
    this.name = name,
    this.age = age
}
Person.prototype.nationality="Indian";
const peson1 = new Person("rama", "23")
console.log("name:"+ peson1.name,"age:"+peson1.age,peson1.nationality);

//prototype chain can be seen here...

let fruits=["apple","mango","orange"]
console.log(fruits);

// inheritance

function employee(name,age,place){
    this.name=name,
    this.age=age,
    this.place=place
}
function employee2(gender){
    employee.call(this.name,this.age,this.place)
    this.gender=gender
}
let emp = new employee ("Siva",23,"Hyd")
let emp2= new employee2("syam",24,"BGLR","M")
console.log(emp);
console.log(emp2);


var a=null;
console.log(a);