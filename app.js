document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // IMÁGENES
  // =========================================================

  const IMAGES = {
    default: './img/parrilleros.jpg',
    limonada: './img/limonada.jpg',
    cerveza: './img/cerveza.jpg'
  };


  // =========================================================
  // TEXTOS GENERALES
  // =========================================================

  const SAUCES =
    'Se sirve con arroz o gallo pinto, papas fritas o tajadas, papa asada y vegetales salteados. Elige tu salsa: hongo, jalapeño, chimichurri o barbacoa.';

  const EJECUTIVO =
    'Incluye consomé, bebida, ensalada fresca, arroz o papa asada o tajadas y queso asado.';


  // =========================================================
  // MENÚ
  // =========================================================

  const MENU = [

    {
      id: 'ejecutivo',
      name: 'Menú ejecutivo',
      image: IMAGES.default,
      className: 'c-meat',

      items: [
        {
          name: 'Filete de pollo',
          price: 198,
          description:
            'Filete de pollo jugoso asado a la parrilla. ' + EJECUTIVO
        },

        {
          name: 'Filete de cerdo',
          price: 198,
          description:
            'Cerdo dorado sobre brasas, tierno por dentro. ' + EJECUTIVO
        },

        {
          name: 'Filete de res',
          price: 219,
          description:
            'Corte de res a la parrilla al término que prefieras. ' + EJECUTIVO
        },

        {
          name: 'Corazón asado',
          price: 219,
          description:
            'Corazón de res marinado y asado, con sabor intenso. ' + EJECUTIVO
        },

        {
          name: 'Camarones al ajillo',
          price: 219,
          className: 'c-side',
          description:
            'Camarones salteados en mantequilla y ajo. ' + EJECUTIVO
        },

        {
          name: 'Pasta Alfredo con pollo',
          price: 219,
          className: 'c-side',
          description:
            'Pasta en salsa cremosa Alfredo con pollo a la plancha. ' +
            EJECUTIVO
        },

        {
          name: 'Ensalada César con pollo',
          price: 198,
          className: 'c-side',
          description:
            'Lechuga fresca, aderezo César, crutones y pollo. ' + EJECUTIVO
        },

        {
          name: 'Caldo del día',
          price: 198,
          className: 'c-corn',
          description:
            'Caldo casero del día, caliente y con vegetales. ' + EJECUTIVO
        }
      ]
    },


    // =========================================================
    // A LA PARRILLA
    // =========================================================

    {
      id: 'parrilla',
      name: 'A la parrilla',
      image: IMAGES.default,
      className: 'c-meat',

      items: [
        {
          name: 'Filete de pollo',
          price: 295,
          description:
            'Pechuga asada sobre brasas. ' + SAUCES
        },

        {
          name: 'Filete de cerdo',
          price: 295,
          description:
            'Filete de cerdo dorado a fuego vivo. ' + SAUCES
        },

        {
          name: 'Costillas de cerdo',
          price: 400,
          favorite: true,
          description:
            'Costillas de cerdo tiernas que se sueltan del hueso. ' + SAUCES
        },

        {
          name: 'Churrasquito (para niños)',
          price: 263,
          description:
            'Porción pequeña de churrasco, ideal para los más chicos. ' +
            SAUCES
        },

        {
          name: 'New York (steak)',
          price: 425,
          favorite: true,
          className: 'c-plate',
          description:
            'El clásico New York steak: corte firme, jugoso y con buen sabor a brasa. ' +
            SAUCES
        },

        {
          name: 'Churrasco',
          price: 400,
          description:
            'Churrasco largo y tierno, asado al punto. ' + SAUCES
        },

        {
          name: 'Corazón de res',
          price: 295,
          description:
            'Corazón de res marinado y asado. ' + SAUCES
        },

        {
          name: 'Asado de tira',
          price: 400,
          className: 'c-plate',
          description:
            'Tira de costilla de res con hueso, asada lento. ' + SAUCES
        },

        {
          name: 'Picanha o puyazo',
          price: 485,
          description:
            'Corte de res con su capa de grasa que se derrite en la brasa. ' +
            SAUCES
        },

        {
          name: 'Rib-eye',
          price: 485,
          favorite: true,
          description:
            'Corte marmoleado, muy jugoso y con mucho sabor. ' + SAUCES
        },

        {
          name: 'Mar y tierra',
          price: 650,
          description:
            'Carne de res a la parrilla acompañada de camarones. ' + SAUCES
        },

        {
          name: 'Filet mignon',
          price: 425,
          description:
            'El corte más suave de la res, asado al término que pidas. ' +
            SAUCES
        },

        {
          name: 'Tomahawk',
          price: 1500,
          favorite: true,
          description:
            'Chuleta de res con hueso largo, para compartir. ' + SAUCES
        }
      ]
    },


    // =========================================================
    // PARA COMPARTIR
    // =========================================================

    {
      id: 'compartir',
      name: 'Para compartir',
      image: IMAGES.default,
      className: 'c-plate',

      items: [
        {
          name: 'La Leonesa · 3 personas',
          price: 970,
          description:
            '3 brochetas de res, filete de cerdo, 3 chorizos mixtos, gallo pinto, tortilla, queso y tajadas.'
        },

        {
          name: 'Churrascote · 3 personas',
          price: 1100,
          description:
            '1.5 libras de filete de res, gallo pinto, papas asadas o fritas, tajadas, vegetales salteados en vino, elote dulce y chimichurri.'
        },

        {
          name: 'The Grill Father · 5 personas',
          price: 1415,
          description:
            'Puyazo jumbo, filete de pollo, cerdo, brochetas de camarones, 3 chorizos mixtos, gallo pinto, papas, elote dulce y queso asado.'
        },

        {
          name: 'La Carnívora · 6 personas',
          price: 1750,
          description:
            'New York, rib-eye, churrasco, picanha, 3 chorizos mixtos, vegetales salteados en vino, papas asadas, tajadas, gallo pinto y chimichurri.'
        },

        {
          name: 'Mega Parrilleros · 8 personas',
          price: 2450,
          favorite: true,
          description:
            'Picanha, New York, rib-eye, churrasco, filete de pollo y cerdo, brochetas de camarones, 1 libra de alitas, 4 chorizos, papas, gallo pinto, tortillas, tajadas, queso asado y elote dulce.'
        }
      ]
    },


    // =========================================================
    // ENTRADAS
    // =========================================================

    {
      id: 'entradas',
      name: 'Entradas',
      image: IMAGES.default,
      className: 'c-corn',

      items: [
        {
          name: 'Parrillada de chorizo',
          price: 265,
          className: 'c-meat',
          description:
            '3 chorizos mixtos con chimichurri y tortillas.'
        },

        {
          name: 'Alitas asadas o empanizadas',
          price: 295,
          className: 'c-meat',
          description:
            '1 libra de alitas con vegetales salteados y la salsa que prefieras.'
        },

        {
          name: 'Bruschetta de mozzarella y chorizo',
          price: 160,
          className: 'c-side',
          description:
            'Pan tostado con mozzarella gratinada y chorizo.'
        },

        {
          name: 'Deditos de pollo',
          price: 295,
          className: 'c-meat',
          description:
            'Tiras de pollo empanizadas y crujientes.'
        },

        {
          name: 'Cazuela de queso fundido',
          price: 200,
          className: 'c-side',
          description:
            'Queso derretido en cazuela caliente, para untar.'
        },

        {
          name: 'Fajitas de cerdo o pollo',
          price: 245,
          className: 'c-meat',
          description:
            'Tiras a la parrilla con tortilla y chimichurri.'
        },

        {
          name: 'Fajitas de res',
          price: 273,
          className: 'c-meat',
          description:
            'Tiras de res a la parrilla con tortilla y chimichurri.'
        },

        {
          name: 'Fajitas mixtas',
          price: 294,
          className: 'c-meat',
          description:
            'Res, cerdo y pollo con tortilla y chimichurri.'
        },

        {
          name: 'Pinchos de res',
          price: 300,
          className: 'c-meat',
          description:
            'Pinchos de res asados, con tortilla y chimichurri.'
        }
      ]
    },


    // =========================================================
    // HAMBURGUESAS
    // =========================================================

    {
      id: 'hamburguesas',
      name: 'Hamburguesas',
      image: IMAGES.default,
      className: 'c-meat',

      items: [
        {
          name: 'Hamburguesa de rib-eye',
          price: 445,
          favorite: true,
          description:
            'Carne de rib-eye a la parrilla en pan tostado.'
        },

        {
          name: 'Hamburguesa de pollo crispy',
          price: 315,
          description:
            'Pollo empanizado y crujiente en pan suave.'
        },

        {
          name: 'Hamburguesa de cerdo',
          price: 320,
          description:
            'Carne de cerdo jugosa asada a la parrilla.'
        }
      ]
    },


    // =========================================================
    // MARISCOS
    // =========================================================

    {
      id: 'mariscos',
      name: 'Mariscos',
      image: IMAGES.default,
      className: 'c-side',

      items: [
        {
          name: 'Camarones al ajillo',
          price: 368,
          description:
            'Camarones salteados en mantequilla con mucho ajo.'
        },

        {
          name: 'Ceviche de camarones',
          price: 300,
          className: 'c-corn',
          description:
            'Camarones frescos en limón, cebolla y cilantro.'
        },

        {
          name: 'Brochetas de camarones',
          price: 378,
          description:
            'Camarones en brocheta asados a la parrilla.'
        },

        {
          name: 'Camarones empanizados',
          price: 389,
          description:
            'Camarones dorados y crujientes.'
        }
      ]
    },


    // =========================================================
    // PASTAS Y ENSALADAS
    // =========================================================

    {
      id: 'pastas',
      name: 'Pastas y ensaladas',
      image: IMAGES.default,
      className: 'c-side',

      items: [
        {
          name: 'Pasta Alfredo con pollo',
          price: 278,
          description:
            'Pasta en salsa cremosa Alfredo con pollo.'
        },

        {
          name: 'Pasta Alfredo con camarones',
          price: 368,
          description:
            'Pasta en salsa Alfredo con camarones.'
        },

        {
          name: 'Pasta carbonara',
          price: 278,
          description:
            'Pasta con salsa carbonara cremosa y tocino.'
        },

        {
          name: 'Ensalada César con pollo',
          price: 230,
          description:
            'Lechuga, aderezo César, crutones y pollo.'
        },

        {
          name: 'Ensalada de papa con pollo en queso fundido',
          price: 254,
          description:
            'Ensalada de papa con pollo bañada en queso fundido.'
        },

        {
          name: 'Ensalada de vegetales salteados',
          price: 231,
          description:
            'Vegetales salteados al vino blanco con pollo.'
        }
      ]
    },


    // =========================================================
    // BEBIDAS
    // =========================================================

    {
      id: 'bebidas',
      name: 'Bebidas',
      image: IMAGES.limonada,
      className: '',

      items: [
        {
          name: 'Limonada con hierbabuena',
          price: 60,
          favorite: true,
          image: IMAGES.limonada,
          description:
            'Limón natural, hierbabuena fresca y hielo, servida en jarra Mason. Muy fría.'
        },

        {
          name: 'Cerveza Victoria Selección Maestro',
          price: 70,
          image: IMAGES.cerveza,
          description:
            'Cerveza 100% malta, servida bien fría. Una obra maestra.'
        }
      ]
    },


    // =========================================================
    // EXTRAS
    // =========================================================

    {
      id: 'extras',
      name: 'Extras',
      image: IMAGES.default,
      className: 'c-side',

      items: [
        {
          name: 'Arroz / Gallopinto',
          price: 35,
          description:
            'Porción para acompañar.'
        },

        {
          name: 'Elote',
          price: 40,
          className: 'c-corn',
          description:
            'Elote dulce asado.'
        },

        {
          name: 'Papas asadas',
          price: 40,
          className: 'c-plate',
          description:
            'Papas asadas a la parrilla.'
        },

        {
          name: 'Salsa',
          price: 40,
          className: 'c-sauce',
          description:
            'Hongo, jalapeño, chimichurri o barbacoa.'
        },

        {
          name: 'Papas fritas',
          price: 65,
          description:
            'Porción de papas fritas.'
        },

        {
          name: 'Tajadas',
          price: 30,
          description:
            'Tajadas de plátano fritas.'
        },

        {
          name: 'Queso asado',
          price: 40,
          description:
            'Queso asado a la parrilla.'
        },

        {
          name: 'Chorizo',
          price: 60,
          className: 'c-meat',
          description:
            'Chorizo asado.'
        },

        {
          name: 'Ensalada de lechuga',
          price: 40,
          description:
            'Ensalada fresca de lechuga.'
        },

        {
          name: 'Vegetales salteados',
          price: 50,
          description:
            'Vegetales salteados al vino.'
        },

        {
          name: 'Tortilla',
          price: 10,
          description:
            'Tortilla caliente.'
        },

        {
          name: 'Pan',
          price: 30,
          description:
            'Pan tostado.'
        }
      ]
    }

  ];


  // =========================================================
  // PREPARAR PRODUCTOS
  // =========================================================

  MENU.forEach((category, categoryIndex) => {

    category.items.forEach((item, itemIndex) => {

      item.key = `${categoryIndex}-${itemIndex}`;

      item.category = category.name;

      item.slug = item.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      item.image = item.image || category.image;

      item.className =
        item.className !== undefined
          ? item.className
          : category.className || '';

    });

  });


  // =========================================================
  // ELEMENTOS HTML
  // =========================================================

  const $ = (selector) => document.querySelector(selector);

  const chips = $('#chips');
  const list = $('#list');
  const modal = $('#modal');
  const searchInput = $('#q');
  const emptyMessage = $('#empty');


  // =========================================================
  // COMPROBAR ELEMENTOS
  // =========================================================

  if (!chips || !list) {
    console.error(
      'No se encontraron #chips o #list en el HTML.'
    );

    return;
  }


  // =========================================================
  // FORMATO DE PRECIO
  // =========================================================

  function formatPrice(price) {

    return 'C$' + Number(price).toLocaleString('es-NI');

  }


  // =========================================================
  // BUSCAR PRODUCTO
  // =========================================================

  function findItem(key) {

    const [categoryIndex, itemIndex] = key.split('-');

    const category = MENU[Number(categoryIndex)];

    if (!category) {
      return null;
    }

    return category.items[Number(itemIndex)] || null;

  }


  // =========================================================
  // IMAGEN DEL PRODUCTO
  // =========================================================

  function productImage(item) {

    const imageClass = item.className || '';

    return `
      <div class="ph">
        <img
          loading="lazy"
          src="${item.image}"
          alt="${item.name}"
          class="${imageClass}"
          onerror="this.style.display='none'"
        >
      </div>
    `;

  }


  // =========================================================
  // OBSERVER PARA CATEGORÍAS
  // =========================================================

  let locked = false;

  function setActive(categoryId) {

    chips
      .querySelectorAll('.chip')
      .forEach((button) => {

        const active =
          button.dataset.id === categoryId;

        button.setAttribute(
          'aria-selected',
          active ? 'true' : 'false'
        );

        if (active) {

          button.scrollIntoView({
            inline: 'center',
            block: 'nearest',
            behavior: 'smooth'
          });

        }

      });

  }


  if ('IntersectionObserver' in window) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          if (locked) {
            return;
          }

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              setActive(entry.target.id);

            }

          });

        },
        {
          rootMargin: '-30% 0px -65% 0px'
        }
      );


    window.menuObserver = observer;

  }


  // =========================================================
  // RENDERIZAR MENÚ
  // =========================================================

  function renderMenu(search = '') {

    const query =
      search
        .trim()
        .toLowerCase();

    chips.innerHTML = '';
    list.innerHTML = '';

    let hasResults = false;


    MENU.forEach((category) => {

      const filteredItems =
        category.items.filter((item) => {

          if (!query) {
            return true;
          }

          const searchableText =
            `${item.name} ${item.description} ${category.name}`
              .toLowerCase();

          return searchableText.includes(query);

        });


      if (filteredItems.length === 0) {
        return;
      }


      hasResults = true;


      // -----------------------------
      // CHIP
      // -----------------------------

      chips.insertAdjacentHTML(
        'beforeend',
        `
          <button
            class="chip"
            role="tab"
            type="button"
            data-id="${category.id}"
            aria-selected="false"
          >
            ${category.name}
          </button>
        `
      );


      // -----------------------------
      // PRODUCTOS
      // -----------------------------

      const productsHTML =
        filteredItems
          .map((item) => {

            const favorite =
              item.favorite
                ? '<span class="tag">Favorito</span>'
                : '';

            return `
              <button
                class="item"
                type="button"
                data-key="${item.key}"
              >

                ${productImage(item)}

                <span class="txt">

                  <h3>
                    ${item.name}
                    ${favorite}
                  </h3>

                  <p>
                    ${item.description}
                  </p>

                  <span class="price">
                    ${formatPrice(item.price)}
                  </span>

                </span>

              </button>
            `;

          })
          .join('');


      list.insertAdjacentHTML(
        'beforeend',
        `
          <section id="${category.id}">

            <h2>
              ${category.name}
            </h2>

            ${productsHTML}

          </section>
        `
      );

    });


    // =======================================================
    // MENSAJE SIN RESULTADOS
    // =======================================================

    if (emptyMessage) {

      emptyMessage.style.display =
        hasResults ? 'none' : 'block';

    }


    // =======================================================
    // OBSERVAR CATEGORÍAS
    // =======================================================

    if (window.menuObserver) {

      document
        .querySelectorAll('main section')
        .forEach((section) => {

          window.menuObserver.observe(section);

        });

    }


    // =======================================================
    // ACTIVAR PRIMERA CATEGORÍA
    // =======================================================

    const firstChip =
      chips.querySelector('.chip');

    if (firstChip) {

      firstChip.setAttribute(
        'aria-selected',
        'true'
      );

    }

  }


  // =========================================================
  // CLICK EN CATEGORÍAS
  // =========================================================

  chips.addEventListener(
    'click',
    (event) => {

      const button =
        event.target.closest('.chip');

      if (!button) {
        return;
      }


      const categoryId =
        button.dataset.id;

      const section =
        document.getElementById(categoryId);

      if (!section) {
        return;
      }


      locked = true;

      setActive(categoryId);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });


      setTimeout(() => {

        locked = false;

      }, 700);

    }
  );


  // =========================================================
  // BUSCADOR
  // =========================================================

  if (searchInput) {

    searchInput.addEventListener(
      'input',
      (event) => {

        renderMenu(event.target.value);

      }
    );

  }


  // =========================================================
  // CLICK EN PRODUCTO
  // =========================================================

  list.addEventListener(
    'click',
    (event) => {

      const button =
        event.target.closest('.item');

      if (!button) {
        return;
      }


      const item =
        findItem(button.dataset.key);

      if (!item) {
        return;
      }


      // -----------------------------------------------------
      // Si no existe el modal, no hacer nada
      // -----------------------------------------------------

      if (!modal) {
        return;
      }


      const modalBody =
        $('#mb');

      if (!modalBody) {
        return;
      }


      // -----------------------------------------------------
      // CONTENIDO DEL MODAL
      // -----------------------------------------------------

      modalBody.innerHTML = `

        <div class="big">

          ${productImage(item)}

          <button
            class="x"
            type="button"
            data-close-modal
            aria-label="Cerrar"
          >
            ×
          </button>

        </div>

        <div class="mb">

          <small>
            ${item.category}
          </small>

          <h3>
            ${item.name}
          </h3>

          <p>
            ${item.description}
          </p>

          <span class="price">
            ${formatPrice(item.price)}
          </span>

        </div>

      `;


      // -----------------------------------------------------
      // ABRIR MODAL
      // -----------------------------------------------------

      if (typeof modal.showModal === 'function') {

        modal.showModal();

      } else {

        modal.setAttribute(
          'open',
          ''
        );

      }

    }
  );


  // =========================================================
  // CERRAR MODAL
  // =========================================================

  if (modal) {

    modal.addEventListener(
      'click',
      (event) => {

        const closeButton =
          event.target.closest(
            '[data-close-modal]'
          );


        // Clic fuera del contenido
        if (event.target === modal) {

          closeModal();

          return;

        }


        // Botón X
        if (closeButton) {

          closeModal();

        }

      }
    );

  }


  function closeModal() {

    if (!modal) {
      return;
    }


    if (
      typeof modal.close === 'function' &&
      modal.open
    ) {

      modal.close();

    } else {

      modal.removeAttribute(
        'open'
      );

    }

  }


  // =========================================================
  // TECLA ESC
  // =========================================================

  document.addEventListener(
    'keydown',
    (event) => {

      if (event.key === 'Escape') {

        closeModal();

      }

    }
  );


  // =========================================================
  // INICIAR MENÚ
  // =========================================================

  renderMenu();


});
