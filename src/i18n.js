const STR = {
  en: {
    tagline: 'Québec — walk or drive the city',
    loading: 'Loading the map…',
    reading: 'Reading the map…',
    shaping: 'Shaping terrain and rivers…',
    placing: 'Placing the streets…',
    raising: 'Raising the downtown blocks…',
    landmarks: 'Landmarks',
    found: 'found',
    places: 'Landmarks',
    placesHelp: 'Teleport anywhere in Sherbrooke.',
    close: 'Close',
    hint: 'WASD move · Shift sprint · Space jump · C crouch · F car · V camera · M places · R weather · Q quality · click to look',
    exitCar: 'F  exit car',
    enterCar: 'F  enter car',
    rain: 'rain',
    night: 'Night',
    morning: 'Morning',
    day: 'Day',
    afternoon: 'Afternoon',
    dusk: 'Dusk',
    qualityHigh: 'High',
    qualityLow: 'Low',
  },
  fr: {
    tagline: 'Québec — marcher ou conduire dans la ville',
    loading: 'Chargement de la carte…',
    reading: 'Lecture de la carte…',
    shaping: 'Mise en forme du relief et des rivières…',
    placing: 'Placement des rues…',
    raising: 'Élévation des îlots du centre-ville…',
    landmarks: 'Lieux',
    found: 'trouvé',
    places: 'Lieux',
    placesHelp: 'Se rendre à un lieu de Sherbrooke.',
    close: 'Fermer',
    hint: 'WASD bouger · Maj courir · Espace sauter · C s’accroupir · F voiture · V caméra · M lieux · R météo · Q qualité · cliquer pour regarder',
    exitCar: 'F  sortir',
    enterCar: 'F  monter',
    rain: 'pluie',
    night: 'Nuit',
    morning: 'Matin',
    day: 'Jour',
    afternoon: 'Après-midi',
    dusk: 'Crépuscule',
    qualityHigh: 'Élevée',
    qualityLow: 'Légère',
  },
};

let lang = 'en';

export function getLang() {
  return lang;
}

export function t(key) {
  return (STR[lang] && STR[lang][key]) || STR.en[key] || key;
}

function applyStatic() {
  document.documentElement.lang = lang;
  const tag = document.querySelector('#load p');
  if (tag) tag.textContent = t('tagline');
  const hint = document.getElementById('hint');
  if (hint) hint.textContent = t('hint');
  const title = document.querySelector('#menu h2');
  if (title) title.textContent = t('places');
  const help = document.querySelector('#menu p');
  if (help) help.textContent = t('placesHelp');
  const close = document.getElementById('menu-close');
  if (close) close.textContent = t('close');
  const button = document.getElementById('lang');
  if (button) button.textContent = lang === 'fr' ? 'EN' : 'FR';
}

export function setLang(next) {
  lang = next === 'fr' ? 'fr' : 'en';
  try {
    localStorage.setItem('sherbrooke-lang', lang);
  } catch {
    /* private mode */
  }
  applyStatic();
  return lang;
}

export function toggleLang() {
  return setLang(lang === 'fr' ? 'en' : 'fr');
}

export function initLang() {
  let saved = null;
  try {
    saved = localStorage.getItem('sherbrooke-lang');
  } catch {
    saved = null;
  }
  const browser = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  return setLang(saved === 'fr' || saved === 'en' ? saved : browser);
}
