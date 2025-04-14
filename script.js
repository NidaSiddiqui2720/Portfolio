const typingText = document.querySelector(".typing");
    const words = ["Nida Siddiqui", "a Frontend Developer", "a Learner"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = "";

    function type() {
      if (charIndex < words[wordIndex].length) {
        currentWord += words[wordIndex].charAt(charIndex);
        typingText.textContent = currentWord;
        charIndex++;
        setTimeout(type, 150);
      } else {
        setTimeout(erase, 2000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        typingText.textContent = currentWord;
        charIndex--;
        setTimeout(erase, 100);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      }
    }

    document.addEventListener("DOMContentLoaded", type);
