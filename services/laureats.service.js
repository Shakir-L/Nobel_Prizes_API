const fs = require('fs')
const {typedArray} = require("sharp/lib/is");

const loadLaureats = () => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
//============Question 1================
const getAllLaureats = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        const prize = data.prizes;
        const laureates = prize.map(prize => prize.laureates);
        const laureatesTab = [];
        laureates.forEach(laureate => {
            for (let i in laureate){
                laureatesTab.push({
                    id: laureate[i].id,
                    firstname: laureate[i].firstname,
                    surname: laureate[i].surname
                })
            }
        })
        const laureatesUniques = [...new Set(laureatesTab)]
        callback(null, laureatesUniques);
    } catch (e) {
        return callback([])
    }
}

//============Question 2================
const getLaureatById = (id, callback) => {
    try{
        let dataJSON =  JSON.parse(fs.readFileSync('prize.json').toString()).prizes
        let laureat = [];
        dataJSON.forEach((p)=>{
            if (p.laureates) {
                p.laureates.forEach((la)=>{
                    if (la.id == id) {
                        laureat.push(la);
                    }
                })
            }
        })
        const laureatesUniques = [...new Set(laureat)]
        const finalLaureat = [];
        for (let i in laureatesUniques){
            finalLaureat.push({
                id: laureatesUniques[i].id,
                firstname: laureatesUniques[i].firstname,
                surname: laureatesUniques[i].surname
            })
        }

        return callback(null, finalLaureat);
    }catch (e){
        return callback(e)
    }
}




const updateLaureat = (id, year, category, callback) => {
    let dataJSON = loadLaureats();
    const laureat = laureat.find((l) => l.id == id)
    if(laureat){
        laureat.forEach(l=>{
            if (l.id==id){
                l.firstname = data.firstname;
                l.lastname = data.lastname;
            }
        })
        try{
            const dataJSON = JSON.stringify(laureats)
            fs.writeFileSync('prize.json', dataJSON)
            return callback(null, "Laureat updated successfully!")
        }catch(e){
            return callback("Update failed!")
        }

    }else{
        return callback("Update failed!")
    }
}

const laureatExists = (id) => {
    let laureats = loadLaureats();
    const laureat = laureats.find((l) => l.id == id)
    if(laureat){
        return true;
    }else{
        return false;
    }
}


//============Question 9================

const getDetailedLaureateById = async (id, callback) => {


    try{
        let dataJSON =  JSON.parse(fs.readFileSync('prize.json').toString()).prizes
        let laureat = [];
        dataJSON.forEach((p)=>{
            if (p.laureates) {
                p.laureates.forEach((la)=>{
                    if (la.id == id) {
                        laureat.push({
                            firstname: la.firstname,
                            surname: la.surname,
                        });
                    }
                })
            
            }
            if(p.year){
                if(p.laureates){
                    p.laureates.forEach((l)=>{
                        if(l.id == id){
                            laureat.push({
                                year: p.year,
                                category: p.category,
                                motivation: l.motivation
                            })
                        }
                    })
                }
            }



        }
        
        
        )

        const laureatesUniques = [...new Set(laureat)]


        return callback(null, laureatesUniques);
    }catch (e){
        return callback(e)
    }
}


const deleteLaureate = async(id, year, category, callback)=> {
    try{
        let write = {}
        const dataBuffer = fs.readFileSync('prize.json')
        let data = dataBuffer.toString()
        let dataJSON = JSON.parse(data)

        write.prizes = dataJSON.prizes.map(prize => {
            if(prize.laureates && prize.category == category && prize.year == year)
            { prize.laureates = prize.laureates.filter( laureat => laureat.id != id)
            }
            console.log(prize);
            return prize
        })
        let remove = {}
        remove = JSON.stringify(write)
        fs.writeFileSync("prize.json", remove)
        return callback(null, "Laureat supprime:" + id + " " + category + " " + year + " ")
    } catch(e){
        console.log(e);
        return []
    }
}



const getLaureatsByCat = async(category, callback) => {
    try{
        let dataJSON =  JSON.parse(fs.readFileSync('prize.json').toString()).prizes
        let laureat = [];
        dataJSON.forEach((p)=>{
            if (p.category == category) {
                if (p.laureates) {
                    p.laureates.forEach((la)=>{
                        laureat.push({
                            firstname: la.firstname,
                            surname: la.surname,
                            year:p.year
                        });
                    })
                }               
            
            }}
                
        )

        const laureatesUniques = [...new Set(laureat)]


        return callback(null, laureatesUniques);
    }
    catch(e){

        return callback(e)
    }
}



module.exports = {
    getAllLaureats: getAllLaureats,
    getLaureatById: getLaureatById,
    updateLaureat: updateLaureat,
    laureatExists: laureatExists,
    getDetailedLaureateById: getDetailedLaureateById,
    deleteLaureate : deleteLaureate,
    getLaureatsByCat: getLaureatsByCat
}
