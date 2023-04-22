class Logging {
    constructor(){
        this.debugMode = 1;
        this.logMode = 1;
        const logParam = process.argv.slice(2,3).toString().trim();
        if (logParam === "debug"){
            this.debugMode = 1;
            this.logMode = 1;
        } else if(logParam === "clean"){
            this.logMode = 0;
        } else {
            this.logMode = 1;
            this.debugMode = 0
        }
    };

    log(message){
        if (this.logMode === 0){
            return;
        } else if(this.logMode === 1){
            if(typeof message === "object"){
                console.log(message);
                return;
            } else {
                console.log('\n'+message);
                return;
            }
        };
    };

    debug(message){
        if(this.logMode === 1 && this.debugMode === 0){
            return;
        } else if(this.logMode === 1 && this.debugMode === 1){
            if(typeof message === "object"){
                console.log(message);
            } else {
                console.log('\n'+message);
            }
            return;
        } else {
            return;
        };
    };
};

module.exports = Logging;