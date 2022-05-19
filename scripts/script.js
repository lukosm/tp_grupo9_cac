console.log('hello!')

function cargoProductos() {

}
function armoCardProducto() {
    // <div class="card">
    // 	<span class="promo">18% de descuento</span>    
    //     <img class="card-img-top" src="https://www.servicomps.com/wp-content/uploads/2020/07/corei5-9400-2.png" width="100" height="250" alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title"> Procesador i5 9400</h5>
    //     <p class="card-text"></p><p><s>37.500$</s></p><p></p>
    // 	<p class="card-text"></p><p>30.577$</p><p></p>

    //     <p class="card-text"><small class="text-muted">¡Producto Destacado!</small></p>
    //   </div>
    // </div>
}

datosProductos = [
    {
        id: 1,
        nombre: "Smart TV Noblex DK32X5000 LED HD 32",
        precio: "34.499",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_974663-MLA47846000904_102021-O.webp",
        categoria: '1',
        subCategoria: '1',
        descuento: "19",
        destacado: true,
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id: 2,
        nombre: "Smart TV Samsung Series 7 UN55AU7000GCZB LED 4K 55",
        precio: "108.350",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_739692-MLA48913871021_012022-O.webp",
        categoria: '1',
        subCategoria: '1',
        descuento: "0",
        destacado: false,
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id: 3,
        nombre: "Home Theater JBL Cinema SB130 negro 100V/240V",
        precio: "38.999",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_748627-MLA46104178298_052021-O.webp",
        categoria: '1',
        subCategoria: '2',
        descuento: "0",
        destacado: false,
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id: 4,
        nombre: "Heladera inverter Patrick HPK151M11 silver con freezer 388L 220V",
        precio: "98.999",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_952184-MLA43407133867_092020-O.webp",
        categoria: '2',
        subCategoria: '4',
        descuento: "31",
        destacado: false,
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },

];

categoria = [
    {
        id: 1,
        nombre: "Electronica, Audio y Video",
    },
    {
        id: 2,
        nombre: "Electrodomesticos",
    },
];

subCategoria = [
    {
        id: 1,
        nombre: "TV",
        idCategoria: 1,
    },
    {
        id: 2,
        nombre: "Audio",
        idCategoria: 1,
    },
    {
        id: 3,
        nombre: "Video",
        idCategoria: 1,
    },
    {
        id: 4,
        nombre: "Heladera",
        idCategoria: 2,
    },
];

function cargaInicial() {

    var select = document.getElementById("cbCategoria")
    select.appendChild(creoOpcionTodos());
    for (var i in categoria) {
        var opt = document.createElement('option');
        opt.value = categoria[i].id;
        opt.innerHTML = categoria[i].nombre;
        select.appendChild(opt);
    }
    var select = document.getElementById("cbSubCategoria")
    select.innerHTML = "";
    select.appendChild(creoOpcionTodos());
    for (var i in subCategoria)
        if ('1' == subCategoria[i].idCategoria) {
            var opt = document.createElement('option');
            opt.value = subCategoria[i].id;
            opt.innerHTML = subCategoria[i].nombre;
            select.appendChild(opt);
        }
    armoListaArticulos(datosProductos);
    var new_data = [];
    localStorage.setItem('carrito', JSON.stringify(new_data));
}

function creoOpcionTodos() {
    var opt = document.createElement('option');
    opt.value = 0;
    opt.innerHTML = "Todos";
    return opt;
}

function cambioSubCategoria(obj) {
    var select = document.getElementById("cbSubCategoria")
    select.innerHTML = "";
    select.appendChild(creoOpcionTodos());
    for (var i in subCategoria)
        if (obj.value == subCategoria[i].idCategoria) {
            var opt = document.createElement('option');
            opt.value = subCategoria[i].id;
            opt.innerHTML = subCategoria[i].nombre;
            select.appendChild(opt);
        }
}

function filtroPorCategoria() {
    var cbCategoria = document.getElementById("cbCategoria");
    var cbSubCategoria = document.getElementById("cbSubCategoria");
    var filtro = [];
    for (var k in datosProductos) {

        if (cbCategoria.value == '0' || cbCategoria.value == datosProductos[k].categoria)
            if (cbSubCategoria.value == '0' || cbSubCategoria.value == datosProductos[k].subCategoria)
                filtro.push(datosProductos[k])
    }
    console.log(filtro);
    armoListaArticulos(filtro)
}

function filtroPorNombre() {
    var txtBusqueda = document.getElementById("txtBusqueda");
    var filtro = [];
    for (var k in datosProductos) {
        if (txtBusqueda.value == '' || datosProductos[k].nombre.toLowerCase().indexOf(txtBusqueda.value.toLowerCase()) != -1)
            filtro.push(datosProductos[k])
    }
    console.log(filtro);
    armoListaArticulos(filtro)
}


function armoListaArticulos(data) {
    document.getElementById("divContenidoArticulos").innerHTML = '';
    var i = 0;
    for (var k in data) {
        if (i > 3) i = 0;
        {
            var articulo =
                '<div data-aos="fade-up" data-aos-delay="' +
                i +
                '50" class="articulo col-md-3 col-sm-6" onclick="agregoCarrito(' +
                data[k].id +
                ');"><div class="card">';

            if (data[k].destacado !== undefined && data[k].destacado == true)
                articulo += '<i class="fa fa-star destacado" aria-hidden="true"></i>';



            articulo += '<div class="articuloImagen" > <img src="' + data[k].imagen + '" style="width: 100%;max-height: 200px;object-fit: contain;"/>' +
                '<h2 class="divFuenteImagenDetalle">' +
                data[k].nombre +
                "</h2>" +
                "</div>" +
                '<div class="articuloContenido">' +
                '<div class="articuloPrecio">' +
                "<span>$" +
                data[k].precio +
                "</span>";

            if (data[k].descuento !== undefined && data[k].descuento != "0")
                articulo += "<span>" + data[k].descuento + "% OFF</span>";

            articulo += "</div>" +
                '<div class="articuloDescripcion">' +
                "<span>" +
                data[k].descripcion +
                "</span>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";

            document.getElementById("divContenidoArticulos").innerHTML += articulo;
        }
        i += 1;
    }
}

function cargoDetalle(k) {
    document.getElementById("divContenidoDetalle").innerHTML +=
        ' <div class="divImagenPrincipalDetalle"  style=" background-image: url(../img/' +
        data[k].imagen +
        ')">' +
        ' <div class="divTituloPrincipal example">' +
        "<h1>" +
        data[k].nombre +
        "</h1><p>Detalle del curso</p>" +
        "</div> </div> " +
        '<div class="divContenedorNosotros" class="articuloContenido">' +
        '<div class="articuloPrecio">' +
        "<span>$" +
        data[k].precio +
        "</span>" +
        "</div>" +
        '<div class="articuloDescripcion">' +
        //"<p>" +
        data[k].descripcion +
        //"</p>" +
        "</div>" +
        "</div>";
    document.getElementById("divContenidoDetalle").innerHTML +=
        "<div class='divProfesores'><ul id='ulProfesores'>";

    document.getElementById("divContenidoDetalle").innerHTML += "</ul></div>";
}

function cargoProfesores(k) {
    data[k].profesores.forEach((profesor) => {
        document.getElementById("ulProfesores").innerHTML +=
            "<li><a onclick='seleccionoProfe(this)' >" +
            profesor.Apellido +
            ", " +
            profesor.nombre +
            "</a></li>";
    });
}

function agregoCarrito(detalle) {


    let new_data = [];
    let old_data = JSON.parse(localStorage.getItem('carrito'));

    datosProductos.forEach((item) => {
        if (item.id === detalle) {
            console.log(old_data);
            old_data.push(item)
        }
    });

    localStorage.setItem('carrito', JSON.stringify(old_data));
    armoCarrito(old_data)

}

function armoCarrito(items) {
    document.getElementById("carrito").innerHTML = "";
    var suma = 0;
    items.forEach((item) => {
        document.getElementById("carrito").innerHTML +=
            '<a href="#" class="list-group-item list-group-item-action">' + item.nombre + ' <span class="badge badge-primary badge-pill">$' + item.precio + '</span></a>';

        suma = suma + parseFloat(item.precio);
    });

    document.getElementById("total").innerHTML = "$" + suma;
}

function seleccionoProfe(obj) {
    console.log(obj);
    obj.classList.add("activo");
}

function enviarInfo() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var nombreUsuario = document.getElementById("nombreUsuario");
    var password = document.getElementById("password");
    if (
        nombre.value.trim() == "" ||
        apellido.value.trim() == "" ||
        nombreUsuario.value.trim() == "" ||
        password.value.trim() == ""
    )
        alert("Complete los campos obligatorios");
    else alert("Enviado correctamente");
}

function ingresar() {
    var nombreUsuario = document.getElementById("nombreUsuario");
    var password = document.getElementById("password");
    if (nombreUsuario.value.trim() == "" || password.value.trim() == "")
        alert("Complete los campos obligatorios");
    else {
        window.location.href = "../index.html";
        alert("Enviado correctamente");
    }
}


