// Cria 3 objetos PessoaFisica
const pessoa1 = new PessoaFisica('Ana', 22, new Date('2001-08-23'), '123.456.789-01');
const pessoa2 = new PessoaFisica('Bruno', 45, new Date('1978-03-10'), '234.567.891-02');
const pessoa3 = new PessoaFisica('Carla', 33, new Date('1990-12-05'), '345.678.912-03');
// Cria 3 objetos PessoaJuridica
const pessoa4 = new PessoaJuridica('Empresa A', 10, new Date('2013-01-01'), '12.345.678/0001-12');
const pessoa5 = new PessoaJuridica('Empresa B', 5, new Date('2018-07-15'), '23.456.789/0002-34');
const pessoa6 = new PessoaJuridica('Empresa C', 20, new Date('2003-10-30'), '34.567.890/0003-56');
// Função para imprimir atributos das instâncias das classes
function printAttributes(pessoa) {
    console.log(`Nome: ${pessoa.getNome()}`);
    console.log(`Idade: ${pessoa.getIdade()}`);
    console.log(`Data de Nascimento: ${pessoa.getDataNascimento().toISOString().slice(0, 10)}`);
    if (pessoa instanceof PessoaFisica) {
        console.log(`CPF: ${pessoa.cpf}`);
    }
    if (pessoa instanceof PessoaJuridica) {
        console.log(`CNPJ: ${pessoa.cnpj}`);
    }
    console.log('-----------------------');
}
// Imprime os atributos dos objetos no console
const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6];
pessoas.forEach(printAttributes);
