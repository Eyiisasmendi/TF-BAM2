const scrollUp = document.querySelector("#scroll-up");

var header=`<header id="templateHeader" class="grid-layout">
<div id="divLogo" class="grid-child-header flex-container-header">
    <div class="child-logo">
        <img src="./assets/img/pinterest_profile_image.png" alt="Design 3D">
    </div>
    <div class="child-logo">
        <span class="subtitulo">
            <b>Design 3D</b>
        </span>
    </div>

</div>
<nav class="grid-child-header flex-navbar">
    <div class="child-navbar">
        <ul class="enlaceMenu ">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html#productos">Productos</a></li>
            <li><a href="index.html#oferta">Oferta</a></li>
            <li><a href="contactos.html">Contacto</a></li>
        </ul>
    </div>
    <div class="child-navbar">
        <ul class="enlaceIconos">
            <li><a href=""><span class="material-symbols-outlined">search</span></a></li>
            <li><a href=""><span class="material-symbols-outlined">person</span></a></li>
            <li><a href=""><span class="material-symbols-outlined">shopping_cart</span></a></li>
        </ul>
    </div>
    <button class="ham" type="button">
        <span class="br-1"></span>
        <span class="br-2"></span>
        <span class="br-3"></span>
    </button>
</nav>
</header>`
var footer = `<footer class="divFooter">
<div class="footer">
    <div class=" iconandmedias">
        <h1 class="titulo"><b> Somos más que
                impresión 3D</b></h1>
        <a href=""><img class="logofooter" src="./assets/img/logo_transparent.png" alt="iconfooter" height="200"
                width="500"></a>
    </div>
</div>
<div class="grupo2_footer">
    <p class="subtitulo box2"><a href="www.linkedin.com/eyisasmendi" target="_blank">Hecho por Eyiisasmendi</a>
    </p>
    <p class="parrafo box2"> © 2023 - ORPHANED DESING 3D | Todos los derechos reservados</p>
</div>
</footer>`
document.body.insertAdjacentHTML('afterbegin', header)
document.body.insertAdjacentHTML('beforeend', footer)


scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });