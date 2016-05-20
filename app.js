var Player = function(name, health, hits, items) {
    this.name = 'Joe';
    this.health = 100;
    this.hits = 0;
    this.items = {
        shield: null,
        helmet: null,
        armor: null
    };
};

Player.prototype.hit = function(damage) {

    var playerItems = Object.getOwnPropertyNames(this.items)
    for (var i = 0; i < playerItems.length; i++) {
        var key = playerItems[i];
        var item = this.items[key];

        if (item) {
            damage -= playerItems.resistance;
            damage = damage < 0 ? 0 : damage;
        };
    };

    this.health -= damage;
    this.health = this.health < 0 ? 0 : this.health;
    document.getElementById("health").innerText = player.health;
    document.getElementById("progress-bar").style.width = player.health + '%';
    var reaction1 = ["Hey!", "What was that for?", "Rude!", "Grr...", "You better watch it!"]
    var rand1 = reaction1[Math.floor(Math.random() * 5)];
    var reaction2 = ["Ouch!", "Ugh!", "Oof!", "Oy!", "Argh!"]
    var rand2 = reaction2[Math.floor(Math.random() * 5)];
    document.getElementById("reaction").innerText = rand1;
    if (this.health <= 50) {
        document.getElementById("stick-fig").src = ("stick-fig-bad.jpg");
        document.getElementById("name").innerText = "Bad Joe";
        document.getElementById("reaction").innerText = rand2;
    }
    if (this.health <= 0) {
        document.getElementById("player-panel").classList.add("panel-danger");
        document.getElementById("stick-fig").src = ("stick-fig-dead.jpg");
        document.getElementById("name").innerText = "Dead Joe";
        document.getElementById("reaction").innerText = "Well, he's dead now. What do you have to say for yourself?";
        var mq = window.matchMedia( "(max-width: 500px)" );
        if (mq.matches) {
        document.getElementById("reaction").style.fontSize = "2em";
        }
    }
    this.hits += 1;
    document.getElementById("hits").innerText = player.hits;

};

var Item = function(name, resistance) {
    this.name = name;
    this.resistance = resistance;
};

var player = new Player();

var availableItems = {
    shield: new Item('shield', 1),
    helmet: new Item('helmet', 2),
    armor: new Item('armor', 5)
};

//Items section incomplete. Game breaks with current code in there...
/*
	var Item = function (name, resistance, description) {
		this.name = name;
		this.resistance = resistance;
        this.description = description;
        this.draw = function() {
            
        }
	}
    
	var items = {
		shield:new Item("Shield", 0.5, "Thou mighty shield defendest thee well."),
		helment:new Item('Helmet', 2, "Thy head shouldest be well protected by yonder shield.")),
		armor:new Item('Armor', 5, "Shining armor doth guard thy bowels whilst making thee look swell.")
	}
*/

var update = function() {
    document.getElementById("health").innerText = player.health;
    document.getElementById("hits").innerText = player.hits;
    document.getElementById("name").innerText = player.name;
    document.getElementById("item").innerText = player.item;


};

document.getElementById('health').innerHTML = health;

document.getElementById('slapButton').addEventListener('click', function() {
    player.hit(1);
});

document.getElementById('punchButton').addEventListener('click', function() {
    player.hit(5);
});

document.getElementById('kickButton').addEventListener('click', function() {
    player.hit(10);
});

document.getElementById('itemButton').addEventListener('click', function() {

    var possibleItems = Object.getOwnPropertyNames(availableItems);
    var itemIndex = Math.floor(Math.random() * (possibleItems.length - 1));
    var itemName = possibleItems[itemIndex];

    player.items[itemName] = availableItems[itemName];
});

document.getElementById('resetButton').addEventListener('click', function() {
    player.health = 100;
    document.getElementById('health').innerHTML = player.health;
    player.hits = 0;
    document.getElementById('hits').innerHTML = player.hits;
    document.getElementById("player-panel").classList.remove("panel-danger");
    document.getElementById("stick-fig").src = ("stick-fig.jpg");
    document.getElementById("name").innerText = player.name;
    document.getElementById("reaction").innerText = "";
    document.getElementById("progress-bar").style.width = player.health + '%';
});

update();