function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  var index;
  var arrCurInvName = []; // Names of arr1's items
  var arrNeInvName = []; // Names of arr2's items

  // Same as using two for loops, this takes care of increasing the number of stock quantity.
  arr1.forEach(function (item1) {
    arr2.forEach(function (item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0]; //Increase number of stock
      }
    });
  });

  // Get item's name for new Inventory
  arr2.forEach(function (item) {
    arrNeInvName.push(item[1]);
  });

  // Get item's name for Current Inventory
  arr1.forEach(function (item) {
    arrCurInvName.push(item[1]);
  });

  // Add new inventory items to current inventory.
  arrNeInvName.forEach(function (item) {
    if (arrCurInvName.indexOf(item) === -1) {
      index = arrNeInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second element of the array as base.
  arr1.sort(function (currItem, nextItem) {
    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);

// Code Explanation
// The variable index stores the location (index) of a product.
// arrCurInvName has the names of arr1’s items.
// arrNeInvName has the names of arr2’s items.
// arr1.map(function(item1)) takes care of items already existing in inventory i.e., it increases the quantity in the inventory.
// Next, arr2.forEach(function(item)) and arr1.forEach(function(item)) get the names of items for the new and current inventory respectively.
// arrNeInvName.forEach(function(item)) handles items which don’t already exist in inventory i.e., it adds new items to the inventory.
// The updated array arr1 is then sorted alphabetically by product name (held in arr1[x][1]) and returned.
