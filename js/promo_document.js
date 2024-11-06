document.getElementById('globalSearch').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const labels = document.querySelectorAll('.form-check-label');

    labels.forEach(label => {
        const labelText = label.textContent.toLowerCase();
        if (labelText.includes(searchText)) {
            label.closest('.form-check').style.display = 'block';
        } else {
            label.closest('.form-check').style.display = 'none';
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