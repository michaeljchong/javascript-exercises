function numYearsLived(person) {
  let yearOfDeath = (person.yearOfDeath) ? person.yearOfDeath : (new Date).getFullYear();
  return yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
  people.sort((a, b) => numYearsLived(b) - numYearsLived(a));
  return people[0];
};

module.exports = findTheOldest;
