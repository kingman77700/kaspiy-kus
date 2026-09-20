// ВАЖНО: замените эти два значения на настоящие контакты «Каспий құс».
const WHATSAPP_NUMBER = "77000000000"; // формат: код страны + номер, без + и пробелов
const INSTAGRAM_URL = "https://instagram.com/"; // вставьте официальный профиль

const products = [
  {
    name: "Куриное филе",
    description: "Свежий сырой куриный филей.",
    image: "https://bretas.vtexassets.com/arquivos/ids/190597-800-auto?aspect=true&height=auto&v=638375515156070000&width=800"
  },
  {
    name: "Бедро",
    description: "Свежее сырое куриное бедро.",
    image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chicken_thigh_deboned.jpg"
  },
  {
    name: "Голень",
    description: "Свежая сырая куриная голень.",
    image: "https://www.beckandbulow.com/cdn/shop/files/Chicken_Drumsticks.png?v=1772738301&width=750"
  },
  {
    name: "Спинка",
    description: "Свежая сырая куриная спинка.",
    image: "https://kupi-rakushku.od.ua/upload/image/store/products/product-530/spinki-kurinye-333.jpg"
  },
  {
    name: "Крыло",
    description: "Свежие сырые куриные крылышки.",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Грудка",
    description: "Свежая сырая куриная грудка.",
    image: "https://images.gopuff.com/blob/gopuffcatalogstorageprod/catalog-images-container/resize/cf/version%3D1_2%2Cformat%3Dauto%2Cfit%3Dscale-down%2Cwidth%3D800%2Cheight%3D800/cb919c21-655e-4c62-99ea-f14f6dfb50db.png"
  },
  {
    name: "Окорочка",
    description: "Свежие сырые куриные окорочка.",
    image: "https://p.globalsources.com/IMAGES/PDT/B6114122416/Pierna-de-pollo-Cuarto-congelado-de-la-pierna-del-pollo.jpg"
  },
  {
    name: "Куриный фарш",
    description: "Свежий сырой куриный фарш.",
    image: "https://jidorihome.myshopify.com/cdn/shop/files/lasjaJqKNprKmtUP4vaR-Ao_1_gps_generated.png?v=1747169797&width=1024"
  }
];

const stores = [
  ["квартал 1а, 81", "с. Мангистау, Ақеспе ж/м, 1 этаж", "https://2gis.kz/aktau/geo/70000001076565579"],
  ["БЦ Dinar, улица Жадыра, 44/3", "Жаңа Қоныс ж/м, Мунайлинский район, 1 этаж", "https://2gis.kz/aktau/geo/70000001109802176"],
  ["улица Сұңқар, 2а", "с. Атамекен, Тамшалы ж/м", "https://2gis.kz/aktau/geo/70000001113043826"],
  ["ЖК Актау Самалы, микрорайон 32Б, 11", "Актау, 32Б м-н", "https://2gis.kz/aktau/geo/70000001117222331"],
  ["5-й микрорайон, 20/20", "Актау, 5-й м-н", "https://2gis.kz/aktau/geo/70000001059881038"],
  ["6-й микрорайон, 36", "Актау, 6-й м-н, 1 этаж", "https://2gis.kz/aktau/geo/70000001065299764"],
  ["8-й микрорайон, 21/9", "Актау, 8-й м-н, 1 этаж", "https://2gis.kz/aktau/geo/70000001109542498"],
  ["12-й микрорайон, 62", "Актау, 12-й м-н", "https://2gis.kz/aktau/geo/70000001116301785"],
  ["ЖК LePes Primera, 16-й микрорайон, 63", "Актау, 16-й м-н, цокольный этаж", "https://2gis.kz/aktau/geo/70000001106037355"],
  ["ЖК Green Plaza, 17-й микрорайон, 6", "Актау, 17-й м-н", "https://2gis.kz/aktau/geo/70000001087505542"],
  ["ЖК Раяна, 19-й микрорайон, 23", "Актау, 19-й м-н, 0 этаж", "https://2gis.kz/aktau/geo/70000001115433462"],
  ["ТЦ Достык, 26-й микрорайон, 25", "Актау, 26-й м-н, 1 этаж", "https://2gis.kz/aktau/geo/70000001078622000"],
  ["27-й микрорайон, 39/4", "Актау, 27-й м-н", "https://2gis.kz/aktau/geo/70000001110334921"],
  ["микрорайон Толкын-2, 121/1", "Актау, Толкын-2 м-н", "https://2gis.kz/aktau/geo/70000001068073185"],
  ["ТД Мағаш, 31-й микрорайон, 1", "Актау, 31-й м-н", "https://2gis.kz/aktau/geo/70000001099890642"],
  ["Hazar Bazary, 31-й микрорайон, 5", "Актау, 31-й м-н, 026 бутик", "https://2gis.kz/aktau/geo/70000001067941796"],
  ["ЖК Аққу, 33-й микрорайон, 19", "Актау, 33-й м-н, 1 этаж", "https://2gis.kz/aktau/geo/70000001080766392"]
];

const productsContainer = document.getElementById("products");
const storesContainer = document.getElementById("storesList");
const storeSearch = document.getElementById("storeSearch");
const storeCount = document.getElementById("storeCount");

function renderProducts() {
  productsContainer.innerHTML = products.map(product => `
    <article class="product-card">
      <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    </article>
  `).join("");
}

function renderStores(query = "") {
  const q = query.trim().toLowerCase();

  const filtered = stores.filter(([title, address]) =>
    `${title} ${address}`.toLowerCase().includes(q)
  );

  storeCount.textContent = `Найдено: ${filtered.length}`;

  storesContainer.innerHTML = filtered.map(([title, address, link], index) => `
    <article class="store-card">
      <span class="store-number">${stores.indexOf(stores.find(s => s[0] === title)) + 1}</span>
      <div class="store-content">
        <h3>Каспий құс — ${title}</h3>
        <p>${address}</p>
      </div>
      <a class="store-link" href="${link}" target="_blank" rel="noopener noreferrer">Открыть в 2GIS →</a>
    </article>
  `).join("");

  if (!filtered.length) {
    storesContainer.innerHTML = `
      <div class="store-card">
        <div class="store-content">
          <h3>Ничего не найдено</h3>
          <p>Попробуйте другой микрорайон или адрес.</p>
        </div>
      </div>
    `;
  }
}

storeSearch.addEventListener("input", event => renderStores(event.target.value));

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderStores();

const whatsappLink = document.getElementById("whatsappLink");
const instagramLink = document.getElementById("instagramLink");

whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Здравствуйте! Подскажите, пожалуйста, по продукции Каспий құс.")}`;
instagramLink.href = INSTAGRAM_URL;
