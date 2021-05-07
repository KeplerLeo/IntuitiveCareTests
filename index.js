// Classe principal, onde são feitas as execuções
const browserObject = require('./browser');
const scraperController = require('./pageController');
// Cria a instância do navegador e o executa
const browserInstance = browserObject.startBrowser();
// Passa para a instância do navegador o controller
scraperController(browserInstance);
// Fim do teste 1
