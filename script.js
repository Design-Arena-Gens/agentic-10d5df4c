// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Show success message
        const button = newsletterForm.querySelector('.newsletter-btn');
        const originalText = button.textContent;
        button.textContent = 'Subscribed!';
        button.style.background = '#4caf50';

        // Reset after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            newsletterForm.reset();
        }, 3000);
    });
}

// Add to cart functionality
document.querySelectorAll('.product-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.background = '#4caf50';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
});

// CTA button functionality
document.querySelectorAll('.btn-primary, .nav-cta').forEach(button => {
    button.addEventListener('click', () => {
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .product-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
