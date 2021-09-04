function numYearsLived(person) {
  let yearOfDeath = (person.yearOfDeath) ? person.yearOfDeath : (new Date).getFullYear();
  return yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
  people.sort((a, b) => numYearsLived(b) - numYearsLived(a));
  return people[0];
};

// Using reduce array method
/* const findTheOldest = function(people) {
  return people.reduce((currentOldest, person) => {
    return (numYearsLived(currentOldest) > numYearsLived(person)) ? currentOldest : person;
  });
}; */

module.exports = findTheOldest;
