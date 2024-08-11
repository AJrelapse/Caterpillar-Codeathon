document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('contactUs');
    if (uploadForm) {
        uploadForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', document.getElementById('name').value);
            formData.append('email', document.getElementById('email').value);
            formData.append('phone', document.getElementById('phone').value);
            formData.append('password', document.getElementById('password').value);
            formData.append('book', document.getElementById('book').value);

            const response = await fetch('/contactUs', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                alert('Your message has been sent successfully');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('password').value = '';
                document.getElementById('book').value = '';
            } else {
                alert('There was an error sending your message');
            }
        });
    }
});