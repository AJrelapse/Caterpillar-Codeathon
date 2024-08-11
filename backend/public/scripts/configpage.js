// console.
// log("HI")
document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('configpage');
    if (uploadForm) {
        uploadForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData();
            formData.append('Speed', document.getElementById('Speed').value);
            formData.append('Temperature', document.getElementById('Temperature').value);
            formData.append('oilPressure', document.getElementById('Oil-Pressure').value);
            formData.append('Water', document.getElementById('Water').value);
            formData.append('temp', document.getElementById('temp').value);
            formData.append('Pressure', document.getElementById('Pressure').value);
            formData.append('Level', document.getElementById('Level').value);
            formData.append('Transmission', document.getElementById('Transmission').value);
            formData.append('Sensor', document.getElementById('Sensor').value);
            formData.append('Brake', document.getElementById('Brake').value);
            formData.append('Hydraulic', document.getElementById('Hydraulic').value);
            formData.append('Exhaust', document.getElementById('Exhaust').value);
            formData.append('Voltage', document.getElementById('Voltage').value);
            formData.append('Filter', document.getElementById('Filter').value);
            
            // console.log(formData);
            const response = await fetch('http://localhost:3001/submit/Excavator_1', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log(result)
                const t = result;
                const a = t.misc;
                const b = t.engine;
                const c = t.drive;
                const d = t.fuel;
                (console.log(window.location.href))
                window.location.href = 'http://localhost:3001/solution?a=' + a + '&b=' + b + '&c=' + c + '&d=' + d;
                alert('Message sent successfully');
                this.reset();
            } else {
                alert('Message failed to send');
            }
        });
    }
});