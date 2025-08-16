document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const accounts = {
        genshin: [

                  {
                img: 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360422/W1_ohea5d.jpg',
                images: ['https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360422/W1_ohea5d.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360422/W3_riiqhp.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360422/W2_adodsk.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360423/W4_exylfr.jpg','https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360421/W8_msqw4a.jpg','https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360422/W7_f3pn4h.jpg','https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360422/W9_cbjaad.jpg','https://res.cloudinary.com/duyqqf5d6/image/upload/v1755360700/10W_me1rsz.jpg'],
                title: 'Premium Genshin Account 🔥',
                details: `🌏 **Premium Genshin Account 🔥 – Asia Server**
💎 **Lifetime Warranty | Trusted Seller**

🔥 Highlights:

➡️ 23 Limited 5★ Characters with their signature weapons & constellations
➡️ 1470 Achievements unlocked 
➡️ 6/6 Archons (All Archons owned ✅)
➡️ Many Battle Pass Weapons
➡️ High Pity secured

⚡ Premium Roster Includes:

➡️ C3 Raiden Shogun + Signature Weapon
➡️ C2 Furina
➡️ C1 Kokomi
➡️ Neuvillette + Sig Weapon
➡️ Mavuika + Sig Weapon
➡️ Itto + Sig Weapon
➡️ Alhaitham + Sig Weapon
➡️ Xiao + Sig Weapon
➡️ Venti + Sig Weapon
➡️ Yelan + Sig Weapon

✨ A true Mavuika Premium Team account, ready for domination!`,
                price: '$137',
                sellerRating: 'New Seller'
            },
            {
                img: 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755187109/4_yxmnzg.jpg',
                images: ['https://res.cloudinary.com/duyqqf5d6/image/upload/v1755187109/4_yxmnzg.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755187109/3_irrwxq.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755187109/photo_2025-08-11_11-01-43_qhkbtw.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755187109/2_fkegku.jpg'],
                title: 'Genshin Impact (Cheap price)',
                details:  'Some premium accounts on rush price\n\
                                    Only mentioning price and other details\n\
                                    No deadlink\n\
                                    All Asia\n\
                                    No issue\n\
                                    Changeable mail / surrender in case of tmr\n\
                                    \n\
                                    Price :-\n\
                                    Km02 : 10.5k INR (~$120)\n\
                                    Km03 : 10.5k INR (~$120)\n\
                                    Km04 : 7k INR (~$80)\n\
                                    Ad1 : 8.5k INR (~$97)\n\
                                    Ad5 : 8.5k INR (~$97) 🔥 Best Value 🏆 Premium features, changeable mail, quick surrender option',
                price: '$80 - $120',
                sellerRating: '4.8/5 (50 trades)'
            },
            {
                img: 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755189009/9_zu1scr.jpg',
                images: ['https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190719/8_nhdmln.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190719/7_rahovm.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190719/6_sjbu0j.jpg'],
                title: 'High-End Genshin Account',
                details: '🎮 GI + HSR Whale Accounts on Sale 🎮\n\
                        ✨ Both are top-tier whale accounts!\n\
                        🌸 GI Account Highlights:\n\
                        • 🌊 C5 Skirk\n\
                        • ⚡ C6 Raiden + Signature Weapon\n\
                        • 💨 C6 Xiao + Signature Weapon\n\
                        • 🌿 C6 Nahida + Signature Weapon\n\
                        • 💧 C2 Furina + Signature Weapon\n\
                        📷 Check pics for full HSR details\n\
                        💰 Price: 16k INR (~$192) 🔥 Premium deal for serious players!',
                price: '$192',
                sellerRating: '4.9/5 (30 trades)'
            },
            {
                img: 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190928/c_phd2ob.jpg',
                images: ['https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190928/a_nveoni.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190929/d_jpkkic.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190928/b_bzskfo.jpg', 'https://res.cloudinary.com/duyqqf5d6/image/upload/v1755190929/e_ojwqc7.jpg'],
                title: 'Premium Genshin Account',
                details: '💎 Premium Genshin Account on Sale 💎\n\
                        🌟 C3 Arlecchino + Signature Weapon\n\
                        ⚡ C3 Raiden Shogun + Signature Weapon\n\
                        ❄️ C4 Ayaka + Signature Weapon\n\
                        🏹 C1 Ganyu + Signature Weapon\n\
                        🌊 C2 Citlali\n\
                        🍃 C2 Kazuha\n\
                        🔮 C1 Yae Miko\n\
                        💧 Neuvillette + Signature Weapon\n\
                        🪭 Chiori + Signature Weapon\n\
                        🎯 Guaranteed 17 Pity on Weapon Banner\n\
                        💠 900 Genesis Crystals Available\n\
                        💰 Price: 18k INR (~$216) 🔥 Best Value 🏆 Premium Features, Endgame Ready!',
                price: '$216',
                sellerRating: 'New Seller'
            }
            
        ],
        /*
        freefire: [
            {
                img: 'https://i.imgur.com/S65K4G6.jpeg',
                images: ['https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg'],
                title: 'Free Fire Account',
                details: 'Level 85, Heroic rank; includes elite passes, rare bundles (e.g., Cobra MP40 skin), 10k diamonds.',
                price: '$80',
                sellerRating: 'Verified Seller (100+ sales)'
            },
            {
                img: 'https://i.imgur.com/S65K4G6.jpeg',
                images: ['https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg'],
                title: 'Pro Free Fire Account',
                details: 'Level 70, Grandmaster. Evo gun skins maxed out. 20,000 diamonds.',
                price: '$150',
                sellerRating: '5/5 (20 sales)'
            },
            {
                img: 'https://i.imgur.com/S65K4G6.jpeg',
                images: ['https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg', 'https://i.imgur.com/S65K4G6.jpeg'],
                title: 'Budget Free Fire Account',
                details: 'Level 50, Diamond IV. Good collection of characters and skins.',
                price: '$40',
                sellerRating: '4.5/5 (10 sales)'
            }
        ],
        bgmi: [
            {
                img: 'https://i.imgur.com/5O0y6b4.jpeg',
                images: ['https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg'],
                title: 'BGMI Account',
                details: 'Conqueror tier, Level 72; mythic outfits, vehicle skins, 500 UC; high K/D ratio, tournament-ready.',
                price: '$120',
                sellerRating: 'Includes progress screenshots'
            },
            {
                img: 'https://i.imgur.com/5O0y6b4.jpeg',
                images: ['https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg'],
                title: 'Maxed Out BGMI Account',
                details: 'Level 80, all royal passes since season 1. M416 Glacier maxed.',
                price: '$300',
                sellerRating: 'Verified Seller (50+ sales)'
            },
            {
                img: 'https://i.imgur.com/5O0y6b4.jpeg',
                images: ['https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg', 'https://i.imgur.com/5O0y6b4.jpeg'],
                title: 'Starter BGMI Account',
                details: 'Level 40, Ace tier. Some rare outfits and gun skins.',
                price: '$50',
                sellerRating: '4.7/5 (15 sales)'
            }
        ],
        wutheringwaves: [
            {
                img: 'https://i.imgur.com/nU5I4jC.jpeg',
                images: ['https://i.imgur.com/nU5I4jC.jpeg', 'https://i.imgur.com/nU5I4jC.jpeg', 'https://i.imgur.com/nU5I4jC.jpeg', 'https://i.imgur.com/nU5I4jC.jpeg'],
                title: 'Wuthering Waves Starter',
                details: 'Union Level 10, with a 5-star Resonator like Jiyan. Great start for a new player.',
                price: '$30',
                sellerRating: 'New Seller'
            },
            {
                img: 'https://i.imgur.com/nU5I4jC.jpeg',
                images: ['https://i.imgur.com/nU5I4jC.jpeg', 'https://i.imgur.com/nU5I4jC.jpeg', 'https://i.imgur.com/nU5I4jC.jpeg', 'https://i.imgur.com/nU5I4jC.jpeg'],
                title: 'Wuthering Waves Mid-Game',
                details: 'Union Level 40, multiple 5-star Resonators and weapons. Good progress in the story.',
                price: '$70',
                sellerRating: '4.6/5 (5 trades)'
            }
        ]
        */
    };

    const modal = document.getElementById('account-modal');
    const closeModal = document.querySelector('.close-button');
    const modalMainImage = document.querySelector('.modal-main-image');
    const modalThumbnailContainer = document.querySelector('.modal-thumbnail-images');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalPrice = document.querySelector('.modal-price');
    const modalSeller = document.querySelector('.modal-seller');
    const modalContactBtn = document.querySelector('.modal-contact-btn');

    function openModal(account) {
        modalMainImage.src = account.img;
        modalTitle.textContent = account.title;
        modalDescription.textContent = account.details;
        modalPrice.textContent = account.price;
        modalSeller.textContent = `Seller: ${account.sellerRating}`;
        modalContactBtn.href = `https://wa.me/+918512802534?text=${encodeURIComponent(`I'm interested in the ${account.title}`)}`;

        modalThumbnailContainer.innerHTML = '';
        account.images.forEach(src => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.addEventListener('click', () => {
                modalMainImage.src = src;
            });
            modalThumbnailContainer.appendChild(thumb);
        });

        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    closeModal.addEventListener('click', hideModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    function createAccountCard(account) {
        const card = document.createElement('div');
        card.className = 'account-card';

        const whatsappLink = `https://wa.me/+918606790353?text=${encodeURIComponent(`I'm interested in the ${account.title}`)}`;
        card.innerHTML = `
            <div class="account-card-image-wrapper">
                <img src="${account.img}" alt="${account.title}" class="main-account-image">
            </div>
            <div class="account-card-body">
                <h3 class="account-card-title">${account.title}</h3>
                <p class="account-card-details">${account.details}</p>
                <p class="account-card-price">${account.price}</p>
                <p class="account-card-seller">Seller: ${account.sellerRating}</p>
                <a href="#" class="btn view-details-btn">View Details</a>
            </div>
        `;

        card.querySelector('.view-details-btn').addEventListener('click', (e) => {
            e.preventDefault();
            openModal(account);
        });

        return card;
    }

    function loadAccounts(filteredAccounts = accounts) {
        const allGameSections = document.querySelectorAll('.game-section');
        allGameSections.forEach(section => {
            section.style.display = 'none';
        });

        for (const game in filteredAccounts) {
            const section = document.querySelector(`#${game}`);
            const grid = section.querySelector('.account-grid');
            if (grid) {
                grid.innerHTML = ''; // Clear existing cards
                if (filteredAccounts[game].length > 0) {
                    section.style.display = 'block';
                    filteredAccounts[game].forEach(account => {
                        grid.appendChild(createAccountCard(account));
                    });
                }
            }
        }
    }

    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        if (query === '') {
            const allGameSections = document.querySelectorAll('.game-section');
            allGameSections.forEach(section => {
                section.style.display = 'block';
            });
            loadAccounts(accounts);
            return;
        }

        const filteredAccounts = {};
        for (const game in accounts) {
            filteredAccounts[game] = accounts[game].filter(account => {
                return account.title.toLowerCase().includes(query) || account.details.toLowerCase().includes(query);
            });
        }
        loadAccounts(filteredAccounts);
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    loadAccounts();
});
