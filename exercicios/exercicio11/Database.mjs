import DatabaseError from './DatabaseError.mjs'
import Parser from './Parser.mjs'

export default class Database {
    constructor() {
        this.tables = {};
        this.parser = new Parser();
    }
    execute(command) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.parser.parse(command);
                if (result) {
                    return resolve(this[result.commandName](result.parsedStatement));
                } else {
                    const message = `Syntax error: ${command}`;
                    reject(new DatabaseError(command, message));
                }
            }, 1000);
        });
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

//console.log(JSON.stringify(database, undefined, "  "));