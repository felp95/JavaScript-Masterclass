let command = "create table author (id number, name string, age number, city string, state string, country string)";
let command2 = "select id, name from author";

const DatabaseError = function (command, message) {
    this.command = command;
    this.message = message;
}

let database = {
    tables: {},
    createTable(command) {

        let regExp = /create table (\w+) \((.+)\)/
        let result = command.match(regExp);
        let [, tableName, columns] = result;
        columns = columns.split(", ")

        this.tables[tableName] = {
            columns: {},
            data: []
        }
        for (let column of columns) {
            column = column.split(" ");
            let [name, type] = column;

            this.tables[tableName].columns[name] = type
        }
    },
    execute(command) {
        if (command.startsWith("create table")) {
            return this.createTable(command);
        } else if (command.startsWith("insert into")) {
            this.insert(command);
        } else {
            const message = `Syntax error: ${command}`;
            throw new DatabaseError(command, message);
        }
    },
    insert(command) {
        let regExp = /insert into (\w+) \((.+)\) values \((.+)\)/
        let result = command.match(regExp);
        let [, tableName, columns, values] = result;
        columns = columns.split(", ");
        values = values.split(", ");

        let row = {}

        columns.forEach((element, index) => {
            row[element] = values[index];
        });

        this.tables[tableName].data.push(row)
    }
};

try {
    database.execute(command)
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
} catch (error) {
    //console.log(error.message)
}

console.log(JSON.stringify(database, undefined, '  '))