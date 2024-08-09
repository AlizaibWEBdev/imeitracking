// script.js

document.getElementById('track-btn').addEventListener('click', function() {
    const imei = document.getElementById('imei-input').value;
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');

    if (imei === "" || imei.length < 8) {
        result.innerHTML = "<p style>Please enter a valid IMEI number.</p>";
        return;
    }

    loading.style.display = 'block';
    result.textContent = "";

    let start = 15;
    setInterval(() => {
        if (start == 1) {
            loading.style.display = 'none';
        result.textContent = `IMEI ${imei} tracked successfully! Device location found.`;
        clearInterval(this)
        return
        }
        result.innerHTML = `<p style="font-size:22px">${start--}</p>`;
    }, 1000);

});
