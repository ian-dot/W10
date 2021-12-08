const fs = require('fs');
const index = require('../index');
const colors = require('colors');

// Generate HTML for MyTeam
const generate = (teamArr) => {

    // Arrays to Hold HTML for Each Employee Card by Role
    let managerCardsHTML = [];
    let engineerCardsHTML = [];
    let internCardsHTML = [];
    // Functions to Create New Arrays of Employee Card HTML, Grouping Employees by Role
    function genManagers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Manager") {
                managerCardsHTML.push(employee[i].managerCard);
            }
        }
    }
    function genEngineers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Engineer") {
                engineerCardsHTML.push(employee[i].engineerCard);
            }
        }
    }
    function genInterns(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Intern") {
                internCardsHTML.push(employee[i].internCard);
            }
        }
    }

    // Generate Arrays of Employee Cards
    genManagers(teamArr);
    genEngineers(teamArr);
    genInterns(teamArr);

    return `
    <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="description" content="My Team Profile">   
            <meta name="keywords" content="My Team Profile">
            <meta name="author" content="Ian Elizalde">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <!--Stylesheets-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../styles/style.css">
            <title>My Team</title>
        </head>
        <body>
            <header class="jumbotron">
                <div class="container">
                    <div class="row align-self-center">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </header>
            <main>
                <section class='container'>
                    <div class='row'>
                        ${managerCardsHTML.join(" ")}
                    </div>
                </section>
                <hr class='mt-1 mb-4'/>
                <section class='container'>
                    <div class='row'>
                        ${engineerCardsHTML.join(" ")}
                    </div>
                </section>
                <hr class='mt-1 mb-4'/>
                <section class='container'>
                    <div class='row'>
                        ${internCardsHTML.join(" ")}
                    </div>
                </section>
            </main>
        </body>
    </html>`
}

const generateHTML = (teamArr) => {
    fs.writeFile('./dist/MyTeam.html', generate(teamArr), function(err, result) {
        (err) ? console.log('error', err): console.log(`\r\nSuccessfully wrote MyTeam.html to your dist folder.`.underline.green);
        }
    );
};

module.exports = generateHTML;