document.getElementById('globalSearch').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const labels = document.querySelectorAll('.form-check-label');

    labels.forEach(label => {
        const labelText = label.textContent.toLowerCase();

        // Show or hide based on whether the label includes the search text
        if (labelText.includes(searchText)) {
            label.closest('.form-check').style.display = 'block';
        } else {
            label.closest('.form-check').style.display = 'none';
        }
    });
});
