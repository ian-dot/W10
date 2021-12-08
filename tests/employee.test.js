const Employee = require('../lib/employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id and email address if provided valid arguments", () => {
            const employee = new Employee("Ian Elizalde", 3, "egian93@gmail.com");

            expect(employee.name).toEqual("Ian Elizalde");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("egian93@gmail.com");
        })
    });

    describe("Name", () => {
        it("Should set the Name via the constructor function", () => {
        const input = "Ian Elizalde";
        const expected = {"name": "Ian Elizalde", "id": 1, "email": "name@name.com"};
        
        const result = new Employee(input, 1, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID via the constructor function", () => {
        const input = 100;
        const expected = {"name": "First Last", "id": 100, "email": "name@name.com"};
        
        const result = new Employee("First Last", input, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email via the constructor function", () => {
        const input = "egian93@gmail.com";
        const expected = {"name": "First Last", "id": 1, "email": "egian93@gmail.com"};
        
        const result = new Employee("First Last", 1, input);

        expect(result).toEqual(expected);
        });
    });
});