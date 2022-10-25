const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'Delaney';
nameDisplay.classList.add('purple');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i clicked this button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
});
