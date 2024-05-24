document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.sertifikat-list img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModalButton = document.querySelector('.close');
    const downloadButton = document.querySelector('.download-button'); // Assuming the button has this class

    certificates.forEach(certificate => {
        certificate.addEventListener('click', () => {
            openModal(certificate);
        });
    });

    function openModal(imgElement) {
        modal.style.display = 'block';
        modalImg.src = imgElement.src;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Check if close button exists and add event listener
    if (closeModalButton) {
        console.log('Close button found, adding event listener');
        closeModalButton.addEventListener('click', closeModal);
    } else {
        console.error('Close button not found');
    }

    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    if (downloadButton) {
        downloadButton.addEventListener('click', (e) => {
            e.preventDefault();
            const href = downloadButton.getAttribute('href');
            const fileName = downloadButton.getAttribute('download');
            smoothScroll('.download'); // Ensure this selector matches your HTML
            setTimeout(() => {
                const a = document.createElement('a');
                a.href = href;
                a.download = fileName;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                // Open in a new tab for mobile devices
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    window.open(href, '_blank');
                }
            }, 800);
        });
    }

    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }
});
