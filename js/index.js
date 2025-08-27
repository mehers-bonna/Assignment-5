// nav section funtionality
const heartCounts = document.getElementById('count-heart');
let heartCount = 0;

const heartIcons = document.getElementsByClassName('added-heart');

for (let icon of heartIcons) {
    icon.addEventListener('click', function() {
        heartCount++;
        heartCounts.innerText = heartCount;
    })
}