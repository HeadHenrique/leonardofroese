import "./client-logos.css";

const clientLogos = [
  { name: "Claro", src: "/client-logos/claro.png?v=2" },
  { name: "Leo Madeiras", src: "/client-logos/leo-madeiras.png?v=2" },
  { name: "Procria", src: "/client-logos/procria.png?v=2" },
  { name: "Maxvinil", src: "/client-logos/maxvinil.png?v=2" },
  { name: "Tupperware", src: "/client-logos/tupperware.png?v=2" },
  { name: "Águas de Sorriso", src: "/client-logos/aguas-de-sorriso.png?v=2" },
  { name: "Aliança", src: "/client-logos/alianca.png?v=2" },
  { name: "Campo Solar", src: "/client-logos/campo-solar.png?v=2" },
  { name: "Cobertura Imasa", src: "/client-logos/cobertura-imasa.png?v=2" },
  { name: "Eletricidade Paraense", src: "/client-logos/eletricidade-paraense.png?v=2" },
  { name: "Fatex", src: "/client-logos/fatex.png?v=2" },
  { name: "Frota", src: "/client-logos/frota.png?v=2" },
  { name: "Octech", src: "/client-logos/octech.png?v=2" },
  { name: "Pantanal", src: "/client-logos/pantanal.png?v=2" },
  { name: "Tempermat", src: "/client-logos/tempermat.png?v=2" },
  { name: "Prime Lente", src: "/client-logos/prime-lente.png?v=2" },
  { name: "Trevo", src: "/client-logos/trevo.png?v=2" },
  { name: "Tablado Madeireira", src: "/client-logos/tablado.png?v=2" },
  { name: "LEGO", src: "/client-logos/lego.png?v=2" },
  { name: "Megasom", src: "/client-logos/megasom.png?v=2" },
  { name: "NET", src: "/client-logos/net.png?v=2" },
] as const;

function LogoGroup({ clone = false }: { clone?: boolean }) {
  return <div className="client-logos-group" aria-hidden={clone || undefined} data-clone={clone ? "true" : undefined}>{clientLogos.map((logo) => <div className="client-logo-item" key={`${clone ? "clone-" : ""}${logo.name}`}><img src={logo.src} alt={clone ? "" : logo.name} aria-hidden={clone || undefined} decoding="async" draggable={false} /></div>)}</div>;
}

export function ClientLogos({ className = "" }: { className?: string }) {
  return <section className={`client-logos ${className}`} aria-label="Parceiros e clientes da Cáliber"><div className="client-logos-heading"><span>Algumas das empresas que confiam no nosso trabalho</span><h3>Parceiros &amp; Clientes</h3></div><div className="client-logos-viewport"><div className="client-logos-track"><LogoGroup /><LogoGroup clone /></div></div></section>;
}
