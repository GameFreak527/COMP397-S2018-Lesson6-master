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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        //Consotructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        //Public methods
        Play.prototype.Start = function () {
            console.log("Starting Start Scene");
            //All the initialization comes here
            this._PlayLabel = new objects.Label("Screen", "60px", "Consolas", "#000000", 220, 200, true);
            this._NextButton = new objects.Button("StartButton", 220, 140, true);
            this.Main();
        };
        Play.prototype.Update = function () {
            console.log("Starting Update Scene");
            //this._welcomeLabel.rotation +=5;
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Main = function () {
            console.log("Starting Main Scene");
            this.addChild(this._PlayLabel);
            this.addChild(this._NextButton);
            this._NextButton.on("click", function () {
                this._PlayLabel.text = "Clicked";
            }, this);
        };
        return Play;
    }(objects.Scene));
    Scenes.Play = Play;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=play.js.map