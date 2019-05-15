function Middlewares(){
    /*Esta função vazia existe para que quando for invocada, não crie uma nova instancia
    em cada invocação. Assim um singleton é utilizado, ou seja, uma única instancia do
    objeto para todos usuários*/
}

const handleError404 = (req,res,next)=>{
    if(res.headersSent){
        return next();
    }
    res.status(404).send({status: 404, message: `this url: ${req.url} doesnt exist`});
    //next();
};

/*quando estiver utilizando uma função middleware, não pode exportar como singleton
utilizar o module patter no lugar do prototype

module.exports = new Middlewares();*/

module.exports = {
    handleError404
};