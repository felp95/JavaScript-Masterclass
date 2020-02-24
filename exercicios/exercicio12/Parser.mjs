export default class Parser {
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