// Navegación entre secciones + efectos interactivos
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav_links a');
    const sections = document.querySelectorAll('.section');
    
    // Efecto de escritura para el hero
    function typeWriterEffect() {
        const text = "Estudiante en Ciencias de la Computación";
        const element = document.querySelector('.hero_text h2');
        let i = 0;
        
        // Solo ejecutar si el elemento existe y está visible
        if (element && element.textContent === text) {
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            }
            type();
        }
    }
    
    // Efecto de aparición suave para secciones
    function fadeInSection(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 50);
    }
    
    // Navegación entre secciones
    function hideAllSections() {
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.display = 'none';
            section.classList.remove('active');
        });
    }
    
    function updateActiveNav(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }
    
    function showSection(sectionId) {
        hideAllSections();
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block';
            fadeInSection(targetSection);
            updateActiveNav(sectionId);
            
            // Efectos específicos por sección
            if (sectionId === 'inicio') {
                setTimeout(typeWriterEffect, 500);
            }
        }
    }
    
    // Event listeners para navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // Efectos hover mejorados
    const interactiveElements = document.querySelectorAll('.skill, .timeline-item, .social_links a');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(204, 0, 255, 0.51)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Efecto para la imagen de perfil
    const heroImage = document.querySelector('.hero_image img');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
            this.style.boxShadow = '0 15px 30px rgba(108, 99, 255, 0.4)';
        });
        
        heroImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.boxShadow = '0 0 25px rgba(0, 0, 0, 0.2)';
        });
    }
    
    // Efecto de carga inicial
    function initPage() {
        // Mostrar la sección de inicio
        showSection('inicio');
        
        // Agregar clase loaded para posibles animaciones futuras
        document.body.classList.add('loaded');
    }
    
    // Inicializar la página
    initPage();
});