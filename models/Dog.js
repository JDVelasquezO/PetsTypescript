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
        var _this = _super.call(this, name, size, age, weigth) || this;
        _this._race = race;
        return _this;
    }
    return Dog;
}(Pet));
export { Dog };
