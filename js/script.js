function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Masukkan nilai berat dan tinggi yang valid.";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) category = "Berat badan kurang";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Berat badan berlebih";
    else category = "Obesitas";

    document.getElementById('result').innerHTML = `BMI Anda: ${bmi.toFixed(2)}<br>Kategori: ${category}`;
}

function resetFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.getElementById('result').innerHTML = '';
}
