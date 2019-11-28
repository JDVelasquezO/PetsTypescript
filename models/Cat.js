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
        var _this = _super.call(this, name, size, age, weigth) || this;
        _this._eyesColor = eyesColor;
        return _this;
    }
    return Cat;
}(Pet));
export { Cat };
