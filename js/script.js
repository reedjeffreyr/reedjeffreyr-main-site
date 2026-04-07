// ===========================================
// Fixed Mark Digital - JavaScript v2.1 (GA4 Enhanced)
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Current Year in Footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 2. Handle "Thank You" Message and GA4 Lead Tracking
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
        const thankYouMessage = document.getElementById('thankYouMessage');
        if (thankYouMessage) {
            thankYouMessage.classList.remove('d-none'); // Bootstrap class toggle
            
            // --- GA4/GTM LEAD TRACKING ---
            // This tells GTM that a successful lead was generated via the Make.com redirect
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'contact_form_success',
                'form_name': 'main_contact_form',
                'location': 'Ephrata_WA'
            });
            // -----------------------------

            // Clean up the URL in the address bar without refreshing (UX Polish)
            // Removes the ?sent=true so the event doesn't re-fire on a manual refresh
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
            // Get the target href
            const targetId = link.getAttribute('href');
            
            // If it's an internal anchor link, prevent default and handle smooth scroll
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault(); 

                // Close the menu first using Bootstrap's API
                try {
                    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                    bsCollapse.hide();
                } catch (error) {
                    // Fallback: manually remove classes if BS5 instance fails
                    navbarCollapse.classList.remove('show');
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler) {
                        navbarToggler.classList.add('collapsed');
                        navbarToggler.setAttribute('aria-expanded', 'false');
                    }
                }
                
                // Wait for menu to close animation, then navigate
                setTimeout(() => {
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
                }, 350); // Matches standard Bootstrap collapse transition time
            }
        }
    });
});