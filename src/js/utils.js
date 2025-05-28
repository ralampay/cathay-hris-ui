import React from "react";

export const formatMobileNumber = (mobileNumber) => {
    return `+639${mobileNumber}`;
}

export const camelToSnake = (obj) => {
  const snakeObj = {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
      snakeObj[snakeKey] = obj[key];
    }
  }
  return snakeObj;
}

export const snakeToCamel = (obj) => {
  const camelObj = {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let camelKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());

      // Check if the current object's values look like an array in object form
      // (e.g., {"0": "value1", "1": "value2"})
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        const nestedObject = obj[key];
        const isLikelyArray = Object.keys(nestedObject).every(nestedKey => /^\d+$/.test(nestedKey));

        if (isLikelyArray) {
          // Convert the object back into an array based on numeric keys
          const newArray = [];
          Object.keys(nestedObject).sort((a, b) => parseInt(a) - parseInt(b)).forEach(numericKey => {
            newArray.push(nestedObject[numericKey]);
          });
          camelObj[camelKey] = newArray;
        } else {
          // If it's a regular nested object, recursively convert
          camelObj[camelKey] = snakeToCamel(nestedObject);
        }
      } else if (Array.isArray(obj[key])) {
        // If the value is an array, iterate over its elements and recursively convert
        camelObj[camelKey] = obj[key].map(element => {
          if (typeof element === 'object' && element !== null) {
            return snakeToCamel(element);
          }
          return element;
        });
      } else {
        camelObj[camelKey] = obj[key];
      }
    }
  }
  return camelObj;
}

export const hasFormError = (errors, key) => {
  return errors[key] && errors[key].length > 0;
}

export const getInputClassName = (errors, key) => {
  return `form-control ${hasFormError(errors, key) ? 'is-invalid' : ''}`;
}

export const renderInputErrors = (errors, key) => {
  if (hasFormError(errors, key)) {
    return (
      <div className="invalid-feedback">
        {errors[key].join(',')}
      </div>
    );
  } else {
    return (
      <div/>
    );
  }
}