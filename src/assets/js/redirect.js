const currentUrl = window.location.href;
const oldDomain = 'leilukin.neocities.org';
const newDomain = 'leilukin.com';

const redirectUrl = (oldStr, newStr) => {
    if (currentUrl.includes(oldStr)) {
        const newUrl = currentUrl.replace(oldStr, newStr);
        location.replace(newUrl);
    }
}

redirectUrl(oldDomain, newDomain);