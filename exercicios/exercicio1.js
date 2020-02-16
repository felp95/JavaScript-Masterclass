let command = "create table author (id number, name string, age number, city string, state string, country string)"

let regExp = /create table (\w+) \((.+)\)/

let result = command.match(regExp);

let tableName = result[1];

console.log(tableName)

let columns = result[2].split(", ");

console.log(columns);
