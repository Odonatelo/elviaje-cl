import { ArrowRight, BarChart3, Building2, Check, Compass, ExternalLink, Footprints, Grape, Landmark, Layers3, Leaf, MapPin, MapPinned, MessageCircle, Search, Sparkles, TreePine, UtensilsCrossed, UsersRound } from 'lucide-react';
import { useState, type CSSProperties } from 'react';

const siteBase = import.meta.env.BASE_URL.replace(/\/+$/, '');
const siteHref = (path: string) => siteBase + path;

const whatsappUrl = 'https://wa.me/56998097010?text=Hola%2C%20quiero%20conversar%20sobre%20una%20consultor%C3%ADa%20en%20interpretaci%C3%B3n%20del%20patrimonio.';
const method = [
  ['01', 'Escuchamos el territorio', 'Revisamos el lugar, sus memorias, sus audiencias y la oportunidad que quieres activar.'],
  ['02', 'Encontramos la idea fuerza', 'Traducimos información compleja en una historia clara, pertinente y memorable.'],
  ['03', 'Diseñamos la experiencia', 'Definimos los medios, mensajes y prioridades para que cada punto de contacto tenga sentido.'],
  ['04', 'Acompañamos la implementación', 'Entregamos una hoja de ruta aplicable y acompañamos las decisiones que siguen.'],
];
const results = [
  ['Diagnóstico interpretativo', 'Una lectura estratégica del sitio, sus públicos y su potencial de significado.'],
  ['Relato y concepto rector', 'La idea que ordena los contenidos y permite que todo el proyecto hable con una sola voz.'],
  ['Plan de medios', 'Recomendaciones priorizadas para señalética, recorridos, contenidos editoriales y espacios de mediación.'],
  ['Guía de implementación', 'Criterios concretos para avanzar con equipos, proveedores y decisiones de diseño.'],
];

const visitorProfiles = [
  {
    id: 'ecosistemas',
    eyebrow: 'Naturaleza que transforma',
    name: 'La exploradora de ecosistemas',
    icon: TreePine,
    color: '#4c7d57',
    description: 'No busca sólo una postal: quiere reconocer especies, entender los ciclos del agua y sentirse parte de la trama viva del lugar.',
    signals: ['senderos con propósito', 'avifauna y paisaje', 'áreas protegidas'],
    design: 'Invítala a observar, registrar y cuidar. Un buen recorrido convierte asombro en atención.',
  },
  {
    id: 'sabores',
    eyebrow: 'Territorio que se prueba',
    name: 'La coleccionista de sabores',
    icon: UtensilsCrossed,
    color: '#b65d3d',
    description: 'Llega por una receta, una feria, una viña o una mesa compartida. En los sabores encuentra geografía, oficio y memoria familiar.',
    signals: ['cocina de origen', 'viñas y oficios', 'mercados locales'],
    design: 'Conecta ingredientes con personas, estación y paisaje. El relato empieza antes del primer bocado.',
  },
  {
    id: 'huellas',
    eyebrow: 'Memoria que permanece',
    name: 'La arqueóloga de huellas',
    icon: Building2,
    color: '#746044',
    description: 'Se detiene frente a una estación olvidada, una fábrica, un cementerio patrimonial o una ruina. Lee en las capas del tiempo.',
    signals: ['arquitectura en desuso', 'cementerios patrimoniales', 'paisajes industriales'],
    design: 'Da contexto y cuidado. La emoción se vuelve respeto cuando la historia tiene voces y límites claros.',
  },
  {
    id: 'relatos',
    eyebrow: 'Cultura que se conversa',
    name: 'La tejedora de relatos',
    icon: Landmark,
    color: '#386d78',
    description: 'Entra a museos, barrios y viñas para comprender qué historias siguen vivas y con quiénes puede conversar sobre ellas.',
    signals: ['museos con mediación', 'barrios caminables', 'rutas de viñas'],
    design: 'Ofrece elecciones, preguntas y momentos de conversación: no una lista de fechas.',
  },
];

const monthlyNights: Array<[string, number]> = [
  ['Ene', 2282974], ['Feb', 2270964], ['Mar', 1645605], ['Abr', 1449370], ['May', 1349488], ['Jun', 1427433], ['Jul', 1695480],
];

function VisitorInsightsPage() {
  const [activeProfileId, setActiveProfileId] = useState(visitorProfiles[0].id);
  const activeProfile = visitorProfiles.find((profile) => profile.id === activeProfileId) ?? visitorProfiles[0];
  const ActiveIcon = activeProfile.icon;
  const maxNights = Math.max(...monthlyNights.map(([, value]) => value));

  return <main className="tourism-lab">
    <header className="tourism-lab__header">
      <a href={siteHref('/')} className="tourism-lab__brand" aria-label="Volver a El Viaje"><span>el viaje</span><i /></a>
      <nav aria-label="Navegación de El Viaje"><a href={siteHref('/')}>Inicio</a><a href={siteHref('/consultoria')}>Consultoría</a><a className="is-current" href={siteHref('/visitantes')}>Visitantes</a><a href={siteHref('/comunidad')}>Comunidad</a></nav>
      <a className="tourism-lab__header-cta" href={siteHref('/consultoria')}>Diseñar con datos <ArrowRight size={16} aria-hidden="true" /></a>
    </header>

    <section className="tourism-lab__hero" aria-labelledby="tourism-lab-title">
      <div className="tourism-lab__orbit tourism-lab__orbit--one" aria-hidden="true" />
      <div className="tourism-lab__orbit tourism-lab__orbit--two" aria-hidden="true" />
      <div className="tourism-lab__hero-copy">
        <p className="tourism-lab__eyebrow"><Sparkles size={14} aria-hidden="true" />El pulso de quienes visitan Chile</p>
        <h1 id="tourism-lab-title">Los datos muestran<br /><em>movimientos.</em><br />Las experiencias, motivos.</h1>
        <p>Una lectura viva para imaginar visitantes, afinar experiencias y hacer que el ecoturismo, la gastronomía y el patrimonio generen vínculos reales.</p>
        <div className="tourism-lab__hero-notes"><span><i />Corte de indicadores: 1 de septiembre de 2026</span><span><i />Perfiles: lectura de diseño, no segmentación demográfica</span></div>
      </div>
      <aside className="tourism-lab__signal-card" aria-label="Resumen de la actividad turística">
        <div className="tourism-lab__signal-ring"><span>2025</span><strong>6,0 M</strong><small>llegadas<br />internacionales</small></div>
        <div><p><b>+14,6%</b> frente a 2024</p><span>El mayor registro postpandemia y la mejor cifra desde 2017.</span></div>
        <a href="https://www.subturismo.gob.cl/2026/02/26/chile-supera-los-6-millones-de-turistas-extranjeros-en-2025-la-mejor-cifra-desde-2017-y-el-mayor-registro-post-pandemia/" target="_blank" rel="noreferrer">Ver fuente <ExternalLink size={14} aria-hidden="true" /></a>
      </aside>
    </section>

    <section className="tourism-lab__metrics" aria-label="Indicadores de alojamiento turístico, julio de 2026">
      <article><span>01 · noches que se quedan</span><strong>1.695.480</strong><p>Pernoctaciones en establecimientos de alojamiento turístico.</p><em>−7,3% interanual</em></article>
      <article><span>02 · habitaciones activas</span><strong>38,3%</strong><p>Tasa nacional de ocupación en habitaciones.</p><em>−2,52 pp. interanual</em></article>
      <article><span>03 · valor de la noche</span><strong>$93.949</strong><p>Tarifa promedio diaria (ADR), pesos corrientes.</p><em>+4,99% interanual</em></article>
      <article><span>04 · tiempo para estar</span><strong>2,20</strong><p>Noches promedio de estancia en julio.</p><em>+0,21% interanual</em></article>
    </section>

    <section className="tourism-lab__dashboard" aria-labelledby="dashboard-title">
      <div className="tourism-lab__section-intro"><p className="tourism-lab__eyebrow"><BarChart3 size={14} aria-hidden="true" />Una radiografía para conversar</p><h2 id="dashboard-title">El año no avanza en línea recta.</h2><p>La estacionalidad importa: cada mes cambia la intensidad del viaje y la oportunidad de ofrecer una experiencia con sentido.</p></div>
      <div className="tourism-lab__chart-card">
        <div className="tourism-lab__chart-head"><div><span>Chile · 2026</span><h3>Pernoctaciones por mes</h3></div><b>enero — julio</b></div>
        <div className="tourism-lab__bars" role="img" aria-label="Gráfico de pernoctaciones de enero a julio de 2026">
          {monthlyNights.map(([month, value], index) => <div className="tourism-lab__bar-column" key={month}><span className="tourism-lab__bar-value">{(value / 1000000).toFixed(2).replace('.', ',')} M</span><i className={index > 4 ? 'is-highlight' : ''} style={{ height: `${(value / maxNights) * 100}%` }} /><b>{month}</b></div>)}
        </div>
        <p className="tourism-lab__chart-caption"><span />El descenso respecto a 2025 no equivale a un único tipo de visitante: el desafío es comprender qué experiencias sostienen deseo, estadía y cuidado.</p>
      </div>
    </section>

    <section className="tourism-lab__profiles" aria-labelledby="profiles-title">
      <div className="tourism-lab__section-intro"><p className="tourism-lab__eyebrow"><UsersRound size={14} aria-hidden="true" />Del movimiento a la motivación</p><h2 id="profiles-title">Cuatro formas de<br /><em>sentirse visitante.</em></h2><p>Una herramienta lúdica para idear, no una etiqueta para encasillar. Elige una constelación y descubre qué le puede importar.</p></div>
      <div className="tourism-lab__profile-board">
        <div className="tourism-lab__profile-tabs" role="tablist" aria-label="Perfiles de visitantes">
          {visitorProfiles.map((profile, index) => { const Icon = profile.icon; const selected = profile.id === activeProfile.id; return <button key={profile.id} role="tab" aria-selected={selected} onClick={() => setActiveProfileId(profile.id)} className={selected ? 'is-active' : ''} style={{ '--profile-color': profile.color } as CSSProperties}><span>0{index + 1}</span><Icon size={21} aria-hidden="true" /><b>{profile.name.replace('La ', '')}</b></button>; })}
        </div>
        <article className="tourism-lab__profile-detail" style={{ '--profile-color': activeProfile.color } as CSSProperties}>
          <div className="tourism-lab__profile-icon"><ActiveIcon size={34} strokeWidth={1.5} aria-hidden="true" /></div>
          <p>{activeProfile.eyebrow}</p><h3>{activeProfile.name}</h3><blockquote>“{activeProfile.description}”</blockquote>
          <div className="tourism-lab__profile-chips">{activeProfile.signals.map((signal) => <span key={signal}>{signal}</span>)}</div>
          <footer><Footprints size={17} aria-hidden="true" /><span><b>Oportunidad de interpretación</b>{activeProfile.design}</span></footer>
        </article>
      </div>
    </section>

    <section className="tourism-lab__signals" aria-labelledby="signals-title">
      <div><p className="tourism-lab__eyebrow"><Leaf size={14} aria-hidden="true" />Señales de experiencia</p><h2 id="signals-title">Tres pulsos para diseñar ahora.</h2></div>
      <div className="tourism-lab__signal-grid">
        <article><span className="tourism-lab__signal-number">A</span><Leaf aria-hidden="true" /><h3>Ecoturismo con relación</h3><p>Pasar de “ver naturaleza” a comprender el ecosistema, la comunidad y las decisiones de cuidado que lo sostienen.</p><a href="https://www.sernatur.cl/dataturismo/big-data-turismo-interno/" target="_blank" rel="noreferrer">Explorar Big Data interno <ArrowRight size={15} aria-hidden="true" /></a></article>
        <article><span className="tourism-lab__signal-number">B</span><Grape aria-hidden="true" /><h3>Gastronomía con origen</h3><p>Viñas, mercados y cocinas locales pueden contar territorio cuando se visibilizan estaciones, oficios y redes humanas.</p><a href={siteHref('/consultoria')}>Convertirlo en experiencia <ArrowRight size={15} aria-hidden="true" /></a></article>
        <article><span className="tourism-lab__signal-number">C</span><MapPin aria-hidden="true" /><h3>Patrimonio que se habita</h3><p>Museos, ruinas, edificios abandonados y cementerios patrimoniales necesitan relato, contexto, escucha y protocolos de respeto.</p><a href={siteHref('/consultoria')}>Diseñar una mediación <ArrowRight size={15} aria-hidden="true" /></a></article>
      </div>
    </section>

    <section className="tourism-lab__method"><div><p>¿Qué hacemos con esta lectura?</p><h2>Diseñamos para que una visita deje una huella en el corazón.</h2></div><a href={siteHref('/consultoria')}>Hablemos de tu territorio <ArrowRight size={18} aria-hidden="true" /></a></section>

    <footer className="tourism-lab__footer"><div><a href={siteHref('/')} className="tourism-lab__brand"><span>el viaje</span><i /></a><p>Indicadores públicos y lectura editorial para interpretar mejor el viaje.</p></div><div><p>Fuentes y fecha de corte</p><a href="https://www.ine.gob.cl/estadisticas-por-tema/comercio-y-servicios/actividad-mensual-del-turismo" target="_blank" rel="noreferrer">INE · EMAT julio 2026 <ExternalLink size={13} aria-hidden="true" /></a><a href="https://datosturismo.sernatur.cl/siet/reporteTempEMAT" target="_blank" rel="noreferrer">SERNATUR · SIET <ExternalLink size={13} aria-hidden="true" /></a><a href="https://www.sernatur.cl/dataturismo/" target="_blank" rel="noreferrer">Data Turismo Chile <ExternalLink size={13} aria-hidden="true" /></a><a href="https://www.fedetur.org/" target="_blank" rel="noreferrer">FEDETUR · contexto gremial <ExternalLink size={13} aria-hidden="true" /></a></div><p className="tourism-lab__footer-note">Las cifras de Big Data se publican de forma agregada y anonimizada y SERNATUR informa que su serie experimental está en revisión. Los perfiles de esta página son una herramienta creativa, no una medición estadística.</p></footer>
  </main>;
}

function CommunityPage() {
  const waysToJoin = [
    { icon: Compass, label: '01 · Viajar con atención', title: 'Para quienes descubren el territorio al recorrerlo.', body: 'Viajeras y viajeros que quieren mirar con más calma, comprender los lugares y dejar una huella respetuosa.' },
    { icon: UsersRound, label: '02 · Interpretar en red', title: 'Para quienes convierten conocimiento en vínculos.', body: 'Intérpretes, mediadores, guías, educadores y equipos que comparten preguntas, aprendizajes y herramientas.' },
    { icon: Landmark, label: '03 · Cuidar lo que importa', title: 'Para quienes activan el patrimonio con sentido.', body: 'Personas y organizaciones que entienden que interpretar también es abrir conversación, respeto y cuidado.' },
  ];

  return <main className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#18251e] selection:bg-[#d77b42] selection:text-white">
    <header className="relative z-20 border-b border-white/15 bg-[#163a31] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href={siteHref('/')} className="flex items-center gap-2 font-['Outfit'] text-xl font-extrabold tracking-tight" aria-label="El Viaje, inicio"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#f5c96a] text-sm text-[#18382e]">e</span>el viaje</a>
        <nav className="hidden items-center gap-5 text-xs font-bold text-[#d6e0da] md:flex"><a className="transition hover:text-[#f5c96a]" href={siteHref('/consultoria')}>Consultoría</a><a className="transition hover:text-[#f5c96a]" href={siteHref('/visitantes')}>Visitantes</a><a className="text-[#f5c96a]" href={siteHref('/comunidad')}>Comunidad</a></nav>
        <a href="https://www.interpretaciondelpatrimonio.cl" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-[11px] font-bold transition hover:border-[#f5c96a] hover:text-[#f5c96a] sm:px-4">La plataforma <ExternalLink className="h-3.5 w-3.5" /></a>
      </div>
    </header>

    <section className="relative isolate overflow-hidden bg-[#163a31] px-5 pb-20 pt-16 text-white lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute -left-24 top-8 -z-10 h-80 w-80 rounded-full border border-[#f5c96a]/25" />
      <div className="absolute -bottom-44 right-[-5rem] -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.18fr_.82fr] lg:items-end">
        <div className="max-w-3xl"><p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.2em] text-[#f5c96a]"><span className="h-px w-8 bg-[#f5c96a]" />Comunidad El Viaje</p><h1 className="mt-6 font-['Outfit'] text-5xl font-extrabold leading-[.93] tracking-tight sm:text-6xl lg:text-7xl">Una comunidad para<br /><span className="font-serif font-normal italic text-[#f5c96a]">viajar, interpretar</span><br />y cuidar.</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#d6e0da] sm:text-xl">Un punto de encuentro para quienes creen que cada visita puede abrir una relación más profunda con los paisajes, las memorias y las personas que les dan vida.</p><div className="mt-9 flex flex-wrap gap-3"><a href="https://www.interpretaciondelpatrimonio.cl" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f5c96a] px-6 py-3.5 text-sm font-extrabold text-[#18382e] transition hover:-translate-y-0.5 hover:bg-[#ffe09a]">Entrar a la plataforma <ExternalLink className="h-4 w-4" /></a><a href="#como-participar" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">Conocer la comunidad <ArrowRight className="h-4 w-4" /></a></div></div>
        <aside className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur sm:p-9"><div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#f5c96a]/15" /><p className="relative text-xs font-extrabold uppercase tracking-[.18em] text-[#f5c96a]">Interpretación del Patrimonio</p><h2 className="relative mt-5 font-['Outfit'] text-3xl font-extrabold leading-tight">La plataforma de la familia El Viaje.</h2><p className="relative mt-5 text-sm leading-relaxed text-[#d6e0da]">Diseñada para acercar a intérpretes, intercambiar experiencias y hacer visibles los valores de la interpretación del patrimonio en Chile.</p><a href="https://www.interpretaciondelpatrimonio.cl" target="_blank" rel="noreferrer" className="relative mt-7 inline-flex items-center gap-2 border-b border-[#f5c96a] pb-1 text-sm font-extrabold text-[#f5c96a]">Visitar interpretaciondelpatrimonio.cl <ArrowRight className="h-4 w-4" /></a></aside>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28" id="como-participar"><div className="max-w-2xl"><p className="eyebrow">Un lugar para encontrarnos</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">La comunidad crece cuando el viaje se vuelve conversación.</h2><p className="mt-5 text-lg leading-relaxed text-[#526057]">No importa si llegas desde un sendero, un museo, una viña, una sala de clases o un barrio: aquí hay espacio para sumar mirada, oficio y cuidado.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{waysToJoin.map(({ icon: Icon, label, title, body }) => <article key={label} className="group rounded-[1.7rem] border border-[#e5dfd2] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#b9cbbd] hover:shadow-lg"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f0e8] text-[#24503f]"><Icon className="h-6 w-6" strokeWidth={1.5} /></div><p className="mt-7 text-[11px] font-extrabold uppercase tracking-[.16em] text-[#b55c37]">{label}</p><h3 className="mt-3 font-['Outfit'] text-2xl font-bold leading-tight">{title}</h3><p className="mt-4 leading-relaxed text-[#607067]">{body}</p></article>)}</div></section>

    <section className="bg-[#e9f0e8]"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[.78fr_1.22fr] lg:px-8 lg:py-20"><div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#b75a37] text-[#ffe6bf] shadow-lg"><Sparkles className="h-8 w-8" strokeWidth={1.6} /></div><div className="max-w-3xl"><p className="eyebrow">Una plataforma hecha para Chile</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Lleva tus preguntas, encuentra otras voces.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#526057]">La plataforma Interpretación del Patrimonio, creada por El Viaje, conecta esta comunidad de viajeros e intérpretes para aprender, compartir y promover una forma más consciente de habitar el patrimonio.</p><a href="https://www.interpretaciondelpatrimonio.cl" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18382e] px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#24503f]">Explorar la plataforma <ExternalLink className="h-4 w-4 text-[#f5c96a]" /></a></div></div></section>

    <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20"><div className="flex flex-col justify-between gap-7 rounded-[2rem] bg-[#b75a37] px-7 py-12 text-white sm:px-12 lg:flex-row lg:items-end lg:px-16 lg:py-16"><div className="max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffd99a]">Sigamos el viaje</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">El patrimonio se vuelve cercano cuando lo interpretamos juntos.</h2></div><a href={siteHref('/consultoria')} className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#9d4528] transition hover:-translate-y-0.5 hover:bg-[#fff4e7]">Conocer El Viaje <ArrowRight className="h-4 w-4" /></a></div></section>

    <footer className="border-t border-[#e5dfd2] bg-white"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[#657168] sm:flex-row sm:items-center sm:justify-between lg:px-8"><p><strong className="text-[#18382e]">El Viaje</strong> · Comunidad de viajeros e intérpretes del patrimonio</p><a href="https://www.interpretaciondelpatrimonio.cl" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-[#24503f] hover:text-[#b55c37]">interpretaciondelpatrimonio.cl <ExternalLink className="h-3.5 w-3.5" /></a></div></footer>
  </main>;
}

function WelcomeIntro() {
  return <main className="welcome-intro">
    <div className="welcome-intro__paper" aria-hidden="true" />
    <div className="welcome-intro__leaf welcome-intro__leaf--one" aria-hidden="true" />
    <div className="welcome-intro__leaf welcome-intro__leaf--two" aria-hidden="true" />

    <header className="welcome-intro__header">
      <a className="welcome-intro__wordmark" href={siteHref('/consultoria')} aria-label="Entrar a El Viaje">
        <span className="welcome-intro__wordmark-dot" />
        <span>el viaje</span>
      </a>
      <a className="welcome-intro__skip" href={siteHref('/consultoria')}>Saltar introducción <ArrowRight aria-hidden="true" size={15} /></a>
    </header>

    <section className="welcome-intro__content" aria-labelledby="welcome-title">
      <p className="welcome-intro__kicker">Patrimonio natural y cultural · Chile</p>
      <h1 id="welcome-title">Cada visitante<br /><em>tiene un vuelo.</em></h1>
      <p className="welcome-intro__copy">Historias, paisajes y memorias que invitan a observar con más atención, conectar con lo que importa y cuidar lo que permanece.</p>
      <div className="welcome-intro__actions">
        <a className="welcome-intro__cta" href={siteHref('/consultoria')}>Comenzar el viaje <ArrowRight aria-hidden="true" size={18} /></a>
        <a className="welcome-intro__text-link" href={siteHref('/consultoria#metodo')}>Conocer la consultoría</a>
        <a className="welcome-intro__text-link" href={siteHref('/visitantes')}>El pulso de visitantes</a>
      </div>
    </section>

    <div className="welcome-intro__scene welcome-intro__scene--video" aria-label="Video de un vuelo">
      <div className="welcome-intro__video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/saMD5nHpj1Q?autoplay=1&mute=1&loop=1&playlist=saMD5nHpj1Q&start=27&controls=0&playsinline=1&modestbranding=1&rel=0&disablekb=1" title="Vuelo de la libélula" allow="autoplay; encrypted-media; picture-in-picture" />
      </div>
    </div>

    <footer className="welcome-intro__footer"><span>El viaje comienza cuando miramos distinto.</span><span className="welcome-intro__scroll">Desplázate para entrar <i /></span></footer>
  </main>;
}

function ConsultationMusic() {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="mt-7 max-w-sm rounded-2xl border border-white/20 bg-[#112d25]/70 p-4">
    <p className="text-sm font-bold text-[#f5c96a]">Gabriel’s Oboe · Ennio Morricone</p>
    <p className="mt-1 text-xs text-[#c9d7ce]">De la película La misión</p>
    <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="consultation-music" className="mt-3 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c96a]">{isOpen ? 'Cerrar y detener música' : 'Escuchar música'}</button>
    <div id="consultation-music" hidden={!isOpen}>
      {isOpen && <iframe className="mt-4 aspect-video w-full rounded-lg border-0" src="https://www.youtube-nocookie.com/embed/lArnKBTe82I?autoplay=1&playsinline=1&rel=0" title="Gabriel’s Oboe — Ennio Morricone, La misión" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
      <a className="mt-2 inline-block text-xs text-[#f5c96a] underline underline-offset-4" href="https://www.youtube.com/watch?v=lArnKBTe82I" target="_blank" rel="noreferrer">Escuchar en YouTube</a>
    </div>
  </div>;
}

export default function App() {
  const pagePath = typeof window !== 'undefined' ? (window.location.pathname.slice(siteBase.length).replace(/\/+$/, '') || '/') : '/';
  if (pagePath === '/') return <WelcomeIntro />;
  if (pagePath === '/visitantes') return <VisitorInsightsPage />;
  if (pagePath === '/comunidad') return <CommunityPage />;
  return <div className="min-h-screen bg-[#f7f4ed] text-[#18251e] selection:bg-[#d77b42] selection:text-white">
    <header className="sticky top-0 z-50 border-b border-[#e6e0d4] bg-[#f7f4ed]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="El Viaje, inicio"><img src={siteHref('/consultoria-logo.png')} alt="El Viaje" className="h-12 w-12 rounded-xl object-cover shadow-sm transition-transform group-hover:rotate-3" /><div className="leading-none"><span className="block font-['Outfit'] text-lg font-extrabold tracking-tight">El Viaje</span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#6e766d]">Consultoría patrimonial</span></div></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#4c5b50] md:flex"><a className="transition hover:text-[#a7502f]" href="#metodo">Método</a><a className="transition hover:text-[#a7502f]" href="#entregables">Entregables</a><a className="transition hover:text-[#a7502f]" href="#para-quien">Para quién</a><a className="transition hover:text-[#a7502f]" href={siteHref('/comunidad')}>Comunidad</a></nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#18382e] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#24503f] sm:px-5 sm:text-sm"><MessageCircle className="h-4 w-4 text-[#f5c96a]" />Conversemos</a>
      </div>
    </header>
    <main id="inicio">
      <section className="relative isolate overflow-hidden bg-[#18382e] text-white"><div className="absolute inset-0 -z-20 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102d25] via-[#18382e]/95 to-[#18382e]/65" /><div className="absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full border border-[#f5c96a]/20" /><div className="absolute -right-8 top-28 -z-10 h-56 w-56 rounded-full border border-[#f5c96a]/20" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28"><div className="max-w-3xl"><p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f5c96a]"><span className="h-px w-8 bg-[#f5c96a]" />Interpretación del patrimonio</p><h1 className="font-['Outfit'] text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Porque tu lugar es una <span className="text-[#f5c96a]">experiencia</span></h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-[#d6e0da] sm:text-xl">Convertimos patrimonio, paisaje y memoria en experiencias que <a href={siteHref('/visitantes')} className="font-extrabold text-[#f5c96a] underline decoration-[#f5c96a]/60 underline-offset-4 transition hover:text-[#ffe09a]">los visitantes</a> comprenden, recuerdan y quieren cuidar.</p><div className="mt-9 flex flex-wrap gap-3"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f5c96a] px-6 py-3.5 text-sm font-extrabold text-[#18382e] transition hover:-translate-y-0.5 hover:bg-[#ffe09a]">Solicitar una conversación <ArrowRight className="h-4 w-4" /></a><a href="#metodo" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">Conocer el método</a></div><p className="mt-5 text-xs text-[#b6c7bb]">Sin formularios eternos. Partimos con una conversación de 20 minutos.</p><ConsultationMusic /></div>
          <aside className="self-end rounded-3xl border border-white/15 bg-[#112d25]/80 p-6 shadow-2xl backdrop-blur-sm lg:p-7"><p className="text-xs font-bold uppercase tracking-[0.17em] text-[#f5c96a]">Una pregunta guía</p><blockquote className="mt-4 font-['Outfit'] text-2xl font-semibold leading-snug">“¿Qué queremos que una persona descubra, sienta y haga después de estar aquí?”</blockquote><div className="mt-7 border-t border-white/15 pt-5 text-sm leading-relaxed text-[#c9d7ce]">Esa respuesta orienta cada decisión: desde el relato hasta los soportes que lo hacen visible.</div></aside></div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28" id="para-quien"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">Cuando el patrimonio necesita ser vivido</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">No se trata de entregar más información.</h2></div><div className="space-y-5 text-lg leading-relaxed text-[#526057]"><p>Se trata de dar a las personas una razón para detenerse, observar y construir una relación con el lugar. Eso es interpretación: comunicación con propósito.</p><p>Trabajamos con municipios, áreas protegidas, fundaciones, proyectos inmobiliarios, organizaciones culturales y equipos que cuidan lugares con una historia que vale la pena contar.</p><div className="grid gap-3 pt-4 sm:grid-cols-2">{['Sitios naturales y áreas protegidas', 'Barrios, rutas y destinos turísticos', 'Museos, centros de interpretación y parques', 'Proyectos culturales, territoriales y educativos'].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-[#e5dfd2] bg-white p-4 text-sm font-semibold text-[#334438]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b55c37]" />{item}</div>)}</div></div></div></section>
      <section className="bg-[#ede9dc]" id="metodo"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><div className="max-w-2xl"><p className="eyebrow">Metodología propia</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold tracking-tight sm:text-5xl">Rigor para pensar.<br />Claridad para actuar.</h2><p className="mt-5 text-lg leading-relaxed text-[#526057]">Una metodología desarrollada desde más de 20 años de investigación y práctica, inspirada en referentes internacionales de la interpretación del patrimonio.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#dcd5c5] bg-[#dcd5c5] md:grid-cols-2">{method.map(([number, title, body]) => <article key={number} className="group bg-[#f7f4ed] p-7 transition hover:bg-[#18382e] hover:text-white lg:p-9"><span className="font-['Outfit'] text-3xl font-extrabold text-[#c96e43]">{number}</span><h3 className="mt-9 font-['Outfit'] text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-[#68736a] group-hover:text-[#d6e0da]">{body}</p></article>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28" id="entregables"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="max-w-2xl"><p className="eyebrow">Una consultoría que deja capacidad instalada</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold tracking-tight sm:text-5xl">Tu proyecto sale con dirección.</h2></div><p className="max-w-sm text-base leading-relaxed text-[#526057]">Cada proceso se ajusta al desafío. Estos son los entregables que normalmente ordenan el camino.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{results.map(([title, body], index) => { const Icon = [Search, Compass, Layers3, MapPinned][index]; return <article key={title} className="rounded-3xl border border-[#e5dfd2] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f0e8] text-[#24503f]"><Icon className="h-5 w-5" /></div><h3 className="mt-6 font-['Outfit'] text-2xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-[#607067]">{body}</p></article>; })}</div></section>
      <section className="bg-[#e9f0e8]"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[.82fr_1.18fr] lg:px-8 lg:py-20"><div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#18382e] text-[#f5c96a] shadow-lg"><UsersRound className="h-8 w-8" strokeWidth={1.6} /></div><div className="max-w-3xl"><p className="eyebrow">La comunidad también interpreta</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Una plataforma para encontrarnos y hacer crecer la interpretación.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#526057]">Interpretación del Patrimonio es una plataforma diseñada por El Viaje para conectar a intérpretes que quieren ser parte de esta familia y promover, juntos, los valores de la interpretación del patrimonio en Chile.</p><a href={siteHref('/comunidad')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18382e] px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#24503f]">Entrar a la comunidad <ArrowRight className="h-4 w-4 text-[#f5c96a]" /></a></div></div></section>
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8 lg:pb-28"><div className="relative overflow-hidden rounded-[2rem] bg-[#b75a37] px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20"><Landmark className="absolute -bottom-12 -right-8 h-64 w-64 rotate-12 text-white/10" strokeWidth={1} /><div className="relative max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffd99a]">Conversemos sobre tu proyecto</p><h2 className="mt-4 font-['Outfit'] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Un lugar con sentido merece una experiencia a su altura.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-[#ffe7d4]">Cuéntanos dónde estás, qué quieres transformar y qué público quieres movilizar. Te responderemos con una primera mirada del desafío.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#9d4528] transition hover:-translate-y-0.5 hover:bg-[#fff4e7]"><MessageCircle className="h-4 w-4" />Hablar por WhatsApp <ArrowRight className="h-4 w-4" /></a></div></div></section>
    </main>
    <footer className="border-t border-[#e5dfd2] bg-white"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 text-sm text-[#657168] sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-3"><img src={siteHref('/consultoria-logo.png')} alt="El Viaje" className="h-10 w-10 rounded-lg object-cover" /><span><strong className="text-[#18382e]">El Viaje</strong> · Consultoría en Interpretación del Patrimonio</span></div><div className="flex items-center gap-5"><a href="https://www.tiendaelviaje.cl" target="_blank" rel="noreferrer" className="hover:text-[#a7502f]">Tienda El Viaje</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#a7502f]">WhatsApp</a></div></div></footer>
  </div>;
}
