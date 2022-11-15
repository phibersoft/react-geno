const logger = (message: string, type: 'info' | 'error' | 'success' = 'info'): void => {
    const colors = {
        info: '\x1b[34m',
        error: '\x1b[31m',
        success: '\x1b[32m',
    };

    console.log(colors[type], message, '\x1b[0m');
}

export default logger;
