Ext.define('MyApp.car.BaseCar', {
        engine : 'I4',
        turbo : false,
        wheels : 'basic',
        constructor : function(config) {
            this.octaneRequired = 86;
            this.shiftTo = function(gear) {
                this.gear = gear;
            };
            this.shiftTo('park');
        },
        getEngine : function() {
            return this.engine;
        },
        drive : function() {
            console.log("Vrrrrooooooom - I'm driving!");
        }
});
