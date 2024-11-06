function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!weight || !height || !age) {
        document.getElementById('result').innerText = "Masukkan semua data dengan benar!";
        return;
    }

    const bmi = weight / (height * height);
    let result = `BMI Anda adalah ${bmi.toFixed(2)} - `;

    if (bmi < 18.5) result += "Kurus";
    else if (bmi < 24.9) result += "Normal";
    else if (bmi < 29.9) result += "Gemuk";
    else result += "Obesitas";

    document.getElementById('result').innerText = result;
}
