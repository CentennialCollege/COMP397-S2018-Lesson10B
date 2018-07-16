module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._plane = new objects.Plane();

            this.Main();
        }

        public Update():void {
            this._plane.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - PLAY SCENE");
           
            // add the Plane object to the scene
            this.addChild(this._plane);
        }
    }
}