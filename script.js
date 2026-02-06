// ==========================================
// Dynamic Age Calculator
// ==========================================
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// ==========================================
// Certificate Lightbox Modal
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Update dynamic age
    const ageElement = document.getElementById('dynamicAge');
    if (ageElement) {
        const birthDate = '2004-06-02'; // June 2, 2004
        const currentAge = calculateAge(birthDate);
        ageElement.textContent = currentAge;
    }

    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.modal-close');
    
    // Get all certificate images
    const certificates = document.querySelectorAll('.gallery-item img');
    
    certificates.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // ==========================================
    // Project Gallery Modal
    // ==========================================
    const projectModal = document.getElementById('projectModal');
    const projectTitle = document.getElementById('projectTitle');
    const projectGallery = document.getElementById('projectGallery');
    const projectModalClose = document.querySelector('.project-modal-close');
    
    // Get all project modal buttons
    const projectModalBtns = document.querySelectorAll('.project-modal-btn');
    
    projectModalBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectName = this.getAttribute('data-project');
            const screenshots = JSON.parse(this.getAttribute('data-screenshots'));
            
            projectTitle.textContent = projectName;
            
            // Clear previous images
            projectGallery.innerHTML = '';
            
            // Add all images to gallery
            screenshots.forEach((screenshot, index) => {
                const img = document.createElement('img');
                img.src = screenshot;
                img.alt = `${projectName} screenshot ${index + 1}`;
                img.className = 'project-gallery-image';
                projectGallery.appendChild(img);
            });
            
            projectModal.style.display = 'flex';
        });
    });
    
    // Close project modal
    if (projectModalClose) {
        projectModalClose.addEventListener('click', function() {
            projectModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.style.display === 'flex') {
            projectModal.style.display = 'none';
        }
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});