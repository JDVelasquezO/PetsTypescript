var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Pet } from "./Pet.js";
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, size, age, weigth, race) {
        var _this = _super.call(this, name, size, age, weigth, "Perro") || this;
        _this._race = race;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "setRace", {
        set: function (v) {
            this._race = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "getRace", {
        get: function () {
            return this._race;
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}(Pet));
export { Dog };
