class Readme {
    constructor(
      title, 
      subtitle, 
      description, 
      installation, 
      usage, 
      license, 
      contributing, 
      test, 
      username, 
      email) {
      this.title = title;
      this.subtitle = subtitle;
      this.description = description;
      this.installation = installation;
      this.usage = usage;
      this.license = license;
      this.contributing = contributing;
      this.test = test;
      this.username = username;
      this.email = email;
    }
    printData() {
      console.log(`
      ${this.title}
      ${this.subtitle}
      ${this.description}
      ${this.installation}
      ${this.usage}
      ${this.license}
      ${this.contributing}
      ${this.test}
      ${this.username}
      ${this.email}`);
    }
  }
  module.exports = Readme;