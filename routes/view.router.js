var express = require("express");
var router = express.Router();
const prizes_Services = require("../services/prizes.service");
const laureats_Services = require("../services/laureats.service")
const laureatsController = require("../controllers/laureats.controller");

router.post("/", function (req, res) {
    res.redirect(`${req.body.category}`);
});   

router.get("/:category?", (req, res) => {
    let data = req.params.category;
    let laureatsTab = [];
    if (data !== 'undefined') {
        laureats_Services.getLaureatsByCat(data, (error, results)=>{
            if (error){
                return res.status(500).send({success : 0, data:error});
            }
            laureatsTab = results;
        });   
    }

    prizes_Services.getAllPrizesCategories((error, results)=>{
        if (error){
            return res.status(400)
                .send({success : 0, data:error});
        }
        
        res.render("home", {
            categories: results,
            laureates: laureatsTab,
            selected: data
        });
    });
});

module.exports = router;