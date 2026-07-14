const DISCOUNT_DB = {
    "spotify.com": { offer: "Spotify Student: 50% off Premium", link: "https://www.spotify.com/student/" },
    "apple.com": { offer: "Apple Education Pricing: Save on Mac and iPad", link: "https://www.apple.com/us-hed/shop" },
    "adobe.com": { offer: "Adobe Creative Cloud: Over 60% off for students", link: "https://www.adobe.com/creativecloud/buy/students.html" },
    "github.com": { offer: "GitHub Student Developer Pack: Free pro tools", link: "https://education.github.com/pack" },
    "jetbrains.com": { offer: "JetBrains: Free IDEs for students", link: "https://www.jetbrains.com/community/education/" },
    "samsung.com": { offer: "Samsung Education Offers: 10-30% off devices", link: "https://www.samsung.com/us/shop/offer-program/education-offers/" },
    "notion.so": { offer: "Notion Plus: Free for students & educators", link: "https://www.notion.so/product/notion-for-education" },
    "figma.com": { offer: "Figma Professional: Free for students", link: "https://www.figma.com/education/" }
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        try {
            const url = new URL(tab.url);
            // Simple match for root domain
            const domain = url.hostname.replace('www.', '');
            
            // Check if domain exists in DB or ends with a known domain
            let match = null;
            for (let key in DISCOUNT_DB) {
                if (domain.includes(key)) {
                    match = DISCOUNT_DB[key];
                    break;
                }
            }

            if (match) {
                // Send message to content script to show banner
                chrome.tabs.sendMessage(tabId, {
                    type: "SHOW_DISCOUNT",
                    data: match
                });
            }
        } catch (e) {
            console.error("Invalid URL:", tab.url);
        }
    }
});
