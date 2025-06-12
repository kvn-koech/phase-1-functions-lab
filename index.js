// Code your solution in this file!
// Variable declarations
function distanceFromHqInBlocks(someValue) {
  const hqLocation = 42;
  if (someValue >= hqLocation) {
    return someValue - hqLocation;  
  } else {
    return hqLocation - someValue;  
  }
}

console.log(distanceFromHqInBlocks(43));  
console.log(distanceFromHqInBlocks(50));  
console.log(distanceFromHqInBlocks(34)); 



// Returns distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42; // Above 
  } else {
    return 42 - someValue; // Below 
  }
}

// Returns distance from HQ in feet 
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

// Calculates distance travelled between two blocks in feet
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264; // Moving uptown
  } else {
    return (start - destination) * 264; // Moving downtown
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    // Free sample for first 400 feet
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    // 2 cents per foot after first 400 feet
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    // Flat rate of $25 for over 2000 feet
    return 25;
  } else {
    // No rides over 2500 feet
    return 'cannot travel that far';
  }
}