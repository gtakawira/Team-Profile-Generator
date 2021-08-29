const job = require('../lib/classes');

describe("Employee", () => {
    //getRole() should return "Employee"
    it("getRole() should return 'Employee'", () => {
       const testItem = new job.Employee(); 
       expect(testItem.getRole()).toBe("Employee");
    });

    //can get name
    it("can get name", () => {
        const testItem = new job.Employee("Brooks", 200704371, "test@test.com", "guguvu"); 
        expect(testItem.getName()).toBe("Brooks");
    });
    
    //can get id
    it("can get id", () => {
        const testItem = new job.Employee("Brooks", 200704371, "test@test.com", "guguvu"); 
        expect(testItem.getId()).toBe(`ID: 200704371`);
    });
     //can get email 
     it("can get email", () => {
        const testItem = new job.Employee("Brooks", 200704371, "test@test.com", "guguvu"); 
        expect(testItem.getEmail()).toBe(`Email: <a href="mailto:test@test.com">test@test.com</a>`);
    });

    
   
});

