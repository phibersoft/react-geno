import {ArgumentParser} from 'argparse';
import path from 'path';
import * as fs from 'fs';
import templateGenerator from './template-generator';
import getComponentPath from './path-finder';
import logger from './logger';

process.on('unhandledRejection', (reason) => {
    logger(reason as string, 'error');
})

const parser = new ArgumentParser({
    description: 'Command line application for generating react component folder',
});

parser.add_argument('-n', '--name', {
    help: 'Name of the component',
    required: true,
    type: String,
});

// Default generation is typescript
parser.add_argument('-j', '--js', {
    help: 'If you want to generate javascript component then pass this argument',
    type: Boolean,
    default: false
});

// Default generation is scss
parser.add_argument('-c', '--css', {
    help: 'If you want to generate css component then pass this argument',
    type: Boolean,
    default: false
});

const args = parser.parse_args();

const componentPath = await getComponentPath(args.name);

const componentExtension = args.js ? 'jsx' : 'tsx';
const styleExtension = args.css ? 'css' : 'scss';
const indexExtension = componentExtension.slice(0, 2);

const componentNameCapitalized = args.name.charAt(0).toUpperCase() + args.name.slice(1).toLowerCase();

await fs.promises.writeFile(path.join(componentPath, `index.${indexExtension}`), `export * from './${componentNameCapitalized}';`);
await fs.promises.writeFile(path.join(componentPath, `${componentNameCapitalized}.module.${styleExtension}`), '');
await fs.promises.writeFile(path.join(componentPath, `${componentNameCapitalized}.${componentExtension}`), templateGenerator(componentNameCapitalized, componentExtension, styleExtension));

logger(`Component ${componentNameCapitalized} generated successfully`, 'success');

