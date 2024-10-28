// Function constructor
function Person(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.elements = new UIElement(this.name);
}

function UIElement(name) {
    this.spanDom = document.querySelector(`#${name}-health span`);
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.makeHealthkBtn = document.querySelector(`#${name}-make-health`);
    this.notAlive = document.querySelector(`#${name}-not-alive`);
}

Person.prototype.attack = function(opponent) {
    if (opponent.health > 0) {
        opponent.health -= (this.strength);
    opponent.elements.spanDom.style.width = `${opponent.health}%`;
    } else {
        opponent.elements.attackBtn.remove();
        opponent.elements.makeHealthkBtn.remove();
        opponent.elements.notAlive.innerHTML = `${opponent.name} died and ${this.name} won!`;
    }
}

Person.prototype.makeHealth = function() {
    if (this.health < 100) {
        this.health += 10;
        this.elements.spanDom.style.width = `${this.health}%`;
    }
    if (this.health > 100) {
        this.health = 100;
        this.elements.spanDom.style.width = `${this.health}%`;
    }
}

Person.prototype.status = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Health: ${this.health}`);
}

let Narotto = new Person('Narotto', 10, 100);
let Sasakii = new Person('Sasakii', 5, 100);
console.log(Narotto);
console.log(Sasakii);

// Narotto
Narotto.elements.attackBtn.addEventListener('click', function() {
    Narotto.attack(Sasakii);
    Sasakii.status();
});

Narotto.elements.makeHealthkBtn.addEventListener('click', function() {
    Narotto.makeHealth();
    Narotto.status();
});

// Sasakii
Sasakii.elements.attackBtn.addEventListener('click', function() {
    Sasakii.attack(Narotto);
    Sasakii.status();
});

Sasakii.elements.makeHealthkBtn.addEventListener('click', function() {
    Sasakii.makeHealth();
    Sasakii.status();
});

