// ===================================
// Fixed Mark Digital - JavaScript
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ===================================
    // Smooth Scrolling for Navigation Links
    // ===================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Account for fixed header height
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===================================
    // Header Background on Scroll
    // ===================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // ===================================
    // Contact Form Handling
    // ===================================
    // const contactForm = document.getElementById('contactForm');
    
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
            
    //         // Get form values
    //         const formData = {
    //             name: document.getElementById('name').value,
    //             email: document.getElementById('email').value,
    //             message: document.getElementById('message').value
    //         };
            
    //         // Log form data (in production, this would send to a server)
    //         console.log('Form submitted:', formData);
            
    //         // Show success message
    //         alert('Thank you for your message! I\'ll get back to you soon.');
            
    //         // Reset form
    //         contactForm.reset();
            
    //         // TODO: In production, replace this with actual form submission
    //         // Example: Send to a backend API, use Formspree, Netlify Forms, etc.
    //         // fetch('/api/contact', {
    //         //     method: 'POST',
    //         //     headers: { 'Content-Type': 'application/json' },
    //         //     body: JSON.stringify(formData)
    //         // })
    //         // .then(response => response.json())
    //         // .then(data => {
    //         //     alert('Message sent successfully!');
    //         //     contactForm.reset();
    //         // })
    //         // .catch(error => {
    //         //     alert('Error sending message. Please try again.');
    //         // });
    //     });
    // }
    
    // ===================================
    // Current Year in Footer
    // ===================================
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // ===================================
    // Intersection Observer for Fade-in Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .project-card, .highlight-card, .stat-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('a[href^="#"]');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ===================================
    // Form Input Validation Styling
    // ===================================
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = 'var(--color-primary)';
            } else {
                this.style.borderColor = 'var(--color-border)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--color-primary)';
        });
    });
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%cFixed Mark Digital', 'color: #0174DE; font-size: 24px; font-weight: bold;');
    console.log('%cI Build It. I Teach It. You Own It.', 'color: #34424a; font-size: 14px;');
    console.log('%cInterested in working together? Contact me at contact@reedjeffreyr.com', 'color: #717182; font-size: 12px;');
});
