function concatArrays(array1, array2) {
    return array1.concat(array2); // You can use the concat() method or spread operator here
  }
  
  // Example usage
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  
  const result = concatArrays(array1, array2);
  console.log(result); // [1, 2, 3, 4, 5, 6]