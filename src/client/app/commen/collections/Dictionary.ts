/// <reference path="../tsd.d.ts" />

namespace theforce.client.app.commen.collections {
    export class Dictionary<T> implements IDictionary<T> {

        private keys: string[] = [];
        private values: T[] = [];
        private valueDictionary: { [key: string]: T } = {};

        constructor() {}

        Add(key: string, value: T) {
            this.valueDictionary[key] = value;
            this.keys.push(key);
            this.values.push(value);
        }

        Remove(key: string) {
            let index = this.keys.indexOf(key, 0);
            this.keys.splice(index, 1);
            this.values.splice(index, 1);

            delete this.valueDictionary[key];
        }

        Keys(): string[] {
            return this.keys;
        }

        Values(): T[] {
            return this.values;
        }

        ContainsKey(key: string) {
            if (typeof this.valueDictionary[key] === "undefined") {
                return false;
            }
            return true;
        }
        GetValue(key: string): T {
            return <T>this.valueDictionary[key];
        }

        SetValue(key: string, value: T) {
            let index = this.keys.indexOf(key);
            this.values[index] = value;
            this.valueDictionary[key] = value;
        }
    }// end of class
}