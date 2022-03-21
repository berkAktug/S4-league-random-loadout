class Weapon {
    constructor(name, imagePath) {
        this.name = name;
        this.imagePath = imagePath;
    }
}

class Skill {
    constructor(name, imagePath) {
        this.name = name;
        this.imagePath = imagePath;
    }
}

var weaponList = [];
var weaponIndexList = [];
var skillList = [];
var skillIndexList = [];

function init() {
    weaponList = []
    skillList = []
    weaponIndexList = ["Air Gun","Assault Rifle","Bomb","Breaker","Burst Shotgun","Cannonade","Counter Sword","Exo Scythe","Gauss Rifle","Handgun","Heavy Machine Gun","Katana","Light Machine Gun","Metallic Fist","Mind Energy","Mind Shock","Mine Gun","Plasma Sword","Rail Gun","Rescue Gun","Revolver","Semi-Rifle","Sentry Gun","Sentry Nell","Sharp Shooter","Sigma Blade","Smash Rifle","Spark Rifle","Spy Dagger","Storm Bat","Sub Machine Gun","Turret","Twin Blade"];
    skillIndexList = ["Anchoring","Bind","Block","Dual Mastery","Flying","HP Mastery","Invisible","Metallic","Shield","SP Mastery"];

    weaponList.push(new Weapon("Air Gun", "images/Weapons/Airgun.png"));
    weaponList.push(new Weapon("Assault Rifle", "images/Weapons/AssaultRifle.png"));
    weaponList.push(new Weapon("Bomb", "images/Weapons/Bomb.png"));
    weaponList.push(new Weapon("Breaker", "images/Weapons/Breaker.png"));
    weaponList.push(new Weapon("Burst Shotgun", "images/Weapons/BurstShotgun.png"));
    weaponList.push(new Weapon("Cannonade", "images/Weapons/Cannonade.png"));
    weaponList.push(new Weapon("Counter Sword", "images/Weapons/CounterSword.png"));
    weaponList.push(new Weapon("Exo Scythe", "images/Weapons/ExoScythe.png"));
    weaponList.push(new Weapon("Gauss Rifle", "images/Weapons/GaussRifle.png"));
    weaponList.push(new Weapon("Handgun", "images/Weapons/HandGun.png"));
    weaponList.push(new Weapon("Heavy Machine Gun", "images/Weapons/HeavyMachineGun.png"));
    weaponList.push(new Weapon("Katana", "images/Weapons/Katana.png"));
    weaponList.push(new Weapon("Light Machine Gun", "images/Weapons/LightMachineGun.png"));
    weaponList.push(new Weapon("Metallic Fist", "images/Weapons/MetallicFist.png"));
    weaponList.push(new Weapon("Mind Energy", "images/Weapons/MindEnergy.png"));
    weaponList.push(new Weapon("Mind Shock", "images/Weapons/MindShock.png"));
    weaponList.push(new Weapon("Mine Gun", "images/Weapons/MineGun.png"));
    weaponList.push(new Weapon("Plasma Sword", "images/Weapons/PlasmaSword.png"));
    weaponList.push(new Weapon("Rail Gun", "images/Weapons/RailGun.png"));
    weaponList.push(new Weapon("Rescue Gun", "images/Weapons/RescueGun.png"));
    weaponList.push(new Weapon("Revolver", "images/Weapons/Revolver.png"));
    weaponList.push(new Weapon("Semi-Rifle", "images/Weapons/SemiRifle.png"));
    weaponList.push(new Weapon("Sentry Gun", "images/Weapons/SentryGun.png"));
    weaponList.push(new Weapon("Sentry Nell", "images/Weapons/SentryNell.png"));
    weaponList.push(new Weapon("Sharp Shooter", "images/Weapons/SharpShooter.png"));
    weaponList.push(new Weapon("Sigma Blade", "images/Weapons/SigmaBlade.png"));
    weaponList.push(new Weapon("Smash Rifle", "images/Weapons/SmashRifle.png"));
    weaponList.push(new Weapon("Spark Rifle", "images/Weapons/SparkRifle.png"));
    weaponList.push(new Weapon("Spy Dagger", "images/Weapons/SpyDagger.png"));
    weaponList.push(new Weapon("Storm Bat", "images/Weapons/StormBat.png"));
    weaponList.push(new Weapon("Sub Machine Gun", "images/Weapons/SubMachineGun.png"));
    weaponList.push(new Weapon("Turret", "images/Weapons/Turret.png"));
    weaponList.push(new Weapon("Twin Blade", "images/Weapons/TwinSword.png"));

    skillList.push(new Skill("Anchoring", "images/Skills/Anchoring.png"));
    skillList.push(new Skill("Bind", "images/Skills/Bind.png"));
    skillList.push(new Skill("Block", "images/Skills/Block.png"));
    skillList.push(new Skill("Dual Mastery", "images/Skills/DualMastery.png"));
    skillList.push(new Skill("Flying", "images/Skills/Flying.png"));
    skillList.push(new Skill("HP Mastery", "images/Skills/HpMastery.png"));
    skillList.push(new Skill("Invisible", "images/Skills/Invisible.png"));
    skillList.push(new Skill("Metallic", "images/Skills/Metallic.png"));
    skillList.push(new Skill("Shield", "images/Skills/Shield.png"));
    skillList.push(new Skill("SP Mastery", "images/Skills/SpMastery.png"));

    containerFiller("container-1", weaponList, 0, Math.floor(weaponList.length/2), "weapon-checkbox");
    containerFiller("container-2", weaponList, Math.floor(weaponList.length/2), weaponList.length, "weapon-checkbox");
    containerFiller("container-3", skillList, 0, skillList.length, "skill-checkbox");
    setCheckAll(true);
}

function setCheckSkill(isChecked){
    var clist=document.getElementsByClassName("skill-checkbox");
    for (var i = 0; i < clist.length; ++i) { clist[i].checked = isChecked; }
}

function setCheckAll(isChecked){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) { checkboxes[i].checked = isChecked; }
}

function adaptRestrictions() {
    var dropdownValue = document.getElementById("random-type-dropdown").value;
    switch (dropdownValue) {
        case "melee":
            setCheckAll(false);
            document.getElementById('Breaker').checked = true;
            document.getElementById('Counter Sword').checked = true;
            document.getElementById('Exo Scythe').checked = true;
            document.getElementById('Katana').checked = true;
            document.getElementById('Metallic Fist').checked = true;
            document.getElementById('Plasma Sword').checked = true;
            document.getElementById('Sigma Blade').checked = true;
            document.getElementById('Spy Dagger').checked = true;
            document.getElementById('Storm Bat').checked = true;
            document.getElementById('Twin Blade').checked = true;

            document.getElementById('Dual Mastery').checked = true;
            document.getElementById('HP Mastery').checked = true;
            document.getElementById('SP Mastery').checked = true;
            break;
        case "s5":
            setCheckAll(true);
            document.getElementById('Smash Rifle').checked = false;
            document.getElementById('Assault Rifle').checked = false;
            document.getElementById('Mind Energy').checked = false;
            document.getElementById('Gauss Rifle').checked = false;
            document.getElementById('Sentry Gun').checked = false;
            document.getElementById('Sentry Nell').checked = false;
            document.getElementById('Bomb').checked = false;
            document.getElementById('Rescue Gun').checked = false;
            document.getElementById('Metallic Fist').checked = false;
            document.getElementById('Exo Scythe').checked = false;
            document.getElementById('Block').checked = false;
            document.getElementById('Dual Mastery').checked = false;
            break;
        case "chaotic":
            setCheckAll(true);
            break;
        case "madlad":
            setCheckAll(false);
            setCheckSkill(true);
            document.getElementById('Turret').checked = true;
            document.getElementById('Exo Scythe').checked = true;
            document.getElementById('Air Gun').checked = true;
            document.getElementById('Mind Shock').checked = true;
            document.getElementById('Sigma Blade').checked = true;
            document.getElementById('Mine Gun').checked = true;
            document.getElementById('Sentry Gun').checked = true;
            document.getElementById('Sentry Nell').checked = true;
            document.getElementById('Metallic Fist').checked = true;
            document.getElementById('Spark Rifle').checked = true;
            document.getElementById('Bomb').checked = true;
            document.getElementById('Cannonade').checked = true;
            document.getElementById('Heavy Machine Gun').checked = true;
            document.getElementById('Katana').checked = true;
            document.getElementById('Rail Gun').checked = true;
            document.getElementById('Rescue Gun').checked = true;
            document.getElementById('Counter Sword').checked = true;
            document.getElementById('Twin Blade').checked = true;
            document.getElementById('Spy Dagger').checked = true;
            break;
        case "sane":
            setCheckAll(true);
            document.getElementById('Turret').checked = false;
            document.getElementById('Exo Scythe').checked = false;
            document.getElementById('Air Gun').checked = false;
            document.getElementById('Mind Shock').checked = false;
            document.getElementById('Sigma Blade').checked = false;
            document.getElementById('Mine Gun').checked = false;
            document.getElementById('Sentry Gun').checked = false;
            document.getElementById('Sentry Nell').checked = false;
            document.getElementById('Metallic Fist').checked = false;
            document.getElementById('Spark Rifle').checked = false;
            document.getElementById('Rescue Gun').checked = false;
            document.getElementById('Twin Blade').checked = false;
            break;
        case "custom":
            break;
        default:
            setCheckAll(true);
            break;
    }
}

function getAllowedList(query, list, indexList){
    var allowedList = [];
    var clist = document.querySelectorAll(query);
    for (var i = 0; i < clist.length; i++) {
        allowedList.push(list[indexList.indexOf(clist[i].value)]);
    }
    return allowedList;
}

function loadoutBuilder() {
    var allowedWeaponList = getAllowedList("div.weapon-container input[type=checkbox]:checked", weaponList, weaponIndexList);
    for (var i = 0; i < 3; i++) {
        var index = Math.floor(Math.random() * allowedWeaponList.length);
        // console.log("wep num:" + index);
        var selectedWep = allowedWeaponList[index]
        if (allowedWeaponList[index].name == "Bomb") {
            bombList = [new Weapon("Earth Bomb", "images/Weapons/BombEarth.png"), new Weapon("Air Bomb", "images/Weapons/BombAir.png")];
            selectedWep = bombList[Math.floor(Math.random() * 2)];
        }
        var weponIndex = "wep" + (i + 1).toString();
        document.getElementById(weponIndex).innerText = selectedWep.name;
        replaceImage(document.getElementById(weponIndex + "-img"), selectedWep.imagePath);
        allowedWeaponList.splice(index,1);
    }
    var allowedSkillList = getAllowedList("div.skill-container input[type=checkbox]:checked", skillList, skillIndexList);
    var selectedSkill = allowedSkillList[Math.floor(Math.random() * allowedSkillList.length)];
    document.getElementById("skill").innerText = selectedSkill.name;
    replaceImage(document.getElementById("skill-img"), selectedSkill.imagePath);
}

function containerFiller(containerName, list, start, end, className){
    for(var i = start; i < end; i++){
        var element = list[i];
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = element.name;
        checkbox.className = className;
        checkbox.value = element.name;

        var label = document.createElement('label')
        label.htmlFor = element.name;
        
        var description = document.createTextNode(element.name);
        label.appendChild(description);
        
        var newline = document.createElement('br');
        
        var container = document.getElementById(containerName);
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(newline);
    }
}

function replaceImage(element, src) {
    element.src = src;
}
