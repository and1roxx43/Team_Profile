const { it, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    
    it('should return an instance of intern', () => {
        
        const name = 'Andrew', id = 5, email = 'intern1@test.com', school = 'Monash';

        const int = new Intern(name, id, email, school);

        expect(int.name).toEqual(name);
        expect(int.id).toEqual(id);
        expect(int.email).toEqual(email);
        expect(int.school).toEqual(school);
    });

    it('should return school via getSchool()', () => {

        const school = 'Monash';

        const int = new Intern('Andrew', 5, 'intern1@test.com', school);

        expect(int.getSchool()).toEqual(school);
    });

    it('should return role via getRole()', () => {

        const role = 'Intern';

        const int = new Intern('Andrew', 5, 'intern1@test.com', 'Monash');

        expect(int.getRole()).toEqual(role);
    });
});
