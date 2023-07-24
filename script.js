const storedTotalSeconds = localStorage.getItem('totalSeconds');
let totalSeconds = storedTotalSeconds ? parseInt(storedTotalSeconds) : 0;

function updateUptimeCounter() {
    totalSeconds++;
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / (60 * 60)) % 24;
    const days = Math.floor(totalSeconds / (60 * 60 * 24));

    document.getElementById('days').textContent = padNumber(days);
    document.getElementById('hours').textContent = padNumber(hours);
    document.getElementById('mins').textContent = padNumber(minutes);
    document.getElementById('secs').textContent = padNumber(seconds);

    // Store the updated totalSeconds in localStorage
    localStorage.setItem('totalSeconds', totalSeconds.toString());
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}


function getCurrentDate() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear().toString().slice(2); 
    return { month, day, year };
}

// Function to update the date elements in the HTML
function updateDateElements() {
    const { month, day, year } = getCurrentDate();

    document.getElementById('month').innerText = month;
    document.getElementById('day').innerText = day;
    document.getElementById('year').innerText = "'" + year;
}

// Call the function to update the date elements when the page loads
updateDateElements();
updateUptimeCounter();
setInterval(updateUptimeCounter, 1000);


