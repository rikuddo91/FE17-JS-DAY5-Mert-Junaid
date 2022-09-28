class Person {
    name;
    job;/* brand */
    heigth;/* model */
    persType; /* type */
    eyesColor;/* color */
    hobbies;/*weight  */
    age;

    constructor (name, job, heigth, persType, eyesColor, hobbies, age) {
        this.name=name;
        this.job=job;
        this.heigth=heigth;
        this.persType=persType;
        this.eyesColor=eyesColor;
        this.hobbies=hobbies;
        this.age=age;
    }

    introduce () {
        return      `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.age} years old.</p>
                            <p class="card-text">I work as ${this.job}. My personality is ${this.persType} and in my free time I like to ${this.hobbies}.</p>
                            
                        </div>
                    </div>`
}
}

//Person: Extend with a child class called Profession, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: job position.

class Profession extends Person {
    languages;

    constructor (name, job, heigth, persType, eyesColor, hobbies, age, languages) {
        super (name, job, heigth, persType, eyesColor, hobbies, age);
        this.languages=languages;
    }

    introduce() {
        return      `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.age} years old.</p>
                            <p class="card-text">I work as ${this.job}. My personality is ${this.persType} and in my free time I like to ${this.hobbies}.</p>
                            <p class="card-text text-warning">${this.languages}</p>
                            
                        </div>
                    </div>`
    }
}

let profession1 = new Profession ("John", "manager", 1.84, "cooperative", "brown", "run", 34, "I am fluent in German and Chinese.");
let profession2 = new Profession ("Joe", "writer", 1.70, "cooperative", "blue", "read", 30, "I only speak my mother language.");
let profession3 = new Profession ("Max", "singer", 1.65, "cooperative", "green", "sing", 25, "I can speak a little French.");

let professionArray = [profession1, profession2, profession3];

for (item of professionArray) {
    document.querySelector(".person").innerHTML+=item.introduce();
}

///////

class Animal {
    name;
    sounds;/* brand */
    heigth;/* model */
    type;
    color;
    weight;
    age;

    constructor (name, sounds, heigth, type, color, weight, age) {
        this.name=name;
        this.sounds=sounds;
        this.heigth=heigth;
        this.type=type;
        this.color=color;
        this.weight=weight;
        this.age=age;
    }

    sound () {
        return  `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">I am a ${this.type} and my color is ${this.color}. All day long I do ${this.sounds}.</p>
                    </div>
                </div>`
       
    }
}

//Animal: Extend with a child class called Fish, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: type of water it inhabits.
 class Fish extends Animal {
    typeOfWater;
    length;

    constructor (name, sounds, heigth, type, color, weight, age, typeOfWater, length) {
        super(name, sounds, heigth, type, color, weight, age);
        this.typeOfWater=typeOfWater;
        this.length=length;
    }

    sound () {
        return  `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text text-success">I am ${this.length} and my color is ${this.color}. I enjoy living in ${this.typeOfWater}.</p>
                    </div>
                </div>`
       
    }
}
let fish1 = new Fish ("Gold", " ", "so small", "Goldfish ", "orange", " ", " ", "freshwater", "10-16 inches")
let fish2 = new Fish ("Silver", " ", "so small" , "Neon Tetras", "red and green", " ", " ", "freshwater", "1 and a half inches")
let fish3 = new Fish ("Bronze", " ", "so small" , "Betta Fish", "red", " ",      " ", "freshwater", "3-4 inches")

let fishArray = [fish1, fish2, fish3];

for (item of fishArray) {
    document.querySelector(".animal").innerHTML+=item.sound();
}
    

////
class Car {
    name;
    brand;
    model;
    type;
    color;
    weight;
    age;

    constructor (name, brand, model, type, color, weight, age) {
        this.name=name;
        this.brand=brand;
        this.model=model;
        this.type=type;
        this.color=color;
        this.weight=weight;
        this.age=age;
    }

    info () {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">I am a ${this.name} car. My model is ${this.model}.</p>
                    </div>
                </div>`
        
    }
}

//Car: Extend with a child class called Motorbike, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: number of wheels.
class Motorbike extends Car {
    wheels;

    constructor (name, brand, model, type, color, weight, age, wheels) {
        super(name, brand, model, type, color, weight, age);
        this.wheels=wheels;
    }

    info() {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text text-danger">I am a ${this.name}. My model is ${this.model} and I have ${this.wheels} wheels.</p>
                    </div>
                </div>`
    }
}
let motor1 = new Motorbike ("Trials Bike", " ", 2010, " ", "white", " ", 11, 2)
let motor2 = new Motorbike ("Trail Bike", " ", 2020 , " ", "red", " ", 1, 2)
let motor3 = new Motorbike ("Trial", " ", 2013 , " ", "black", " ", 8, 3)

let motorArray = [motor1, motor2, motor3];

for (item of motorArray) {
    document.querySelector(".car").innerHTML+=item.info();
}