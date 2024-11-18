const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    // Step 1: Set the viewport
    await page.setViewport({
        width: 1171,
        height: 911
    });

    // Step 2: Navigate to the category page
    await page.goto('https://pop.shoptet.cz/obleceni/');

    // Step 3: Wait for the filter element to load and interact with it
    try {
        // #dd[]1 is ID of the input, use it in selector for puppeteer

        const selector = '#dd\\[\\]1'; // Replace with the correct selector for the filter
        // const selector = '';
        // Wait for the filter to appear
        await page.waitForSelector(selector,  { visible: true });

        page.$eval(selector, element => element.click());


        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        // console.log(page.url());
    } catch (error) {
        console.error(`Error interacting with the filter: ${error.message}`);
        process.exit(1);
    }

    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second

    // Step 4: Validate the query parameter in the URL
    const currentUrl = page.url(); // Get the current URL
    // console.log(currentUrl);
    if (!currentUrl.includes('?dd=1')) { // Check if the query parameter is present
        console.error(`Test failed: Expected query parameter "dd=1" not found in URL. Current URL: ${currentUrl}`);
        process.exit(1); // Exit with an error code if validation fails
    } else {
        console.log('Test passed: Query parameter "dd=1" updated correctly');
    }

    // Step 5: Check if the product grid has at least one product
    try {
        const productsSelector = '.products .product'; // Replace with the correct selector for a product item
        await page.waitForSelector(productsSelector, { visible: true }); // Wait for at least one product to appear

        // Count the number of products in the grid
        const productCount = await page.$$eval(productsSelector, products => products.length);
        if (productCount > 0) {
            console.log(`Test passed: Product grid displays ${productCount} product(s).`);
        } else {
            console.error('Test failed: No products found in the grid.');
            process.exit(1);
        }
    } catch (error) {
        console.error(`Error checking product grid: ${error.message}`);
        process.exit(1);
    }

    // Step 5: Close the browser
    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});