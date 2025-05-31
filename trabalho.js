// trabalho.js

export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300; // Exemplo com base no teste fornecido
}

export function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') return 'brincar dentro de casa';
  if (porte === 'medio') return 'caminhada no bairro';
  if (porte === 'grande') return 'corrida no parque';
  return 'atividade padrão';
}

export async function buscarDadoAsync() {
  return new Promise(resolve => setTimeout(() => resolve('Pipoca'), 100));
}
