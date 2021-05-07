// Controla a coleta por meio do pageScraper
const pageScraper = require('./pageScraper');
/**
* @param {browser} browserInstance Recebe uma instância do navegador.
* E passa ao Scraper para realizar a navegação no site.
*/
async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (err) {
    console.log('Não foi possível executar a instância do navegador =>  ', err);
  }
}
module.exports = (browserInstance) => scrapeAll(browserInstance);
