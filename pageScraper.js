/* eslint-disable max-len */
// Classe que realiza a navegação no site
const wget = require('wget');
const scraperObject = {
  url: 'http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar',
  async scraper(browser) {
    // Executa uma nova página passando a url
    const page = await browser.newPage();
    console.log(`Acessando a página ${this.url}...`);
    await page.goto(this.url);
    // Acessa o primeiro item do menu lateral onde fica a versão mais recente
    console.log('Acessando a página da versão mais recente do Padrão TISS');
    await page.waitForSelector('.item-2939');
    await page.click('.item-2939');
    // Abre o pdf
    console.log('Abrindo o Componente Organizacional');
    await page.waitForSelector('body > div:nth-child(13) > div > div.col-xs-12.col-sm-8.col-md-9 > div.item-page > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(3) > a');
    await page.click('body > div:nth-child(13) > div > div.col-xs-12.col-sm-8.col-md-9 > div.item-page > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(3) > a');
    // Aguarda para depois pegar a url da página
    await page.waitForTimeout(2500);
    const pdf = await page.url();
    // Com o modulo wget o download do pdf é feito na pasta do projeto
    console.log('Baixando o Componente Organizacional');
    wget.download(pdf, 'Componente_Organizacional.pdf');
    console.log('O arquivo Componente_Organizacional.pdf está na pasta do projeto!');
    // Fecha o navegador após as execuções
    await browser.close();
  },
};
module.exports = scraperObject;
