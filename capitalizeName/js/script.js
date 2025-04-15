let arr = ["aLi", "sAmy", "moHamed", "sayEd"];
let capitalize = (arr) => {
  return arr.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
};
console.log(capitalize(arr));
