const fs = require('fs')


const getListPrizes = async () => {
    try{
        const dataBuffer = fs.readFileSync("prize.json");
        let dataJSON = dataBuffer.toString();
        dataJSON = JSON.parse(dataJSON);
        dataJSON = dataJSON.prizes.filter(p => p.laureates)
        return dataJSON;
    }catch (y){
        return [];
    }
}


//============Question 3================
const countAllPrizes = (callback) => {
    try {
        let dataJSON =  JSON.parse(fs.readFileSync('prize.json').toString()).prizes
        let years = [];
        dataJSON.forEach((p)=>{
            if(p.year){
                years.push(p);
            }
        })
        return callback(null, years.length)
    }catch (y) {
        return callback(y)
    }
}

//============Question 4================
const getLaureatsWithPrizes = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json');
        let dataJSON = dataBuffer.toString();
        dataJSON = JSON.parse(dataJSON);
        dataJSON = dataJSON.prizes.filter(prize => prize.laureates);
        const laureates = dataJSON.map(prize => prize.laureates).flat(Infinity);
        console.log(laureates);
        let laureatsTab = new Set();

        laureates.forEach(laureate => {
            laureatsTab.add(laureate.id);
            
}
);
        return callback(null,[laureatsTab.size]);
    } catch (y) {
        return callback([])
    }
}

//============Question 5================
const getLaureatesWithMoreThanOnePrizes = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        const prizes = data.prizes;
        const laureatTab = [];
        const finalTab = [];

        prizes.forEach(p => {
            if (p.laureates) {
                p.laureates.forEach(laureat => {
                    if (!laureatTab.find(
                        l => l.id === laureat.id))
                        laureatTab.push({id: laureat.id});
                    else if (!finalTab.find(
                        l => l.id === laureat.id))
                    finalTab.push({firstname: laureat.firstname, surname: laureat.surname,id: laureat.id, nbrOfPrize: 2});
                    else
                    finalTab.find(l => l.id === laureat.id).nbrOfPrize += 1;
                });
            }
        });

        return callback (null, finalTab)

    } catch (y) {
        return callback([])
    }
}


//============Question 6================
const getAllPrizesCategories = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        const prizes = data.prizes;
        const category = prizes.map(prizes => prizes.category);
        let categories = [];
        for (let i in category) {
            categories.push(category[i])
        }
        const categoriesUnique = [...new Set(categories)]

        return callback (null, categoriesUnique);
    }catch (y) {
        return callback(y);
    }
}



//============Question 7================
const getPrizesCategory = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        const prizes = data.prizes.filter(prize => prize.laureates);
        const category = prizes.map(prizes => prizes.category);
        let categories = [];
        for (let i in category) {
            categories.push(category[i])
        }
        const categoriesUnique = [...new Set(categories)]


        const laureatsByCategories = [];

        categoriesUnique.forEach(category => {
            let laureats = prizes.filter(prizes => prizes.category === category).map(prizes => prizes.laureates).flat(Infinity);
            let laureatsTab = [];
            laureats.forEach(laureat => {
                laureatsTab.push({
                    id: laureat.id,
                    firstname: laureat.firstname,
                    surname: laureat.surname
                    })  
            })

            laureatsByCategories.push({
                category: category,
                laureats: laureatsTab.length
            })
        })
        let max = { laureats: 0 };
        laureatsByCategories.forEach(category =>{
            if(category.laureats > max.laureats){
                max = category;
            }
            
        })

        return callback (null, max);

    }catch (y) {
        return callback(y);
    }
}


//============Question 8================
const getPrizesByYear = async (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        const prize = data.prizes;
        const years = prize.map(prize => prize.year);
        let yearsUnique = [...new Set(years)]
        const laureatesByYear = [];
        yearsUnique.forEach(year => {
            let laureates = prize.filter(prize => prize.year === year).map(prize => prize.laureates);
            let laureatesTab = [];
            laureates.forEach(laureate => {
                for (let i in laureate) {
                    laureatesTab.push({
                        id: laureate[i].id,
                        firstname: laureate[i].firstname,
                        surname: laureate[i].surname
                    })
                }
            })
            const laureatesUniques = [...new Set(laureatesTab)]
            laureatesByYear.push({
                year: year,
                laureates: laureatesUniques.length
            })
        })
        return callback(null, laureatesByYear);
    } catch (y) {
        return callback(y);
    }
}

//===========Question 10================
const getYearsNoPrizes = async (callback) => {
    try{
        dataJSON = await getListPrizes();
        const noYears = [];
        for(let i = 1901; i < 2023; i++)
            noYears.push(i);
        dataJSON.forEach((prize)=>{
            if (noYears.find(y => y == prize.year))
                noYears.splice(noYears.findIndex(y => y == prize.year), 1)              
        });
        
        return callback(null, noYears);
    }catch (e){
        return [];
    }
}


//============Question 11================

const sortYears = async (ordre, callback) => {
    try{
        const dataBuffer = fs.readFileSync('prize.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        const prize = data.prizes;
        const years = prize.map(prize => prize.year);
        let yearsUnique = [...new Set(years)]
        const laureatesByYear = [];
        yearsUnique.forEach(year => {
            let laureates = prize.filter(prize => prize.year === year).map(prize => prize.laureates);
            let laureatesTab = [];
            laureates.forEach(laureate => {
                for (let i in laureate) {
                    laureatesTab.push({
                        id: laureate[i].id,
                        firstname: laureate[i].firstname,
                        surname: laureate[i].surname
                    })
                }
            })
            const laureatesUniques = [...new Set(laureatesTab)]
            laureatesByYear.push({
                year: year,
                laureates: laureatesUniques.length
            })
        })



        let laureatesByYearSorted = [...new Set(laureatesByYear)]
        let finalTAB = [];

        if(ordre == "ASC" || ordre == "asc") {
            finalTAB = laureatesByYearSorted.sort((a, b) => a.laureates - b.laureates)
        } else if(ordre == 'DES' || ordre == 'des') {
            finalTAB = laureatesByYearSorted.sort((a, b) => b.laureates - a.laureates)
        } else {
            console.log('error, please enter ASC or DES')
        }

        return callback(null, finalTAB);
    }catch (e){
        console.log(e);
        return [];
    }
}




module.exports = {
    countAllPrizes: countAllPrizes,
    getLaureatsWithPrizes: getLaureatsWithPrizes,
    getLaureatesWithMoreThanOnePrizes: getLaureatesWithMoreThanOnePrizes,
    getAllPrizesCategories: getAllPrizesCategories, 
    getPrizesCategory: getPrizesCategory,
    getPrizesByYear: getPrizesByYear,
    getYearsNoPrizes: getYearsNoPrizes,
    sortYears: sortYears
}