import fs from 'fs';
import path from 'path';

/**
 * @param currentPath path to the current directory [DEFAULT: process.cwd()]
 * @returns path to the app root directory
 */
export const getAppPath = (currentPath: string = process.cwd()): string => {
    /*
    * CONDITION 1: If current path is src then it will return the current path
    * CONDITION 2: If current path includes "package.json" and not includes "src" then it will return the current path
    * CONDITION 3: If current path contains "src" folder then it will return the `${currentPath}/src`
     */
    if (currentPath.endsWith('src')) {
        return currentPath;
    }

    const isPackageJsonExists = fs.existsSync(path.join(currentPath, 'package.json'));
    const isSrcExists = fs.existsSync(path.join(currentPath, 'src'));

    if (isPackageJsonExists && !isSrcExists) {
        return currentPath;
    }

    if (isSrcExists) {
        return path.join(currentPath, 'src');
    }

    return getAppPath(path.join(currentPath, '..'));
}

export const getComponentsPath = async (appPath: string): Promise<string> => {
    const componentsPath = path.join(appPath, 'components');

    // if components folder does not exists then create it
    if (!fs.existsSync(componentsPath)) {
        await fs.promises.mkdir(componentsPath);
    }

    return componentsPath;
}

// compose getAppPath and getComponentsPath
const getComponentPath = async (componentName: string): Promise<string> => {
    const appPath = getAppPath();
    const componentsPath = await getComponentsPath(appPath);

    // create component folder
    const componentPath = path.join(componentsPath, componentName);
    await fs.promises.mkdir(componentPath);

    return componentPath;
}

export default getComponentPath;
