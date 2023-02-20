const prizesController = require("../controllers/prizes.controller");
var express = require("express");
var router = express.Router();

//============Question 3================
router.get("/:countAllPrizes", prizesController.countAllPrizes)
/**
 * @swagger
 * /prizes/countAllPrizes:
 *   get:
 *      description: Used to count all prizes decerved
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/getLaureats/WithPrizes", prizesController.getLaureatsWithPrizes)
/**
 * @swagger
 * /prizes/getLaureats/WithPrizes:
 *   get:
 *      description: Used to count all laureats with a Nobel Prize
 *      tags:
 *          - laureats
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


//============Question 5================
router.get("/:getLaureates/WithMore/ThanOnePrizes", prizesController.getLaureatesWithMoreThanOnePrizes)
/**
 * @swagger
 * /prizes/getLaureates/WithMore/ThanOnePrizes:
 *   get:
 *      description: Used to count all laureats with more than on Nobel Prize
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


//============Question 5================
router.get("/:getAll/PrizesCategories", prizesController.getAllPrizesCategories)
/**
 * @swagger
 * /prizes/getAll/PrizesCategories:
 *   get:
 *      description: Used to count all prizes catégories
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */



router.get("/getPrizes/Category", prizesController.getPrizesCategory)
/**
 * @swagger
 * /prizes/getPrizes/Category:
 *   get:
 *      description: Used to count all prizes by catégories
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
 

router.get("/getPrizesBy/Year", prizesController.getPrizesByYear)
/**
 * @swagger
 * /prizes/getPrizesBy/Year:
 *   get:
 *      description: Used to get prizes by years
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */



router.get('/get/NoPrizes/Years', prizesController.getYearsNoPrizes)
/**
 * @swagger
 * /prizes/get/NoPrizes/Years:
 *   get:
 *      description: Used to get a list of year without laureate
 *      tags:
 *          - year
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.get('/get/Prizes/Years/:ord', prizesController.sortYears)
/**
 * @swagger
 * /prizes/get/Prizes/Years/{ord}:
 *   get:
 *      description: Used to sort year by number of laureates
 *      tags:
 *          - year
 *      parameters:
 *          - in: path
 *            name: ord
 *            type: string
 *            description: order to sort ('asc', 'des')
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;