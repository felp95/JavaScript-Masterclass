class DatabaseError {
    constructor(command, message) {
        this.command = command;
        this.message = message;
    }
};

class Parser {
    constructor() {
        this.commands = new Map();
        this.commands.set("createTable", /create table (\w+) \((.+)\)/);
        this.commands.set("insert", /insert into (\w+) \((.+)\) values \((.+)\)/);
        this.commands.set("select", /select (.+) from (\w+)(?: where (.+))?/);
        this.commands.set("delete", /delete from ([a-zA-Z]+)(?: where (.+))?/);
    }
    
    parse(command) {
        for (const [commandName, regExp] of this.commands) {
            let parsedStatement = command.match(regExp);
            if (parsedStatement) {
                return {
                    commandName,
                    parsedStatement
                };
            }
        }
    };
}

class Database {
    constructor() {
        this.tables = {};
        this.parser = new Parser();
    }

    execute(command) {
        const result = this.parser.parse(command);
        if (result) {
            return this[result.commandName](result.parsedStatement);
        }
    }
    createTable(parsedStatement) {
        let [, tableName, columns] = parsedStatement;
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
    }
    insert(parsedStatement) {
        let [, tableName, columns, values] = parsedStatement;
        columns = columns.split(", ")
        values = values.split(", ")
        let row = {};

        columns.map(function (value, indice) {
            row[value] = values[indice];
        })
        this.tables[tableName].data.push(row);
    }
    select(parsedStatement) {
        let [, columns, tableName, where] = parsedStatement;

        columns = columns.split(", ")
        let rows = this.tables[tableName].data;

        if (where) {
            let [columnWhere, valueWhere] = where.split(" = ");
            rows = rows.filter((element) => {
                return element[columnWhere] === valueWhere;
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
    delete(parsedStatement) {
        let [, tableName, where] = parsedStatement;

        if (where) {
            where = where.split(" = ");
            let [columnWhere, valueWhere] = where;
            this.tables[tableName].data = this.tables[tableName].data.filter(item => {
                return item[columnWhere] !== valueWhere;
            });
        } else {
            this.tables[tableName].data = [];
        }
    }
}

try {
    let database = new Database();
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    database.execute("delete from author where id = 2");
    console.log(database.execute("select name, age from author"));
} catch (error) {
    console.log(error.message);
}

//console.log(JSON.stringify(database, undefined, "  "));