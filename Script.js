function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const datumElement = document.getElementById('date');

  timeElement.innerText = now.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  datumElement.innerText = now.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
setInterval(updateTime, 1000);
updateTime();

document.getElementById('ok').addEventListener('click', function () {
  alert('Thank you for clicking the button 🤠 You are the best! 🌞');
});

async function getWeather() {
  try {
    const apiKey = '2c726f4e3a5c62f9547c7b34e391d15e';
    const city = 'Belgrade';
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=44.81&lon=20.46&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const temperature = Math.round(data.current.temp);
    document.getElementById('weather').innerHTML = `${temperature}°C`;
  } catch (error) {
    console.error(error);
    document.getElementById('weather').innerHTML = 'Wait';
  }
}
getWeather();

// lat = 44.8125
// lon = 20.4612
