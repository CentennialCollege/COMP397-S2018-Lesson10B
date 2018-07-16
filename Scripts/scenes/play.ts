module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;
        private _ocean:objects.Ocean;
        private _island:objects.Island;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._plane = new objects.Plane();
            this._ocean = new objects.Ocean();
            this._island = new objects.Island();

            this.Main();
        }

        public Update():void {
            this._plane.Update();
            this._ocean.Update();
            this._island.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - PLAY SCENE");
           
            // add the Ocean object to the scene
            this.addChild(this._ocean);

            // add the Island object to the scene
            this.addChild(this._island);

            // add the Plane object to the scene
            this.addChild(this._plane);
        }
    }
}