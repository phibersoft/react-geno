const templateGenerator = (capitalizedComponentName: string, extension: 'tsx' | 'jsx', styleExtension: 'css' | 'scss') => {
    const templateLines: string[] = [
        `import styles from './${capitalizedComponentName}.module.${styleExtension}';`,
        ``,
    ];

    if (extension === 'tsx') {
        templateLines.unshift(`import {FC} from 'react';`);
        templateLines.push(`export interface ${capitalizedComponentName}Props {`);
        templateLines.push(`}`);
        templateLines.push(``);
        templateLines.push(`const ${capitalizedComponentName}: FC<${capitalizedComponentName}Props> = () => {`);
    } else {
        templateLines.push(`const ${capitalizedComponentName} = () => {`);
    }

    templateLines.push(`    return (`);
    templateLines.push(`        <div>`);
    templateLines.push(`            <h1>${capitalizedComponentName}</h1>`);
    templateLines.push(`        </div>`);
    templateLines.push(`    );`);
    templateLines.push(`}`);
    templateLines.push(``);
    templateLines.push(`export {${capitalizedComponentName}};`);

    return templateLines.join('\r');
}

export default templateGenerator;
