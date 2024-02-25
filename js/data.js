
import Data from '../data/Data.json' assert { type: 'json' };
import correct from '../data/correct.json' assert { type: 'json' };


//console.log(Data[0]["X"+2]);
for (let i=0; i<Data.length; i++) {
  let numcorrect = 0;
  for (let j=1; j<17; j++) {
    if (Data[i]["X"+(j+1)] == correct[0][j]) {
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
    columns: [
      { title: 'Username', data: 'X1' },
      { title: 'Correct', data: 'correct' }
      ],
    autoWidth: true
});

table.on('click', 'tbody tr', (e) => {
    let classList = e.currentTarget.classList;
 
    if (classList.contains('selected')) {
        classList.remove('selected');
    }
    else {
        table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        classList.add('selected');
    }
});
