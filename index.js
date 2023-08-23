const puppeteer = require('puppeteer');
const fs = require('fs')

//Cria um bloco e excuta o bloco (assincrona)
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://instagram.com/rocketseat_oficial');
    
    const imgList = await page.evaluate(() => {
        //Toda essa função será executada no browser
        //Pegar todas as imagens que estao na parte de posts
        const nodeList = document.querySelectorAll('article img')
        //Transformar o NodeList em array
        const imgArray = [...nodeList]
        //Transformar os nodes (elementos html) em objetos JS
        const imgList = imgArray.map( ({src}) => ({
            src
        }))

        console.log(list)
        
        //Colocar para fora da funcao
        return imgList
    });


    //Escrever os dados em um arquivo local (json)
    //Formatar o imgList em json com 3 atributos (segundo -> null / terceiro -> formatacao (dois espacos))
    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
        if(err) throw new Error('something went wrong')

        console.log('well done!')
    })


    await browser.close();
})();