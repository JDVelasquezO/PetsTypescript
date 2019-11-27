var Pet = /** @class */ (function () {
    function Pet(name, size, age, weigth) {
        this._name = name;
        this._size = size;
        this._age = age;
        this._weigth = weigth;
    }
    Object.defineProperty(Pet.prototype, "setName", {
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "setSize", {
        set: function (v) {
            this._size = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "setAge", {
        set: function (v) {
            this._age = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "setWeigth", {
        set: function (v) {
            this._weigth = v;
        },
        enumerable: true,
        configurable: true
    });
    return Pet;
}());
export { Pet };
