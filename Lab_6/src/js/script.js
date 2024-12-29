document.getElementById("loadBtn").addEventListener("click", function () {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0]; // Беремо перший елемент із масиву results

      // Виведення даних на сторінку
      document.getElementById("userPicture").src = user.picture.large;
      document.getElementById(
        "userName"
      ).textContent = `${user.name.first} ${user.name.last}`; // Ім'я особи
      document.getElementById("userPostcode").textContent =
        user.location.postcode; // Виправлено
      document.getElementById("userCountry").textContent =
        user.location.country;
      document.getElementById("userEmail").textContent = user.email;
      document.getElementById("userPhone").textContent = user.phone;
    })
    .catch((error) => {
      console.error("Помилка при отриманні даних:", error);
    });
});
