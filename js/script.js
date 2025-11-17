function toggleSolo(id) {
    const allDetails = document.querySelectorAll('.details');
    allDetails.forEach(detail => {
        if (detail.id !== id) detail.style.display = "none";
    });

    const selected = document.getElementById(id);
    
    selected.style.display = (selected.style.display === "block") ? "none" : "block";
}


function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');

    
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    
    const modeToggle = document.getElementById('mode-toggle');
    const icon = modeToggle.querySelector('i');
    if (isLightMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
    
    if (modeToggle) {
        const icon = modeToggle.querySelector('i');

        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
        
            body.classList.remove('light-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        
        
        modeToggle.addEventListener('click', toggleMode);
    }

    
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });

    
    window.addEventListener('scroll', () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    });

    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            alert("Thank you for contacting Phoenix Coder! We’ll get back to you soon.");
            contactForm.reset();
        });
    }
});
