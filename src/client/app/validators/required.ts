/// <reference path="../tsd.d.ts" />

namespace theforce.client.app.validators {
    export function required(message: string) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("property value is: " + descriptor.value);
            if (descriptor.get() === undefined || descriptor.get() === '' || descriptor.get() === null ) {
            }
        };
    }
}