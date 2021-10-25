//Expression de fonction immédiatement invoquée
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const back= document.querySelector('.back')
  let deg = 0;


  startButton.addEventListener('click', () => {

    // Désactiver le bouton pendant l'essorage
    startButton.style.pointerEvents = 'none';
    // Calculer une nouvelle rotation entre 5000 et 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // degrés =40 ;
    // Définir la transition sur la roue
    wheel.style.transition = 'all 10s ease ';
    back.style.transition = 'all 14s ease-out';

    // Tourner la roue
    wheel.style.transform = `rotate(${deg}deg)`;
    // Appliquer les flous
    wheel.classList.add('blur');
    back.classList.add('rainbow');
  });
  wheel.addEventListener('transitionend', () => {
    // Supprimer le flou
    wheel.classList.remove('blur');
    back.classList.remove('rainbow');
    // Activer le bouton lorsque l'essorage est terminé
    startButton.style.pointerEvents = 'auto';
    // Besoin de définir la transition sur aucune car nous voulons faire pivoter instantanément
    wheel.style.transition = 'none';
    // Calculez le degré sur une base de 360 degrés pour obtenir la rotation réelle "naturelle"
    // Important parce que nous voulons commencer le prochain tour à partir de celui-ci
    // Utilisez le module pour obtenir la valeur de repos de 360
    const actualDeg = deg % 360;
    // Définissez la rotation réelle instantanément sans animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;


    let element = document.getElementById("result");



    if (actualDeg>=0 && actualDeg<10 ){
      document.getElementById("result").textContent="26 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=10 && actualDeg<20 ){
      document.getElementById("result").textContent="3 ROUGE";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualDeg>=20 && actualDeg<30 ){
      document.getElementById("result").textContent="35 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=30 && actualDeg<39 ){
      document.getElementById("result").textContent="12 ROUGE";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualDeg>=39 && actualDeg<49 ){
      document.getElementById("result").textContent="28 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=49 && actualDeg<59 ){
      document.getElementById("result").textContent="7 ROUGE";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualDeg>=59 && actualDeg<69 ){
      document.getElementById("result").textContent="29 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=69 && actualDeg<78 ){
      document.getElementById("result").textContent="18 ROUGE";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualDeg>=78 && actualDeg<88 ){
      document.getElementById("result").textContent="22 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=88 && actualDeg<98 ){
      document.getElementById("result").textContent="9 ROUGE";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualDeg>=98 && actualDeg<107 ){
      document.getElementById("result").textContent="31 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=107 && actualDeg<117 ){
          document.getElementById("result").textContent="14 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=117 && actualDeg<127 ){
      document.getElementById("result").textContent="20 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=127 && actualDeg<137 ){
          document.getElementById("result").textContent="1 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=137 && actualDeg<146 ){
      document.getElementById("result").textContent="33 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=146 && actualDeg<156 ){
          document.getElementById("result").textContent="16 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=156 && actualDeg<166 ){
      document.getElementById("result").textContent="24 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=166 && actualDeg<176 ){
          document.getElementById("result").textContent="5 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=176 && actualDeg<185 ){
      document.getElementById("result").textContent="10 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=185 && actualDeg<195 ){
          document.getElementById("result").textContent="23 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=195 && actualDeg<205 ){
      document.getElementById("result").textContent="8 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=205 && actualDeg<215 ){
          document.getElementById("result").textContent="30 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=215 && actualDeg<224 ){
      document.getElementById("result").textContent="11 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=224 && actualDeg<234 ){
          document.getElementById("result").textContent="36 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=234 && actualDeg<244 ){
      document.getElementById("result").textContent="13 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=244 && actualDeg<253 ){
          document.getElementById("result").textContent="21 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=253 && actualDeg<263 ){
      document.getElementById("result").textContent="6 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=263 && actualDeg<273 ){
          document.getElementById("result").textContent="34 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=273 && actualDeg<283 ){
      document.getElementById("result").textContent="17 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=283 && actualDeg<292 ){
          document.getElementById("result").textContent="25 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=292 && actualDeg<302 ){
      document.getElementById("result").textContent="2 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=302 && actualDeg<312 ){
          document.getElementById("result").textContent="21 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=312 && actualDeg<322 ){
      document.getElementById("result").textContent="4 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualDeg>=322 && actualDeg<331 ){
          document.getElementById("result").textContent="19 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=331 && actualDeg<341 ){
      document.getElementById("result").textContent="15 NOIR";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
     }
    if (actualDeg>=341 && actualDeg<350 ){
          document.getElementById("result").textContent="32 ROUGE";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
    }
    if (actualDeg>=350 && actualDeg<360 ){
      document.getElementById("result").textContent="0 VERT";
      element.classList.remove("black");
      element.classList.remove("red");
      element.classList.add("green");
    }


    console.log(actualDeg);
  }
  );
})();
