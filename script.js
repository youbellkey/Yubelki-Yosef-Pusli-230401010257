document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.tombol-download');
    const backToTopButton = document.createElement('button');

    const createBackToTopButton = () => {
        backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopButton.classList.add('back-to-top');
        document.body.appendChild(backToTopButton);
    };

    const toggleBackToTopButton = () => {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    };

    const handleDownloadButtonClick = (e) => {
        e.preventDefault();
        const href = downloadButton.getAttribute('href');
        const fileName = downloadButton.getAttribute('download');
        smoothScroll('.download');
        setTimeout(() => {
            const a = document.createElement('a');
            a.href = href;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, 800);
    };

    createBackToTopButton();

    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopButton.addEventListener('click', scrollToTop);

    if (downloadButton) {
        downloadButton.addEventListener('click', handleDownloadButtonClick);
    } else {
        console.error('Download button not found');
    }
});
