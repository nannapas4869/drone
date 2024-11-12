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

// Select the container where videos will be added and the button
const videoContainer = document.getElementById('video-container');
const addVideoBtn = document.getElementById('add-video-btn');

// Counter to keep track of video numbers
let videoCount = 2;

// Function to add a new video
addVideoBtn.addEventListener('click', () => {
    videoCount += 1; // Increment video count
    const newVideo = document.createElement('div'); // Create a new div element
    newVideo.className = 'video-box col-12 col-md-12 col-lg-3 mb-5'; // Add classes
    videoContainer.appendChild(newVideo); // Add the new video to the container
});
