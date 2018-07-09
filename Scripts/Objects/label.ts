module objects{
    export class Label extends createjs.Text{
        //Member Variables
        /**
         *
         *
         * @type {boolean}
         * @memberof Label
         */
        public isCentered: boolean= false;
        public height:number;
        public width:number;
        public halfWidth:number;
        public halfHeight:number;

        //Constructor
        constructor(text:string, fontSize:string, fontFamily:string, fontColor:string, x:number=0, y:number=0, isCentered:boolean=false){
            super(text,fontSize + " "+ fontFamily, fontColor);
            this.isCentered = isCentered;

            this._initialize // Initialize the componenets declared in the private method

            if(isCentered){
                this.regX = this.halfWidth;
                this.regY = this.halfHeight; 
            }
            this.x = x;
            this.y = y;
        }
        private _initialize():void{
            this.width = this.getBounds().width;
                this.height = this.getBounds().height;
                this.halfHeight  =this.height *0.5;
                this.halfWidth = this.width*0.5;
        }

        public Start():void{

        }

        public update():void{
            
        }
    }
}