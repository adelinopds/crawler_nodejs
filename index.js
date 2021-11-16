import crawler from 'puppeteer'

(async function(){
  try {
    const browser = await crawler.launch()
    const [page] = await browser.pages()
    const url = 'https://www.infomoney.com.br/ferramentas/altas-e-baixas/'

    await page.goto(url)

    const data = await page.$$eval('table > tbody > tr td',  
      tds => tds.map(td => td.innerText)
    )

    console.info(data)

    await browser.close()
  } catch (error) {
    console.error(error)
  }
})()