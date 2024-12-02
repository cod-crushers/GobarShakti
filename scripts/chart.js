const config = {
    type: 'pie',
    data: {
        labels: ['Temperature', 'Humidity', 'Methane', 'pH', 'Pressure'], // Labels for the legend
        datasets: [{
            data: [28.06, 67.00, 17.44, 13.27, 951.77], // Example data
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Colors
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'right', // Place legend on the right side
                labels: {
                    font: {
                        size: 14, // Ensure labels are clear
                    },
                    boxWidth: 20, // Adjust box size for the legend
                    padding: 15, // Add padding between the legend items
                }
            }
        },
        responsive: true, // Ensure chart responsiveness
        maintainAspectRatio: false, // Allow chart to resize freely
    }
};

// Render the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);
