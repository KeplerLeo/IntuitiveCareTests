// Classe que inicia o navegador
const puppeteer = require('puppeteer');
/**
 * Função que inicia o navegador
 * @return {browser} navegador
 */
async function startBrowser() {
  let browser;
  try {
    console.log('Abrindo o navegador...');
    // Inicia o navegador com o método launch
    browser = await puppeteer.launch({
      // Exibe o navegador para que possa acompanhar o script sendo executado
      'headless': false,
      // Desabilita a utilização de sandboxes no navegador
      'args': ['--disable-setuid-sandbox'],
      // Permite a utilização de sites com protocolos https não seguros
      'ignoreHTTPSErrors': true,
    });
  } catch (err) {
    // Informa o erro
    console.log('Erro ao abrir o navegador => : ', err);
  }
  // Retorna o navegador
  return browser;
}
module.exports = {startBrowser};
