const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let childCount = 0;
  let adultCount = 0;
  let seniorCount = 0;
  entrants.forEach((value) => {
    if (value.age < 18) {
      childCount += 1;
    } else if (value.age >= 18 && value.age < 50) {
      adultCount += 1;
    } else {
      seniorCount += 1;
    }
  });
  const result = { child: childCount, adult: adultCount, senior: seniorCount };
  return result;
}

function calculateEntry(entrants) {
  // seu código aqui.
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);
  const price = data.prices;
  let totalPrice = 0;
  totalPrice += totalEntrants.adult * price.adult;
  totalPrice += totalEntrants.child * price.child;
  totalPrice += totalEntrants.senior * price.senior;
  return totalPrice;
}
module.exports = { calculateEntry, countEntrants };
