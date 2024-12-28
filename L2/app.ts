// object, array, tuple, enum
// Object
const person : {
    name: string;
    age: number;
    address : {
        street: string;
        city: string;
        zipcode : number;
    }
} = {
    name : 'Priyanka',
    age : 28,
    address : {
        street : '123 Main St',
        city : 'Anytown',
        zipcode : 12345
    }
}
console.log(person.name, person.address.zipcode);