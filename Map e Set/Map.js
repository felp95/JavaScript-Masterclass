const timeUnits = new Map()
console.log(timeUnits.set("second", 1));
console.log(timeUnits.set("minute", 60));
console.log(timeUnits.set("hour", 3600));

console.log(timeUnits)
console.log(timeUnits.size)
console.log(Array.from(timeUnits))

// no map.forEach o value vem na frente da chave
timeUnits.forEach((value, key) => {
    console.log(key, value)
})

if (timeUnits.has("minute")) {
    console.log(timeUnits.get("minute"));
}
if (timeUnits.has("hour")) {
    console.log(timeUnits.delete("hour"));
}
console.log(timeUnits.size)

timeUnits.clear()
console.log(timeUnits.size)

// um object SEMPRE É UM CONJUNTO DE STRINGS
const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";

console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);

// em um MAP é respeitado os TIPOS
const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map.get(10));
console.log(map.get("10"));
console.log(map.get(true));
console.log(map.get("true"));