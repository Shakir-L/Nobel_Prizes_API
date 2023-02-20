const laureatsController = require("../controllers/laureats.controller");
var express = require("express");
var router = express.Router();

//============Question 1================
router.get("/all", laureatsController.getLaureats);
/**
 * @swagger
 * /laureats/all:
 *   get:
 *      description: Used to get all laureatsss
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



//============Question 2================
router.get("/:id", laureatsController.getLaureatsById)
/**
 * @swagger
 * /laureats/{laureatId}:
 *   get:
 *      description: Used to get a laureate by id
 *      tags:
 *          - laureats
 *      parameters:
 *          - in: path
 *            name: laureatId
 *            type: integer
 *            required: false
 *            description: Numeric ID of the laureate to get (Optional)
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */



router.put("/:id/update", laureatsController.updateLaureat);
/**
 * @swagger
 * /laureats/{laureatId}/update:
 *   put:
 *      description: Used to update laureat
 *      tags:
 *          - laureats
 *      parameters:
 *          - in: path
 *            name: laureatId
 *            type: integer
 *            description: laureat Id
 *            required: true
 *          - in: body
 *            name: Laureat
 *            description: laureat data with new values of properties
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: James
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Bond
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id/detailed", laureatsController.getDetailedLaureat)
/**
 * @swagger
 * /laureats/{id}/detailed:
 *   get:
 *      description: Used to get detailed explaination of laureat
 *      tags:
 *          - laureats
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            description: Laureat id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.delete("/delete/:id&:year&:category", laureatsController.deleteLaureate);
/**
 * @swagger
 * /laureats/delete/{id}&{year}&{category}:
 *   delete:
 *      description: Used to delete a laureates by using id, year and category as parameters
 *      tags:
 *          - laureats
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: ID of the laureate to delete
 *            required: true
 *          - in: path
 *            name: year
 *            type: integer
 *            description: Year of the prize
 *            required: true
 *          - in: path
 *            name: category
 *            type: string
 *            description: Category of the prize
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */



router.get("/getLaureatsbyCategory/:category", laureatsController.getLaureatsByCat)
 /**
  * @swagger
  * /laureats/getLaureatsbyCategory/{category}:
  *   get:
  *      description: Used to sort year by number of laureates
  *      tags:
  *          - laureats
  *      parameters:
  *          - in: path
  *            name: category
  *            type: string
  *            description: category to fetch
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
