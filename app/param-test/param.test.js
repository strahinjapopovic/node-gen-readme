const Readme = require("../param.js");
describe('constructor params should match testing values', () => {
    describe('testing values and received must be equal strings', () => {
        it("testing params at the statement should match arguments string values asigned", () => {
            const title = "test-title"; 
            const subtitle = "test-subtitle";
            const description = "test-description";
            const installation = "test-installation";
            const usage = "test-usage";
            const license = "test-license";
            const contributing = "test-contributing";
            const test = "test-test";
            const username = "test-username";
            const email = "test-email";
            const objReadme = new Readme(title, subtitle, description, installation, usage, license, contributing, test, username, email);
            expect(objReadme.title).toBe(title);
            expect(objReadme.subtitle).toBe(subtitle);
            expect(objReadme.description).toBe(description);
            expect(objReadme.installation).toBe(installation);
            expect(objReadme.usage).toBe(usage);
            expect(objReadme.license).toBe(license);
            expect(objReadme.contributing).toBe(contributing);
            expect(objReadme.test).toBe(test);
            expect(objReadme.username).toBe(username);
            expect(objReadme.email).toBe(email);
            objReadme.printData();
        });
    });
});