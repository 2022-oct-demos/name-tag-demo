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

const colorDropdown = document.getElementById('color-dropdown');
colorDropdown.addEventListener('change', () => {
    console.log('CHANGE IS HAPPENING!!');
    console.log(colorDropdown.value);

    const nameTagSection = document.getElementById('name-tag-section');
    nameTagSection.classList.remove('red');
    nameTagSection.classList.remove('blue');
    nameTagSection.classList.remove('green');
    nameTagSection.classList.add(colorDropdown.value);
});
