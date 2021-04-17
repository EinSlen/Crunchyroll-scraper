const puppeteer = require('puppeteer');

function date() {
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${ye}-${mo}-${da}`;
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.crunchyroll.com/simulcastcalendar?filter=premium&date=${date()}`)

  await page.waitForSelector('.calendar');
  // Get the "viewport" of the page, as reported by the page.
  const time = await page.evaluate(() => {
    return {
      time: document.querySelector('.release')
    };
  });

  console.log('Time:', time);

  await browser.close();
})();
