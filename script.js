const charDisplay = document.querySelector('.character-display');
charDisplay.classList.toggle('character-display-hidden')

const characters = {
  Akari: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Anna: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Ayane: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Akino: '<h1>PVP: 9-3</h1><h1>CB: 9-2(no boots)</h1>',
  Aoi: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Ayumi: '',
  Arisa: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Chika: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Christina: '',
  Djeeta: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Eriko: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Hiyori: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Hatsune: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Io: '<h1>PVP: 7-6</h1><h1>CB: 7-6</h1>',
  Illya: '',
  Jun: '<h1>PVP: 8-6(primary tank) 9-3 (secondary)</h1><h1>CB: 9-3</h1>',
  Kasumi: '',
  Kaori: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Kurumi: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Kyoka: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Kuka: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Kokkoro: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Kyarl: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Lima: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Misogi: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Matsuri: '',
  Miyako: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Maho: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Misato: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Mimi: '<h1>PVP: 9-3</h1><h1>CB: 9-2(no boots)</h1>',
  Mahiru: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Makoto: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Mifuyu: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Misaki: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Mitsuki: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Monika: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Nanaka: '',
  Nozomi: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Ninon: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Pecorine: '<h1>PVP: 9-3</h1><h1>CB: 8-6</h1>',
  Rei: '<h1>PVP: 9-3</h1><h1>CB: 9-2(no boots)</h1>',
  Rino: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Rin: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Ruka: '',
  Suzuna: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Suzume: '<h1>PVP: 8-6</h1><h1>CB: 9-3</h1>',
  Saren: '<h1>PVP: 9-3</h1><h1>CB: 9-2(no boots)</h1>',
  Shinobu: '<h1>PVP: 9-3</h1><h1>CB: 8-6</h1>',
  Shiori: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Shizuru: '<h1>PVP: 9-3</h1><h1>CB: 9-2(no boots)</h1>',
  Tomo: '',
  Tamaki: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Tsumugi: '',
  Yui: '<h1>PVP: 8-6</h1><h1>CB: 8-6</h1>',
  Yuki: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Yori: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>',
  Yukari: '<h1>PVP: 9-3</h1><h1>CB: 9-3</h1>'
}


let checkCharacter = async (character) => {
  document.querySelector('.character-container').classList.toggle('character-display-hidden')
  console.log(character)
  charDisplay.innerHTML = ''
  charDisplay.classList.toggle('character-display-hidden')
  const name = document.createElement('h2');
  name.innerHTML = '<p>just go to <a href="https://shioris-library.com/?">https://shioris-library.com/?</a> lmao it\'ll save both of us time';
  name.innerHTML += `\n${characters[character.name]}`;
  name.innerHTML += '<a target="_blank" href="https://www.priconneglobal.info/articles/rank8-6_vs_rank9-3_suggestions">INFORMATION FROM THIS ARTICLE</a>'
  name.style.color = 'white';
  name.addEventListener('click', () => {
    charDisplay.classList.toggle('character-display-hidden')
    document.querySelector('.character-container').classList.toggle('character-display-hidden')
  })
  charDisplay.appendChild(name);
  // console.log(id)
}

let displayIcons = (json) => {
  const container = document.querySelector('.character-container')
  // console.log(json);
  let charList = [];
  for (id in json){
    charList.push(json[id]);
  }

  console.log('CHARACTER LIST:', charList)
  charList.sort((a, b) => {
    if(a.name.charCodeAt(0) < b.name.charCodeAt(0))
      return -1;
    if(a.name.charCodeAt(0) > b.name.charCodeAt(0))
      return 1;
    return 0;
  })
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