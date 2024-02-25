
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Feb 25, 2024 17:00:00 UTC').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
         document.getElementById('countdown').style.display = "none";
         document.getElementById('live').style.display = "block";
         document.getElementById('next').style.display = "none";
         document.getElementById('submitbutton').style.display = "none";
        } else {
          if (document.getElementById('next').style.display == "none") {
            document.getElementById('next').style.display = "inline-block";
          }
        }

    }, second)
    
    
    
let sets = [4, 2, 2];
let nonull = (element) => element == null | element == "null";

const gridConfig = [
  90,
  150,
  213,
  273,
  337,
  397,
  460,
  520,
  584,
  644,
  707,
  767,
  831,
  891,
  954,
  1014,
];

let Sets = [8, 4, 2, 2, 2];
for (let j = 1; j <= 4; j++) {
  for (let i = 1; i <= Sets[j-1]; i++) {
    hero = document.querySelector(".heroWrapper[data-round=" + CSS.escape(j) + "][data-set=" + CSS.escape(i) + "][data-p=" + CSS.escape(1) + "]");
    hero.style.transform = "translate(" + ((j-1)*294 + 40.5) + "px, " + (gridConfig[(2*i-1)*2**(j-1)-1]+7) + "px)";
    
      hero = document.querySelector(".heroWrapper[data-round=" + CSS.escape(j) + "][data-set=" + CSS.escape(i) + "][data-p=" + CSS.escape(2) + "]");
    hero.style.transform = "translate(" + ((j-1)*294 + 40.5) + "px, " + (gridConfig[(2*i-1)*2**(j-1)]+3.5) + "px)";
    
    
        box = document.querySelector(".boxbg[data-round=" + CSS.escape(j) + "][data-set=" + CSS.escape(i) + "][data-p=" + CSS.escape(1) + "]");
    box.style.transform = "translate(" + ((j-1)*294 + 40.5) + "px, " + (gridConfig[(2*i-1)*2**(j-1)-1]+7) + "px)";
    
      box = document.querySelector(".boxbg[data-round=" + CSS.escape(j) + "][data-set=" + CSS.escape(i) + "][data-p=" + CSS.escape(2) + "]");
    box.style.transform = "translate(" + ((j-1)*294 + 40.5) + "px, " + (gridConfig[(2*i-1)*2**(j-1)]+3.5) + "px)";
    
    bar = document.querySelector(".hbar[data-round=" + CSS.escape(j) + "][data-set=" + CSS.escape(i) + "]");
    if (bar != null) {
          bar.style.transform = "translate(" + (((j-1)*270 + 8.5) + 6*(j-1.5)**2) + "px, " + (gridConfig[(2*i-1)*2**(j-1)]-7) + "px)";
    bar.style.width = ((j-1)*12 + 270) + "px";
    }

    
        bar = document.querySelector(".vbar[data-round=" + CSS.escape(j) + "][data-set=" + CSS.escape(i) + "]");
        if (bar != null) {
          bar.style.transform = "translate(" + (((j-1)*270 + 8.5) + 6*(j-1.5)**2) + "px, " + (gridConfig[2**j*(i-1) + 2**(j-2)]-7) + "px)";
          bar.style.height = (2**(j-2)*123 + 6) + "px";
        }
  }
}

    // 3rd place match
    hero = document.querySelector(".heroWrapper[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(1) + "]");
    hero.style.transform = "translate(" + ((4-1)*294 + 40.5) + "px, " + (gridConfig[11]+7) + "px)";
    hero = document.querySelector(".heroWrapper[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(2) + "]");
    hero.style.transform = "translate(" + ((4-1)*294 + 40.5) + "px, " + (gridConfig[12]+3.5) + "px)";
        box = document.querySelector(".boxbg[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(1) + "]");
    box.style.transform = "translate(" + ((4-1)*294 + 40.5) + "px, " + (gridConfig[11]+7) + "px)";
    box = document.querySelector(".boxbg[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(2) + "]");
    box.style.transform = "translate(" + ((4-1)*294 + 40.5) + "px, " + (gridConfig[12]+3.5) + "px)";
    
    // champion and 3rd place finisher
    hero = document.querySelector(".heroWrapper[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(1) + "][data-p=" + CSS.escape(1) + "]");
    hero.style.transform = "translate(" + ((5-1)*294 + 40.5) + "px, " + ((gridConfig[7]+gridConfig[8])/2+7) + "px)";
    hero = document.querySelector(".heroWrapper[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(1) + "]");
    hero.style.transform = "translate(" + ((5-1)*294 + 40.5) + "px, " + ((gridConfig[11]+gridConfig[12])/2+3.5) + "px)";
        box = document.querySelector(".boxbg[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(1) + "][data-p=" + CSS.escape(1) + "]");
    box.style.transform = "translate(" + ((5-1)*294 + 40.5) + "px, " + ((gridConfig[7]+gridConfig[8])/2+7) + "px)";
    box = document.querySelector(".boxbg[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(1) + "]");
    box.style.transform = "translate(" + ((5-1)*294 + 40.5) + "px, " + ((gridConfig[11]+gridConfig[12])/2+3.5) + "px)";

function reset() {
      for (let i = 2; i <= 4; i++) {
      for (let j = 1; j <= sets[i-2]; j++) {
        resetPick(document.querySelector(".heroWrapper[data-round=" + CSS.escape(i) + "][data-set=" + CSS.escape(j) + "][data-p=" + CSS.escape(1) + "]"));
        resetPick(document.querySelector(".heroWrapper[data-round=" + CSS.escape(i) + "][data-set=" + CSS.escape(j) + "][data-p=" + CSS.escape(2) + "]"));
      }
    }
    resetPick(document.querySelector(".heroWrapper[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(1) + "][data-p=" + CSS.escape(1) + "]"));
    resetPick(document.querySelector(".heroWrapper[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(1) + "]"));
}

function resetPick(x) {
  x.setAttribute("data-player", null);
  x.style.display = "none";
  x.children[0].textContent = "";
  x.children[1].children[0].src = "";
}

function g(x) {
  
  player = x.getAttribute("data-player");
  round = parseInt(x.getAttribute("data-round"))+1;
  if (round == 5) {
      match = parseInt(x.getAttribute("data-set"));
      p = 1;
  } else {
      match = Math.round(parseInt(x.getAttribute("data-set"))/2);
      p = -1*(parseInt(x.getAttribute("data-set")) % 2) + 2;
  }

  next = document.querySelector(".heroWrapper[data-round=" + CSS.escape(round) + "][data-set=" + CSS.escape(match) + "][data-p=" + CSS.escape(p) + "]");
  
  prior = next;
  if (prior.getAttribute("data-player") != null) {
    if (prior.getAttribute("data-player") != player) {
      oldplayer = prior.getAttribute("data-player");
      for (let i = round+1; i <= 3; i++) {
        match2 = Math.round(parseInt(prior.getAttribute("data-set"))/2);
        p2 = -1*(parseInt(prior.getAttribute("data-set")) % 2) + 2;
        prior = document.querySelector(".heroWrapper[data-round=" + CSS.escape(i) + "][data-set=" + CSS.escape(match2) + "][data-p=" + CSS.escape(p2) + "]");
        if (prior.getAttribute("data-player") == oldplayer) {
          prior.setAttribute("data-player", null);
          prior.style.display = "none";
          prior.children[0].textContent = "";
          prior.children[1].children[0].src = "";
        }
      }
      if (round == 5) {
        p2 = x.getAttribute("data-p");
      } else {
        p2 = -1*(parseInt(prior.getAttribute("data-set")) % 2) + 2;
      }
      
      for (let i = 1; i <= 2; i++) {
        // p2 = -1*(i % 2) + 2;
        prior = document.querySelector(".heroWrapper[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape(i) + "][data-p=" + CSS.escape(p2) + "]");
        if (prior.getAttribute("data-player") == oldplayer) {
          prior.setAttribute("data-player", null);
          prior.style.display = "none";
          prior.children[0].textContent = "";
          prior.children[1].children[0].src = "";
        }
      }
      
      for (let i = 1; i <= 2; i++) {
        prior = document.querySelector(".heroWrapper[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(i) + "][data-p=" + CSS.escape(1) + "]");
        if (prior.getAttribute("data-player") == oldplayer) {
          prior.setAttribute("data-player", null);
          prior.style.display = "none";
          prior.children[0].textContent = "";
          prior.children[1].children[0].src = "";
        }
      }
      
      
    }
  }
  
  next.setAttribute("data-player", player);
  next.style.display = "block";
  //console.log(next.children);
  next.children[0].textContent = player;
  next.children[1].children[0].src = x.children[1].children[0].src;
  
  
  finals = document.querySelector(".heroWrapper[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape(1) + "][data-p=" + CSS.escape(1) + "]");
  
  
  
  if (round == 4) {
    if (x.getAttribute("data-p") == "1") {
      py = "2";
    } else {
      py = "1";
    }
    y = document.querySelector(".heroWrapper[data-round=" + CSS.escape(x.getAttribute("data-round")) + "][data-set=" + CSS.escape(x.getAttribute("data-set")) + "][data-p=" + CSS.escape(py) + "]");
    
    if (y.getAttribute("data-player") != null) {
    
      next = document.querySelector(".heroWrapper[data-round=" + CSS.escape(round) + "][data-set=" + CSS.escape(match+1) + "][data-p=" + CSS.escape(p) + "]");
      next.setAttribute("data-player", y.getAttribute("data-player"));
      next.style.display = "block";
      next.children[0].textContent = y.getAttribute("data-player");
      next.children[1].children[0].src = y.children[1].children[0].src;
    }
  }
  
  
  if (round == 3 & false) {
      match2 = Math.round(match/2);
      p2 = -1*(match % 2) + 2;
      y = document.querySelector(".heroWrapper[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape(match2) + "][data-p=" + CSS.escape(p2) + "]");
  
    if (y.getAttribute("data-player") != null) {
      next = document.querySelector(".heroWrapper[data-round=" + CSS.escape(4) + "][data-set=" + CSS.escape((match2*-1)+3) + "][data-p=" + CSS.escape(p2) + "]");
      next.setAttribute("data-player", x.getAttribute("data-player"));
      next.style.display = "block";
      next.children[0].textContent = x.getAttribute("data-player");
      next.children[1].children[0].src = x.children[1].children[0].src;
    }
  }
  
}

const collectPicks = () => {
  picks = [];
for (let i = 2; i <= 4; i++) {
  for (let j = 1; j <= sets[i-2]; j++) {
    picks.push(document.querySelector(".heroWrapper[data-round=" + CSS.escape(i) + "][data-set=" + CSS.escape(j) + "][data-p=" + CSS.escape(1) + "]").getAttribute("data-player"));
    picks.push(document.querySelector(".heroWrapper[data-round=" + CSS.escape(i) + "][data-set=" + CSS.escape(j) + "][data-p=" + CSS.escape(2) + "]").getAttribute("data-player"));
  }
}
picks.push(document.querySelector(".heroWrapper[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(1) + "][data-p=" + CSS.escape(1) + "]").getAttribute("data-player"));
picks.push(document.querySelector(".heroWrapper[data-round=" + CSS.escape(5) + "][data-set=" + CSS.escape(2) + "][data-p=" + CSS.escape(1) + "]").getAttribute("data-player"));
return picks;
}

const validateBracket = () => {
        picks = collectPicks();

    if (picks.some(nonull)) {
        alert("Please choose the results of all sets!");
        return false;
    } else {
        return true;
    }
};

const step1 = () => {
  reset();
  $('#step-2').addClass('hidden');
  $('#step-3').addClass('hidden');
  $('#step-4').addClass('hidden');
  $('#step-1').removeClass('hidden');
};

const step2 = () => {
  //reset();
  $('#step-1').addClass('hidden');
  $('#step-3').addClass('hidden');
  $('#step-4').addClass('hidden');
  $('#step-2').removeClass('hidden');
};

const step3 = () => {
    if (validateBracket()) {
        $('#step-1').addClass('hidden');
        $('#step-2').addClass('hidden');
        $('#step-3').removeClass('hidden');
    }
};

const step5 = () => {
    if (validateBracket()) {
        $('#step-1').addClass('hidden');
        $('#step-2').addClass('hidden');
        $('#step-3').addClass('hidden');
        $('#step-5').removeClass('hidden');
    }
};

async function postData(data = {}) {
    // Default options are marked with *
    const response = await fetch('https://hc5.aoe2.se/bracket/guess.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

const submit = () => {
    const picks = collectPicks();

    const username = $('#inputUsername').val();

    if (username === '') {
        alert('Please provide a username!');
        return;
    }

    postData({username, guess: picks})
        .then((data) => {
            if (data.success) {
                $('#response').html(data.message);
                step5();
            } else {
                alert(data.message);
            }
        });
};
        