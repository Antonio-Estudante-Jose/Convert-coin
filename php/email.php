<?php
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
    
    $assunto = "Convert-Coin, mensagem vinda de $nome ($email)";

    if(mail("antonioestudantejose25@gmail.com",$assunto,$mensagem)){
        echo("
            <script>
                alert('Email enviado com sucesso!!');
            </script>
        ");
    }else{
        echo("
            <script>
                alert('Falha ao enviar Email!!');
            </script>
        ");
    }
?>