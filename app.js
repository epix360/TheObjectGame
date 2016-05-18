var health = 100;
var name = "Bad Joe";
var hits = 0;

var slap = function () {
    health -= 1;
    hits += 1;
    update();
}

var punch = function () {
    health -= 5;
    hits += 1;
    update();
}

var kick = function () {
    health -= 10;
    hits += 1;
    update();
}

var update = function () {
document.getElementById("health").innerText = health;
document.getElementById("hits").innerText = hits;
document.getElementById("name").innerText = name;
    if (health <= 0) {
   document.getElementById("stick-fig").src = ("stick-fig-dead.jpg");
}
}


update();
