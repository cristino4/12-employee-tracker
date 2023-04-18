class Logging {
    constructor(){
        this.debugMode = 1;
        this.logMode = 1;
        const logParam = process.argv.slice(2,3).toString().trim();
        console.log(`logparam ${logParam}`)
        if (logParam === "debug"){
            this.debugMode = 1;
            this.logMode = 1;
            console.log(`debug on`)
        } else if(logParam === "clean"){
            this.logMode = 0;
            console.log(`log off`)
        } else {
            console.log(`log on`)
            this.logMode = 1;
            this.debugMode = 0
        }
    };

    log(message){
        if (this.logMode === 0){
            return;
        } else if(this.logMode === 1){
            console.log('\n'+message);
        };
    };

    debug(message){
        if(this.logMode === 1 && this.debugMode === 0){
            return;
        } else if(this.logMode === 1 && this.debugMode === 1){
            console.log('\n'+message);
            return;
        } else {
            return;
        };
    };
};

module.exports = Logging;