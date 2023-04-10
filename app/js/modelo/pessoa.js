class Pessoa {
    _nome;
    _idade;
    _dataNascimento;
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    getNome() {
        return this._nome;
    }
    getIdade() {
        return this._idade;
    }
    getDataNascimento() {
        return this._dataNascimento;
    }
    setNome(novoNome) {
        this._nome = novoNome;
    }
    setIdade(novaIdade) {
        this._idade = novaIdade;
    }
    setDataNascimento(novaDataNascimento) {
        this._dataNascimento = novaDataNascimento;
    }
}
