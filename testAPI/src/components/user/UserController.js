const UserDAO = require('./UserDAO')
const {notDeclare} = require('../../Util/HandleErrors');
const UserErrors = require('../user/UserErrors');

function UserController() {
}

/*Substituido por getusers*/
/*const getAllUser = async (req, res) => {
    try {
        const users = await UserDAO.getAll();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
};*/

const getUsers = async (req, res) => {
    const query = req.query;
    console.log(query);
    try {
        const users = await UserDAO.find(query);
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getUserById = async (req,res)=>{
    const{_id} = req.params;
    try {
        const users = await UserDAO.findOneById(_id);
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
};

const insertUser = async (req, res) => {
    const {name, email} = req.body;
    const user = {
        name,
        email
    };
    try {
        //criando uma variável user pegando do body a chave que tem o nome user
        //igual fazer user = req.body.user;
        await UserErrors.checkAllFields(user);
        await UserDAO.insertOne(user);
        res.status(200).send(`the user: ${JSON.stringify(user)} was inserted`);
    } catch (e) {
        res.status(400).send(e);
    }
};

const updateUser = async (req, res) => {
    const {_id} = req.params;
    const {name, email} = req.body;
    const user = {
        name,
        email
    };
    try {
        await UserErrors.checkAllFields(user);
        const result = await UserDAO.updateOne(_id,user);
        // ${JSON.stringify(result.value)} é na verdade o objeto inteiro do usuário deletado
        res.status(200).send(`the user:${JSON.stringify(user)} was updated`);
    } catch (e) {
        res.status(400).send(e);
    }
};

const deleteUser = async (req, res) => {
    const {_id} = req.params;
    try {
        const result = await UserDAO.findOneAndDelete(_id);
        // ${JSON.stringify(result.value)} é na verdade o objeto inteiro do usuário deletado
        res.status(200).send(`the user:${JSON.stringify(result.value)} was deleted`);
    } catch (e) {
        res.status(400).send(e);
    }
}

//a função que aparece para as rotas é a do prototype
UserController.prototype = {
    //getAllUser,
    getUsers,
    insertUser,
    updateUser,
    deleteUser,
    getUserById
};

module.exports = new UserController();

//modo antigo
//module.exports = {getAll};