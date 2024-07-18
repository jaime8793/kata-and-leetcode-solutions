let nameArray = []; // This array should be outside the function to maintain its state across function calls.

function handOutGift(name) {
  if (nameArray.includes(name)) {
    throw new Error("This person has already received a gift."); // More descriptive error
  }

  nameArray.push(name); // Add new name to the array
  console.log(`Gift handed out to ${name}`);
}
