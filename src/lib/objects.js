const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => person.age > 65;

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce(
    (accumulator, person) => accumulator + person.age,
    0
  );
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce: human => `Hi ${human}, my name is ${name} and I am ${age}!`
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
