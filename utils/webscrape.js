const {Builder,By, Key, until}= require('selenium-webdriver')
const edge=require('selenium-webdriver/edge')
const Proxy=require('selenium-webdriver/proxy')
const dotenv=require('dotenv') 
const Get_Proxy = require('./ProxyGenerator')
const proxy = require('selenium-webdriver/proxy')
const moment = require('moment')

dotenv.config()
const driverURL= process.env.DRIVER_URL
const service=new edge.ServiceBuilder(driverURL)


async function get_trendings(){

    const proxyList= await Get_Proxy()
    const randomProxy = proxyList[Math.floor(Math.random() * proxyList.length)];

    const proxyConfig=proxy.manual({
        http: randomProxy
    })


    const driver=
        await new Builder()
        .forBrowser('MicrosoftEdge')
        .setEdgeService(service)
        .setProxy(proxyConfig)
        .build()

        try {
            await driver.get('https://twitter.com/login')
            console.log("Opened Twitter Login Page.")

            const username= await driver.wait(until.elementLocated(By.name('text')),500000)
            let twitter_username=process.env.TWITTER_USERNAME
            await username.sendKeys(twitter_username,Key.RETURN) 
            console.log('Username provided');

            const password=await driver.wait(until.elementLocated(By.name('password')),500000)
            let twitter_password=process.env.TWITTER_PASSWORD
            await password.sendKeys(twitter_password, Key.RETURN)
            console.log('Password provided')

            console.log("Credentials entered and login submitted");


            await driver.wait(until.elementLocated(By.xpath("//section[@aria-labelledby='accessible-list-1']")),100000000);
            console.log("Home page loaded");

            let whatsHappeningSection = await driver.findElement(By.xpath("//section[@aria-labelledby='accessible-list-1']"),100000000);
            console.log("Located 'What’s Happening' section");

            let everything = await whatsHappeningSection.findElements(By.xpath("//div[@class='css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1bymd8e']//span[@class='css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3']"),100000000);


            let trending = [];
            
            for (let topic of everything) {
                    let text = await topic.getText() 
                    trending.push(text);
                    if(trending.length===5) break;
            }



            const result={
                trending:trending,
                timeStamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
                ip_address: randomProxy.substring(0, randomProxy.indexOf(':'))
            }

            return result

        }catch(err){
            console.log(err)
        }finally {
            await driver.quit()
            console.log("Browser Closed.")
        }

}

module.exports=get_trendings