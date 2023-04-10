class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento);
        this._nome = this._nome + " - Jurídica";
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
