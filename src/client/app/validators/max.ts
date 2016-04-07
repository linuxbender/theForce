/// <reference path="../tsd.d.ts" />

namespace theforce.client.app.validators {
    export function max(value: any) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            
            let _val = this[propertyKey];
            
            
            // descriptor.set = value;
            console.log("max: called with value : " + value);
            console.log("property value is: " + _val);

            // Object.defineProperty(this, 'isValid', set: setter);
        };
    }
}

/*

function logProperty(target: any, key: string) {

  // property value
  var _val = this[key];

  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };

  // Delete property.
  if (delete this[key]) {

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}



 */