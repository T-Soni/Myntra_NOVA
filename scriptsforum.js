document.addEventListener("DOMContentLoaded", function() {
    const qaBlocks = document.querySelectorAll('.qa-block');
  
    qaBlocks.forEach(qaBlock => {
      const likeBtn = qaBlock.querySelector('.like-btn');
      const likeCount = qaBlock.querySelector('.like-count');
      const viewAnswerBtn = qaBlock.querySelector('.view-answer-btn');
      const answerSection = qaBlock.querySelector('.answer');
    
  
      let likes = 0;
  
      likeBtn.addEventListener('click', function() {
        likes++;
        if(likes===1)
          likeCount.innerText=likes+" like";
        else
        likeCount.innerText=likes+" likes";
      });
  
      viewAnswerBtn.addEventListener('click', function() {
        answerSection.classList.toggle('hidden');
        viewAnswerBtn.textContent = answerSection.classList.contains('hidden') ? 'View Answer' : 'Hide Answer';
      });
    });
  });
  
