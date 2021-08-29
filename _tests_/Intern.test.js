const job = require('../lib/classes');

describe("Intern", () => {
    //getRole() should return "Intern"
    it("getRole() should return 'Intern'", () => {
       const testItem = new job.Intern(); 
       expect(testItem.getRole()).toBe("Intern");
    });
    
    //can get id
    it("can get id", () => {
        const testItem = new job.Intern("Brooks", 200704371, "test@test.com", "Milton High"); 
        expect(testItem.getId()).toBe(`ID: 200704371`);
    });
     //can get email 
     it("can get email", () => {
        const testItem = new job.Intern("Brooks", 200704371, "test@test.com", "Milton High"); 
        expect(testItem.getEmail()).toBe(`Email: <a href="mailto:test@test.com">test@test.com</a>`);
    });

    //test for the school via getSchool()
    it("test for the school using getOfficeNumber()", () => {
        const testItem = new job.Intern("Brooks", 200704371, "test@test.com", "Milton High"); 
        expect(testItem.getSchool()).toBe(`School: Milton High`);
    });
   
});

