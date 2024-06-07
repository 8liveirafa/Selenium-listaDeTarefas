import {Builder , By, Key} from "selenium-webdriver"
import {should} from "chai";
should()
 
// Mocha Describe
describe("Adicionar tarefas",function(){
    //Mocha IT
    it("Adicionar tarefa com 'for'",async function(){
        // Abrir o navegador 
        let driver = await new Builder().forBrowser("firefox").build() 
    
        // Navegar até o site 
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")
    
        // Encontrar o input e digitar uma nova tarefa     
        let tarefa = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto", "Sexto", "Sétimo", "Oitavo", "Nono", "Décimo"]
        
        for (let i = 0; i <= (tarefa.length-1);i++){
            await driver.findElement(By.id('inputTask')).sendKeys(tarefa[i] + " teste de Selenium", Key.RETURN)
        }
    
        console.log(tarefa)
    
        //Assertion - Verificação do texto da tarefa
        let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label')).getText()
        .then(function(value) {
            return value
        })
    
        let assertion = [[2], [3], [4], [5], [6], [7], [8], [9], [10]]
    
        for(let x = 0; x <=(assertion.length-1);x++){
            seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li['+assertion[[x]]+']/label')).getText()
            .then(function(value) {
                return value
            })
        }
    
        console.log(assertion)
    
        // Mostrar valor dentro da variável
        seleniumText.should.equal(('Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto', 'Sexto', 'Sétimo', 'Oitavo', 'Nono', 'Décimo') + " teste de Selenium")
            
        // Fechar o navegador
        await driver.quit()
    })
})
