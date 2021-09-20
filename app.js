// Define elements
const hamburgerBtn = document.querySelector('.hamburger-button');
const menu = document.querySelector('.nav-links');
const overlay = document.querySelector('#overlay');
const hamburgerBtnLines = document.querySelectorAll('.button-lines');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelector('.project-cards');

// Event listeners
hamburgerBtn.addEventListener('click', function () {
  // Menu slide in/out
  menu.classList.toggle('menu-slider');

  // Hamburger button becomes an x
  hamburgerBtnLines[0].classList.toggle('line-rotate');
  hamburgerBtnLines[1].classList.toggle('display-none');
  hamburgerBtnLines[2].classList.toggle('line-rotate-2');

  // X becomes white anywhere on the document
  changeLineColor('#fcfcfc');

  // Toggle overlay blur
  overlay.classList.toggle('overlay');
});

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    setTimeout(function () {
      menu.classList.add('menu-slider');
      hamburgerBtnLines[0].classList.remove('line-rotate');
      hamburgerBtnLines[1].classList.remove('display-none');
      hamburgerBtnLines[2].classList.remove('line-rotate-2');
      overlay.classList.remove('overlay');
    }, 200);
    scrollCheck();
  });
});

// Projects object

const projects = [
  {
    name: 'Calculator',
    description:
      'A sleek calculator that displays the calculation process step by step. This app also takes a range of key inputs for quick calculations.',
    image: './img/projects/calculator app.webp',
    imageAlt: 'Calculator project image',
    languages: ['HTML', 'SASS', 'JavaScript'],
    hosted: 'https://trusting-hypatia-918c3a.netlify.app/',
    gitLink: 'https://github.com/SamuelJForrest/Calculator',
  },
  {
    name: 'Weather app',
    description:
      'A minimalist weather app that takes user input and returns information from OpenWeatherMap API or a simple error message.',
    image: './img/projects/Weather API app.webp',
    imageAlt: 'Weather API project image',
    languages: ['HTML', 'CSS', 'JavaScript'],
    hosted: 'https://loving-galileo-ea6a7c.netlify.app/',
    gitLink: 'https://github.com/SamuelJForrest/weather-app',
    gitLinkAlt: 'Link to GitHub repository',
  },
];

// Loop over projects and dynamically create project cards for each one

projects.forEach(function (project) {
  // 1. Create div
  let projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  projectCards.append(projectCard);

  // 2. Create h3 and set name
  let projectTitle = document.createElement('h3');
  projectTitle.textContent = project.name;

  // 3. Create hr
  let projectTitleUnderline = document.createElement('hr');

  // 4. Create p and set project description
  let projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = project.description;

  // 5. Create img and set image
  let projectImage = document.createElement('img');
  projectImage.src = project.image;
  projectImage.alt = project.imageAlt;

  // 6. Create p and set languages
  let projectLanguages = document.createElement('p');
  projectLanguages.classList.add('languages');
  projectLanguages.textContent = project.languages.join(' ');

  // 7. Create project links div
  let projectLinks = document.createElement('div');
  projectLinks.classList.add('project-links');

  // 8. create img and append to project links div
  let imageParagraph = document.createElement('p');
  let imageLink = document.createElement('a');
  imageLink.href = project.gitLink;
  imageLink.target = '_blank';
  imageLink.rel = 'noopener noreferrer';
  imageParagraph.append(imageLink);
  let githubLink = document.createElement('img');
  githubLink.src = './img/svgs/github-white.webp';
  githubLink.alt = project.imageAlt;
  imageLink.append(githubLink);

  // 9. Create svg and append to project links div
  let liveLink = document.createElement('a');
  liveLink.classList.add('live-link');
  liveLink.href = project.hosted;
  liveLink.target = '_blank';
  liveLink.rel = 'noopener noreferrer';
  liveLink.ariaLabel = `Link to ${project.name} live project`;
  liveLink.innerHTML = `<svg class="w-6 h-6 mr-2 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></a></svg>`;

  // 10. Append all elements

  projectLinks.append(imageParagraph, liveLink);

  projectCard.append(
    projectTitle,
    projectTitleUnderline,
    projectDescription,
    projectImage,
    projectLanguages,
    projectLinks
  );
});

// Changing hamburger menu colour

// Define svg rectangles
const wave1 = document.querySelector('.wave-1');
const wave2 = document.querySelector('.wave-2');
const wave3 = document.querySelector('.wave-3');

const wave1coords = wave1.getBoundingClientRect();
const wave2coords = wave2.getBoundingClientRect();
const wave3coords = wave3.getBoundingClientRect();

const scrollCheck = function () {
  if (window.pageYOffset < wave1coords.bottom) {
    changeLineColor('#fcfcfc');
  }
  if (window.pageYOffset > wave1coords.bottom) {
    changeLineColor('#22684d');
  }
  if (window.pageYOffset > wave2coords.bottom) {
    changeLineColor('#fcfcfc');
  }
};

const changeLineColor = function (color) {
  hamburgerBtnLines[0].style.backgroundColor = color;
  hamburgerBtnLines[1].style.backgroundColor = color;
  hamburgerBtnLines[2].style.backgroundColor = color;
};

window.addEventListener('scroll', scrollCheck);

console.log(window.pageYOffset);
console.log(wave1coords.bottom);
console.log(window.pageYOffset + wave1coords.bottom);
