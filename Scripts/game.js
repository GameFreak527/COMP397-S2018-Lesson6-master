//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var helloLabel;
    var currentScene;
    var currentState;
    var AssetManager;
    var Manifest = [
        { id: "StartButton", src: "../../Assets/StartButton.png" }
    ];
    function Init() {
        console.log("Asset loading");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager;
        AssetManager.installPlugin(createjs.Sound); //This enables preloading of sound assets
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("App Starting");
        console.log("%c Start Function", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        // This is where all the magic happens
        Main();
    }
    //Game Loop
    function Update() {
        currentScene.Update();
        stage.update();
    }
    function init() {
    }
    function Main() {
        console.log("%c Main Function", "font-style:italic; font-size:16px; color:blue;");
        switch (currentState) {
            case config.Scene.START:
                currentScene = new Scenes.Start();
                break;
            case config.Scene.PLAY:
                break;
            case config.Scene.END:
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map