// ===================================
// Fixed Mark Digital - JavaScript v2.0 (Cleaned)
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Current Year in Footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 2. Handle "Thank You" Message from Make.com Redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
        const thankYouMessage = document.getElementById('thankYouMessage');
        if (thankYouMessage) {
            thankYouMessage.classList.remove('d-none'); // Bootstrap class toggle
            
            // Clean up the URL in the address bar without refreshing (UX Polish)
            setTimeout(() => {
                window.history.replaceState({}, document.title, window.location.pathname + "#contact");
            }, 3000);
        }
    }
    
    // 3. Console Welcome Message (Easter Egg)
    console.log('%cFixed Mark Digital', 'color: #0174DE; font-size: 24px; font-weight: bold;');
    console.log('%cI Build It. I Teach It. You Own It.', 'color: #34424a; font-size: 14px;');
});