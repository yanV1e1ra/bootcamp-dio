const alunos = [
    {
        nome: "Yan",
        nota: 8,
    },
    {
        nome: "Ciclano",
        nota: 3,
    },
    {
        nome: "Fulano",
        nota: 5,
    },
    {
        nome: "Beltrano",
        nota: 10,
    }
];

function alunosAprovados(arr, media){
    let aprovados =[];

    for(let i = 0; i < arr.length; i++){
        
        const {nome, nota} = alunos[i];
        
        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));