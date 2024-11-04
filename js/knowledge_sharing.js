document.getElementById('showMoreBtn').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenArticles');
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
      hiddenContent.style.display = 'block';
      this.innerHTML = '<i class="ri-arrow-up-s-line"></i> ซ่อน';
    } else {
      hiddenContent.style.display = 'none';
      this.innerHTML = '<i class="ri-arrow-down-s-line"></i> ดูเพิ่มเติม';
    }
});

$(document).ready(function() {
  $('#btnArticle').click(function() {
    $(this).css({
      'background': 'linear-gradient(to right, #791118, #DF1F2C 100%)'
    });
    $(this).find('a').css('color', 'white');
    
    $('#btnPromo').css({
      'background': 'white'
    });
    $('#btnPromo').find('a').css('color', 'black');
  });

  $('#btnPromo').click(function() {
    $(this).css({
      'background': 'linear-gradient(to right, #791118, #DF1F2C 100%)'
    });
    $(this).find('a').css('color', 'white');
    
    $('#btnArticle').css({
      'background': 'white'
    });
    $('#btnArticle').find('a').css('color', 'black');
  });
});