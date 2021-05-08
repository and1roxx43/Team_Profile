const Manager = require('../lib/Manager');


describe('Manager', () => {

    it('should create an instance of an manager', () => {

        const name = 'Andrew', id = 50, email = 'aq@test.com', officeNumber = 10;

        const mang = new Manager(name, id, email, officeNumber);

        expect(mang.name).toEqual(name);
        expect(mang.id).toEqual(id);
        expect(mang.email).toEqual(email);
        expect(mang.officeNumber).toEqual(officeNumber);
    });


        it('should return officeNumber via constructor', () => {
            const officeNumber = 10;
    
            const mang = new Manager('Andrew', 50, 'aq@test.com', officeNumber);
    
            expect(mang.officeNumber).toEqual(officeNumber);
    });

        it('should return the role via getRole()', () => {

            const name = 'Andrew', id = 50, email = 'aq@test.com', officeNumber = 10;

            const role = 'Manager';

            const mang = new Manager(name, id, email, officeNumber);

            expect(mang.getRole()).toEqual(role);
   
    });
});



