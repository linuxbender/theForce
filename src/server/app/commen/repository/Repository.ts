/// <reference path="IRepository" />

namespace theforce.server.app.commen.repository {
    /**
     * Repository
     */
    
    export class Repository implements IRepository<Person> {
        
        constructor() {
        }
        
        GetById(Id:Number): Promise<Person[]> {
            return null;
        }
        
        First(func:(Person)): Promise<Person> {
            return null;
        }
        
        Find(func:(Person)):Promise<Person[]> {
            return null;
        }
         
        GetAll():Promise<Person[]>{
            return null;
        }
        
        Update(entity:Person): Promise<void>{
            return null;
        }
        
        Insert(entity:Person): Promise<void>{
            return null;
        }
        
        Delete(entity:Person): Promise<void>{
            return null;
        }
    }
    
    export class Person {
        
    }
}