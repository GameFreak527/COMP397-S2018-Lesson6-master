module objects{
    export class Button extends objects.GameObject{
        //Member Variables
        public isCentered:boolean;

        
        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Button
         */
        constructor(imageString:string,x:number=0,y:number=0,isCentered:boolean= false){
            super(imageString);
            this.isCentered = isCentered;
            if(isCentered){
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;

            //Setup event listners
            this.on("Mouseover",this._MouseOver);
            this.on("mouseout",this._MouseOut);
        }

        //Private Methods
        private _MouseOver():void{
            this.alpha = 0.7 // changes alpha transparency to 70%;
        }

        private _MouseOut():void{
            this.alpha = 1.0 // change alpha 
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