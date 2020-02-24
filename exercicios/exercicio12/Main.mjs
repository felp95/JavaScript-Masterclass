import Database from './Database.mjs'

//node --experimental-modules exercicios/exercicio10/main.mjs

async function executeAsync() {
    try {
        let database = new Database();
        await database.execute("create table author (id number, name string, age number, city string, state string, country string)");
        await Promise.all([
            database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
            database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
            database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
        ])
        const result = await database.execute("select name, age from author");
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

const result = executeAsync();

(async function () {
    let results = await result;
    for (const {name} of results) {
        console.log(name)
    }

})();