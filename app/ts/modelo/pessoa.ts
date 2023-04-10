class Pessoa

{
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    getNome(): string{
        return this._nome;
    }

    getIdade(): number{
        return this._idade;
    }

    getDataNascimento(): Date{
        return this._dataNascimento;
    }

    setNome(novoNome: string): void {
        this._nome = novoNome;
    }

    setIdade(novaIdade: number): void {
        this._idade = novaIdade;
    }

    setDataNascimento(novaDataNascimento: Date): void {
        this._dataNascimento = novaDataNascimento;
    }

}