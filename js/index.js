// nav section functionality
const heartCounts = document.getElementById('count-heart');
let heartCount = 0;

const heartIcons = document.getElementsByClassName('added-heart');

for (let icon of heartIcons) {
    icon.addEventListener('click', function() {
        heartCount++;
        heartCounts.innerText = heartCount;
    })
}

// call buttons functionality
const callButtons = document.getElementsByClassName('call-button');
const coinElement = document.getElementById('coins');
let coins = parseInt (coinElement.innerText);

const callHistory = document.getElementById('call-history-parent');

for (let button of callButtons) {
    button.addEventListener('click', function() {
        const card = button.closest('#helpline-section');
        const serviceName = card.querySelector('h3').innerText;
        const serviceNumber = card.querySelector('.helpline-number').innerText;
        if (coins < 20) {
            alert('you dont have enough coins to make a call');
            return;
        }

        coins = coins - 20;
        coinElement.innerText = coins;

        alert(`Calling ${serviceName} ${serviceNumber}...`);

        // call history

        const historyList = callHistory.querySelector('.history-list');
        if (!historyList) {
            const ul = document.createElement('ul');
            ul.classList.add('history-list', 'p-5');
            callHistory.appendChild(ul);
        }

        const li = document.createElement('li');
        const currentTime = new Date().toLocaleTimeString();
        li.innerHTML = `
        <div class="flex justify-between items-center">
        <div>
         <div class="font-bold">${serviceName}</div>
         <div>${serviceNumber}</div>
       </div>
        <div>${currentTime}</div>
       </div>`;
        li.style.backgroundColor = '#f2f2f2'
        li.style.borderRadius = '8px'
        li.style.padding = '10px'
        li.style.marginBottom = '10px'
        callHistory.querySelector('.history-list').appendChild(li);

        // clear history
        const ClearButton = callHistory.querySelector('button');
        ClearButton.addEventListener('click', function() {
            const historyList = callHistory.querySelector('.history-list');
            if(historyList) {
                historyList.innerHTML = '';
            }
        })
    })
}

// copy button funtionality
const copyButtons = document.getElementsByClassName('copy-button');
const copyCounts = document.getElementById('copy-count');
let copyCount = 0;
for (let button of copyButtons) {
    button.addEventListener('click', function(){
        const card = button.closest('#helpline-section');
        const number = card.querySelector('.helpline-number').innerText;
        // copy to clipboard
        navigator.clipboard.writeText(number).then(function() {
            alert(`Number is copied: ${number} `);
            // increase copy count
            copyCount++;
            copyCounts.innerText = copyCount;
        })
    })
}