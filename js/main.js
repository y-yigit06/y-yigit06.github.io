document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".project1")?.addEventListener("click", function() {
        window.location.href = "/portfolio/projects/1";
    });
    document.querySelector(".project2")?.addEventListener("click", function() {
        window.location.href = "/portfolio/projects/2";
    });
    document.querySelector(".project3")?.addEventListener("click", function() {
        window.location.href = "/portfolio/projects/3";
    });
    document.querySelector(".project4")?.addEventListener("click", function() {
        window.location.href = "/portfolio/projects/4";
    });
    document.querySelector(".viewProject1")?.addEventListener("click", function() {
        window.location.href = "https://github.com/ROCMondriaanTIN/st-sd-project-p01-hogerlager-y-yigit06";
    });
    document.querySelector(".viewProject2")?.addEventListener("click", function() {
        window.location.href = "https://github.com/ROCMondriaanTIN/st-sd-p02-project-build-a-game-broboeitniet2-0";
    });
    document.querySelector(".viewProject3")?.addEventListener("click", function() {
        window.location.href = "https://github.com/ROCMondriaanTIN/st-sd-p02-project-build-a-game-broboeitniet2-0";
    });
    document.querySelector(".viewProject4")?.addEventListener("click", function() {
        window.location.href = "https://edupaws.online/";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            
            this.classList.add('active');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line');
    
    if ('IntersectionObserver' in window) {
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    itemObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-line');
                    lineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        timelineItems.forEach(item => {
            itemObserver.observe(item);
        });
        
        if (timelineLine) {
            lineObserver.observe(timelineLine);
        }
    } else {
        timelineItems.forEach(item => {
            item.classList.add('animate');
        });
        
        if (timelineLine) {
            timelineLine.classList.add('animate-line');
        }
    }
    
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .timeline-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .timeline-line {
            height: 0;
            transition: height 1.5s ease;
        }
        
        .timeline-line.animate-line {
            height: 100%;
        }
        
        .timeline-item.left {
            transform: translateX(-20px);
        }
        
        .timeline-item.right {
            transform: translateX(20px);
        }
        
        .timeline-item.animate.left,
        .timeline-item.animate.right {
            transform: translateX(0);
        }
    `;
    document.head.appendChild(style);
});