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
redirectUrl(
    'leilukin.neocities.org/blog/posts/2024-05-14-james-somerton-my-vide-',
    'leilukin.com/blog/posts/2024-05-14-james-somerton-my-video-'
);
redirectUrl('james-somerton-my-vide-', 'james-somerton-my-video-');