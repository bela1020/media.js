const notas = [6, 8, 7, 9, 10]; // Cria una lista (array)constante contendo as 5 notas
let soma = 0, acimaSete = 0; // Inicializa as variaveis de soma e o contador de notas altas com zero

for (let nota of notas){ // Inicia um laço que percorre cada elemento do array notas
    soma+= nota; // Soma o valor da nota atual 
    if (nota > 7) acimaSete++; // Conta se a nota for maior que 7
}

const media = soma / notas.length; // Calcula a média aritmética

console.log('media: ${media}'); // Exibe a informações finais no console utilizando template atrings (as crases) para formatar o texto
console.log('Quantidade de notas acima de 7: ${acimaSete}'); // Exibe a informações finais no console utilizando template atrings (as crases) para formatar o texto