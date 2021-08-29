const job = require('../lib/classes');

describe("Manager", () => {
    //getRole() should return "Manager"
    it("getRole() should return 'Manager'", () => {
       const testItem = new job.Manager(); 
       expect(testItem.getRole()).toBe("Manager");
    });
    
    //can get id
    it("can get id", () => {
        const testItem = new job.Manager("Brooks", 200704371, "test@test.com", 2639413564); 
        expect(testItem.getId()).toBe(`ID: 200704371`);
    });
     //can get email 
     it("can get email", () => {
        const testItem = new job.Manager("Brooks", 200704371, "test@test.com", 2639413564); 
        expect(testItem.getEmail()).toBe(`Email: <a href="mailto:test@test.com">test@test.com</a>`);
    });

    //test for the office number via getOfficeNumber()
    it("test for the office number using getOfficeNumber()", () => {
        const testItem = new job.Manager("Brooks", 200704371, "test@test.com", 2639413564); 
        expect(testItem.getofficeNumber()).toBe(`Office Number: <a href="tel:2639413564">2639413564</a>`);
    });
   
});

