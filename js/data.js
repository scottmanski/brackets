
import Data from '../data/Data.json' assert { type: 'json' };
import correct from '../data/correct.json' assert { type: 'json' };

const positions = [["X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9", "X10", "X11", "X12", "X13", "X14", "X15", "X16", "X17"], ["player211", "player212", "player221", "player222", "player231", "player232", "player241", "player242", "player311", "player312", "player321", "player322", "player411", "player412", "player511", "player521"]];

//console.log(Data[0]["X"+2]);
for (let i=0; i<Data.length; i++) {
  let numcorrect = 0;
  for (let j=1; j<17; j++) {
    if (Data[i]["X"+(j+1)] == correct[j]) {
      numcorrect++;
    }
  }
  Data[i]["correct"] = numcorrect;
}

//console.log(Data);

var dt = Data;


function updateData() {
  //console.log("updating data");
  dt.clear();
  var dt_new = Data; //Data.filter(element => element.Player_Civ == "Franks")
  var civ1 = document.querySelector('[class="select2-selection select2-selection--single"]').children[0].title;
  var civ2 = document.querySelectorAll('[class="select2-selection select2-selection--single"]')[1].children[0].title;
  if (document.querySelector("#qualifier").getAttribute("data-active") == "false") {
    dt_new = dt_new.filter(element => element.Stage != "Qualifier");
  }
  if (document.querySelector("#mainevent").getAttribute("data-active") == "false") {
    dt_new = dt_new.filter(element => element.Stage != "Main Event");
  }
  if (civ1 != "Any") {
    if (civ2 == "Any") {
      dt_new = dt_new.filter(element => element.Player_Civ == civ1 | element.Opp_Civ == civ1);
    } else {
      dt_new = dt_new.filter(element => (element.Player_Civ == civ1 & element.Opp_Civ == civ2) | (element.Player_Civ == civ2 & element.Opp_Civ == civ1));
    }
  }
  //console.log(dt_new);
  dt.rows.add(dt_new);
  dt.draw();
}


//new DataTable('#example', {

const table = $('#submissions').DataTable( {
    data: dt,
    order: [[1, 'desc']],
    columns: [
      { title: 'Username', data: 'X1' },
      { title: 'Correct', data: 'correct' }
      ]
});

table.on('click', 'tbody tr', (e) => {
    let classList = e.currentTarget.classList;
 
    if (classList.contains('selected')) {
        classList.remove('selected');
    }
    else {
        table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        classList.add('selected');
        let bracket = table.rows('.selected').data()[0];
        let p = "";
        for (let i=0; i<positions[0].length; i++) {
          p = document.getElementById(positions[1][i]);
          p.children[0].textContent = bracket[positions[0][i]];
          p.children[1].children[0].src = "img/heroes/"+bracket[positions[0][i]]+".png";
          if (correct[i+1] != null & correct[i+1] != bracket[positions[0][i]]) {
            p.classList.add("incorrect");
          }
        }
        p = document.getElementById("player421");
        if (bracket["X10"] == bracket["X14"]) {
          p.children[0].textContent = bracket["X11"];
          p.children[1].children[0].src = "img/heroes/"+bracket["X11"]+".png";
        } else {
          p.children[0].textContent = bracket["X10"];
          p.children[1].children[0].src = "img/heroes/"+bracket["X10"]+".png";
        }
        
        p = document.getElementById("player422");
        if (bracket["X12"] == bracket["X15"]) {
          p.children[0].textContent = bracket["X13"];
          p.children[1].children[0].src = "img/heroes/"+bracket["X13"]+".png";
        } else {
          p.children[0].textContent = bracket["X12"];
          p.children[1].children[0].src = "img/heroes/"+bracket["X12"]+".png";
        }
    }
});
