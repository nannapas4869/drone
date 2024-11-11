document.getElementById('globalSearch').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const searchElements = document.querySelectorAll('[data-search]');

    searchElements.forEach(element => {
        const text = element.getAttribute('data-search').toLowerCase();
        if (text.includes(searchTerm)) {
            element.closest('.row').style.display = ''; // Show matching rows
        } else {
            element.closest('.row').style.display = 'none'; // Hide non-matching rows
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="document__radio"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                const fileUrl = radio.getAttribute('data-download');
                downloadFile(fileUrl);
            }
        });
    });
});

function downloadFile(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}