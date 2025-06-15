alert("املئ السنة و السنة الحالية قبل القن السري")
alert("القن السري فيه رقم واحد ")


function confirmatoin() {


    let passe = document.getElementById('passe').value;
    let passe1 = document.getElementById('passe1').value;

    if (passe == passe1) {
        date();
        document.getElementById('login').style.background = 'green';
        document.getElementById('login').style.boxShadow = '8px 8px 8px yellow';
    }

}





function cacher() {

    if (document.getElementById("btn").value == 'cacher') {

        document.getElementById("passe").type = 'password';
        document.getElementById("passe1").type = 'password';
        document.getElementById("btn").value = 'afficher';
    }

    else {


        document.getElementById("passe").type = 'text';
        document.getElementById("passe1").type = 'text';
        document.getElementById("btn").value = 'cacher';
    }

}

function date() {
   
        let a = document.getElementById('dna').value;
        let b = document.getElementById('dn').value;
        let c = parseInt(a) - parseInt(b);
        document.getElementById('resultat').innerHTML = "عمرك الحالي هو : " + c + " سنة";



}




