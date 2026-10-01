let fila = [];
let mensagem = ''

fila.push('Toy');
fila.push('Hulk');
fila.push('Luck');

console.log(fila);

while(fila.length > 0){
    let nome = fila.shift();
    console.log(`${nome} está sendo atendido.`);
}

if(fila.length === 0){
    mensagem = 'A fila está vazia.';
}else{
    mensagem = 'Ainda existem pacientes.'
}

console.log(mensagem);

//Treinando push e um pouco de while.//
