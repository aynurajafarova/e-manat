function createBody(e) {

    let container = createElement({ name: 'div', class: 'container' });
    let providerImgDiv = createElement({ name: 'div', class: 'providerImgDiv' });
    let providerInput = createElement({ name: 'input', class: 'providerInput', value: '' });
    let providerDeleteBtn = createElement({ name: 'button', class: 'providerDeleteButton', value: 'delete' });
    let home = createElement({ name: 'div', class: 'home' });
    let homeIcon = createElement({ name: 'i', class: 'fas fa-home' });

    let zeroBtn = createElement({ name: 'button', class: 'zeroButton', value: '0' });
    zeroBtn.innerHTML = '0';
    zeroBtn.addEventListener('click', () => {
        providerInput.value += zeroBtn.value;
    });

    providerDeleteBtn.innerHTML = localStorage.getItem('btn');
    home.innerHTML = localStorage.getItem('homeBtn');

    home.addEventListener('click', () => {
        document.location.href = 'index.html';
    });

    providerDeleteBtn.addEventListener('click', () => {
        providerInput.value = providerInput.value.slice(0, -1);
    });

    let buttonsContainer = createElement({ name: 'div', class: 'buttonsContainer' });
    let row = createElement({ name: 'div', class: 'row' });

    for (let i = 1; i <= 9; i++) {
        let button = createElement({ name: 'button', class: 'btns', value: i });
        button.innerHTML = i;
        buttonsContainer.appendChild(row);
        row.appendChild(button);

        button.addEventListener('click', () => {

            if (providerInput.value.length <= 8) {
                providerInput.value += button.value;
            }

            else {
                let continueBtn = createElement({ name: 'button', class: 'continueButton', value: 'continue' });
                continueBtn.innerHTML = localStorage.getItem('btnNext');
                container.appendChild(continueBtn);
            }
        });

        //break after each three buttons
        let lineBreak = createElement({ name: 'br' });
        if (i % 3 == 0) {
            row.appendChild(lineBreak);
        };
    }

    providerImgDiv.appendChild(providerImg);
    container.appendChild(providerImgDiv);
    container.appendChild(providerInput);
    container.appendChild(providerDeleteBtn);
    container.appendChild(buttonsContainer);
    buttonsContainer.appendChild(zeroBtn);
    buttonsContainer.appendChild(home);
    home.appendChild(homeIcon);

    document.body.append(container);
}
