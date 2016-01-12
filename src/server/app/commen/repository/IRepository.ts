/// <reference path="../tsd.d.ts" />

namespace theforce.server.app.commen.repository {
    /**
     * IRepository
     */
    export interface IRepository<T> {
        
        GetById(Id:Number): Promise<T[]>
        
        First(func:(T)): Promise<T>;
        
        Find(func:(T)):Promise<T[]>;
         
        GetAll():Promise<T[]>;
        
        Update(entity:T): Promise<void>;
        
        Insert(entity:T): Promise<void>;
        
        Delete(entity:T): Promise<void>;
    }
}