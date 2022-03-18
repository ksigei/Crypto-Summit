// navbar
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// cards
const apiData = [{
  name: 'Elon Musk',
  about: 'SpaceX & Tesla CEO',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  img: './images/speakers/musk.jpg',
}, {
  name: 'Kiprono Japhet',
  about: 'Software Engineer, Crypto specialist',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  img: './images/speakers/musk1.jpeg',
}, {
  name: 'Jack Dorsey',
  about: 'Twitter Co-founder, Businessman',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  img: './images/speakers/dorsey.jpeg',
}, {
  name: 'Evans',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  img: './images/speakers/musk.jpg',
}, {
  name: 'Benard Ngetich',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  img: './images/speakers/dorsey.jpeg',
}, {
  name: 'Brian Armstrong',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  img: './images/speakers/armstrong.jpeg',
}];

const container = document.getElementById('cards_wrapper');

apiData.forEach((data) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'cards';

  // Construct card content
  const content = `
        <div class="speakers_card flex">
            <div class="speaker_card_img">
                <img src="${data.img}" alt="speaker_card_img">
            </div>
            <div class="speakers_about flex-column">
                <div class="speaker_card_title">
                    <h3>${data.name}</h3>
                </div>
                <div class="speaker_card_description_short">
                    <p>${data.about}</p>
                </div>
                <div class="speaker_card_description">
                    <p>${data.description}</p>
                </div>
            </div>
        
        </div>
    `;

  container.innerHTML += content;
});
