// Combine script files
document.addEventListener('DOMContentLoaded', function() {
    // Include social-links.js functionality
    const projectLinks = {
        'FinovaBank': 'https://github.com/abrar2030/FinovaBank',
        'LendSmart': 'https://github.com/abrar2030/LendSmart',
        'PayNext': 'https://github.com/abrar2030/PayNext',
        'BlockGuardian': 'https://github.com/abrar2030/BlockGuardian',
        'BlockScore': 'https://github.com/abrar2030/BlockScore',
        'CarbonXchange': 'https://github.com/abrar2030/CarbonXchange',
        'FinFlow': 'https://github.com/abrar2030/FinFlow',
        'AlphaMind': 'https://github.com/abrar2030/AlphaMind',
        'Fluxora': 'https://github.com/abrar2030/Fluxora'
    };
    
    // Update project card links
    document.querySelectorAll('.project-card').forEach(card => {
        const projectTitle = card.querySelector('h3').textContent;
        const githubLink = card.querySelector('.project-links a:last-child');
        const externalLink = card.querySelector('.project-links a:first-child');
        
        if (projectLinks[projectTitle]) {
            githubLink.href = projectLinks[projectTitle];
            externalLink.href = projectLinks[projectTitle];
        }
    });
    
    // Social media links
    const socialLinks = {
        'github': 'https://github.com/abrar2030',
        'instagram': 'https://www.instagram.com/abrar2o3o/',
        'linkedin': 'https://www.linkedin.com/in/abrar2030/',
        'email': 'mailto:abrarahmedpei@gmail.com'
    };
    
    // Update social links in header
    document.querySelectorAll('.social-links a').forEach(link => {
        const icon = link.querySelector('i');
        if (icon) {
            const iconName = icon.getAttribute('data-lucide');
            if (socialLinks[iconName]) {
                link.href = socialLinks[iconName];
            }
        }
    });
    
    // Update contact section links
    document.querySelectorAll('.contact-card').forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        const link = card.querySelector('a');
        
        if (title.includes('github') && socialLinks['github']) {
            link.href = socialLinks['github'];
        } else if (title.includes('instagram') && socialLinks['instagram']) {
            link.href = socialLinks['instagram'];
        } else if (title.includes('linkedin') && socialLinks['linkedin']) {
            link.href = socialLinks['linkedin'];
        } else if (title.includes('facebook') && socialLinks['facebook']) {
            link.href = socialLinks['facebook'] || 'https://www.facebook.com/abrar2O3O';
        }
    });
    
    // Update email in contact form
    const emailLink = document.querySelector('.email-sidebar a');
    if (emailLink && socialLinks['email']) {
        emailLink.href = socialLinks['email'];
        emailLink.textContent = socialLinks['email'].replace('mailto:', '');
    }
    
    // Update resume link
    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
        resumeLink.href = '#'; // Update with actual resume link when available
    }

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.setAttribute('name', 'sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.setAttribute('name', 'moon');
    }
    
    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        themeIcon.setAttribute('name', newTheme === 'dark' ? 'sun' : 'moon');
    });
    
    // Initialize Lucide icons
    lucide.createIcons();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            this.reset();
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add animation classes to elements
    document.querySelectorAll('.project-card, .education-item, .contact-card').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
