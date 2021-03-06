var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../dist/promise-decorators"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var promise_decorators_1 = require("../dist/promise-decorators");
    var ClassWithPromise = (function () {
        function ClassWithPromise() {
            this.CallCounter = 0;
            this.NotOnceCounter = 0;
        }
        ClassWithPromise.prototype.WithPromiseOnce = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.CallCounter++;
                    return [2 /*return*/, true];
                });
            });
        };
        ClassWithPromise.prototype.NotOnce = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.NotOnceCounter++;
                    return [2 /*return*/, false];
                });
            });
        };
        return ClassWithPromise;
    }());
    __decorate([
        promise_decorators_1.PromiseOnce,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ClassWithPromise.prototype, "WithPromiseOnce", null);
    describe("PromiseOnce", function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
        var cp = new ClassWithPromise();
        var p1 = cp.NotOnce();
        var p2 = cp.NotOnce();
        var p3 = cp.NotOnce();
        var p4 = cp.NotOnce();
        it("NotOnce all promises resolved", function (done) {
            Promise.all([p1, p2, p3, p4]).then(function (list) {
                expect(list.length).toBe(4);
                expect(list.every(function (f) { return f === false; })).toBe(true);
                done();
            });
        });
        it("NotOnce counter test", function () {
            var x = cp.NotOnceCounter;
            expect(x).toBe(4);
        });
        var pp1 = cp.WithPromiseOnce();
        var pp2 = cp.WithPromiseOnce();
        var pp3 = cp.WithPromiseOnce();
        var pp4 = cp.WithPromiseOnce();
        it("WithPromiseOnce all promises resolved", function (done) {
            Promise.all([pp1, pp2, pp3, pp4]).then(function (list) {
                expect(list.length).toBe(4);
                expect(list.every(function (f) { return f === true; })).toBe(true);
                cp.WithPromiseOnce();
                var x = cp.CallCounter;
                expect(x).toBe(2);
                done();
            });
        });
        it("WithPromiseOnce counter test", function () {
            var x = cp.CallCounter;
            expect(x).toBe(2);
        });
    });
});
//# sourceMappingURL=PromiseOnce_test.js.map