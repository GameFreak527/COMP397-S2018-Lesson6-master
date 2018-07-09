module Scenes{
    export class Start extends objects.Scene{
        //Member Variables
        private _welcomeLabel:objects.Label;
        private _startButton:objects.Button;
        //Consotructors
        constructor(){
            super();
            this.Start();
        }
    //Private Methods

    //Public methods

    public Start():void{
        console.log("Starting Start Scene");
        //All the initialization comes here
        this._welcomeLabel =  new objects.Label("Screen","60px","Consolas","#000000",220,200,true);
        this._startButton = new objects.Button("StartButton",220,140,true);
        this.Main();

    }

    public Update():void{
        console.log("Starting Update Scene");
        //this._welcomeLabel.rotation +=5;
    }

    public Reset():void{

    }

    public Main():void{
        console.log("Starting Main Scene");
        this.addChild(this._welcomeLabel);
        this.addChild(this._startButton);

        this._startButton.on("click",function(){
            this._welcomeLabel.text = "Clicked";
        },this);
        
    }
    }
}