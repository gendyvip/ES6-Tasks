let obj = {
  name: "",
  age: "",
  address: "",
};
let handler = {
  set(target, prop, receiver) {
    if (!(prop in target))
      console.log("Can't assign value to non existed property.");
    else if (
      prop === "name" &&
      (typeof receiver !== "string" || receiver.length !== 7)
    )
      console.log("'name' property accepts only string of 7 chars.");
    else if (prop === "address" && typeof receiver !== "string")
      console.log("'address' property accepts only string.");
    else if (
      prop === "age" &&
      (typeof receiver !== "number" || receiver < 25 || receiver > 60)
    )
      console.log(
        "'age' property accepts only numerical value between 25 and 60."
      );
    else return Reflect.set(...arguments);
  },
  get(target, prop) {
    if (!(prop in target)) console.log(`${prop} does not existed in object`);
    else return Reflect.get(...arguments);
  },
};
let proxy = new Proxy(obj, handler);
proxy.name = "mohamed";
proxy.age = 30;
proxy.address = "alex";
proxy.name = "mohamed ahmed";
proxy.age = 61;
proxy.address = false;
console.log(proxy.name, proxy.age, proxy.address, proxy.hobby);
