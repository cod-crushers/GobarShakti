const qrScanBtn = document.getElementById('qrScanBtn');
const qrReaderContainer = document.getElementById('qr-reader');
let html5QrCode; 
let isScanning = false; 

const predefinedIds = {
    ESPD9BA8A47GobarShakti: "ESPD9BA8A47.html",
    ESPC3A228BBGobarShakti: "ESPC3A228BB.html",
    ESPE9F463D4gobarShakti: "ESPE9F463D4.html"
};

qrScanBtn.addEventListener('click', () => {
    if (!isScanning) {
        
        qrReaderContainer.classList.remove('d-none');
        qrScanBtn.textContent = 'Stop Scanning';


        html5QrCode = new Html5Qrcode("qr-reader");
        html5QrCode.start(
            { facingMode: "environment" },
            {
                fps: 10, 
                qrbox: 250
            },
            (decodedText) => {
                console.log('Decoded text:', decodedText); 
                if (predefinedIds[decodedText]) {
           
                    window.location.href = predefinedIds[decodedText];
                } else {
                   
                    alert("Invalid QR code scanned!");
                }
            },
            (errorMessage) => {
                console.log(errorMessage); 
            }
        ).catch((err) => {
            console.log("Error starting scanner:", err);
        });

        isScanning = true; 
    } else {
 
        if (html5QrCode) {
            html5QrCode.stop().then(() => {
                qrReaderContainer.classList.add('d-none');
                qrScanBtn.textContent = 'Scan a QR Code to Connect Device';
                isScanning = false; 
            }).catch((error) => {
                console.log("Error stopping scanner:", error);
            });
        } else {
            console.log("QR scanner is not running, cannot stop.");
        }
    }
});
