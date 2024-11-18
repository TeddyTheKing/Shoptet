# Shoptet
 CS pro QAA Testera

V souborech filter_akce.js a filter_naSklade.js je kód, který (snad) splňuje požadavky case study.

In files filter_akce.js and filter_naSklade.js there is a code, which (hopefully) fulfils the requirements of the case study.

Prerekvizice 
1. Nainstalovaný node.js -> https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
2. Nainstalovaný puppeteer -> příkazem v bash: npm i puppeteer

Spouštění
1. Bash: node filter_akce.js || node filter_naSklade.js

Výsledky:
1. V případě, že do query je po kliknutí na filter přidán správný parameter, test vrátí: Test passed: Query parameter "dd=1" updated correctly
2. Po kliknutí na filter test vrací počet zobrazených produktů: Test passed: Product grid displays 9 product(s).

Pre-requisition
1. Node.js installed -> https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
2. Installed puppeteer -> command in bash: npm i puppeteer

Running
1. Bash: node filter_action.js || node filter_naSklade.js

Results:
1. If the correct parameter is added to the query after clicking the filter, the test will return: "Test passed: Query parameter "dd=1" updated correctly"
2. After clicking on the filter, it returns the number of displayed products: "Test passed: The product grid displays 9 products."