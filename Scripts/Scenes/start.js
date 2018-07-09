var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scenes;
(function (Scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        //Consotructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        //Public methods
        Start.prototype.Start = function () {
            console.log("Starting Start Scene");
            //All the initialization comes here
            this._welcomeLabel = new objects.Label("Screen", "60px", "Consolas", "#000000", 220, 200, true);
            this._startButton = new objects.Button("StartButton", 220, 140, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            console.log("Starting Update Scene");
            //this._welcomeLabel.rotation +=5;
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Main = function () {
            console.log("Starting Main Scene");
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                this._welcomeLabel.text = "Clicked";
            }, this);
        };
        return Start;
    }(objects.Scene));
    Scenes.Start = Start;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=start.js.map