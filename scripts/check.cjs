const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({headless:true, ...(process.env.CHROME_PATH ? {executablePath:process.env.CHROME_PATH} : {})});
  const directory = path.resolve(__dirname, '../test-results');
  fs.mkdirSync(directory, {recursive:true});
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',message=>{if(['error','warning'].includes(message.type()))errors.push(message.text());});
  try {
    for (const [width,height] of [[1440,900],[1024,768],[768,1024],[390,844],[320,667]]) {
      await page.setViewportSize({width,height});
      await page.goto(process.env.PORTFOLIO_URL || 'http://127.0.0.1:5193');
      await page.waitForSelector('[data-case="C389"]');
      assert.deepEqual(await page.locator('a[href^="https://t.me/"]').evaluateAll(links=>links.map(link=>link.href)),['https://t.me/AlexMakmak','https://t.me/AlexMakmak']);
      assert.equal(await page.locator('#case-list tr').count(),21);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false, 'Horizontal overflow at '+width);
      assert.equal(await page.evaluate(()=>document.querySelector('#projects').getBoundingClientRect().top<innerHeight),true,'Next section not visible at '+width);
      assert.equal(await page.evaluate(()=>Array.from(document.querySelectorAll('a,button,input')).filter(el=>getComputedStyle(el).display!=='none').some(el=>{const r=el.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1)&&!el.classList.contains('skip');})),false,'Control outside viewport at '+width);
      await page.screenshot({path:path.join(directory,'viewport-'+width+'.png')});
    }
    await page.getByRole('button',{name:'High',exact:true}).click();
    assert.equal(await page.locator('#case-list tr').count(),2);
    await page.getByRole('button',{name:'Все 21',exact:true}).click();
    await page.getByRole('searchbox',{name:'Поиск тест-кейсов'}).fill('C389');
    assert.equal(await page.locator('#case-list tr').count(),1);
    await page.locator('[data-case="C389"]').click();
    assert.equal(await page.getByRole('dialog').isVisible(),true);
    assert.match(await page.getByRole('dialog').innerText(),/нажать крестик/);
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('dialog').isVisible(),false);
    await page.getByRole('searchbox').fill('nothing-to-match');
    assert.match(await page.locator('#case-list').innerText(),/Ничего не найдено/);
    await page.getByRole('searchbox').fill('');
    for(const id of ['skyrexio','ecommerce','api','mobile','pytest']){
      await page.locator('[data-project="'+id+'"]').click();
      assert.equal(await page.getByRole('dialog').isVisible(),true);
      await page.getByRole('button',{name:'Закрыть',exact:true}).click();
    }
    const baseURL=(process.env.PORTFOLIO_URL || 'http://127.0.0.1:5193/').replace(/\/?$/,'/');
    for(const file of ['resume.pdf','test-cases.csv','test-cases.xlsx']){
      const response=await page.request.get(baseURL+'assets/docs/'+file);
      assert.equal(response.status(),200,file);
      assert.ok((await response.body()).length>1000,file);
    }
    assert.deepEqual(errors,[]);
    assert.equal(await page.locator('a[href*="recommendation.pdf"]').count(),0);
    console.log('PASS: 5 viewport screenshots, overflow and first-fold checks, Telegram contacts, 21 cases, search, priority filter, 5 project dialogs, Escape, 3 downloads, no browser errors.');
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
