const inquirer = require("inquirer");
const fs = require("fs/promises");
const { markdownGen } = require("./utils/utils");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Insert Title: ",
    default: "Node.js Generator README.md",
  },
  {
    type: "input",
    name: "subtitle",
    message: "Insert Sub-Title: ",
    default: "Generator README.md file with ` Node.js v20.12.2 `, ` npm-v10.5.2 ` and ` Inquirer-v8.2.4 `",
  },
  {
    type: "input",
    name: "description",
    message: "Insert Description: ",
    default: "Application `node-readme-gen` or Node Generator README application provides a comperhensive README.md file as a resulting output to help developers to create comperhensive README files more quickly then before. It is developed by using ` Node.js v20.12.2 ` as JavaScript runtime environment, ` Node Package Manager npm-v10.5.2 ` an public registry or library interface and `Inquirer v8.2.4` an question-answer handler. Application can be invoked from ` ~/app> ` directory by using bash terminal command ` > $ node index.js `."
  },
  {
    type: "input",
    name: "installation",
    message: "Insert Installation instructions: ",
    default: `## Install: \`Node.js\` runtime environment \`v20.12.2\`, Node Package Manager \`npm-v10.5.2\` and \`Inquirer v8.2.4\`. Then run following commands.
\`\`\`bash
> $ npm init -y
> $ npm install inquirer@8.2.4
> $ node index.js # after installation application is invoked by this command from Git Bash terminal
\`\`\``,
  },
  {
    type: "input",
    name: "usage",
    message: "Insert Usage Info: ",
    default: "It is used for generating professional README file by using Inquirer and NPM utilities under Node.js runtime environment."

  },
  {
    type: "rawlist",
    name: "license",
    pageSize: 31,
    message: "Select License type: ",
    choices:
      [
        "Apache 2.0 License", //-------------[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        "Boost Software License 1.0", //-----[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
        "BSD 3-Clause License", //-----------[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
        "BSD 2-Clause License", //-----------[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
        "Creative Commons (CC0 1.0)", //-----[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
        "Attribution 4.0 International", //-------------------------------[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
        "Attribution-ShareAlike 4.0 International", //--------------------[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
        "Attribution-NonCommercial 4.0 International", //-----------------[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
        "Attribution-NoDerivates 4.0 International", //-------------------[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)
        "Attribution-NonCommmercial-ShareAlike 4.0 International", //-----[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
        "Attribution-NonCommercial-NoDerivatives 4.0 International", //---[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
        "Eclipse Public License 1.0", //----------[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
        "GNU GPL v3", //---------[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        "GNU GPL v2", //---------[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
        "GNU AGPL v3", //--------[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
        "GNU LGPL v3", //--------[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
        "GNU FDL v1.3", //-------[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)
        "The Hippocratic License 2.1", //----------[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)
        "The Hippocratic License 3.0", //----------[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)
        "IBM Public License Version 1.0", //----[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
        "ISC License (ISC)", //---------[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        "The MIT License", //---------[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        "Mozilla Public License 2.0", //----------[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
        "ODC Attribution License (BY)", //----------------------[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
        "ODC Open Database License (ODbL)", //------------------[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
        "Public Domain Dedication and License (PDDL)", //-------[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)
        "The Perl License", //---------[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
        "SIL Open Font License 1.1", //---------[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)
        "The Unlicense", //---------[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        "WTFPL", //---------[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
        "The zlib/libpng License", //----------[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
      ],
    default: "The MIT License",
  },
  {
    type: "input",
    name: "contributing",
    message: "Insert Contributing Guidelines: ",
    default: "Contributors reffer to Question and contact section.",
  },
  {
    type: "input",
    name: "test",
    message: "Insert Tests Instructions: ",
    default: "Tests are performed by invoking ` > $ node index.js ` commands but before it should be installed packages under section Installation.",
  },
  {
    type: "input",
    name: "username",
    message: "Insert Your GitHub Username: ",
    default: "strahinjapopovic",
  },
  {
    type: "input",
    name: "email",
    message: "Insert Your Email Address: ",
    default: "spope.mails@gmail.com",
  },
];

const writeReadme = async (file, data) => {
  await fs.appendFile(file, data);
}

const main = async () => {
  const dataAnswer = await inquirer.prompt(questions);
  //writeReadme("../README.md", markdownGen(dataAnswer));
  writeReadme("./readme-test/README.md", markdownGen(dataAnswer));
}
main();
