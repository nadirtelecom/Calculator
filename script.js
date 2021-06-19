

        //fonction de calculer://

        function calculer() 
        { 
            let a = document.getElementById("output").value 
            let b = eval(a) 
            document.getElementById("output").value = b 
        } 


        //fonction afficher les valeurs://
        function afficher(val) 
        { 
            document.getElementById("output").value+=val 
        } 

        
        //fonction qui effacer tout ://
        function effacer() 
        { 
            document.getElementById("output").value = "0" 
        } 

        //fonction effacer un un//

        function supp() {
            var c = document.getElementById("output").value;
            document.getElementById("output").value = c.substring(0, c.length - 1);}

