const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getArguments = (arguments) => {
    let argumentsString = '';

    for (let i = 0; i < arguments.length; i++) {
        const { argumentName, options, callback, argumentDescription } = arguments[i];
        if (argumentName == "options") {
            argumentsString += `#### \`options\`

${argumentDescription}

| Name      | Type    | Required | Description          | Default     |
| --------- | ------- | -------- | -------------------- | ----------- |
${options.map(({ optionName, optionType, isOptionRequired, optionDescription, optionDefaultValue }) => {
                return `| \`${optionName}\` | ${optionType} | ${isOptionRequired ? "yes" : "no"} | ${optionDescription} | ${optionDefaultValue} |`;
            }).join("\n")}
`
        }
        else if (argumentName == "callback") {
            argumentsString += `#### \`callback(${callback.map(({ parameterName }) => parameterName).join(", ")})\`

${argumentDescription}

| Name      | Type     | Description          |
| --------- | -------  | -------------------- |
${callback.map(({ parameterName, parameterType, parameterDescription }) => {
                return `| \`${parameterName}\` | ${parameterType} | ${parameterDescription} |`;
            }).join("\n")}
`
        } else {
            argumentsString += `#### \`${argumentName}\`

${argumentDescription}

| Name      | Type    | Required | Description          | Default     |
| --------- | ------- | -------- | -------------------- | ----------- |
| \`${argumentName}\` | type | yes | ${argumentDescription} | |
`
        }

    }

    return argumentsString;
}

const getMethod = (namespace, method) => {
    return `
### \`${method.methodName}()\` ${method.worksOnControl ? `<div class="label control"></div>` : ""}${method.worksOnWidget ? `<div class="label widget"></div>` : ""}

\`${namespace}.${method.methodName}(${method.arguments.map(a => a.argumentName).join(", ")})\`

${method.methodDescription}

\`\`\`javascript
buildfire.example.method(
  {
    option1: "Something",
  },
  (err, data) => {
    console.log(err, data);
  }
);
\`\`\`

${getArguments(method.arguments)}

---
`
}

const getRequirements = (widgetrequire, controlrequire, pluginJsonRequire, pluginJsonFeatureName) => {
    if (!widgetrequire && !controlrequire) return "";

    let requirements = "## Requirements\n";

    if (widgetrequire) {
        requirements += `
### Widget

Include \`example.js\` file in widget header right after the \`buildfire.min.js\`

\`\`\`html
<head>
<!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/example.js"></script>
</head>
\`\`\`
`
    }

    if (controlrequire) {
        requirements += `
### Control

Include \`example.js\` file in control header right after the \`buildfire.min.js\`

\`\`\`html
<head>
<!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/example.js"></script>
</head>
\`\`\`
`
    }

    if (pluginJsonRequire) {
        requirements += `
### \`plugin.json\`

In [plugin.json](/docs/plugin-json-file) add \`${pluginJsonFeatureName}\` in your features array \`"features" : [{"name" : "${pluginJsonFeatureName}"}]\`
`
    }

    return requirements;
}

const craetePage = (namespace, description, widgetrequire, controlrequire, pluginJsonRequire, pluginJsonFeatureName, methods) => {
    let content = `# \`${namespace}\`

${description}

${getRequirements(widgetrequire, controlrequire, pluginJsonRequire, pluginJsonFeatureName)}

## Methods
`;

    for (let i = 0; i < methods.length; i++) {
        const method = methods[i];
        content += getMethod(namespace, method);
    }

    fs.writeFile('doc.md', content, () => {
        console.log("DONE!")
        process.exit(0);
    })
};

let askQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        })
    })
}

let run = async () => {
    let namespace = await askQuestion("What is the namespace? ");
    let description = await askQuestion("What is a description? ");
    let widgetrequire = "y" == await askQuestion("Do you need to include it in header on widget side? y/n ");
    let controlrequire = "y" == await askQuestion("Do you need to include it in header on control side? y/n ");
    let pluginJsonRequire = "y" == await askQuestion("Do you need to include it in plugin.json? y/n ");
    let pluginJsonFeatureName = pluginJsonRequire ? await askQuestion("What is the name of the feature? ") : undefined;
    let numberOfMethods = await askQuestion("How many methods does it have? ");
    let methods = [];
    for (let i = 0; i < numberOfMethods; i++) {
        let methodName = await askQuestion(`What is method ${i + 1} name? `);
        let methodDescription = await askQuestion(`What is the ${methodName} description? `);
        let worksOnWidget = "y" == await askQuestion(`Does ${methodName} work on widget? y/n `);
        let worksOnControl = "y" == await askQuestion(`Does ${methodName} work on control? y/n `);
        let argumentsNumber = await askQuestion(`How many arguments does ${methodName} have? `);
        let arguments = [];
        for (let j = 0; j < argumentsNumber; j++) {
            let argumentName = await askQuestion(`What is the argument ${j + 1} name? Write 'o' for options, 'c' for callback or custom argument name `);
            let argumentDescription = await askQuestion(`What is the ${argumentName} description? `);
            let options = [], callback = [];
            if (argumentName == "o") {
                argumentName = "options"
                let numberOfOptions = await askQuestion("How many options does it have? ")
                for (let k = 0; k < numberOfOptions; k++) {
                    let optionName = await askQuestion(`What is the option ${k + 1} name? `);
                    let optionType = await askQuestion(`What is the ${optionName} type? `);
                    let isOptionRequired = "y" == await askQuestion(`Is ${optionName} required? y/n `);
                    let optionDescription = await askQuestion(`What is the ${optionName} description? `);
                    let optionDefaultValue = await askQuestion(`What is the ${optionName} default value? `);
                    options.push({ optionName, optionType, isOptionRequired, optionDescription, optionDefaultValue });
                }
            }
            if (argumentName == "c") {
                argumentName = "callback"
                let numberOfOptions = await askQuestion("How many parameters does the callback return? ")
                for (let k = 0; k < numberOfOptions; k++) {
                    let parameterName = await askQuestion(`What is the parameter ${k + 1} name? Write 'e' for error`);
                    let parameterType = parameterName == 'e' ? "string" : await askQuestion(`What is the ${parameterName} type? `);
                    let parameterDescription = parameterName == 'e' ? `error string, \`null\` when operation is successful` : await askQuestion(`What is the ${parameterName} description? `);
                    if (parameterName == "e") parameterName = "err"
                    callback.push({ parameterName, parameterType, parameterDescription })
                }
            }

            arguments.push({ argumentName, options, callback, argumentDescription })
        }

        methods.push({
            methodName,
            arguments,
            worksOnWidget,
            worksOnControl,
            methodDescription
        })
    }

    return craetePage(namespace, description, widgetrequire, controlrequire, pluginJsonRequire, pluginJsonFeatureName, methods);
}

run();