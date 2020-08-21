const tweets = {
    slides: `Hey look, I can share my slides with the Twitter #PWA using the Web Share & Web Share Target APIs! 🙌 #usetheplatform #WebOnFIRE wof.show`,
    camera: `I can share a picture with the Twitter #PWA from the Camera App using the Web Share Target API Level 2 😁! #WebOnFIRE #usetheplatform wof.show`,
    picture: `I can also share a picture from my own app using the Web Share & Web Share Target API Level 2! #WebOnFIRE #usetheplatform wof.show`,
    clipboardPic: `And I can even share an image using the Async Clipboard Level 2 🤯! #WebOnFIRE #usetheplatform wof.show`
};

const getImgFile = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new File([blob], url, { type: data.headers.get('content-type') });
};

const copy = async (txt) => {
    try {
        await navigator.clipboard.writeText(txt);
        console.log('copied');
    } catch (e) {
        console.error(e, e.message);
    }
};

const share = async (data) => {
    if (navigator.share) {
        if (navigator.canShare(data)) {
            try {
                await navigator.share(data);
                console.log('Successful share');
            } catch (error) {
                console.log('Error sharing', error);
            }
        } else {
            console.log(`you can't share this data`);
        }
    } else {
        console.log('web share not supported');
    }
};

document.querySelector('.share-btn-slides').addEventListener('click', () =>
    share({
        text: tweets.slides,
        url: 'https://devoxxbe-2019.wof.show'
    })
);

document
    .querySelector('.copy-btn-camera')
    .addEventListener('click', () => copy(tweets.camera));

(async () => {
    const imgFile = await getImgFile('/assets/img/usetheplatform.png');
    const shareData = {
        text: tweets.picture,
        files: [imgFile]
    };
    document
        .querySelector('.share-btn-picture')
        .addEventListener('click', () => share(shareData));
})();

document
    .querySelector('.share-btn-clipboardpic')
    .addEventListener('click', () => share({ text: tweets.clipboardPic }));

document.querySelector('.copy-btn-img').addEventListener('click', async () => {
    try {
        const imgURL = '/assets/img/elmo.png';
        const data = await fetch(imgURL);
        const blob = await data.blob();
        const item = new ClipboardItem(
            Object.defineProperty({}, blob.type, {
                value: blob,
                enumerable: true
            })
        );
        await navigator.clipboard.write([item]);
        console.log('Image copied.');
    } catch (e) {
        console.error(e, e.message);
    }
});
