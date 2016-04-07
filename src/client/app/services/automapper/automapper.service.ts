namespace theforce.client.app.services {
    
    interface AutoMapper {
        
    }
    
    /**
     * AutoMapper
     * 
     */
    class AutoMapperImpl implements AutoMapper {
        
        public static $inject: Array<string> = ['$rootScope'];
        
        constructor() {}
        
        public Map(from: any[], to: any): any {
            from.forEach(baseCtor => {
                Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                to.prototype[name] = baseCtor.prototype[name];
                });
            });
            return to;
        }
    }
    angular.module('theforce.client.app.services').service('autoMapper', AutoMapperImpl);
}