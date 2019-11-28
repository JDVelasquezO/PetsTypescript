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
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, size, age, weigth, typeFish) {
        var _this = _super.call(this, name, size, age, weigth, "Pez") || this;
        _this._typeFish = typeFish;
        return _this;
    }
    Object.defineProperty(Fish.prototype, "setTypeFish", {
        set: function (v) {
            this._typeFish = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fish.prototype, "getTypeFish", {
        get: function () {
            return this._typeFish;
        },
        enumerable: true,
        configurable: true
    });
    return Fish;
}(Pet));
export { Fish };
