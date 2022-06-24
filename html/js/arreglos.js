const cars = [
    "BMW",
    "Mercedes",
    "Volvo"
]
for (let i = 0; i < cars.length; i++){
    console.log(i+" : "+cars[i]);
}
cars.push("Audi");
console.log(cars);