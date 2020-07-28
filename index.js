const axios = require('axios');
const cheerio = require('cheerio');


const url = {
    "ryans": "https://www.ryanscomputers.com",
    "starttech": "https://www.startech.com.bd/",
};


axios(url.ryans)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const productBox = $('.product-box');
        console.log(productBox);
        const products = [];

        productBox.each(() => {
            const productName = $(this).find('.product-title-grid').text();
            console.log(productName);
        });
    })
    .catch(
        console.log(`Working fine.`)
    );

