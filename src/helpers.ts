function firstLetterUppercase(str: string): string {
    const valueString = str.toLowerCase();
    return valueString
        .split(' ')
        .map(
            (value: string) =>
                `${value.charAt(0).toUpperCase()}${value
                    .slice(1)
                    .toLowerCase()}`
        )
        .join(' ');
}

function lowerCase(str: string): string {
    return str.toLowerCase();
}

const toUpperCase = (str: string): string => {
    return str ? str.toUpperCase() : str;
};

function isEmail(email: string): boolean {
    const regexExp =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return regexExp.test(email);
}

function isDataURL(value: string): boolean {
    const dataUrlRegex =
        /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
    return dataUrlRegex.test(value);
}

module.exports = {
    firstLetterUppercase,
    lowerCase,
    toUpperCase,
    isEmail,
    isDataURL,
};
