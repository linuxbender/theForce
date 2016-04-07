
import min = theforce.client.app.validators.min;
import max = theforce.client.app.validators.max;
import required = theforce.client.app.validators.required;

namespace theforce.client.app {
    export class Point {
        private _x: number;
        private _y: number;

        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        @min(0)
        @required("X ist ein Pflichtfeld")
        get x() { return this._x; }

        @max(10)
        get y() { return this._y; }
    }
}