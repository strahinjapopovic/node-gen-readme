class Readme {
  constructor(title, subtitle, description, installation, usage, license, contributing, test, username, email) {
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

    if (this.title != "test-title") {
      throw new Error(`${this.title} != test-title`);
    }
    else {
      console.log(`${this.title} == test-title`);
    }

    if (this.subtitle != "test-subtitle") {
      throw new Error(`${this.subtitle} != "test-subtitle`);
    }
    else {
      console.log(`${this.subtitle} == test-subtitle`);
    }

    if (this.description != "test-description") {
      throw new Error(`${this.description} != test-description`);
    }
    else {
      console.log(`${this.description} == test-description`);
    }

    if (this.installation != "test-installation") {
      throw new Error(`${this.installation} != test-installation`);
    }
    else {
      console.log(`${this.installation} == test-installation`);
    }

    if (this.usage != "test-usage") {
      throw new Error(`${this.usage} != test-usage`);
    }
    else {
      console.log(`${this.usage} == test-usage`);
    }

    if (this.license != "test-license") {
      throw new Error(`${this.license} != test-license`);
    }
    else {
      console.log(`${this.license} == test-license`);
    }

    if (this.contributing != "test-contributing") {
      throw new Error(`${this.contributing} != test-contributing`);
    }
    else {
      console.log(`${this.contributing} == test-contributing`);
    }

    if (this.test != "test-test") {
      throw new Error(`${this.test} != test-test`);
    }
    else {
      console.log(`${this.test} == test-test`);
    }

    if (this.username != "test-username") {
      throw new Error(`${this.username} != test-username`);
    }
    else {
      console.log(`${this.username} == test-username`);
    }

    if (this.email != "test-email") {
      throw new Error(`${this.email} != test-email`);
    }
    else {
      console.log(`${this.email} == test-email`);
    }
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