const { date, url } = require('./function');

const scraperObject = {
    url: `${url}${date()}`,
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
           // await page.click('body > #template_scroller > #template_container > #template_body > .simulcast-calendar > .calendar > .viewport > .content > ol > li > section > div > ol > li > article');
            //body > #template_scroller > #template_container > #template_body > .simulcast-calendar > .calendar > .viewport > .content > ol > li > section > div > ol > li > article
          //  await page.waitFor(1000);
          
        await page.waitForSelector('.calendar');
    
        const result = await page.evaluate(() => {
        
            var a = document.querySelectorAll('.release')
            
            for(var i = 0; i < a.length; i++) {
                let title = document.querySelectorAll('cite')[i].innerContent
                let time = document.querySelectorAll('.available-time')[i].innerContent
                let episode = document.querySelectorAll('.available-episode-link')[i].innerContent
                return { title, time, episode }
            }
            return result;
        })
        console.log(result);
        await browser.close();
    }
}

module.exports = scraperObject;
