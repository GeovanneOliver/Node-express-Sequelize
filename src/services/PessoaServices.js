/* eslint-disable linebreak-style */
/* eslint-disable indent */
const Services = require('./Services.js');

class PessoaServices extends Services{
    constructor(){
        super('Pessoa');
    }
    async pegaMatriculaPorEstudante(id){
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos () {
        const listaPessoas = await super.pegaRegistroporEscopo('todosOsRegistros');
        return listaPessoas;
    }
}

module.exports = PessoaServices;