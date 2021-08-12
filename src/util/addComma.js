function addComma(price) {
  const newPrice = String(price).split("");
  let newArray = [];
  let cnt = 0;
  for (let i = newPrice.length - 1; i >= 0; i--) {
    newArray.push(newPrice[i]);
    cnt++;

    if (cnt === 3 && i !== 0) {
      newArray.push(",");
      cnt = 0;
    }
  }
  newArray = newArray.reverse().join("");
  return newArray;
}

export default addComma;
