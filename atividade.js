// Function to generate a random number between min and max
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate an array of random numbers
  function arranjorandom(tamanho, min, max) {
    const arranjo = [];
    for (let i = 0; i < tamanho; i++) {
      arranjo.push(aleatorio(min, max));
    }
    return arranjo;
  }
  
  // Function to find the most frequent element in an array
  function elementosiguais(arranjoAleatorio) {
    const conta = {};
    let contamax = 0;
    let elementos = null;
    arranjoAleatorio.forEach((num) => {
      conta[num] = (conta[num] || 0) + 1;
      if (conta[num] > contamax) {
        contamax = conta[num];
        elementos = num;
      }
    });
    const temEmpate = Object.values(conta).filter((count) => count === contamax).length > 1;
    return temEmpate ? "Não há elemento mais frequente" : elementos;
  }
  
  // Function to remove duplicates from an array
  function removeriguais(arranjo) {
    const elementosunicos = [...new Set(arranjo)];
    if (elementosunicos.length === arranjo.length) {
      return 'Não há elementos unicos.';
    }
    return elementosunicos;
  }
  
  // Function to merge two arrays
  function unirarranjo(arranjoAleatorio, arranjoAleatorio2) {
    const arranjounido = [...arranjoAleatorio, ...arranjoAleatorio2];
    return arranjounido;
  }
  
  // Function to create a matrix from an array
  function matrizAleatoria(arranjo, linhas, colunas) {
    if (arranjo.length !== linhas * colunas) {
      return 'Matriz não pode ser feita.'
    }
    const matrix = []
    for (let i = 0; i < linhas; i++) {
      const linha = arranjo.slice(i * colunas, (i + 1) * colunas);
      matrix.push(linha);
    }
    return matrix;
  }
  
  // Main code
  const tamanho = 9;
  const max = 10;
  const min = 1;
  
  const arranjoAleatorio = arranjorandom(tamanho, min, max);
  console.log("-----------------------------------");
  console.log("Passando pela função do Exercício 1");
  console.log(`Entrada: tamanho do array = ${tamanho}, min = ${min}, max = ${max}`);
  console.log('Saida do arranjo é', arranjoAleatorio);
  console.log("-----------------------------------");
  
  const arranjoAleatorio2 = arranjorandom(tamanho, min, max);
  console.log("Passando pela função do Exercício 4");
  console.log(`Entrada: tamanho do array = ${tamanho}, min = ${min}, max = ${max}`);
  console.log('Saida do arranjo adicional é', arranjoAleatorio2);
  console.log("-----------------------------------");
  
  const elementos = elementosiguais(arranjoAleatorio);
  console.log("Passando pela função do Exercício 2");
  console.log('Entrada do arranjo é', arranjoAleatorio);
  console.log('Saida do elementos iguais é', elementos);
  console.log("-----------------------------------");
  
  const semRepeticao = removeriguais(arranjoAleatorio);
  console.log("Passando pela função do Exercício 3");
  console.log('Entrada do arranjo é', arranjoAleatorio);
  console.log('Saida do elementos unicos é', semRepeticao);
  console.log("-----------------------------------");
  
  const unirArranjo = unirarranjo(arranjoAleatorio, arranjoAleatorio2);
  const semRepeticaoUnida = removeriguais(unirArranjo);
  console.log("Passando pela função do Exercício 3");
  console.log('Entrada dos arranjos são', arranjoAleatorio, 'e', arranjoAleatorio2);
  console.log('Saida do arranjo unido é', unirArranjo);
  console.log('Saida do arranjo unido e sem repetições é', semRepeticaoUnida);
  console.log("-----------------------------------");
  
  const linhas = 3;
  const colunas = 3;
  const matrizFinal = matrizAleatoria(arranjoAleatorio, linhas, colunas);
  console.table(matrizFinal);
  console.log("-----------------------------------");