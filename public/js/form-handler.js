document.getElementById('contactForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);

        if (result.success) {
            this.reset();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    }
});