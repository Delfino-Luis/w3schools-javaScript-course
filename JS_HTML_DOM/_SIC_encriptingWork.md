 ```js
        let text1 = [];
        let tVer = "";
        function retorno(){
           let text = document.getElementById("entData").value;
           tVer += text;

           for(let i = 0; i < text.length; i += 1){ text1[i] = text.charCodeAt(i); }
        
           for(let i = 0; i < text.length; i += 1){  text1[i] += 9; }
              
           var arrayToAscii = function (arr) { var res = [];
           for (var i = 0; i < arr.length; i++) { res.push(String.fromCharCode(arr[i])); }
            return res.join(""); }
            
                return (arrayToAscii(text1)); }

        function encriptar(){
            document.getElementById("viewMessage").style.visibility = "visible";
            document.getElementById("labelValue").innerText = "TEXTO ENCRIPTADO";
            document.getElementById("entData").value = retorno();
            document.getElementById("btnValue").innerHTML = "A ENVIAR A INFORMA&Ccedil;&Atilde;O...."
        }

        function ver(){
            document.getElementById("viewMessage").addEventListener("click", function(){
                document.getElementById("entData").value = tVer; });
        }
```