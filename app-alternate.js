//TOM'S VERSION

(function () {
    var health = 100;
    
    document.getElementById('health').innerHTML = health;
    
    document.getElementById('slapButton').addEventListener('click', function() {
        health--;
        document.getElementById('health').innerHTML = health;
    });
    
    document.getElementById('punchButton').addEventListener('click', function() {
        health-=5;
        document.getElementById('health').innerHTML = health;
    });
    
    document.getElementById('kickButton').addEventListener('click', function() {
        health-=10;
        document.getElementById('health').innerHTML = health;
    });
})();