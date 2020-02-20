const v1 = 10;
const fn1 = () => {
    const fn2 = () => {
        const v1 = 100;
        console.log(v1)
    }
    fn2()
}

fn1()


const obj1 = {
    p1: 10,
    getP1: function () {
        const fn2 =  () => {
            return this.p1;
        };
        return fn2();
    }
};

console.log(obj1.getP1())