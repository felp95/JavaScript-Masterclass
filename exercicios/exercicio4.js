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
        let tableName = result[1];
        let columns = result[2].split(", ");

        this.tables[tableName] = {
            columns: {},
            data: []
        }

        for (let column of columns) {
            column = column.split(" ");
            let name = column[0];
            let type = column[1];

            this.tables[tableName].columns[name] = type
        }
    },
    execute(command) {
        if (command.startsWith("create table")) {
            return this.createTable(command);
        } else {
            const message = `Syntax error: ${command}`;
            throw new DatabaseError(command, message);
        }
    }
};


try {
    database.execute(command)
} catch (error) {
    console.log(error.message)
}

console.log(JSON.stringify(database, undefined, '  '))