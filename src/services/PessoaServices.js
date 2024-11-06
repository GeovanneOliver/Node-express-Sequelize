/* eslint-disable linebreak-style */
/* eslint-disable indent */
const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
        this.matriculaServices = new Services('Matricula');
    }
    async pegaMatriculaAtivasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaTodasAsMatriculaPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getTodasAsMatriculas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos() {
        const listaPessoas = await super.pegaRegistroporEscopo('todosOsRegistros');
        return listaPessoas;
    }

    async cancelaPessoaEMatriculas(estudanteId) {
        return dataSource.sequelize.transaction(async (transacao) => {
            await super.atualizaRegistro({ ativo: false }, { id: estudanteId }, transacao);
            await this.matriculaServices.atualizaRegistro({ status: 'cancelado' }, { id: estudanteId }, transacao);
        });
    }

}

module.exports = PessoaServices;