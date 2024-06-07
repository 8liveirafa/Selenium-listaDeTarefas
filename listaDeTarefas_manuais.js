import {Builder , By, Key} from "selenium-webdriver"
import {should} from "chai";
should()
 
// Mocha Describe
describe("Adicionar tarefas",function(){
    it("Aprendendo a adicionar tarefa", async function() {
        // Abrir o navegador 
        let driver = await new Builder().forBrowser("firefox").build() 
        // Navegar até o site 
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")
        // Encontrar o input e digitar uma nova tarefa 
        await driver.findElement(By.id('inputTask')).sendKeys('Primeiro teste de Selenium', Key.RETURN)
        //Assertion - Verificação do texto da tarefa
        let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label')).getText()
        .then(function(value) {
            return value
        })
        // Mostrar valor dentro da variável
        console.log(seleniumText)
        seleniumText.should.equal('Primeiro teste de Selenium')
        // Fechar o navegador
        await driver.quit()

    it("Adicionando 10 tarefas manualmente", async function() {
        // Abrir o navegador 
        let driver = await new Builder().forBrowser("firefox").build() 
        // Navegar até o site 
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")
        // Encontrar o input e digitar uma nova tarefa 
        await driver.findElement(By.id('inputTask')).sendKeys('Primeiro', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Segundo', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Terceiro', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Quarto', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Quinto', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Sexto', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Sétimo', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Oitavo', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Nono', Key.RETURN)
        await driver.findElement(By.id('inputTask')).sendKeys('Décimo', Key.RETURN)
        //Assertion - Verificação do texto da tarefa
        let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label', '/html/body/div/section/ul/li[2]/label', '/html/body/div/section/ul/li[3]/label', '/html/body/div/section/ul/li[4]/label', '/html/body/div/section/ul/li[5]/labelc', '/html/body/div/section/ul/li[6]/label', '/html/body/div/section/ul/li[7]/label', '/html/body/div/section/ul/li[8]/label', '/html/body/div/section/ul/li[9]/label', '/html/body/div/section/ul/li[10]/label')).getText()
        .then(function(value) {
            return value
        })
        // Mostrar valor dentro da variável
        console.log(seleniumText)
        seleniumText.should.equal('Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto', 'Sexto', 'Sétimo', 'Oitavo', 'Nono', 'Décimo')
        // Fechar o navegador
        await driver.quit()
        })
    }) 
})   
        





 
       
    

    
    
    
    