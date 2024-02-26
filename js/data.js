
import Data from '../data/Data.json' assert { type: 'json' };
import correct from '../data/correct.json' assert { type: 'json' };

const positions = [["X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9", "X10", "X11", "X12", "X13", "X14", "X15", "X16", "X17", "X18", "X19"], ["player211", "player212", "player221", "player222", "player231", "player232", "player241", "player242", "player311", "player312", "player321", "player322", "player411", "player412", "player421", "player422", "player511", "player521"], 
["incorrect211", "incorrect212", "incorrect221", "incorrect222", "incorrect231", "incorrect232", "incorrect241", "incorrect242", "incorrect311", "incorrect312", "incorrect321", "incorrect322", "incorrect411", "incorrect412", "incorrect421", "incorrect422", "incorrect511", "incorrect521"], 
["correct211", "correct212", "correct221", "correct222", "correct231", "correct232", "correct241", "correct242", "correct311", "correct312", "correct321", "correct322", "correct411", "correct412", "correct421", "correct422", "correct511", "correct521"]];

//console.log(Data[0]["X"+2]);
for (let i=0; i<Data.length; i++) {
  let numcorrect = 0;
  for (let j=1; j<19; j++) {
    if (j != 15 & j != 16) {
      if (Data[i]["X"+(j+1)] == correct[j]) {
        numcorrect++;
      }
    }
  }
  Data[i]["correct"] = numcorrect;
}

//console.log(Data.filter(element => element.correct == correct.length-1).length);

document.getElementById("perfect").children[0].innerText = "Only " + Data.filter(element => element.correct == correct.length-1).length + " perfect brackets remain!";

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


function removeChecks() {
  for (let i=0; i<positions[0].length; i++) {
    document.getElementById(positions[2][i]).style.display="none";
    document.getElementById(positions[3][i]).style.display="none";
  }
}


table.on('click', 'tbody tr', (e) => {
    let classList = e.currentTarget.classList;
 
    if (classList.contains('selected')) {
        classList.remove('selected');
        removeChecks();
    }
    else {
        table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        removeChecks();
        classList.add('selected');
        let bracket = table.rows('.selected').data()[0];
        let p = "";
        for (let i=0; i<positions[0].length; i++) {
          p = document.getElementById(positions[1][i]);
          p.children[0].textContent = bracket[positions[0][i]];
          p.children[1].children[0].src = "img/heroes/"+bracket[positions[0][i]]+".png";
          if (correct[i+1] != null) {
            if (correct[i+1] == bracket[positions[0][i]]) {
              document.getElementById(positions[3][i]).style.display="block";
            } else {
              for (let j=i; j<positions[0].length; j++) {
                if (bracket[positions[0][j]] == bracket[positions[0][i]]) {
                  document.getElementById(positions[2][j]).style.display="block";
                }
              }
            }
          }
        }
    }
});
