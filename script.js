try {
    // Solicita os números ao usuário
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
  
    // Realiza a divisão
    let resultado = numero1 / numero2;
  
    // Verifica se o resultado é um número válido
    if (isNaN(resultado)) {
      throw new Error("Resultado inválido");
    }
  
    // Exibe o resultado
    console.log(`O resultado da divisão é: ${resultado}`);
  } catch (error) {
    // Captura e trata a exceção
    console.error("Ocorreu um erro:", error.message);
  } finally {
    // Executa o bloco finally, independentemente de ter ocorrido uma exceção ou não
    console.log("Fim da operação");
  }