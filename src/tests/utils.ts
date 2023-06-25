import clc from 'cli-color';

export const logSuccess = (message: string) => {
    console.log(clc.green(message));
}

export const logError = (message: string) => {
    console.error(clc.red(message));
}
