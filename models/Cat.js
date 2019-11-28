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
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, size, age, weigth, eyesColor) {
        var _this = _super.call(this, name, size, age, weigth, "Gato") || this;
        _this._eyesColor = eyesColor;
        return _this;
    }
    Object.defineProperty(Cat.prototype, "setEyesColor", {
        set: function (v) {
            this._eyesColor = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "getEyesColor", {
        get: function () {
            return this._eyesColor;
        },
        enumerable: true,
        configurable: true
    });
    return Cat;
}(Pet));
export { Cat };
