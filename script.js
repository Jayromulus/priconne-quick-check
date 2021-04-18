const charDisplay = document.querySelector('.character-display');
charDisplay.classList.toggle('character-display-hidden')

const characters = {
  Akari: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Anna: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Ayane: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Akino: '<h2>PVP: 9-3</h2><h2>CB: 9-2(no boots)</h2>',
  Aoi: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Ayumi: '',
  Arisa: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Chika: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Christina: '',
  Djeeta: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Eriko: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Hiyori: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Hatsune: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Io: '<h2>PVP: 7-6</h2><h2>CB: 7-6</h2>',
  Illya: '',
  Jun: '<h2>PVP: 8-6(primary tank) 9-3 (secondary)</h2><h2>CB: 9-3</h2>',
  Kasumi: '',
  Kaori: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Kurumi: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Kyoka: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Kuka: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Kokkoro: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Kyarl: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Lima: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Misogi: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Matsuri: '',
  Miyako: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Maho: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Misato: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Mimi: '<h2>PVP: 9-3</h2><h2>CB: 9-2(no boots)</h2>',
  Mahiru: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Makoto: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Mifuyu: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Misaki: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Mitsuki: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Monika: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Nanaka: '',
  Nozomi: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Ninon: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Pecorine: '<h2>PVP: 9-3</h2><h2>CB: 8-6</h2>',
  Rei: '<h2>PVP: 9-3</h2><h2>CB: 9-2(no boots)</h2>',
  Rino: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Rin: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Ruka: '',
  Suzuna: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Suzume: '<h2>PVP: 8-6</h2><h2>CB: 9-3</h2>',
  Saren: '<h2>PVP: 9-3</h2><h2>CB: 9-2(no boots)</h2>',
  Shinobu: '<h2>PVP: 9-3</h2><h2>CB: 8-6</h2>',
  Shiori: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Shizuru: '<h2>PVP: 9-3</h2><h2>CB: 9-2(no boots)</h2>',
  Tomo: '',
  Tamaki: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Tsumugi: '',
  Yui: '<h2>PVP: 8-6</h2><h2>CB: 8-6</h2>',
  Yuki: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Yori: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>',
  Yukari: '<h2>PVP: 9-3</h2><h2>CB: 9-3</h2>'
}


let checkCharacter = async (character) => {
  document.querySelector('.character-container').classList.toggle('character-display-hidden')
  console.log(character)
  charDisplay.innerHTML = ''
  charDisplay.classList.toggle('character-display-hidden')
  const display = document.createElement('div')
  const name = document.createElement('h1')
  name.innerText = character.name
  display.appendChild(name)
  // name.innerHTML += '<p>just go to <a href="https://shioris-library.com/?">https://shioris-library.com/?</a> lmao it\'ll save both of us time';
  const information = document.createElement('div')
  information.innerHTML += characters[character.name]
  display.appendChild(information)
  display.innerHTML += '<div class="bottom-link"><a target="_blank" href="https://www.priconneglobal.info/articles/rank8-6_vs_rank9-3_suggestions">REFERENCE ARTICLE</a></div>'
  display.style.color = 'white';
  display.addEventListener('click', () => {
    charDisplay.classList.toggle('character-display-hidden')
    document.querySelector('.character-container').classList.toggle('character-display-hidden')
  })

  const accuracyDisplay = document.createElement('p')
  const physicalAttackDisplay = document.createElement('p')
  const physicalDefenseDisplay = document.createElement('p')
  const dodgeDisplay = document.createElement('p')
  const tpRecoveryRateDisplay = document.createElement('p')
  const tpReduceRateDisplay = document.createElement('p')
  const hpDisplay = document.createElement('p')
  const hpRecoveryRateDisplay = document.createElement('p')
  const lifestealDisplay = document.createElement('p')
  const magicCritRateDisplay = document.createElement('p')
  const magicDefenseDisplay = document.createElement('p')
  const magicPenetrateDisplay = document.createElement('p')
  const magicAttackDisplay = document.createElement('p')
  const physicalCritRateDisplay = document.createElement('p')
  const physicalPenetrateDisplay = document.createElement('p')
  const waveTpRecoveryDisplay = document.createElement('p')
  const waveHpRecoveryDisplay = document.createElement('p')

  let accuracy = 0;
  let physicalAttack = 0;
  let physicalDefense = 0;
  let dodge = 0;
  let tpRecoveryRate = 0;
  let tpReduceRate = 0;
  let hp = 0;
  let hpRecoveryRate = 0;
  let lifesteal = 0;
  let magicCritRate = 0;
  let magicDefense = 0;
  let magicPenetrate = 0;
  let magicAttack = 0;
  let physicalCritRate = 0;
  let physicalPenetrate = 0;
  let waveTpRecovery = 0;
  let waveHpRecovery = 0;

  if(character.stats.growth[character.rarity-1]) {
    accuracy = character.stats.base[character.rarity - 1].accuracy + (character.stats.growth[character.rarity - 1].accuracy * 93)
    physicalAttack = character.stats.base[character.rarity - 1].atk + (character.stats.growth[character.rarity - 1].atk * 93)
    physicalDefense = character.stats.base[character.rarity - 1].def + (character.stats.growth[character.rarity - 1].def * 93)
    dodge = character.stats.base[character.rarity - 1].dodge + (character.stats.growth[character.rarity - 1].dodge * 93)
    tpRecoveryRate = character.stats.base[character.rarity - 1].energy_recovery_rate + (character.stats.growth[character.rarity - 1].energy_recovery_rate * 93)
    tpReduceRate = character.stats.base[character.rarity - 1].energy_reduce_rate + (character.stats.growth[character.rarity - 1].energy_reduce_rate * 93)
    hp = character.stats.base[character.rarity - 1].hp + (character.stats.growth[character.rarity - 1].hp * 93)
    hpRecoveryRate = character.stats.base[character.rarity - 1].hp_recovery_rate + (character.stats.growth[character.rarity - 1].hp_recovery_rate * 93)
    lifesteal = character.stats.base[character.rarity - 1].life_steal + (character.stats.growth[character.rarity - 1].life_steal * 93)
    magicCritRate = character.stats.base[character.rarity - 1].magic_critical + (character.stats.growth[character.rarity - 1].magic_critical * 93)
    magicDefense = character.stats.base[character.rarity - 1].magic_def + (character.stats.growth[character.rarity - 1].magic_def * 93)
    magicPenetrate = character.stats.base[character.rarity - 1].magic_penetrate + (character.stats.growth[character.rarity - 1].magic_penetrate * 93)
    magicAttack = character.stats.base[character.rarity - 1].magic_str + (character.stats.growth[character.rarity - 1].magic_str * 93)
    physicalCritRate = character.stats.base[character.rarity - 1].physical_critical + (character.stats.growth[character.rarity - 1].physical_critical * 93)
    physicalPenetrate = character.stats.base[character.rarity - 1].physical_penetrate + (character.stats.growth[character.rarity - 1].physical_penetrate * 93)
    waveTpRecovery = character.stats.base[character.rarity - 1].wave_energy_recovery + (character.stats.growth[character.rarity - 1].wave_energy_recovery * 93)
    waveHpRecovery = character.stats.base[character.rarity - 1].wave_hp_recovery + (character.stats.growth[character.rarity - 1].wave_hp_recovery * 93)
  }

  for (let i = 0; character.rarity < 3 ? i < 4 : i < 8; i++) {
    // console.log(i)
    // console.log(character.stats.bond[i])
    if (character.stats.bond[i]) {

      accuracy += character.stats.bond[i].accuracy ? character.stats.bond[i].accuracy : 0
      physicalAttack += character.stats.bond[i].atk ? character.stats.bond[i].atk : 0
      physicalDefense += character.stats.bond[i].def ? character.stats.bond[i].def : 0
      dodge += character.stats.bond[i].dodge ? character.stats.bond[i].dodge : 0
      tpRecoveryRate += character.stats.bond[i].energy_recovery_rate ? character.stats.bond[i].energy_recovery_rate : 0
      tpReduceRate += character.stats.bond[i].energy_reduce_rate ? character.stats.bond[i].energy_reduce_rate : 0
      hp += character.stats.bond[i].hp ? character.stats.bond[i].hp : 0
      hpRecoveryRate += character.stats.bond[i].hp_recovery_rate ? character.stats.bond[i].hp_recovery_rate : 0
      lifesteal += character.stats.bond[i].life_steal ? character.stats.bond[i].life_steal : 0
      magicCritRate += character.stats.bond[i].magic_critical ? character.stats.bond[i].magic_critical : 0
      magicDefense += character.stats.bond[i].magic_def ? character.stats.bond[i].magic_def : 0
      magicPenetrate += character.stats.bond[i].magic_penetrate ? character.stats.bond[i].magic_penetrate : 0
      magicAttack += character.stats.bond[i].magic_str ? character.stats.bond[i].magic_str : 0
      physicalCritRate += character.stats.bond[i].physical_critical ? character.stats.bond[i].physical_critical : 0
      physicalPenetrate += character.stats.bond[i].physical_penetrate ? character.stats.bond[i].physical_penetrate : 0
      waveTpRecovery += character.stats.bond[i].wave_energy_recovery ? character.stats.bond[i].wave_energy_recovery : 0
      waveHpRecovery += character.stats.bond[i].wave_hp_recovery ? character.stats.bond[i].wave_hp_recovery : 0

    }
  }


  // character.stats.bond[i].accuracy
  // character.stats.bond[i].atk
  // character.stats.bond[i].def
  // character.stats.bond[i].dodge
  // character.stats.bond[i].energy_recovery_rate
  // character.stats.bond[i].energy_reduce_rate
  // character.stats.bond[i].hp
  // character.stats.bond[i].hp_recovery_rate
  // character.stats.bond[i].life_steal
  // character.stats.bond[i].magic_critical
  // character.stats.bond[i].magic_def
  // character.stats.bond[i].magic_penetrate
  // character.stats.bond[i].magic_str
  // character.stats.bond[i].physical_critical
  // character.stats.bond[i].physical_penetrate
  // character.stats.bond[i].wave_energy_recovery
  // character.stats.bond[i].wave_hp_recovery

  let accuracy86 = accuracy + character.stats.promotion[7].accuracy;
  let physicalAttack86 = physicalAttack + character.stats.promotion[7].atk;
  let physicalDefense86 = physicalDefense + character.stats.promotion[7].def;
  let dodge86 = dodge + character.stats.promotion[7].dodge;
  let tpRecoveryRate86 = tpRecoveryRate + character.stats.promotion[7].energy_recovery_rate;
  let tpReduceRate86 = tpReduceRate + character.stats.promotion[7].energy_reduce_rate;
  let hp86 = hp + character.stats.promotion[7].hp;
  let hpRecoveryRate86 = hpRecoveryRate + character.stats.promotion[7].hp_recovery_rate;
  let lifesteal86 = lifesteal + character.stats.promotion[7].life_steal;
  let magicCritRate86 = magicCritRate + character.stats.promotion[7].magic_critical;
  let magicDefense86 = magicDefense + character.stats.promotion[7].magic_def;
  let magicPenetrate86 = magicPenetrate + character.stats.promotion[7].magic_penetrate;
  let magicAttack86 = magicAttack + character.stats.promotion[7].magic_str;
  let physicalCritRate86 = physicalCritRate + character.stats.promotion[7].physical_critical;
  let physicalPenetrate86 = physicalPenetrate + character.stats.promotion[7].physical_penetrate;
  let waveTpRecovery86 = waveTpRecovery + character.stats.promotion[7].wave_energy_recovery;
  let waveHpRecovery86 = waveHpRecovery + character.stats.promotion[7].wave_hp_recovery;

  let accuracy93 = accuracy + character.stats.promotion[8].accuracy;
  let physicalAttack93 = physicalAttack + character.stats.promotion[8].atk;
  let physicalDefense93 = physicalDefense + character.stats.promotion[8].def;
  let dodge93 = dodge + character.stats.promotion[8].dodge;
  let tpRecoveryRate93 = tpRecoveryRate + character.stats.promotion[8].energy_recovery_rate;
  let tpReduceRate93 = tpReduceRate + character.stats.promotion[8].energy_reduce_rate;
  let hp93 = hp + character.stats.promotion[8].hp;
  let hpRecoveryRate93 = hpRecoveryRate + character.stats.promotion[8].hp_recovery_rate;
  let lifesteal93 = lifesteal + character.stats.promotion[8].life_steal;
  let magicCritRate93 = magicCritRate + character.stats.promotion[8].magic_critical;
  let magicDefense93 = magicDefense + character.stats.promotion[8].magic_def;
  let magicPenetrate93 = magicPenetrate + character.stats.promotion[8].magic_penetrate;
  let magicAttack93 = magicAttack + character.stats.promotion[8].magic_str;
  let physicalCritRate93 = physicalCritRate + character.stats.promotion[8].physical_critical;
  let physicalPenetrate93 = physicalPenetrate + character.stats.promotion[8].physical_penetrate;
  let waveTpRecovery93 = waveTpRecovery + character.stats.promotion[8].wave_energy_recovery;
  let waveHpRecovery93 = waveHpRecovery + character.stats.promotion[8].wave_hp_recovery;

  // RANK 8 GEAR
  for (equip of character.stats.gear[7]) {
    // console.log(equip.base)
    accuracy86 = accuracy86 + (equip.base.accuracy * 2)
    physicalAttack86 = physicalAttack86 + (equip.base.atk * 2)
    physicalDefense86 = physicalDefense86 + (equip.base.def * 2)
    dodge86 = dodge86 + (equip.base.dodge * 2)
    tpRecoveryRate86 = tpRecoveryRate86 + (equip.base.energy_recovery_rate * 2)
    tpReduceRate86 = tpReduceRate86 + (equip.base.energy_reduce_rate * 2)
    hp86 = hp86 + (equip.base.hp * 2)
    hpRecoveryRate86 = hpRecoveryRate86 + (equip.base.hp_recovery_rate * 2)
    lifesteal86 = lifesteal86 + (equip.base.life_steal * 2)
    magicCritRate86 = magicCritRate86 + (equip.base.magic_critical * 2)
    magicDefense86 = magicDefense86 + (equip.base.magic_def * 2)
    magicPenetrate86 = magicPenetrate86 + (equip.base.magic_penetrate * 2)
    magicAttack86 = magicAttack86 + (equip.base.magic_str * 2)
    physicalCritRate86 = physicalCritRate86 + (equip.base.physical_critical * 2)
    physicalPenetrate8 = physicalPenetrate86 + (equip.base.physical_penetrate * 2)
    waveTpRecovery86 = waveTpRecovery86 + (equip.base.wave_energy_recovery * 2)
    waveHpRecovery86 = waveHpRecovery86 + (equip.base.wave_hp_recovery * 2)
  }

  for (equip of character.stats.gear[8]) {
    // console.log(equip.base)
    accuracy93 = accuracy93 + (equip.base.accuracy * 2)
    physicalAttack93 = physicalAttack93 + (equip.base.atk * 2)
    physicalDefense93 = physicalDefense93 + (equip.base.def * 2)
    dodge93 = dodge93 + (equip.base.dodge * 2)
    tpRecoveryRate93 = tpRecoveryRate93 + (equip.base.energy_recovery_rate * 2)
    tpReduceRate93 = tpReduceRate93 + (equip.base.energy_reduce_rate * 2)
    hp93 = hp93 + (equip.base.hp * 2)
    hpRecoveryRate93 = hpRecoveryRate93 + (equip.base.hp_recovery_rate * 2)
    lifesteal93 = lifesteal93 + (equip.base.life_steal * 2)
    magicCritRate93 = magicCritRate93 + (equip.base.magic_critical * 2)
    magicDefense93 = magicDefense93 + (equip.base.magic_def * 2)
    magicPenetrate93 = magicPenetrate93 + (equip.base.magic_penetrate * 2)
    magicAttack93 = magicAttack93 + (equip.base.magic_str * 2)
    physicalCritRate93 = physicalCritRate93 + (equip.base.physical_critical * 2)
    physicalPenetrate8 = physicalPenetrate93 + (equip.base.physical_penetrate * 2)
    waveTpRecovery93 = waveTpRecovery93 + (equip.base.wave_energy_recovery * 2)
    waveHpRecovery93 = waveHpRecovery93 + (equip.base.wave_hp_recovery * 2)
  }

  // accuracyDisplay.innerText =
  hpDisplay.innerText = `HP 8-6: ${Math.floor(hp86)}\nHP 9-3: ${Math.floor(hp93)}`;
  accuracyDisplay.innerText = `Accuracy 8-6: ${Math.floor(accuracy86)}\nAccuracy 9-3: ${Math.floor(accuracy93)}`
  physicalAttackDisplay.innerText = `Physical Attack 8-6: ${Math.floor([physicalAttack86])}\nPhysical Attack 9-3: ${Math.floor(physicalAttack93)}`
  physicalDefenseDisplay.innerText = `Physical Defense 8-6: ${Math.floor(physicalDefense86)}\nPhysical Defense 9-3: ${Math.floor(physicalDefense93)}`
  dodgeDisplay.innerText = `Dodge 8-6: ${Math.floor(dodge86)}\nDodge 9-3: ${Math.floor(dodge93)}`
  tpRecoveryRateDisplay.innerText = `TP Recovery 8-6: ${Math.floor(tpRecoveryRate86)}\nTP Recovery 9-3: ${Math.floor(tpRecoveryRate93)}`
  // tpReduceRateDisplay.innerText = `stat 8-6: ${Math.floor(stat)}\nstat 9-3: ${Math.floor(stat)}`
  hpRecoveryRateDisplay.innerText = `HP Recovery 8-6: ${Math.floor(hpRecoveryRate86)}\nHP Recovery 9-3: ${Math.floor(hpRecoveryRate93)}`
  lifestealDisplay.innerText = `HP Drain 8-6: ${Math.floor(lifesteal86)}\nHP Drain 9-3: ${Math.floor(lifesteal93)}`
  magicCritRateDisplay.innerText = `Magic Crit Rate 8-6: ${Math.floor(magicCritRate86)}\nMagic Crit Rate 9-3: ${Math.floor(magicCritRate93)}`
  console.log(magicCritRate)
  magicDefenseDisplay.innerText = `Magic Defense 8-6: ${Math.floor(magicDefense86)}\nMagic Defense 9-3: ${Math.floor(magicDefense93)}`
  // magicPenetrateDisplay.innerText = `stat 8-6: ${Math.floor(stat)}\nstat 9-3: ${Math.floor(stat)}`
  magicAttackDisplay.innerText = `Magic Attack 8-6: ${Math.floor(magicAttack86)}\nMagic Attack 9-3: ${Math.floor(magicAttack93)}`
  physicalCritRateDisplay.innerText = `Physical Crit Rate 8-6: ${Math.floor(physicalCritRate86)}\nPhysical Crit Rate 9-3: ${Math.floor(physicalCritRate93)}`
  // physicalPenetrateDisplay.innerText = `stat 8-6: ${Math.floor(stat)}\nstat 9-3: ${Math.floor(stat)}`
  // waveTpRecoveryDisplay.innerText = `stat 8-6: ${Math.floor(stat)}\nstat 9-3: ${Math.floor(stat)}`
  // waveHpRecoveryDisplay.innerText = `stat 8-6: ${Math.floor(stat)}\nstat 9-3: ${Math.floor(stat)}`

  display.appendChild(hpDisplay)
  display.appendChild(accuracyDisplay)
  display.appendChild(physicalAttackDisplay)
  display.appendChild(physicalDefenseDisplay)
  display.appendChild(dodgeDisplay)
  display.appendChild(tpRecoveryRateDisplay)
  display.appendChild(hpRecoveryRateDisplay)
  display.appendChild(lifestealDisplay)
  display.appendChild(magicCritRateDisplay)
  display.appendChild(magicDefenseDisplay)
  display.appendChild(magicAttackDisplay)
  display.appendChild(physicalCritRateDisplay)

  
  
  
  
  
  
  
  
  
  
  

  charDisplay.appendChild(display);
  // console.log(id)
}

let displayIcons = (json) => {
  const container = document.querySelector('.character-container')
  // console.log(json);
  let charList = [];
  for (id in json) {
    charList.push(json[id]);
  }

  console.log('CHARACTER LIST:', charList)
  charList.sort((a, b) => a.name.localeCompare(b.name))
  console.log('CHARACTER LIST:', charList)

  for (char of charList) {
    const newIcon = document.createElement('img');
    // console.log(char)
    const current = char
    newIcon.src = char.icon
    newIcon.alt = char.name
    newIcon.addEventListener('click', () => checkCharacter(current))
    container.appendChild(newIcon)
  }

}

fetch('https://priconne.rmao.io/api/sl/unit/list').then(res => res.json()).then(json => displayIcons(json)).catch(e => console.log(e))