const Employee = require('../lib/Employee');

describe('Employee', () => {

    it('should create a new instance of employee', () => {
        const name = 'Andrew', id = 12, email = 'aq@test.com';

        const emp = new Employee(name, id, email);

        expect(emp.name).toEqual(name);
        expect(emp.id).toEqual(id);
        expect(emp.email).toEqual(email);

    });
});

describe('Employee', () => {

    it('should get name via getName()', () => {
        const name = 'Andrew';

        const emp = new Employee(name);

        expect(emp.getName()).toEqual(name);
    });
});

describe('Employee', () => {

    it('should get name via getId()', () => {
        const id = 15;

        const emp = new Employee('Andrew', id);

        expect(emp.getId()).toEqual(id);
    });

    it('should get name via getEmail()', () => {
        const email = 'aq@test.com';

        const emp = new Employee('Andrew', 15, email);

        expect(emp.getEmail()).toEqual(email);
    });
    
    const name = 'Andrew', id = 12, email = 'aq@test.com';
    const role = 'Employee';


    it('should get name via getRole()', () => {

        const emp = new Employee(name, id, email);

        expect(emp.getRole()).toEqual(role);
    });
});