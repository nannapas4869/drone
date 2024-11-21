document.getElementById('filterButton').addEventListener('click', function () {
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
  
    const selectedMonthOption = monthSelect.options[monthSelect.selectedIndex];
    const selectedYearOption = yearSelect.options[yearSelect.selectedIndex];
  
    if (!selectedMonthOption || !selectedYearOption || selectedMonthOption.disabled || selectedYearOption.disabled) {
      alert('กรุณาเลือกทั้งเดือนและปี'); // แจ้งเตือนหากยังไม่ได้เลือกเดือนและปี
      return;
    }
  
    const selectedMonth = selectedMonthOption.textContent.trim();
    const selectedYear = selectedYearOption.textContent.trim();
  
    // เลือกทุก month-year-block, red__line และ activity
    const monthYearBlocks = document.querySelectorAll('.month-year-block');
    const redLineImages = document.querySelectorAll('.red__line');
    const activityBlocks = document.querySelectorAll('.activity');
  
    // ซ่อนทุก block และ activity
    monthYearBlocks.forEach(block => block.style.display = 'none');
    redLineImages.forEach(img => img.style.display = 'none');
    activityBlocks.forEach(activity => activity.style.display = 'none');
  
    // แสดงเฉพาะ block, red__line และ activity ที่ตรงกับเดือนและปีที่เลือก
    monthYearBlocks.forEach(block => {
      const blockMonth = block.getAttribute('data-month');
      const blockYear = block.getAttribute('data-year');
  
      if (blockMonth === selectedMonth && blockYear === selectedYear) {
        // แสดงชื่อเดือน-ปี (month-year-block)
        block.style.display = '';
  
        // แสดงรูปภาพ (red__line) ที่เกี่ยวข้อง
        const redLineImage = block.previousElementSibling;
        if (redLineImage && redLineImage.classList.contains('red__line')) {
          redLineImage.style.display = '';
        }
  
        // แสดง activity ที่เกี่ยวข้อง
        activityBlocks.forEach(activity => {
          const activityMonth = activity.getAttribute('data-month');
          const activityYear = activity.getAttribute('data-year');
          if (activityMonth === selectedMonth && activityYear === selectedYear) {
            activity.style.display = ''; // แสดง activity block
          }
        });
      }
    });
  });

  