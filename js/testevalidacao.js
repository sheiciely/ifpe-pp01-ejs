
 
function validaForm(){
           d = document.cadastro;
           //validar nome
           if (d.cNome.value == ""){
                     alert("O campo NOME  deve ser preenchido!");
                     d.cNome.style.backgroundColor="red";
                     d.cNome.style.color="#ffffff";
                    d.cNome.focus();
                     return false;
           }
           //validar user
          
          
          
            if (d.cEmail.value == ""){
                   alert("O campo EMAIL  deve ser preenchido!");
                   d.cEmail.style.backgroundColor="red";
                   d.cEmail.style.color="#ffffff";
                   d.cEmail.focus();
                   return false;
         }
         //validar email(verificao de endereco eletrônico)
         parte1 = d.cEmail.value.indexOf("@");
         parte3 = d.cEmail.value.length;
         if (!(parte1 >= 3 && parte3 >= 9)) {
                   alert ("O campo EMAIL  deve ser conter um endereco eletronico!");
                   d.cEmail.style.backgroundColor="red";
                   d.cEmail.style.color="#ffffff";
                   d.cEmail.focus();
                    
                   return false;
         }
           
document.cadastro.submit();
         
}
 
  

