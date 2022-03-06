class Weapon{
    constructor(name,image){
        this.name = name
        this.image = image
    }
}

class Skill{
    constructor(name,image){
        this.name = name
        this.image = image
    }
}

weaponList = [];
skillList = [];

function init(){
    weaponList.push(new Weapon("Twin Blade","image"));
    weaponList.push(new Weapon("Spy Dagger","image"));
    weaponList.push(new Weapon("Storm Bat","image"));
    weaponList.push(new Weapon("Counter Sword","image"));
    weaponList.push(new Weapon("Plasma Sword","image"));
    weaponList.push(new Weapon("Spark Rifle","image"));
    weaponList.push(new Weapon("Air Gun","image"));
    weaponList.push(new Weapon("Burst Shotgun","image"));
    weaponList.push(new Weapon("Handgun","image"));
    weaponList.push(new Weapon("Smash Rifle","image"));
    weaponList.push(new Weapon("Semi-Rifle","image"));
    weaponList.push(new Weapon("Revolver","image"));
    weaponList.push(new Weapon("Sub Machine Gun","image"));
    weaponList.push(new Weapon("Gauss Rifle","image"));
    weaponList.push(new Weapon("Heavy Machine Gun","image"));
    weaponList.push(new Weapon("Cannonade","image"));
    weaponList.push(new Weapon("Rail Gun","image"));
    weaponList.push(new Weapon("Sentry","image"));
    weaponList.push(new Weapon("Bomb","image"));
    weaponList.push(new Weapon("Mind Shock","image"));
    weaponList.push(new Weapon("Mind Energy","image"));
    weaponList.push(new Weapon("Sharp Shooter","image"));
    weaponList.push(new Weapon("Katana","image"));
    weaponList.push(new Weapon("Mine Gun","image"));
    weaponList.push(new Weapon("Breaker","image"));
    weaponList.push(new Weapon("Assault Rifle","image"));
    weaponList.push(new Weapon("Turret","image"));
    weaponList.push(new Weapon("Rescue Gun","image"));

    skillList.push(new Skill("Anchoring","image"));
    skillList.push(new Skill("Bind","image"));
    skillList.push(new Skill("Block","image"));
    skillList.push(new Skill("Flying","image"));
    skillList.push(new Skill("Invisible","image"));
    skillList.push(new Skill("Metallic","image"));
    skillList.push(new Skill("Shield","image"));
    skillList.push(new Skill("Dual Mastery","image"));
    skillList.push(new Skill("HP Mastery","image"));
    skillList.push(new Skill("SP Mastery","image"));
}

function printer(){
    init();
    for (i = 0; i <3;i++){
        index = Math.floor(Math.random()*weaponList.length);
        selected_wep = weaponList[index-1].name;
        if(weaponList[index-1].name == "Bomb"){
            bombList = ["Earth Bomb","Air Bomb"]
            selected_wep = bombList[Math.floor(Math.random()*2)]
        }
        if(weaponList[index-1].name == "Sentry"){
            sentryList = ["Sentry Gun","Sentry Nell"]
            selected_wep = sentryList[Math.floor(Math.random()*2)]
        }
        console.log(i+1 + " "+selected_wep);
        weaponList.pop(index-1);
    }    
    console.log("Skill " + skillList[Math.floor(Math.random()*skillList.length-1)].name)
    
}

printer()
//Weapon 1 Sentry Nell
//Weapon 2 Breaker
//Weapon 3 Mine Gun
//Skill HP Mastery
