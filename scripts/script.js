class Weapon {
    constructor(name, imagePath, isSword) {
        this.name = name;
        this.imagePath = imagePath;
        this.isSword = isSword;
    }
}

class Skill {
    constructor(name, imagePath, isSwordUsable) {
        this.name = name;
        this.imagePath = imagePath;
        this.isSwordUsable = isSwordUsable;
    }
}

var weaponList = [];
var skillList = [];

function init() {
    weaponList = []
    skillList = []

    weaponList.push(new Weapon("Air Gun", "images/Weapons/Airgun.png", false));
    weaponList.push(new Weapon("Assault Rifle", "images/Weapons/AssaultRifle.png", false));
    weaponList.push(new Weapon("Bomb", "images/Weapons/Bomb.png", false));
    weaponList.push(new Weapon("Breaker", "images/Weapons/Breaker.png", true));
    weaponList.push(new Weapon("Burst Shotgun", "images/Weapons/BurstShotgun.png", false));
    weaponList.push(new Weapon("Cannonade", "images/Weapons/Cannonade.png", false));
    weaponList.push(new Weapon("Counter Sword", "images/Weapons/CounterSword.png", true));
    weaponList.push(new Weapon("Exo Sctythe", "images/Weapons/ExoSctythe.png", true));
    weaponList.push(new Weapon("Gauss Rifle", "images/Weapons/GaussRifle.png", false));
    weaponList.push(new Weapon("Handgun", "images/Weapons/HandGun.png", false));
    weaponList.push(new Weapon("Heavy Machine Gun", "images/Weapons/HeavyMachineGun.png", false));
    weaponList.push(new Weapon("Katana", "images/Weapons/Katana.png", true));
    weaponList.push(new Weapon("Light Machine Gun", "images/Weapons/LightMachineGun.png", false));
    weaponList.push(new Weapon("Metallic Fist", "images/Weapons/MetallicFist.png", true));
    weaponList.push(new Weapon("Mind Energy", "images/Weapons/MindEnergy.png", false));
    weaponList.push(new Weapon("Mind Shock", "images/Weapons/MindShock.png", false));
    weaponList.push(new Weapon("Mine Gun", "images/Weapons/MineGun.png", false));
    weaponList.push(new Weapon("Plasma Sword", "images/Weapons/PlasmaSword.png", true));
    weaponList.push(new Weapon("Rail Gun", "images/Weapons/RailGun.png", false));
    weaponList.push(new Weapon("Rescue Gun", "images/Weapons/RescueGun.png", false));
    weaponList.push(new Weapon("Revolver", "images/Weapons/Revolver.png", false));
    weaponList.push(new Weapon("Semi-Rifle", "images/Weapons/SemiRifle.png", false));
    weaponList.push(new Weapon("Sentry Gun", "images/Weapons/SentryGun.png", false));
    weaponList.push(new Weapon("Sentry Nell", "images/Weapons/SentryNell.png", false));
    weaponList.push(new Weapon("Sharp Shooter", "images/Weapons/SharpShooter.png", false));
    weaponList.push(new Weapon("Sigma Blade", "images/Weapons/SigmaBlade.png", true));
    weaponList.push(new Weapon("Smash Rifle", "images/Weapons/SmashRifle.png", false));
    weaponList.push(new Weapon("Spark Rifle", "images/Weapons/SparkRifle.png", false));
    weaponList.push(new Weapon("Spy Dagger", "images/Weapons/SpyDagger.png", true));
    weaponList.push(new Weapon("Storm Bat", "images/Weapons/StormBat.png", true));
    weaponList.push(new Weapon("Sub Machine Gun", "images/Weapons/SubMachineGun.png", false));
    weaponList.push(new Weapon("Turret", "images/Weapons/Turret.png", false));
    weaponList.push(new Weapon("Twin Blade", "images/Weapons/TwinSword.png", true));

    skillList.push(new Skill("Anchoring", "images/Skills/Anchoring.png", false));
    skillList.push(new Skill("Bind", "images/Skills/Bind.png", false));
    skillList.push(new Skill("Block", "images/Skills/Block.png", false));
    skillList.push(new Skill("Dual Mastery", "images/Skills/DualMastery.png", true));
    skillList.push(new Skill("Flying", "images/Skills/Flying.png", false));
    skillList.push(new Skill("HP Mastery", "images/Skills/HpMastery.png", true));
    skillList.push(new Skill("Invisible", "images/Skills/Invisible.png", false));
    skillList.push(new Skill("Metallic", "images/Skills/Metallic.png", false));
    skillList.push(new Skill("Shield", "images/Skills/Shield.png", false));
    skillList.push(new Skill("SP Mastery", "images/Skills/SpMastery.png", true));
}

function initOS() {
    weaponList = []
    skillList = []
    weaponList.push(new Weapon("Breaker", "images/Weapons/Breaker.png", true));
    weaponList.push(new Weapon("Counter Sword", "images/Weapons/CounterSword.png", true));
    weaponList.push(new Weapon("Exo Sctythe", "images/Weapons/ExoSctythe.png", true));
    weaponList.push(new Weapon("Katana", "images/Weapons/Katana.png", true));
    weaponList.push(new Weapon("Metallic Fist", "images/Weapons/MetallicFist.png", true));
    weaponList.push(new Weapon("Plasma Sword", "images/Weapons/PlasmaSword.png", true));
    weaponList.push(new Weapon("Sigma Blade", "images/Weapons/SigmaBlade.png", true));
    weaponList.push(new Weapon("Spy Dagger", "images/Weapons/SpyDagger.png", true));
    weaponList.push(new Weapon("Storm Bat", "images/Weapons/StormBat.png", true));
    weaponList.push(new Weapon("Twin Blade", "images/Weapons/TwinSword.png", true));

    skillList.push(new Skill("Dual Mastery", "images/Skills/DualMastery.png", true));
    skillList.push(new Skill("HP Mastery", "images/Skills/HpMastery.png", true));
    skillList.push(new Skill("SP Mastery", "images/Skills/SpMastery.png", true));
}

function loadoutBuilder(isSword) {
    if(isSword){
        initOS();
    }else{
        init();
    }
    for (var i = 0; i < 3; i++) {
        var index = Math.floor(Math.random() * weaponList.length);
        // console.log("wep num:" + index);
        var selectedWep = weaponList[index]
        if (weaponList[index].name == "Bomb") {
            bombList = [new Weapon("Earth Bomb", "images/Weapons/BombEarth.png", false), new Weapon("Air Bomb", "images/Weapons/BombAir.png", false)];
            selectedWep = bombList[Math.floor(Math.random() * 2)];
        }
        var weponIndex = "wep" + (i + 1).toString();
        document.getElementById(weponIndex).innerText = selectedWep.name;
        // console.log(selectedWep);
        replaceImage(document.getElementById(weponIndex + "-img"), selectedWep.imagePath);
        // console.log(i + 1 + " " + selectedWep);
        // console.log("before pop length:" + weaponList.length);
        printList(weaponList);
        // console.log("before pop" + weaponList);
        weaponList.splice(index,1);
        // console.log("after pop length:" + weaponList.length);
        printList(weaponList);
    }
    var skillIndex = Math.floor(Math.random() * skillList.length);
    // console.log("skill num:" + skillIndex);
    var selectedSkill = skillList[skillIndex];
    // console.log("Skill " + skillList[skillIndex].name);
    document.getElementById("skill").innerText = selectedSkill.name;
    replaceImage(document.getElementById("skill-img"), selectedSkill.imagePath);

}

function printList(featuredList){
    for(var i =0; i < featuredList.length; i++){
        console.log(featuredList[i]);
    }
}

function replaceImage(element, src) {
    element.src = src;
}
