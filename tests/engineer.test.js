const Engineer = require('../lib/engineer');

describe("Engineer", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address, GitHub Username, role, and cardHTML if provided valid arguments", () => {
            const engineer = new Engineer("Ian Elizalde", 3, "egian93@gmail.com", "ian-dot");

            expect(engineer.name).toEqual("Ian Elizalde");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("egian93@gmail.com");
            expect(engineer.github).toEqual("ian-dot");
            expect(engineer.role).toEqual("Engineer");
            expect(engineer.engineerCard).toEqual(
            `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card engineer'>
                    <div class='card-body'>
                        <h4 class='card-title text-center'>Ian Elizalde</h4>
                        <h5 class='text-center'><i class="fas fa-laptop-code"></i>&nbsp Engineer</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp 3</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:egian93@gmail.com">egian93@gmail.com</a></li>
                                <li class='list-group-item'>GITHUB USERNAME:&nbsp <a href="https://github.com/ian-dot">ian-dot</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
            )
        })
    });

    describe("GitHub", () => {
        it("Should set the GitHub Username via the constructor function", () => {
            const input = "ian-dot";
            const result = new Engineer("Name", 1, "name@name.com", input).getGithub();

            expect(input).toEqual(result);
        });
    });
});