let command = "create table author (id number, name string, age number, city string, state string, country string)";

const DatabaseError = function (command, message) {
    this.command = command;
    this.message = message;
};

let database = {
    tables: {},
    createTable(command) {
        let regExp = /create table (\w+) \((.+)\)/;
        let result = command.match(regExp);
        let [, tableName, columns] = result;
        columns = columns.split(", ");

        this.tables[tableName] = {
            columns: {},
            data: []
        };

        for (let column of columns) {
            column = column.split(" ");
            let [name, type] = column;

            this.tables[tableName].columns[name] = type;
        }
    },
    execute(command) {
        if (command.startsWith("create table")) {
            return this.createTable(command);
        } else if (command.startsWith("insert into")) {
            return this.insert(command);
        } else if (command.startsWith("select")) {
            return this.select(command);
        } else {
            const message = `Syntax error: ${command}`;
            throw new DatabaseError(command, message);
        }
    },
    insert(command) {
        let regExp = /insert into (\w+) \((.+)\) values \((.+)\)/
        let result = command.match(regExp);
        let [, tableName, columns, values] = result;
        columns = columns.split(", ")
        values = values.split(", ")
        let row = {};

        columns.map(function (value, indice) {
            row[value] = values[indice];
        })
        this.tables[tableName].data.push(row);
    },
    select(command) {
        let regExp = /select (.+) from (\w+)(?: where (.+))?/

        let result = command.match(regExp);

        let [, columns, tableName, where] = result;

        columns = columns.split(", ")
        let rows = this.tables[tableName].data;

        if (where) {
            let [columnWhere, valueWhere] = where.split(" = ");
            rows = rows.filter((element) => {
                return element.id === valueWhere;
            });
        }

        rows = rows.map((row) => {
            let selectedRow = {};

            columns.forEach(element => {
                selectedRow[element] = row[element];
            });

            return selectedRow;
        });

        return rows;
    }
};

try {
    database.execute(command);
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    console.log(database.execute("select name, age from author"));
    console.log(database.execute("select name, age from author where id = 2"));
} catch (error) {
    console.log(error.message);
}

//console.log(JSON.stringify(database, undefined, "  "));