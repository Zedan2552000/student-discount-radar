chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "SHOW_DISCOUNT") {
        showBanner(request.data);
    }
});

function showBanner(data) {
    if (document.getElementById('student-discount-radar-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'student-discount-radar-banner';
    
    banner.innerHTML = \`
        <div class="sdr-logo">🎓</div>
        <div class="sdr-content">
            <strong>Student Discount Found!</strong>
            <span>\${data.offer}</span>
        </div>
        <a href="\${data.link}" target="_blank" class="sdr-btn">Get Offer</a>
        <button class="sdr-close" id="sdr-close-btn">✖</button>
    \`;

    document.body.appendChild(banner);

    document.getElementById('sdr-close-btn').addEventListener('click', () => {
        banner.remove();
    });

    // Auto remove after 10 seconds
    setTimeout(() => {
        if(document.body.contains(banner)) {
            banner.remove();
        }
    }, 10000);
}
