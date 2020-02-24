// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

const data = new Date()

// implementação
var objetos = {}
function adicionarAluno(nome){

    alunosDaEscola.push({nome, notas: [], cursos:[], faltas:0})

    return("Sucesso ao adcionar Aluno : " + nome)
  
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    }
    function listarAlunos(){

      
      for (variavel of alunosDaEscola) {
        console.log(variavel.nome)
                       
      }
      
        }
        function buscarAluno(nome){
            /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
            const busca = alunosDaEscola.filter(aluno => aluno.nome == nome)

            if(busca.length < 1){
                console.log( "Aluno não encontrado!!!")
               return false
            } else { console.log("Aluno encontrado!!!") 
            return busca}
           

        } 
        function matricularAluno(aluno, curso){

            for(let i=0;i<alunosDaEscola.length;i++){
                if(alunosDaEscola[i].nome === aluno){
                    console.log(alunosDaEscola[i].nome)
                    alunosDaEscola[i].cursos.push({nomeDoCurso: curso,dataMatricula: data })
                    
                    console.log(alunosDaEscola[i])

                }

              
                   //return alunosDaEscola[prop].nome
                   
                }
               
            }
           
        

          
        
 adicionarAluno("Rafael") 
 console.log("###Alunos Cadastrados###")  
 listarAlunos()
 buscarAluno("Rafael22")
 matricularAluno("Rafael", 'Full Stack');

