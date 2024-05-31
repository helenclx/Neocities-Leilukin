const currentUrl = window.location.href;
const oldDomain = 'leilukin.neocities.org';
const newDomain = 'leilukin.com';

if (currentUrl.includes(oldDomain)) {
    const newUrl = currentUrl.replace(oldDomain, newDomain);
    location.replace(newUrl);
}