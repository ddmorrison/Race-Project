let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 19;
if (registeredEarly && age > 18) {
  registeredEarly += 1000;
} else if (registeredEarly && age > 18) {
  console.log(
    `Congrats on entering the race. Your number is ${raceNumber}. Your race will begin at 9:30am.`
  );
} else if (!registeredEarly && age > 18) {
  console.log(
    `Congrats on entering the race. Your number is ${raceNumber}. LATE adults will race at 11:00am.`
  );
} else if (age < 18) {
  console.log(
    `Congrats on entering the race. Your number is ${raceNumber}. Your race will begin at 12:30Pm.`
  );
} else {
  console.log("Error. Please see the registration desk.");
}
