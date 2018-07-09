module objects{
    export abstract class GameObject extends createjs.Bitmap{
        //Member Variables
        public isCentered: boolean= false;
        public height:number;
        public width:number;
        public halfWidth:number;
        public halfHeight:number;

        //Constructor
        constructor(imageString:string){
            super(managers.Game.AssetManager.getResult(imageString));
            this._initialize();
        }

        //Private Methods
        private _initialize():void{
            this.width = this.getBounds().width;
                this.height = this.getBounds().height;
                this.halfHeight  =this.height *0.5;
                this.halfWidth = this.width*0.5;
        }

        //Public Methods

        public Start():void{

        }

        public Update():void{

        }

        public Reset():void{
            
        }
    }
}