interface WorkTodo{
    title:string;
    status:boolean;
    id:number
}

let obj1: WorkTodo={
    title:"Masai",
    status:true,
    id:3
}

interface person{
    name:string;
    last_name?:string;
}

let obj2={
    name:"Masai"
}
let obj3={
    name:"Masai",
    last_name:"School"
}

const printPerson = ({name}:person, {last_name}:person) =>{
    console.log(`${name} ${last_name}`)
}

printPerson(obj2,obj3)

interface Address{
    houseNo:number;
    street:string;
    city:string;
    state:string;
    postalCOde:number;
    country:string
}

interface PersonDetails{
    prefix?:string;
    phones:number[];
    address:string[];
    email?:string;
    firstname:string;
    lastname:string;
    middlename?:string
}


const PhoneBook = ({email, firstname}:PersonDetails) =>{
    console.log(`${firstname} ${email}`)
}


let arrPersons: PersonDetails[]=[{
    prefix:"string",
    phones:[3,4,5,6,7],
    address:["string"],
    email:"string",
    firstname:"string",
    lastname:"string",
    middlename:"string"
},{
    prefix:"string",
    phones:[3,45,89,7],
    address:["string"],
    email:"string",
    firstname:"string",
    lastname:"string",
    middlename:"string"
}]