let command = "create table author (id number, name string, age number, city string, state string, country string)";

let regExp = /create table (\w+) \((.+)\)/

let result = command.match(regExp);

let tableName = result[1];
let columns = result[2].split(", ");

let database = {
    tables: {
        [tableName]: {
            columns: {},
            data: []
        }
    }
};

for (let column of columns) {
    column = column.split(" ");
    let name = column[0];
    let type = column[1];

    database.tables[tableName].columns[name] = type;
}

console.log(JSON.stringify(database, undefined, ' '));