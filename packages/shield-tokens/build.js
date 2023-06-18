const StyleDictionary = require("style-dictionary").extend(
  `${__dirname}/config.js`
);
const {getTypeScriptType } =
  StyleDictionary.formatHelpers;

console.log("Build started...");
console.log("\n==============================================");

StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ contents}) => {
    try {
      if (!contents) return;
      // const obj = JSON.parse(contents);
      // const pathParts = filePath.replace(`${__dirname}/tokens/`, '')
      //     .replace('.json', '').split('/').join('-');
      // const output = {};
      //
      // for (const key in obj) {
      //     if (obj.hasOwnProperty(key)) {
      //         output[`${pathParts}-${key}`] = obj[key];
      //     }
      // }
      return JSON.parse(contents);
    } catch (e) {
      console.log(e);
    }
  },
});

//Format css
StyleDictionary.registerFormat({
  formatter: ({ dictionary, options }) => {
      const capitalize = (str, lower = false) =>
          (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    const arrCategory = [];
    const presenters = [
      "Animation",
      "Border",
      "BorderRadius",
      "Color",
      "Easing",
      "FontFamily",
      "FontSize",
      "FontWeight",
      "LetterSpacing",
      "LineHeight",
      "Opacity",
      "Shadow",
      "Spacing",
    ];
    return `
         :root{
                ${dictionary.allProperties
                  .map((prop) => {
                    const arrFilePath = prop.filePath.split("/").slice(-2);
                    const nameCategory = arrFilePath.map(x => capitalize(x))
                      .join(" ")
                      .replace(".json", "");
                    let propFormat = "";
                    if (!arrCategory.includes(nameCategory)) {
                      arrCategory.push(nameCategory);
                      propFormat += `/**\n\t* @tokens ${(
                        nameCategory + "s"
                      )}\n\t* @presenter ${presenters.find((x) =>
                        x.trim().toLowerCase().includes(arrFilePath[0].trim())
                      )}\n  */${propFormat}
                `;
                    }
                    propFormat += `--${prop.name}: ${prop.value};\n`;
                    if (propFormat.comment)
                      propFormat += ` /*${prop.comment}*/`;
                    return propFormat;
                  })
                  .join("")}
        }`;
  },
  name: "css/variables",
});

//Format js
StyleDictionary.registerFormat({
  formatter: ({ dictionary }) =>
    dictionary.allProperties
      .map((prop) => {
        let property = `export const ${prop.name} = "${prop.value}";`;
        if (prop.comment) property = property + `// ${prop.comment}`;
        return property;
      })
      .join("\n"),
  name: "js-format",
});

StyleDictionary.registerFormat({
  formatter: ({ dictionary }) =>
    dictionary.allProperties
      .map((prop) => {
        let property = `export const ${prop.name}: ${getTypeScriptType(
          prop.value
        )};`;
        if (prop.comment) property = property.concat(`// ${prop.comment}`);
        return property;
      })
      .join("\n"),
  name: "dst-format",
});

StyleDictionary.registerTransform({
  name: "JS-CONSTANT",
  type: "name",
  transformer: (token) => token.path.join("_").toUpperCase(),
});

StyleDictionary.buildAllPlatforms();
console.log("\n==============================================");
console.log("\nBuild completed!");
