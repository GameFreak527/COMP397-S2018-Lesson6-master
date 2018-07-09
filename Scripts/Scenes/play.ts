module Scenes{
    export class Play extends objects.Scene{
        //Member Variables
        private _PlayLabel:objects.Label;
        private _NextButton:objects.Button;
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
        this._PlayLabel =  new objects.Label("Screen","60px","Consolas","#000000",220,200,true);
        this._NextButton = new objects.Button("StartButton",220,140,true);
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
        this.addChild(this._PlayLabel);
        this.addChild(this._NextButton);

        this._NextButton.on("click",function(){
            this._PlayLabel.text = "Clicked";
        },this);
        
    }
    }
}