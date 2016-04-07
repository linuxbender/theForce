namespace theforce.client.app.services {
    
    interface IPubSub {
        Pub<T>(eventName:string, eventArgs:T): void;
        Sub<T>(eventName:string, callback: <T>(event:ng.IAngularEvent, eventArgs:T) => void): void;
    }
    
    /**
     * PubSubImpl
     */
    class PubSubImpl implements IPubSub {
        
        public static $inject: Array<string> = ['$rootScope'];
        
        constructor(private $rootScope: angular.IRootScopeService) {}
        
        public Pub<T>(eventName:string, eventArgs:T): void {
            let event = this.$rootScope.$broadcast(eventName, eventArgs);
        }
        
        public Sub<T>(eventName:string, callback: <T>(event:ng.IAngularEvent, eventArgs:T) => void): void {
            let event = this.$rootScope.$on(eventName, (event:ng.IAngularEvent, data:any) => {
                    return callback(event, data);
            });
        }
    }
    
    angular.module('theforce.client.app.services').service("pubSub", PubSubImpl);
}