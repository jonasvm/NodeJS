const dB = require('../../config/mongodb');
const {ObjectID} = require('mongodb');

function UserDAO() {
}

const collection = "user";

/*Função descartada porque outra função genérica vai fazer todas as buscas*/
/*const getAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            const result = await db.collection(collection).find().toArray();
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
}*/

const find = (params = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            //a linha de baixo só vai funcionar se uma string for recebida, outros tipos vão crashar o projeto
            const result = await db.collection(collection).find(params).toArray();
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

const findOneById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            //a linha de baixo só vai funcionar se uma string for recebida, outros tipos vão crashar o projeto
            const params = {_id: ObjectID(id)};
            const result = await db.collection(collection).findOne(params);
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

const findOneAndDelete = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            //a linha de baixo só vai funcionar se uma string for recebida, outros tipos vão crashar o projeto
            const params = {_id: ObjectID(id)};
            const result = await db.collection(collection).findOneAndDelete(params);
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

const insertOne = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            const result = await db.collection(collection).insertOne(user);
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

const updateOne = (id, user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await dB.get();
            //a linha de baixo só vai funcionar se uma string for recebida, outros tipos vão crashar o projeto
            const params = {_id: ObjectID(id)};
            const result = await db.collection(collection).updateOne(params, {$set: user});
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};

UserDAO.prototype = {
    //getAll,
    insertOne,
    updateOne,
    findOneAndDelete,
    findOneById,
    find
};

module.exports = new UserDAO();