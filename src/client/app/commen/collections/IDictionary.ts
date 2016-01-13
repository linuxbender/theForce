/// <reference path="../tsd.d.ts" />

namespace theforce.client.app.commen.collections {

    export interface IDictionary<T> {
        Add(key: string, value: T): void;
        Remove(key: string): void;
        ContainsKey(key: string): boolean;
        Keys(): string[];
        Values(): T[];
        GetValue(key: string): T;
        SetValue(key: string, value: T);
    }
}