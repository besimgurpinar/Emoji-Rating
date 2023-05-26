const emojiButtons = document.querySelectorAll('.emoji-button');
        const summaryList = document.querySelector('.summary-list');

        emojiButtons.forEach((button) => {
            button.addEventListener('click', () => {
                emojiButtons.forEach((button) => {
                    button.classList.remove('selected-emoji');
                });

                button.classList.add('selected-emoji');

                const selectedEmoji = button.dataset.emoji;

                const summaryItem = summaryList.querySelector(`[data-emoji="${selectedEmoji}"]`);
                const summaryCount = summaryItem.querySelector('span');

                summaryCount.textContent = parseInt(summaryCount.textContent) + 1;
            });
        });