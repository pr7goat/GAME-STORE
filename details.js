document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get('game');
    const accountIndex = urlParams.get('account');

    if (game && accountIndex) {
        const account = accounts[game][accountIndex];

        if (account) {
            document.querySelector('.main-account-image').src = account.img;
            document.querySelector('.account-title').textContent = account.title;
            document.querySelector('.account-description').textContent = account.details;
            document.querySelector('.account-price').textContent = account.price;
            document.querySelector('.account-seller').textContent = `Seller: ${account.sellerRating}`;
            document.querySelector('.contact-btn').href = `https://wa.me/+918606790353?text=${encodeURIComponent(`I'm interested in the ${account.title}`)}`;

            const thumbnailContainer = document.querySelector('.thumbnail-images');
            thumbnailContainer.innerHTML = '';
            account.images.forEach(src => {
                const thumb = document.createElement('img');
                thumb.src = src;
                thumb.addEventListener('click', () => {
                    document.querySelector('.main-account-image').src = src;
                });
                thumbnailContainer.appendChild(thumb);
            });
        }
    }
});