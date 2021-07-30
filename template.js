const template = document.getElementById('video-card');
const grid = document.getElementById('card-grid');

for (let i = 0; i <= 12; i++) {
    const card = template.content.cloneNode(true);
    grid.appendChild(card);
}