import { useMemo, useState } from 'react';
import './MenuBarbakoa.css';

type Producto = { nombre: string; precio: number; descripcion: string; categoria: string; nota?: string };
const productos: Producto[] = [
  {categoria:'Copetín',nombre:'Brisketcheddar con papas',precio:58000,descripcion:'Brisket desmechado, salsa cheddar, cebollita de verdeo y jalapeños opcionales. Con papas fritas.'},
  {categoria:'Copetín',nombre:'Brisketcheddar con nachos',precio:50000,descripcion:'Brisket desmechado, salsa cheddar, cebollita de verdeo y jalapeños opcionales. Con nachos.'},
  {categoria:'Copetín',nombre:'Hummus',precio:38000,descripcion:'Hummus ahumado con bastones de apio, zanahoria y grisines.'},
  {categoria:'Copetín',nombre:'Empanada de pastrami',precio:15000,descripcion:'Pastrami con queso Paraguay y cheddar.'},
  {categoria:'Copetín',nombre:'Empanada de pulled beef',precio:13000,descripcion:'Brisket desmechado tipo casera con huevo, cebolla y perejil.'},
  {categoria:'Copetín',nombre:'Empanada de pulled pork',precio:10000,descripcion:'Cerdo desmechado con salsa barbacoa.'},
  {categoria:'Copetín',nombre:'Jalapeño Popper',precio:25000,descripcion:'Jalapeño relleno de queso crema y pork belly ahumado, envuelto en panceta y apanado en panko.'},
  {categoria:'Temporada',nombre:'Phillycheese Brisket',precio:65000,descripcion:'Sándwich de brisket con abundante muzzarella y cebolla caramelizada en pan francés prensado. Un ícono de la gastronomía philadelphiana.',nota:'Consultar disponibilidad · Solo en el local o para retirar'},
  {categoria:'Temporada',nombre:'Cupín Burnt Ends',precio:85000,descripcion:'200 g de cubitos caramelizados de cupín ahumado, bañados y glaseados en salsa barbacoa americana.',nota:'Consultar disponibilidad · Solo en el local o para retirar'},
  {categoria:'Temporada',nombre:'Bao Pork Belly',precio:55000,descripcion:'Sándwich tipo bao de pork belly con salsa de maní, salsa BBQ gochujang, maní tostado, cebollas encurtidas sobre lactonesa de cilantro.',nota:'Consultar disponibilidad · Solo en el local o para retirar'},
  {categoria:'Ahumados al plato',nombre:'Bandeja Sampler',precio:230000,descripcion:'Brisket, pulled pork, ribs BBQ, coleslaw, potato salad, pan lactal y pickles. Para 2 a 3 personas.'},
  {categoria:'Ahumados al plato',nombre:'Bandeja Sampler XL',precio:360000,descripcion:'Brisket, ribs BBQ, pulled pork, pork belly y un chori a elección. Ensalada coleslaw, potato salad, onion rings, papas fritas, pan lactal y pickles. Para 4 a 5 personas.'},
  {categoria:'Ahumados al plato',nombre:'Brisket',precio:90000,descripcion:'250 g de pecho vacuno ahumado durante 10 horas.'},
  {categoria:'Ahumados al plato',nombre:'Ribs BBQ',precio:60000,descripcion:'Costillas de cerdo glaseadas en salsa BBQ casera, ahumadas durante 6 horas.'},
  {categoria:'Ahumados al plato',nombre:'Pulled Pork',precio:50000,descripcion:'250 g de bondiola de cerdo desmechada, ahumada durante 8 horas.'},
  {categoria:'Ahumados al plato',nombre:'Pork Belly',precio:60000,descripcion:'200 g de panceta parrillera de cerdo, ahumada durante 7 horas.'},
  {categoria:'Ahumados al plato',nombre:'Pulled Beef',precio:70000,descripcion:'250 g de brisket desmechado con salsa BBQ, ahumado durante 8 horas.'},
  {categoria:'Ahumados al plato',nombre:'Chorchieddar',precio:35000,descripcion:'200 g de chori artesanal. Blend de panceta, bondiola y costilla con cheddar. 4 horas de ahumado.'},
  {categoria:'Ahumados al plato',nombre:'Choripeno',precio:38000,descripcion:'200 g de chori cheddar con jalapeños. 4 horas de ahumado.'},
  {categoria:'Ahumados al plato',nombre:'Choribeef',precio:45000,descripcion:'200 g de brisket vacuno con queso Paraguay. 4 horas de ahumado.'},
  {categoria:'Acompañamientos',nombre:'Combo calientes',precio:18000,descripcion:'Agregado de papas fritas y bebida: gaseosa de 500 ml o chopp Munich de 300 ml.'},
  {categoria:'Acompañamientos',nombre:'Papas fritas',precio:15000,descripcion:'El acompañamiento número uno, con sazón secreta.'},
  {categoria:'Acompañamientos',nombre:'Mac & Cheese',precio:18000,descripcion:'Fideos con salsa a base de gruyere, cuartirolo y cheddar con paprika ahumada.'},
  {categoria:'Acompañamientos',nombre:'Onion Rings',precio:20000,descripcion:'Aros de cebolla blanca apanados y crocantes con sazón secreta.'},
  {categoria:'Acompañamientos',nombre:'Potato Salad',precio:15000,descripcion:'Ensalada sureña de papas asadas con huevos, jugo de pickles, cebolla, verdeo, crema ácida y mayonesa.'},
  {categoria:'Acompañamientos',nombre:'Coleslaw',precio:15000,descripcion:'Ensalada fresca de repollos asados, zanahorias y mayonesa.'},
  {categoria:'Acompañamientos',nombre:'Pan lactal',precio:5000,descripcion:'2 rodajas de pan gruesito, blandito y esponjoso.'},
  {categoria:'Acompañamientos',nombre:'Adicional de pickles',precio:7000,descripcion:'Pepinillos, cebollas y zanahorias encurtidas.'},
  {categoria:'Menú Kids',nombre:'Nuggets de pollo',precio:28000,descripcion:'8 unidades con papas fritas.'},
  {categoria:'Sándwiches',nombre:'Texas',precio:50000,descripcion:'Brisket, lactonesa de ajo y cebollas encurtidas. Recomendado de la casa.'},
  {categoria:'Sándwiches',nombre:'Chanchino',precio:38000,descripcion:'Desmechado de cerdo, lactonesa de ajo, pepinillos, salsa BBQ y papas pay.'},
  {categoria:'Sándwiches',nombre:'Chopped',precio:48000,descripcion:'Desmechado de brisket vacuno, jalapeños, cebolla fresca, cheddar y mucha salsa BBQ.'},
  {categoria:'Sándwiches',nombre:'Tribbiani',precio:80000,descripcion:'Pastrami ahumado, mostaza americana, chucrut casero y pepinillos. Agregado de queso gruyere gratinado: Gs. 10.000.'},
  {categoria:'Sándwiches',nombre:'PBLT',precio:42000,descripcion:'Pork belly, lechuga, tomate y mayo. Un clásico en versión Texas Barbecue.'},
  {categoria:'Sándwiches',nombre:'Brisketmelt',precio:50000,descripcion:'Sándwich grilled cheese con brisket desmechado, abundante queso cheddar, salsa BBQ de la casa y jalapeños.'},
  {categoria:'Sándwiches',nombre:'Falafel Sando',precio:40000,descripcion:'Croquetas de garbanzo, coleslaw, pepinillos, hummus ahumado y lactonesa de ajo. Opción vegetariana.'},
  {categoria:'Burgers',nombre:'Brisketburger',precio:50000,descripcion:'Burger ahumada de 170 g, cheddar, relish, mayo, cebolla fresca, lechuga y tomate. Tipo Whopper ahumada.'},
  {categoria:'Burgers',nombre:'Mc Brisket',precio:55000,descripcion:'Burger ahumada de 170 g, salsa Mc Brisket, doble cheddar, pepinillos y lechuga. Tipo Big Mac ahumada.'},
  {categoria:'Burgers',nombre:'Royale',precio:47000,descripcion:'Burger ahumada de 170 g, cheddar, pepinillos, mostaza americana, ketchup y cebolla.'},
  {categoria:'Burgers',nombre:'Cheeseburger',precio:40000,descripcion:'Burger ahumada de 170 g, cheddar y mayo. A veces, menos es más.'},
  {categoria:'Burgers',nombre:'Baconbrisket',precio:52000,descripcion:'Burger ahumada de 170 g con bacon artesanal, aros de cebolla, cheddar y BBQ de la casa.'},
  {categoria:'Postres',nombre:'Ice Cream Sandwich',precio:30000,descripcion:'2 cookies con chips de chocolate rellenas con helado de crema americana.'},
  {categoria:'Postres',nombre:'Volcán de chocolate',precio:35000,descripcion:'Volcán caliente con helado de crema americana.'},
  {categoria:'Postres',nombre:'Volcán de dulce de leche',precio:35000,descripcion:'Volcán caliente con helado de crema americana.'},
  {categoria:'Postres',nombre:'Banana Bread',precio:25000,descripcion:'Bizcocho bananoso caliente acompañado de helado de crema americana.'},
  {categoria:'Postres',nombre:'Brownie con helado',precio:25000,descripcion:'Brownie de chocolate con helado de crema americana.'},
  {categoria:'Postres',nombre:'Season Pie',precio:30000,descripcion:'Pie de temporada con helado de crema americana. Consultar sabor disponible.'},
  {categoria:'Bebidas',nombre:'Chopp Munich 300 ml',precio:12000,descripcion:'Cerveza de barril. Happy hour: Gs. 8.000.'},
  {categoria:'Bebidas',nombre:'Chopp Munich 500 ml',precio:15000,descripcion:'Cerveza de barril. Happy hour: Gs. 10.000.'},
  {categoria:'Bebidas',nombre:'Agua sin gas',precio:8000,descripcion:'Agua mineral.'},
  {categoria:'Bebidas',nombre:'Agua con gas',precio:8000,descripcion:'Agua mineral con gas.'},
  {categoria:'Bebidas',nombre:'Gaseosa 500 ml',precio:10000,descripcion:'Gaseosa individual.'},
  {categoria:'Bebidas',nombre:'Jugos naturales',precio:18000,descripcion:'Jugos naturales.'},
  {categoria:'Bebidas',nombre:'Heineken 0%',precio:12000,descripcion:'Cerveza sin alcohol.'},
  {categoria:'Bebidas',nombre:'Tinto de verano 300 ml',precio:25000,descripcion:'Happy hour: Gs. 20.000.'},
  {categoria:'Bebidas',nombre:'Aperol Spritz 300 ml',precio:35000,descripcion:'Happy hour: Gs. 28.000.'},
  {categoria:'Bebidas',nombre:'Gin Tonic 500 ml',precio:25000,descripcion:'Happy hour: Gs. 20.000.'},
  {categoria:'Bebidas',nombre:'Amargo Tonic 500 ml',precio:18000,descripcion:'Happy hour: Gs. 12.000.'},
  {categoria:'Bebidas',nombre:'Fernet Cola 500 ml',precio:20000,descripcion:'Happy hour: Gs. 15.000.'},
  {categoria:'Bebidas',nombre:'Jack & Coke 500 ml',precio:30000,descripcion:'Trago con whisky y cola.'},
  {categoria:'Bebidas',nombre:'Cordero con Piel de Lobo Malbec',precio:85000,descripcion:'Vino tinto por botella.'},
];

const categorias = ['Todos','Copetín','Temporada','Ahumados al plato','Sándwiches','Burgers','Acompañamientos','Menú Kids','Postres','Bebidas'];
const formatoPrecio = (precio: number) => `Gs. ${precio.toLocaleString('es-PY')}`;

export default function MenuBarbakoa() {
  const [categoria, setCategoria] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [carrito, setCarrito] = useState<Record<string, number>>({});
  const [panelAbierto, setPanelAbierto] = useState(false);
  const [rebote, setRebote] = useState(0);
 
const [, setUltimoAgregado] = useState('');

  const visibles = useMemo(() => productos.filter(p =>
    (categoria === 'Todos' || p.categoria === categoria) &&
    `${p.nombre} ${p.descripcion}`.toLocaleLowerCase('es').includes(busqueda.toLocaleLowerCase('es'))
  ), [categoria, busqueda]);
  const items = productos.filter(p => (carrito[p.nombre] || 0) > 0);
  const cantidad = items.reduce((s, p) => s + carrito[p.nombre], 0);
  const total = items.reduce((s, p) => s + p.precio * carrito[p.nombre], 0);

  const cambiarCantidad = (nombre: string, cambio: number) => {
    setCarrito(actual => {
      const siguiente = { ...actual };
      const nueva = (siguiente[nombre] || 0) + cambio;
      if (nueva <= 0) delete siguiente[nombre];
      else siguiente[nombre] = nueva;
      return siguiente;
    });
  };
  const agregar = (nombre: string) => {
    cambiarCantidad(nombre, 1);
    setUltimoAgregado(nombre);
    setRebote(n => n + 1);
  };
  const enviarPedido = () => {
    if (!items.length) return;
    const lineas = items.map(p =>
      `• ${carrito[p.nombre]} x ${p.nombre} — ${formatoPrecio(p.precio * carrito[p.nombre])}`
    );
    const mensaje = [
      '¡Hola BARBAKOA! 🔥 Quisiera realizar este pedido:',
      '', ...lineas, '',
      `*TOTAL: ${formatoPrecio(total)}*`, '',
      '¿Me confirman disponibilidad y cómo podemos coordinar el pedido? ¡Gracias!'
    ].join('\n');
    window.open(`https://wa.me/595971328330?text=${encodeURIComponent(mensaje)}`, '_blank', 'noopener,noreferrer');
  };

  return <section className="menu-bbk" id="menu">
    <div className="menu-bbk-inner">
      <div className="menu-bbk-head">
        <div><span className="menu-bbk-kicker">03 / SABOR SIN LÍMITES</span><h2>NUESTRO <em>MENÚ.</em></h2><p>El humo, el fuego y los sabores que nos representan. Elegí tu próximo favorito.</p></div>
        <button type="button" key={rebote} className={`menu-bbk-cart ${rebote ? 'bbk-cart-bounce' : ''}`} onClick={() => setPanelAbierto(true)} aria-label={`Abrir carrito, ${cantidad} productos`}>
          <span aria-hidden="true">🛒</span><span>CARRITO</span><strong>{cantidad}</strong>
        </button>
      </div>
      <div className="menu-bbk-toolbar">
        <div className="menu-bbk-tabs" role="group" aria-label="Categorías del menú">{categorias.map(c => <button type="button" key={c} className={categoria === c ? 'selected' : ''} onClick={() => setCategoria(c)}>{c}</button>)}</div>
        <input type="search" value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar un plato..." aria-label="Buscar productos" />
      </div>
      {(categoria === 'Todos' || categoria === 'Temporada') && <p className="menu-bbk-alert">✦ AHUMADOS DE TEMPORADA: disponibles solo para consumir en el local o pasar a retirar. Consultar disponibilidad.</p>}
      <div className="menu-bbk-count">{visibles.length} OPCIONES PARA DISFRUTAR</div>
      <div className="menu-bbk-grid">
        {visibles.map((p, i) => <article className="menu-bbk-card" key={`${p.categoria}-${p.nombre}`} style={{animationDelay: `${Math.min(i, 10) * 35}ms`}}>
          <div className="menu-bbk-card-top"><span className="menu-bbk-category">{p.categoria}</span><span className="menu-bbk-number">{String(i + 1).padStart(2, '0')}</span></div>
          <h3>{p.nombre}</h3><p>{p.descripcion}</p>
          {p.nota && <small>{p.nota}</small>}
          <div className="menu-bbk-card-bottom"><strong>{formatoPrecio(p.precio)}</strong><button type="button" onClick={() => agregar(p.nombre)} aria-label={`Agregar ${p.nombre} al carrito`}>+ AGREGAR</button></div>
        </article>)}
      </div>
      {visibles.length === 0 && <div className="menu-bbk-empty">No encontramos productos con esa búsqueda.</div>}
      <div className="menu-bbk-foot"><span>✦ Burgers ahumadas: el color rosado es efecto del ahumado.</span><span>✦ Cocina hasta las 23:00 · Local hasta las 24:00.</span><span>✦ Happy hour: jueves a domingo, 18:00 a 20:30.</span><span>✦ Los choris incluyen pan lactal y pickles.</span></div>
    </div>

    {cantidad > 0 && <button type="button" key={`float-${rebote}`} className={`bbk-floating-cart ${rebote ? 'bbk-cart-bounce' : ''}`} onClick={() => setPanelAbierto(true)} aria-label={`Ver carrito con ${cantidad} productos`}>
      <span aria-hidden="true">🛒</span> <span>VER CARRITO</span><strong>{cantidad}</strong>
    </button>}

    <div className={`bbk-cart-overlay ${panelAbierto ? 'is-open' : ''}`} onClick={() => setPanelAbierto(false)} aria-hidden="true" />
    <aside className={`bbk-cart-drawer ${panelAbierto ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Tu carrito de BARBAKOA" aria-hidden={!panelAbierto} inert={!panelAbierto}>
      <div className="bbk-drawer-head">
        <div><span>BARBAKOA / TU PEDIDO</span><h2>MI <em>CARRITO.</em></h2></div>
        <button type="button" className="bbk-close" onClick={() => setPanelAbierto(false)} aria-label="Cerrar carrito">×</button>
      </div>
      <div className="bbk-drawer-items">
        {!items.length && <div className="bbk-drawer-empty"><span>🛒</span><h3>TODAVÍA NO HAY FUEGO.</h3><p>Agregá tus favoritos del menú para comenzar tu pedido.</p><button type="button" onClick={() => setPanelAbierto(false)}>EXPLORAR MENÚ ↗</button></div>}
        {items.map(p => <article className="bbk-cart-item" key={p.nombre}>
          <div className="bbk-cart-item-top"><div><span>{p.categoria}</span><h3>{p.nombre}</h3></div><button type="button" className="bbk-remove" onClick={() => cambiarCantidad(p.nombre, -carrito[p.nombre])} aria-label={`Eliminar ${p.nombre}`}>✕</button></div>
          <div className="bbk-cart-item-bottom"><div className="bbk-qty"><button type="button" onClick={() => cambiarCantidad(p.nombre, -1)} aria-label={`Quitar uno de ${p.nombre}`}>−</button><span>{carrito[p.nombre]}</span><button type="button" onClick={() => cambiarCantidad(p.nombre, 1)} aria-label={`Agregar uno de ${p.nombre}`}>+</button></div><strong>{formatoPrecio(p.precio * carrito[p.nombre])}</strong></div>
        </article>)}
      </div>
      <div className="bbk-drawer-footer"><div className="bbk-total"><span>TOTAL ESTIMADO</span><strong>{formatoPrecio(total)}</strong></div><p>Disponibilidad y modalidad de entrega o retiro a confirmar con BARBAKOA.</p><button type="button" className="bbk-whatsapp" disabled={!items.length} onClick={enviarPedido}>REALIZAR PEDIDO POR WHATSAPP ↗</button></div>
    </aside>
  </section>;
}
