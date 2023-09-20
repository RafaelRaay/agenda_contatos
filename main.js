const form = document.getElementById('form-agenda');
const nomes = [];
const contatos = [];

var linhas = ' ';

form.addEventListener('submit', function(e)
{
    e.preventDefault();

    adicionaLinha();
    atualizaForm();
});

function adicionaLinha()
{
    const inputNomeUsuario = document.getElementById('nome-usuario');
    const inputContatoUsuario = document.getElementById('contato-usuario');

    if(nomes.includes(inputNomeUsuario.value))
    {
        alert(`O nome ${inputNomeUsuario.value} já foi inserido!`);
    }
    else if(contatos.includes(inputContatoUsuario.value))
    {
        alert(`O telefone ${inputContatoUsuario.value} já foi inserido!`);
    }
    else
    {
    nomes.push(inputNomeUsuario.value);
    contatos.push(inputContatoUsuario.value);

    var linha = '<tr>';
    linha += `<td>${inputNomeUsuario.value}</td>`;
    linha += `<td>${inputContatoUsuario.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeUsuario.value = '';
    inputContatoUsuario.value = '';
    }
}

function atualizaForm()
{
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}