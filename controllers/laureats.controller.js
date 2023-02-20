const laureatsService = require("../services/laureats.service")
const validator = require("validator")


//============Question 1================
exports.getLaureats = (req, res) => {
    laureatsService.getAllLaureats((error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                data: error
            })
        }
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}
//============Question 2================
exports.getLaureatsById = (req, res) => {
    let laureatId = req.params.id
    laureatId = typeof laureatId === "undefined" ? "" : laureatId
    if (!laureatId || validator.isEmpty(laureatId) || laureatId == "{laureatId}" || laureatId == "undefined") {
        laureatsService.getAllLaureats((error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    } else if (validator.isInt(laureatId)) {
        laureatsService.getLaureatById(laureatId, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    } else {
        return res.status(400).send({
            success: 0,
            data: "Invalid laureatsss id"
        })
    }
}


exports.getDetailedLaureat = (req,res) => {
    const id = req.params.id;
    laureatsService.getDetailedLaureateById(id, (error, results)=>{
        if (error){
            return res.status(400)
                .send({success : 0, data:error});
        }
        return res.status(200).send(results);
    })
}


exports.updateLaureat = (req, res) =>{
    let id = req.params.id;
    let data = {
        firstname: req.body.firstName,
        lastname: req.body.lastName
    }
    laureatsService.updateLaureat(id, data,(error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                data: error
            })  
        }
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}

exports.laureatExists = (laureatId) => {
    return laureatsService.laureatExists(laureatId);
}

exports.deleteLaureate = (req, res) => {
    let id = req.params.id
    let year = req.params.year
    let category = req.params.category
    laureatsService.deleteLaureate(id, year, category, (err, resu) => {
        if(err){
            return res.status(500).send({
                success: 0,
                data: err
            })
        } 
        return res.status(200).send({
            success: 1,
            data: resu
        })
    })
}

exports.getLaureatsByCat = (req, res) => {
    let category = req.params.category
    laureatsService.getLaureatsByCat(category, (error, results) => {
        if (error) {
            return res.status(500).send({
                success: 0,
                data: error
            })
        }
        return res.status(200).send({
            success: 1,
            data: results
        })
    })
}