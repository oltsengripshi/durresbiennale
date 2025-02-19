const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
    console.log("Share button clicked!");
})

document.addEventListener('DOMContentLoaded', function() {
    const link = encodeURIComponent(window.location.href);
    const titleElement = document.querySelector('.name');
    const title = titleElement ? encodeURIComponent(titleElement.textContent.trim()) : "";
    const extendedTitle = `${title} | Durres International Biennale of Contemporary Art`;
    const encodedTitle = encodeURIComponent(extendedTitle);
    const hashtags = encodeURIComponent("durresbiennale,biennale,international");

    document.querySelector('.facebook').addEventListener('click', () => {
        window.open(`https://www.facebook.com/share.php?u=${link}&quote=${encodedTitle}`, '_blank');
    });

    document.querySelector('.whatsapp').addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?text=${encodedTitle}: ${link}`, '_blank');
    });

    document.querySelector('.twitter').addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?url=${link}&text=${encodedTitle}&hashtags=${hashtags}`, '_blank');
    });

    document.querySelector('.linkedin').addEventListener('click', () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${link}&title=${encodedTitle}`, '_blank');
    });

    document.querySelector('.telegram').addEventListener('click', () => {
        window.open(`https://telegram.me/share/url?url=${link}&text=${encodedTitle}`, '_blank');
    });

    document.querySelector('.reddit').addEventListener('click', () => {
        window.open(`https://reddit.com/submit?url=${link}&title=${encodedTitle}`, '_blank');
    });
});

function copyText(button) {
    var text = document.querySelector('.link').innerText;
    navigator.clipboard.writeText(text)
        .then(function() {
            button.innerText = 'copied';
            setTimeout(function() {
                button.innerText = 'copy';
            }, 2000);
        })
        .catch(function(err) {
            console.error('Unable to copy text: ', err);
        });
}
