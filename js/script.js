
function calcula_media(contador1)
{
    
    var n1 = document.getElementById("n1_aluno_" + contador1).value;
    var n2 = document.getElementById("n2_aluno_" + contador1).value;
    var media = document.getElementById("media_aluno_" + contador1);
    var resultado = document.getElementById("resultado_aluno_" + contador1);
    var mediaDoAluno = (parseFloat(n1) + parseFloat(n2)) / 2;
    
    
    
    
    if(mediaDoAluno >= 70)
    {
        media.innerHTML = "<div class='text-success'>" + mediaDoAluno + "</div>";
        resultado.innerHTML = "Aprovado";
       
        
    }
    else if(mediaDoAluno >=30)
    {
        media.innerHTML = "<div class='text-rec'>" + mediaDoAluno + "</div>";
        resultado.innerHTML = "Recuperaçao";
        
    }
   
    else
    {
        media.innerHTML = "<div class='text-danger'>" + mediaDoAluno + "</div>";
        resultado.innerHTML = "Reprovado";
        
    }

    
}
function estatistica(){
    var quantidadeDeReprovados = 0;
    var quantidadeDeAprovados = 0;
    var mediaDoAluno = 0;
    var mediaDaTurma = 0;
    
    
    for(var contador1 = 0 ; contador1 < 5; contador1++)
    {    
        var n1 = document.getElementById("n1_aluno_" + contador1).value;
        var n2 = document.getElementById("n2_aluno_" + contador1).value;
        mediaDoAluno = (parseFloat(n1) + parseFloat(n2)) / 2;
        mediaDaTurma = (parseFloat(mediaDaTurma)) + (parseFloat(mediaDoAluno));
         if(mediaDoAluno >= 70)
         {
        
            quantidadeDeAprovados++;
        }
        else if(mediaDoAluno >=30)
        {
        
        }
        else
        {
           quantidadeDeReprovados++;
        }
    }
    
    mediaDaTurma /=5;    
    codAprovados.innerHTML = quantidadeDeAprovados;
    codReprovados.innerHTML = quantidadeDeReprovados;
    codMediaDoAluno.innerHTML = mediaDaTurma;
}

