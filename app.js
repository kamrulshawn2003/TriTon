document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes when stats section is visible
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                const statLabels = entry.target.querySelectorAll('.stat-label');
                const statCircles = entry.target.querySelectorAll('.stat-circle');
                
                statNumbers.forEach(number => {
                    number.style.animation = 'fadeInNumber 0.5s ease-in forwards 0.5s';
                });
                
                statLabels.forEach(label => {
                    label.style.animation = 'fadeInLabel 0.5s ease-in forwards 0.7s';
                });
                
                statCircles.forEach(circle => {
                    circle.style.animation = 'circleGrow 1.5s ease-out forwards';
                });
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe the stats section
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Reset animations initially
    const statNumbers = document.querySelectorAll('.stat-number');
    const statLabels = document.querySelectorAll('.stat-label');
    const statCircles = document.querySelectorAll('.stat-circle');
    
    statNumbers.forEach(number => {
        number.style.opacity = '0';
        number.style.animation = 'none';
    });
    
    statLabels.forEach(label => {
        label.style.opacity = '0';
        label.style.animation = 'none';
    });
    
    statCircles.forEach(circle => {
        circle.style.animation = 'none';
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add loading state for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Add hover effects for service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Add click tracking for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Button clicked:', button.textContent.trim());
        });
    });
});
