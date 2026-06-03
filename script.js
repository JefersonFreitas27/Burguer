const mostrarTudo = document.getElementById('mostrar-tudo')
const menu = document.getElementById('menu')

function mostrarMenuCompleto() {
    let meuHtml = '';
    menuOptions.forEach(hamburguer => {
        meuHtml += `<li>
        <img src="${hamburguer.src}" alt="${hamburguer.name}">
        <p>${hamburguer.name}</p>
        <p class="preco">${hamburguer.price.toFixed(2).replace('.', ',')}</p>

    </li>
    `;
    });

    menu.innerHTML = meuHtml;
}
mostrarTudo.addEventListener('click', mostrarMenuCompleto);
