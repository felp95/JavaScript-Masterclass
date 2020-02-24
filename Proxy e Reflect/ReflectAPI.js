function createArray() {
    return new Proxy({}, {
        // METODO SET E INVOCADO QUANDO UMA PROPRIEDADE E DEFINIDA NO OBJETO
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            // target[key] = value
            Reflect.set(target, key, value)
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/\d+/)) {
                if (!(Reflect.has(target, key))) {
                    throw `Property ${key} not found`
                }
            }
            return Reflect.get(target, key)
        },
        deleteProperty(target, key) {
            if (Reflect.has(target, key)) {
                target.length--;
                delete Reflect.deleteProperty(target, key)
            };
        }
    });
}

const languages = createArray();
languages[0] = "C#"
languages[1] = "Angular"
languages[2] = "JavaScript"

console.log(languages);
console.log(languages.length);

// delete languages[1]
// delete languages[2]
// delete languages[3]
