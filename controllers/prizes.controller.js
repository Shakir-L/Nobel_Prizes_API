const prizesServices = require("../services/prizes.service")
const validator = require("validator")



//============Question 3================
exports.countAllPrizes = (req, res) => {
    prizesServices.countAllPrizes((error, results) => {
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

//============Question 4================
exports.getLaureatsWithPrizes = (req, res) => {
    prizesServices.getLaureatsWithPrizes((error, results) => {
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


//============Question 5================
exports.getLaureatesWithMoreThanOnePrizes = (req, res) => {
    prizesServices.getLaureatesWithMoreThanOnePrizes((error, results) => {
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


//============Question 6================
exports.getAllPrizesCategories = (req, res) => {
    prizesServices.getAllPrizesCategories((error, results) => {
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


//============Question 7================
exports.getPrizesCategory = (req, res) => {
    prizesServices.getPrizesCategory((error, results) => {
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

exports.getPrizesByYear = (req, res) => {
    prizesServices.getPrizesByYear((error, results) => {
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

exports.getYearsNoPrizes = (req, res) => {
    prizesServices.getYearsNoPrizes((error, results) => {
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

exports.sortYears = (req, res) => {
    let ord = req.params.ord
    prizesServices.sortYears(ord,(error, results) => {
        if (error) {
            return res.status(400).send({
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