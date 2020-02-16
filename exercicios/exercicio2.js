let command = "create table author (id number, name string, age number, city string, state string, country string)";

let regExp = /create table (\w+) \((.+)\)/

let result = command.match(regExp);

let tableName = result[1];
let columns = result[2].split(", ");

let database = {
    tables: {
        [tableName]: {
            columns: {
            },
            data: []
        }
    }
};

for (let column of columns) {
    column = column.split(" ");
    database.tables[tableName].columns[column[0]] = column[1];
}

console.log(JSON.stringify(database, null, ' '));