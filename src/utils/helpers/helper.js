export const lowerCaseTurkish = (inputString) => {
    let lowercaseString = inputString.toLowerCase();
    let lowerCaseString = lowercaseString.replace(/ı/g, 'i').replace(/i̇/g, 'i');

    return lowerCaseString;
}