import React from 'react';

function Reduce() {
  const arr = [3, 4, 6];
  const result = reduce(arr, (a, b) => a + b);

  function reduce(array, func) {
    let result = array[0];
    for (let nextEl of array.slice(1)) {
      result = func(result, nextEl);
    }
    return result;
  }

  return (
    <div>
      <p>The sum is: {result}</p>
    </div>
  );
}

export default Reduce;