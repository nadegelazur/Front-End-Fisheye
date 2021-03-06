// construction d'un article qui contiens photo de photograph avec info supplementaire
function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const lien = document.createElement('a');
        lien.setAttribute("href", "photographer.html?id=" + id);
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ',' + country;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const p1 = document.createElement( 'p' );
        p1.textContent = price + '/jours';

        article.appendChild(lien);
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p1);

        return (article);
    }

    return { id, name, picture, getUserCardDOM, city, country, tagline, price }
}
