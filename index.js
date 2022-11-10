function estudante(nome, turma, nota, matricula){
    this.nome = nome;
    this.turma = turma;
    this.nota = nota;
    this.matricula = matricula;
}

var alunos = [];
alunos[0] = new estudante("Neville Longbottom", "Turma 1", "9,8", "CP3018574");
alunos[1] = new estudante("Ronald Wesley", "Turma 1", "7,5", "CP3014563");
alunos[2] = new estudante("Hermione Granger", "Turma 3", "6,0", "CP176312X");
alunos[3] = new estudante("Harry Potter", "Turma 2", "10,0", "CP3015281");
alunos[4] = new estudante("Draco Malfoy", "Turma 2", "2,0", "CP0138201");
alunos[5] = new estudante("Cho Chang", "Turma 3", "5,0", "CP1110202");
alunos[6] = new estudante("Cedrigo Diggory", "Turma 4", "8,0", "CP5463783");

function listar(turma){
    var i;
    var divcasa = document.getElementById('listaralunos');
    var conteudo = "<table class='table'>";
    conteudo += "<tr><th>Nome</th><th>Turma</th><th>Nota</th><th>Matricula</th><th>Mudar Turma</th></tr>";
    for (i = 0; i< alunos.length; i++){
        console.log(alunos[i].turma);
        if (alunos[i].turma == turma){
            conteudo += "<tr><td>"+alunos[i].nome+"</td>";
            conteudo += "<td>"+alunos[i].turma+"</td>";
            conteudo += "<td>"+alunos[i].nota+"</td>";
            conteudo += "<td>"+alunos[i].matricula+"</td>";
            conteudo += "<td><a href='#' onclick='mudarItem("+i+")'>Mudar</a></td></tr>";
        }
    }
    conteudo += "</table>";
    divcasa.innerHTML = conteudo;
}

function mudarItem(i) {
    var newitem = window.prompt("Digite uma nova turma para o jogo.");
    alunos[i].turma = newitem;
    listar(alunos[i].turma);
}

function matricular(){
    var e = new estudante(nome.value, turma.value, nota.value, matricula.value);
    alunos.push(e);
    alert("Novo aluno adicionado!");
    nome.value = "";
    turma.value = "";
    nota.value = "";
    matricula.value = "";
}