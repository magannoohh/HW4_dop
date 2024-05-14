document.getElementById('btn').addEventListener('click', 
function () {
    setTimeout(function () {
        let circle = document.createElement('div');
        circle.className = 'circle';
        let flexDiv = document.querySelector('.flex');
        flexDiv.appendChild(circle);
    }, 1000); 
});
