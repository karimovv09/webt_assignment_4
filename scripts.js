
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-US');
    document.getElementById('dateTime').textContent = `${formattedDate}, ${formattedTime}`;
}
setInterval(updateDateTime, 1000);

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';  // Clear previous messages

    if (!email.includes('@')) {
        errorMessage.innerHTML = 'Please enter a valid email address';
        e.preventDefault();
    }
});

function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('list-group-item');
    taskList.appendChild(li);
}

function sortNumbers(order) {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        alert('Please enter valid numbers');
        return;
    }
    const sortedNumbers = numbers.sort((a, b) => (order === 'asc' ? a - b : b - a));
    document.getElementById('sortedOutput').textContent = sortedNumbers.join(', ');
}
