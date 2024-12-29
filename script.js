let btn = document.getElementById("fetchButton");

let number = 1;

btn.addEventListener("click", () => {
    number++;
    fetchButton(number);
});

async function fetchButton(number) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${number}`);
        const data = await res.json();
        scriptToHtml(data);
    } catch  {

    }
}

function scriptToHtml(data) {
    const productInfo = document.createElement("div");
    productInfo.textContent = `name: ${data.title}, price: $${data.price}`;
    document.body.appendChild(productInfo);
}