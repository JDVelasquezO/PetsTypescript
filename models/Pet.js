var Pet = /** @class */ (function () {
    function Pet(name, size, age, weigth, type) {
        this._name = name;
        this._size = size;
        this._age = age;
        this._weigth = weigth;
        this._type = type;
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
    Object.defineProperty(Pet.prototype, "setType", {
        set: function (v) {
            this._type = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getSize", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getAge", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getWeigth", {
        get: function () {
            return this._weigth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getType", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return Pet;
}());
export { Pet };
