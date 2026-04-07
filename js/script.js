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

// 4. Close mobile menu after clicking a link (Optimized for BS5)
document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn').forEach(link => {
    link.addEventListener('click', (e) => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        // Only trigger if the menu is actually open
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            e.preventDefault(); // Prevent immediate navigation
            
            // Get the target href
            const targetId = link.getAttribute('href');
            
            // Close the menu first
            try {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            } catch (error) {
                // Fallback: manually remove classes
                navbarCollapse.classList.remove('show');
                const navbarToggler = document.querySelector('.navbar-toggler');
                if (navbarToggler) {
                    navbarToggler.classList.add('collapsed');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            }
            
            // Wait for menu to close, then navigate
            setTimeout(() => {
                if (targetId && targetId.startsWith('#')) {
                    const targetElement = document.getElementById(targetId.substring(1));
                    if (targetElement) {
                        const navbar = document.querySelector('.navbar');
                        const headerHeight = navbar ? navbar.offsetHeight : 80;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }, 300); // Wait for collapse animation
        }
    });
});