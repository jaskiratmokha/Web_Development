# Cricket World-Cup 2019 Web-scraping Project

## Cric-Info wc-2019 🏏Scraping Using NodeJS modules
#### In this project we will be scraping the cricinfo world cup 2019 fixture webpage and extract all the matches details (team names and results) and store it in different forms (json, excel, pdf).
![cricinfo-19](https://raw.githubusercontent.com/Jas-Script/Web_Development/master/JavaScript%20Module/Cricinfo%20Scrapping%20Activity/pics%20for%20readme/8.PNG)

#### In order to generate an excel file and json file containing details of top 100 songs do the following steps:

#### 1. Open billboard.js in your editor (I used VS Code)
#### 2. Install the following libraries 

##### a. AXIOS
##### b. JSDOM
##### c. EXCEL4NODE
##### d. MINIMIST
##### e. PDF-LIB
#### Command for Installing these npm modules :
```
npm init -y
npm install minimist
npm install excel4node
npm install jsdom
npm install axios
npm install pdf-lib
```

#### After installation run the following command 
```
node billboard.js --src=https://www.billboard.com/charts/hot-100 --excel=100songs.csv --excel=wc2019.csv --dataFolder=data
```
### RESULTS
####  Matches JSON File
![cricinfo-19](https://raw.githubusercontent.com/Jas-Script/Web_Development/master/JavaScript%20Module/Cricinfo%20Scrapping%20Activity/pics%20for%20readme/3.PNG)
####  Teams JSON File
![cricinfo-19](https://raw.githubusercontent.com/Jas-Script/Web_Development/master/JavaScript%20Module/Cricinfo%20Scrapping%20Activity/pics%20for%20readme/4.PNG)
#### EXCEL File
![cricinfo-19](https://raw.githubusercontent.com/Jas-Script/Web_Development/master/JavaScript%20Module/Cricinfo%20Scrapping%20Activity/pics%20for%20readme/2.PNG)


![cricinfo-19](https://raw.githubusercontent.com/Jas-Script/Web_Development/master/JavaScript%20Module/Cricinfo%20Scrapping%20Activity/pics%20for%20readme/7.PNG)
#### Pdf File
![cricinfo-19](https://raw.githubusercontent.com/Jas-Script/Web_Development/master/JavaScript%20Module/Cricinfo%20Scrapping%20Activity/pics%20for%20readme/1.PNG)

![cricinfo-19](https://raw.githubusercontent.com/Jas-Script/Web_Development/master/JavaScript%20Module/Cricinfo%20Scrapping%20Activity/pics%20for%20readme/6.PNG)

### If you like this project, show some love 💖 and star/fork this repository. Thanks for showing your interest 🙏