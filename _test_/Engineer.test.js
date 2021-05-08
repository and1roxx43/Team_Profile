const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{

    it('should create an instance of an engineer', () => {
        const name = 'Andrew', id = 20, email = 'a.q@test.com', github = 'www.github.com/aquenette' ;

        const eng = new Engineer(name, id, email, github);

        expect(eng.name).toEqual(name);
        expect(eng.id).toEqual(id);
        expect(eng.email).toEqual(email);
        expect(eng.github).toEqual(github);
    });
    
    it('should return the github via getGithub()', () => {

        const github = 'www.github.com/aquenette' ;

        const eng = new Engineer('Andrew', 20, 'aq@test.com', github);

        expect(eng.getGithub()).toEqual(github);
    });

    it('should return the role via getRole()', () => {

        const name = 'Andrew', id = 20, email = 'aq@test.com', github = 'www.github.com/aquenette';

        const role = 'Engineer';

        const eng = new Engineer(name, id, email, github);

        expect(eng.getRole()).toEqual(role);
    });
});