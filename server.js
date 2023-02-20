const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const laureatsRoutes = require("./routes/laureats.router");
const prizesRoutes = require("./routes/prizes.router");
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const path = require('path')
const AppError = require("./utils/appError")
const hbengine = require("express-handlebars")
const view= require("./routes/view.router")


app.set("views", path.join(__dirname, "views"));
app.engine('hbs', hbengine.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req,res) =>{
    res.redirect('/view');
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "Lauréats and Prizes",
            description: "API documentation",
            contact: {
                name: "Shakir LAABANY",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["server.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/view", view);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/laureats", laureatsRoutes);
app.use("/prizes", prizesRoutes);


app.all("*", (req, res, next) => {
    throw new AppError(`Requestet url ${req.path} not found !`, 404);
});
app.listen(3000, () => {
    console.log("Le serveur ecoute sur le port 3000");
});