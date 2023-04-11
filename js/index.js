const response = await fetch("/data/data.json");
const jsonData = await response.json();

function passValues(key, item) {
   return localStorage.setItem(key, JSON.stringify(item));
}

jsonData.forEach( obj => {
    const markup = `<img id="home-${obj.houseID}" class="house-thumbnail" src="${obj.housePicture}" alt="house-picture"/> `;

    document.getElementById('carroussel-left-column').insertAdjacentHTML('beforeend', markup);

    document.getElementById(`home-${obj.houseID}`).addEventListener("click", () => {
        window.location.href="/pages/product.html"
        localStorage.setItem(obj.houseID, JSON.stringify(obj));
    });
});

localStorage.clear()

