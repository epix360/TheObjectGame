var health = 100;
var name = "Joe";
var hits = 0;

var slap = function () {
    health -= 1;
    hits += 1;
    document.getElementById("reaction").innerText = "Hey!";
    if (health <=50) {
        document.getElementById("reaction").innerText = "Ouch!";
    }
    update();
}

var punch = function () {
    health -= 5;
    hits += 1;
    document.getElementById("reaction").innerText = "Rude!";
    if (health <=50) {
        document.getElementById("reaction").innerText = "Oof!";
    }
    update();
}

var kick = function () {
    health -= 10;
    hits += 1;
    document.getElementById("reaction").innerText = "What was that for?";
    if (health <=50) {
        document.getElementById("reaction").innerText = "Ugh!";
    }
    update();
}

var update = function () {
document.getElementById("health").innerText = health;
document.getElementById("hits").innerText = hits;
document.getElementById("name").innerText = name;
    if (health <= 50) {
   document.getElementById("stick-fig").src = ("stick-fig-bad.jpg");
   document.getElementById("name").innerText = "Bad Joe";
}
    if (health <= 0) {
   document.getElementById("stick-fig").src = ("stick-fig-dead.jpg");
   document.getElementById("name").innerText = "Dead Joe";
   document.getElementById("reaction").innerText = "Well, he's dead now. What do you have to say for yourself?";
}
}

var reset = function () {
    health = 100;
    hits = 0;
    document.getElementById("stick-fig").src = ("stick-fig.jpg");
    document.getElementById("name").innerText = "Joe";
    document.getElementById("reaction").innerText = "";
    update();
}

update();
