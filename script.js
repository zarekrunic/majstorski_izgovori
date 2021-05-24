let receniceIzgovori;
receniceIzgovori = ["Ispraviće se kad se osuši.",
                    "Bolje malo pivo nego veliko hvala.",
                    "to se kuća sleže",
                    "nemoj da se nerviraš, biće ok",
                    "dolazim krajem nedelje",
                    "to su ovi prošli zeznuli",
                    "popravićemo sledeći put",
                    "ma ne mora da se malteriše, samo lepak i stiropor",
                    "nije do nas, loše su izlili košuljicu",
                    "kada se okreči u belo, neće se videti",
                    "čini ti se, oće oko da vara",
                    "imam ja čoveka za to, vrhunski majstor"];

function izgovor() {
  let rand = Math.floor(Math.random() * 10);
  
  let content = receniceIzgovori[rand];

  document.getElementById('izgovor').innerHTML = content;
};
izgovor();
