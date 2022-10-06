function make_car(manufacturer, model, ...args) {
  return {
    manufacturer: manufacturer,
    model: model,
    ...args,
  };
}

console.log(make_car("Honda", 2017, { color: "white", make: "Japan" }));
