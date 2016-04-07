/// <reference path="../tsd.d.ts" />

namespace theforce.client.app.validators {
    export function min(value: any) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("min: called with value : " + value);
        };
    }
}