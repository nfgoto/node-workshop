interface Person {
  firstName: string;
  lastName: string;
}

let count = 0;

function getFullName(p: Person) {
  count++;
  return `${p.firstName} ${p.lastName}`;
}

function naiveSortPersons(persons: Person[]): Person[] {
  return persons.slice().sort((first, second) => {
    const firstFullName = getFullName(first);
    const secondFullName = getFullName(second);
    return firstFullName.localeCompare(secondFullName);
  })
}

function schwartzSortPersons(persons: Person[]): Person[] {
  const tuples: Array<[Person, string]> = persons.map(person => [person,
    getFullName(person)]);
  tuples.sort((first, second) => first[1].localeCompare(second[1]));
  const result = tuples.map(tuple => tuple[0]);
  return result;
}

let persons: Person[] = [
  { firstName: "Toto", lastName: "Jean" },
  { firstName: "Kabre", lastName: "Chupa" },
  { firstName: "Christopher", lastName: "Wallace" },
  { firstName: "Othello", lastName: "Dupont" },
  { firstName: "Zaino", lastName: "Dashik" },
  { firstName: "Valla", lastName: "Messi" },
  { firstName: "Mama", lastName: "Samo" },
  { firstName: "Letor", lastName: "Fabori" },
  { firstName: "Biro", lastName: "Tano" },
  { firstName: "Jolofo", lastName: "Ndaye" },
];

const aLot = JSON.stringify(persons).replace('[', '').replace(']', '').concat(',').repeat(500_000).slice(0, -1);
persons = JSON.parse(`[${aLot}]`);

console.time('naive sorting')
const sortedNaive = naiveSortPersons(persons);
console.timeEnd('naive sorting')
// console.log(sortedNaive);
console.log(`Using naive sorting, the function was called ${count} times`);

count = 0;
console.time('schwartzian sorting')
const sortedSchwartz = schwartzSortPersons(persons);
console.timeEnd('schwartzian sorting')
// console.log(sortedSchwartz);
console.log(`Using Schwartzian transform, the function was called ${count} times`);
