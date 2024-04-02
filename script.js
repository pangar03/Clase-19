const render = () => {
    // ----------------------- CLASE  --------------------------------
    // const contenedor = document.querySelector('#cuadro');
    
    // contenedor.addEventListener('click', (e) => {
    //     console.log(e);
    //     alert("Se hizo click en el cuadro!");
    // });
    
    // contenedor.addEventListener('mouseenter', () => {
    //     contenedor.classList.remove("contenedor");
    //     contenedor.classList.add("contenedorDos");
    // });
    
    // contenedor.addEventListener('mouseleave', () => {
    //     contenedor.classList.remove("contenedorDos");
    //     contenedor.classList.add("contenedor");
    // });

    // ----------------------- EJERCICIO --------------------------------
    const digimones = [
        "https://digimon.shadowsmith.com/img/koromon.jpg",
        "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        "https://digimon.shadowsmith.com/img/yokomon.jpg",
        "https://digimon.shadowsmith.com/img/motimon.jpg",
        "https://digimon.shadowsmith.com/img/patamon.jpg",
        "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
        "https://digimon.shadowsmith.com/img/greymon.jpg",
        "https://digimon.shadowsmith.com/img/tanemon.jpg",
    ];
    
    const digimonesContainer = document.querySelector('#digimones');

    const crearDigimones = (linkDigimon) => {
        const img = document.createElement('img');
        img.setAttribute('src', linkDigimon);
        img.setAttribute('alt', 'Digimon');
        img.classList.add('imagen');
        return img;
    };
    
    for (const digimon of digimones) {
        imgDigimon = crearDigimones(digimon);
        digimonesContainer.appendChild(imgDigimon);
        imgDigimon.addEventListener('click', (e) => {
            alert(digimon);
        });
    }


};

document.addEventListener("DOMContentLoaded", render);