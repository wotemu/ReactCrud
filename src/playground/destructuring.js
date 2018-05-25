//object destructuring
const person = {
  name: 'Workneh',
  age : 30,
  location:{
    city: 'Gidasha',
    temp: 90
  }
};

console.log(`${person.name} is ${person.age} years old`);
// const {name, age} = person;
// console.log(`${name} is ${age} years old`);


const {name='Anonymus', age} = person;
if(name && age) {
  console.log(`${name} is ${age} years old`);
}


console.log(`${person.location.city} has ${person.location.temp} degree temprature`);
// const {city, temp} = person.location;
// if(city && temp) {
//   console.log(`${city} has ${temp} degree temprature`);
// }

const {city, temp:temprature} = person.location;
if(city && temprature) {
  console.log(`${city} has ${temprature} degree temprature`);
}

const book = {
  title:'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

console.log(`${book.publisher.name}`);

const {name:publisherName ='self-employed'} = book.publisher;

if(publisherName){
  console.log(publisherName);
}


//Array destructuring

const address = ['1299 S Juper Street', 'Gidasha', 'Southern Nation', '19147'];
// console.log(`You are in ${address[1]} ${address[2]}.`)

// const [street, ketema, state, zip] = address;
// console.log(`You are in ${ketema} ${state}.`);

const [, ketema, state, ] = address;
console.log(`You are in ${ketema} ${state}.`);


const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

console.log(`A medium Coffee (hot) costs ${item[2]}`);

const [itemName, , mediumPrice] = item;
console.log(`A medium Coffee (hot) costs ${mediumPrice}`);