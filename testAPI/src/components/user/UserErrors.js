const HandleErros = require('../../Util/HandleErrors');

function UserHandleErrors() {

}

const checkAllFields = (user) => {
    const fields = ["name", "email"];
    return new Promise(async (resolve, reject) => {
        try {
            for await (const field of fields) {
                await HandleErros.notDeclare(user[field], `user[${field}]`);
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

UserHandleErrors.prototype = {
    checkAllFields
};

module.exports = new UserHandleErrors();