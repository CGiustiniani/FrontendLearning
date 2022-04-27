const cities = [
  { name: "Rijeka", postalCode: 51000, type: 3 },
  { name: "Varazdin", postalCode: 42000, type: 2 },
  { name: "Split", postalCode: 21000, type: 2 },
  { name: "Gospić", postalCode: 23000 },
  { name: "Zagreb", postalCode: 10000, type: 1 },
  { name: "Osijek", postalCode: 31000 },
];

const sortingAlgorithm = (a, b) => {
  if (a.type < b.type || a.name > b.name) {
    return -1;
  }
  if (a.type > b.type || a.name < b.name) {
    return 1;
  }
  return 0;
};
console.log(cities.sort(sortingAlgorithm));
