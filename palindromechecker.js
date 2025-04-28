
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');

    checkBtn.addEventListener('click', () => {
      const input = textInput.value;
      
      if (input.trim() === '') {
        alert('Please input a value');
        return;
      }

      const cleanedInput = input
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '');

      const reversedInput = cleanedInput
        .split('')
        .reverse()
        .join('');

      if (cleanedInput === reversedInput) {
        resultDiv.textContent = `${input} is a palindrome.`;
      } else {
        resultDiv.textContent = `${input} is not a palindrome.`;
      }
    });
 