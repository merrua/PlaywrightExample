//@ts-check

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless: false, slowMo: 100});
  const context = await browser.newContext({ recordVideo: { dir: './videos' } });

  // Create pages, interact with UI elements, assert values
  
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/');

  // take screenshot
  await page.screenshot({path: './screenshots/example.png'});

  await browser.close();
})();