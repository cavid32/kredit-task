
        const mebleg = document.getElementById("mebleg");
        const faiz = document.getElementById("faiz");
        const ay = document.getElementById("ay");

        const faizLabel = document.getElementById("faizLabel");
        const ayLabel = document.getElementById("ayLabel");

        const faizMeblegi = document.getElementById("faizMeblegi");
        const ayliqOdenis = document.getElementById("ayliqOdenis")

        const faizVal = e =>{
            faizLabel.innerHTML = "illik " + e + "%le";
        }

        const ayliqVal = e =>{
            ayLabel.innerHTML = "kredit  " + e + " ayliqdir";
        }

        const hesabla = () => {
            let faizHesablanmasi,faizDaxilMebleg , ayliqHesablanmasi;

            faizHesablanmasi = parseInt(mebleg.value * faiz.value / 100);

            faizMeblegi.innerHTML = faizHesablanmasi;

            faizDaxilMebleg = parseInt(mebleg.value) + faizHesablanmasi

            ayliqHesablanmasi = faizDaxilMebleg / ay.value

            ayliqOdenis.innerHTML = ayliqHesablanmasi

            
        }
    