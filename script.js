const charDisplay = document.querySelector('.character-display');
charDisplay.classList.toggle('character-display-hidden')

let checkCharacter = async (character) => {
  document.querySelector('.character-container').classList.toggle('character-display-hidden')
  console.log(character)
  charDisplay.innerHTML = ''
  charDisplay.classList.toggle('character-display-hidden')
  const name = document.createElement('h2');
  name.innerHTML = '<p>just go to <a href="https://shioris-library.com/?">https://shioris-library.com/?</a> lmao it\'ll save both of us time';
  // name.innerText = character.name;
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