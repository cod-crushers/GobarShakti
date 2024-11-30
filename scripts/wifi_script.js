// Fetch available WiFi networks from the ESP server
async function fetchWiFiNetworks() {
    try {
      const response = await fetch('/scan'); // Replace with the correct endpoint on ESP
      const networks = await response.json();
      const wifiList = document.getElementById('wifiList');
      wifiList.innerHTML = '';
      networks.forEach(network => {
        const li = document.createElement('li');
        li.textContent = `${network.ssid} (Signal: ${network.signal} dBm)`;
        wifiList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching WiFi networks:', error);
    }
  }
  
  // Handle form submission to connect to WiFi
  document.getElementById('wifiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const ssid = document.getElementById('ssid').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/connect', { // Replace with ESP endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ssid, password }),
      });
  
      if (response.ok) {
        alert('Successfully connected to WiFi!');
      } else {
        alert('Failed to connect. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error connecting to WiFi:', error);
    }
  });
  
  // Call fetchWiFiNetworks on page load
  fetchWiFiNetworks();
  