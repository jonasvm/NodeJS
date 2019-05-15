function HandleErrors() {

}

const notDeclare = (variable,nameOfVariable) => {
    return new Promise((resolve, reject) => {
        if (variable === null) {
            reject(`the variable: ${nameOfVariable} cant be equal null`);
        } else if (typeof variable == 'undefined') {
            reject(`the variable: ${nameOfVariable} isnt defined`);
        }
        else{
            resolve();
        }
    });
};

HandleErrors.prototype = {
    notDeclare
};

module.exports = new HandleErrors();