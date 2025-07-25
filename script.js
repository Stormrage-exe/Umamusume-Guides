
const characters = {
  airgroove: {
    personality: "She serves as the vice president of the student council and is famously known as the “Empress.” Her mother, a highly accomplished Umamusume, raised her with great care—instilling in her the ideals of Tracen Academy from a young age. Trained under her mother's guidance, she aspires to embody those very principles herself. Despite her dignified image, she has a soft spot for flowers and finds joy in tending to them. She considers Symboli Rudolf, the student council president, a trusted comrade.",
    trait1: "Strength: Skilled at growing flowers.",
    trait2: "Weaknesses: Sensitive to sudden movements and flashing lights.",
    trait3: "Family: Spends the whole year carefully planning her mother's birthday celebration.",
    trait4: "Pre-Race Ritual: Touches up her eyeshadow, then channels her determination.",
    trait5: "Secret: Dislikes insects—except for ladybugs, which she finds adorable.",
    speedpriority: "800-900",
    staminapriority: "400-500",
    powerpriority: "500-600",
    gutspriority: "300-400",
   witspriority: "300-400",
   skill1: "Professor of Curvature",
   skill2: "Straightaway Acceleration",
   skill3: "Homestretch Haste",
   besttotrain: "Focus on speed,then on power,stamina,guts and wits.",  
   racestrategy: "On Sprint choose Front. On Mile choose Pace. On Medium choose Late. On Long choose End.", 
   bestdistance: "Mile and Medium.", 
   okdistance: "Sprint", 
   worstdistance: "Long", 
   track: "She performs best on turf tracks.",
   profileimage: "https://umamusu.wiki/w/thumb.php?f=Air_Groove_%28Icon%29.png&width=200",
   profilename: "Air Groove",
   profilesubtitle: " 'Empress' ",
   rarity: "★★",
   type: "Speed/Stamina",
   distance: "Mile/Medium",
   style: "Pace/Late",
   birthday: "April 6",
  },    

  tachyon: {
    personality: "",
    speedpriority: "",
    staminapriority: "",
    powerpriority: "",
    gutspriority: "",
   witspriority: "",
   skill1: "",
   skill2: "",
   skill3: "",
   besttotrain: "",  
   racestrategy: "", 
   bestdistance: "", 
   okdistance: "", 
   worstdistance: "", 
   track: "",
   profileimage: "",
   profilename: "",
   profilesubtitle: "",
   rarity: "",
   type: "",
   distance: "",
   style: "",
   birthday: "",
  },    
  
  baiwa: {
    personality: "",
    speedpriority: "",
    staminapriority: "",
    powerpriority: "",
    gutspriority: "",
    witspriority: "",
   skill1: "",
   skill2: "",
   skill3: "",
   besttotrain: "",  
   racestrategy: "", 
   bestdistance: "", 
   okdistance: "", 
   worstdistance: "", 
   track: "",
   profileimage: "",
   profilename: "",
   profilesubtitle: "",
   rarity: "",
   type: "",
   distance: "",
   style: "",
   birthday: "",
  },    
  
};


document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('character.html')) {
        loadCharacterData();
    }
});

function loadCharacterData() {
    const urlParams = new URLSearchParams(window.location.search);
    const charName = urlParams.get('char');
    
    if (!charName || !characters[charName]) {
        console.error('Character not found:', charName);
        return;
    }
    
    const character = characters[charName];

    document.querySelectorAll('.profilename').forEach(el => {
        el.textContent = character.profilename;
    });
    
    if (character.profilesubtitle) {
        document.querySelector('.profilesubtitle').textContent = character.profilesubtitle;
    }
    if (character.rarity) {
        document.querySelector('.rarity').textContent = character.rarity;
    }
    if (character.type) {
        document.querySelector('.type').textContent = character.type;
    }
    if (character.distance) {
        document.querySelector('.distance').textContent = character.distance;
    }
    if (character.style) {
        document.querySelector('.style').textContent = character.style;
    }
    if (character.birthday) {
        document.querySelector('.birthday').textContent = character.birthday;
    }
    
    if (character.personality) {
        document.querySelector('.personality').textContent = character.personality;
    }
     if (character.trait1) {
        document.querySelector('.trait1').textContent = character.trait1;
    }
       if (character.trait2) {
        document.querySelector('.trait2').textContent = character.trait2;
    }
       if (character.trait3) {
        document.querySelector('.trait3').textContent = character.trait3;
    }
       if (character.trait4) {
        document.querySelector('.trait4').textContent = character.trait4;
    }
       if (character.trait5) {
        document.querySelector('.trait5').textContent = character.trait5;
    }
    if (character.speedpriority) {
        document.querySelector('.speedpriority').innerHTML = `<strong>Speed:</strong> ${character.speedpriority}`;
    }
    if (character.staminapriority) {
        document.querySelector('.staminapriority').innerHTML = `<strong>Stamina:</strong> ${character.staminapriority}`;
    }
    if (character.powerpriority) {
        document.querySelector('.powerpriority').innerHTML = `<strong>Power:</strong> ${character.powerpriority}`;
    }
    if (character.gutspriority) {
        document.querySelector('.gutspriority').innerHTML = `<strong>Guts:</strong> ${character.gutspriority}`;
    }
    if (character.witspriority) {
        document.querySelector('.witspriority').innerHTML = `<strong>Wits:</strong> ${character.witspriority}`;
    }
    if (character.skill1) {
        document.querySelector('.skill1').innerHTML = `<strong>Skill 1:</strong> ${character.skill1}`;
    }
    if (character.skill2) {
        document.querySelector('.skill2').innerHTML = `<strong>Skill 2:</strong> ${character.skill2}`;
    }
    if (character.skill3) {
        document.querySelector('.skill3').innerHTML = `<strong>Skill 3:</strong> ${character.skill3}`;
    }
    if (character.besttotrain) {
        document.querySelector('.besttotrain').textContent = character.besttotrain;
    }
    if (character.racestrategy) {
        document.querySelector('.racestrategy').textContent = character.racestrategy;
    }
    if (character.bestdistance) {
        document.querySelector('.bestdistance').textContent = `Best: ${character.bestdistance}`;
    }
    if (character.okdistance) {
        document.querySelector('.okdistance').textContent = `Okay: ${character.okdistance}`;
    }
    if (character.worstdistance) {
        document.querySelector('.worstdistance').textContent = `Avoid: ${character.worstdistance}`;
    }
    if (character.track) {
        document.querySelector('.track').textContent = character.track;
    }
    if (character.profileimage) {
        document.querySelector('.profileimage img').src = character.profileimage;
    }
}