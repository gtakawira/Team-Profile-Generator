const job = require('../lib/classes');

describe("Engineer", () => {
    //getRole() should return "Engineer"
    it("getRole() should return 'Engineer'", () => {
       const testItem = new job.Engineer(); 
       expect(testItem.getRole()).toBe("Engineer");
    });
    
    //can get id
    it("can get id", () => {
        const testItem = new job.Engineer("Brooks", 200704371, "test@test.com", "guguvu"); 
        expect(testItem.getId()).toBe(`ID: 200704371`);
    });
     //can get email 
     it("can get email", () => {
        const testItem = new job.Engineer("Brooks", 200704371, "test@test.com", "guguvu"); 
        expect(testItem.getEmail()).toBe(`Email: <a href="mailto:test@test.com">test@test.com</a>`);
    });

    //test for the git username via getGithub()
    it("test for the git username using getGithub()", () => {
        const testItem = new job.Engineer("Brooks", 200704371, "test@test.com", "guguvu"); 
        expect(testItem.getGithub()).toBe(`GitHub: <a href="https://github.com/guguvu">guguvu</a> `);
    });
   
});

