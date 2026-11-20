import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, FileText, Search, Star, Target, Video } from "lucide-react";
import { buildCheckoutUrl, loadDiagnostic } from "@/features/lucro-2x/diagnostic-session";
import { funnelHead } from "@/features/lucro-2x/funnel-head";
import { FunnelShell } from "@/features/lucro-2x/funnel-ui";
import { checkoutUrl } from "@/features/lucro-2x/live-content";
import leonardoPhoto from "@/assets/leonardo-DSC01026.jpg.asset.json";
import lucro2xPoster from "@/assets/live-lucro-2x-cover-poster-2611.webp.asset.json";

/**
 * Landing page da Live Lucro 2X: mesma estrutura da página que vinha depois
 * do Raio-X (VSL, oferta, apresentador e depoimentos), sem o diagnóstico.
 */
export const Route = createFileRoute("/lucro2x/")({
  head: () => ({
    meta: [
      { title: "Lucro 2x | Live com Leonardo Froese" },
      {
        name: "description",
        content:
          "Live Lucro 2x: descubra onde o lucro da sua empresa está vazando e saia com um plano prático para começar a corrigir.",
      },
      { name: "theme-color", content: "#08080a" },
    ],
    links: funnelHead.links,
  }),
  component: Lucro2xLanding,
});

const testimonialVideos = [
  {
    title: "Depoimento 01",
    embedUrl: "https://www.youtube-nocookie.com/embed/nGj5NN4XvyM?rel=0&playsinline=1",
    format: "landscape",
  },
  {
    title: "Depoimento 02",
    embedUrl: "https://www.youtube-nocookie.com/embed/odkL-rQqsC8?rel=0&playsinline=1",
    format: "short",
  },
  {
    title: "Depoimento 03",
    embedUrl: "https://www.youtube-nocookie.com/embed/s5Xw05eyuOM?rel=0&playsinline=1",
    format: "short",
  },
] as const;

function Lucro2xLanding() {
  // Mantém nome, e-mail, telefone e UTMs no link do checkout quando existirem.
  const [liveCheckout, setLiveCheckout] = useState(checkoutUrl);
  useEffect(() => {
    setLiveCheckout(buildCheckoutUrl(checkoutUrl, loadDiagnostic().contact));
  }, []);

  return (
    <FunnelShell>
      <article className="result-shell lucro2x-landing">
        <section className="result-vsl-section" aria-labelledby="result-vsl-title">
          <div className="result-vsl-heading">
            <span className="funnel-kicker">Uma mensagem de Leonardo Froese</span>
            <h2 id="result-vsl-title" className="funnel-serif">O próximo passo começa <em>aqui.</em></h2>
            <p>Entenda onde o lucro da sua empresa está vazando e o que fazer primeiro para corrigir.</p>
          </div>
          <ProtectedVimeoVsl />
          <a
            className="funnel-primary live-result-cta result-vsl-cta"
            href={liveCheckout}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero minha vaga na live
          </a>
        </section>

        <section className="result-section lucro2x-section" aria-labelledby="lucro2x-title">
          <div className="lucro2x-grid">
            <div className="lucro2x-cover-card" aria-label="Cáliber Lucro 2x">
              <img
                src={lucro2xPoster.url}
                alt="Cáliber Lucro 2x — Diagnóstico e Plano de Estruturação Empresarial"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="lucro2x-content">
              <h2 id="lucro2x-title" className="funnel-serif">
                O que é o <em>Lucro 2x?</em>
              </h2>

              <h3>Lucre mais. Sem precisar vender mais.</h3>
              <div className="lucro2x-lead" role="paragraph" style={{ display: "block", width: "100%", maxWidth: "none", minWidth: 0, flex: "none", whiteSpace: "normal", overflowWrap: "normal" }}>
                Descubra onde o lucro da sua empresa está vazando e saia com um plano prático para
                começar a corrigir.
              </div>

              <div className="lucro2x-feature-grid">
                <article className="lucro2x-feature">
                  <div className="lucro2x-feature-icon"><Video size={22} strokeWidth={1.8} /></div>
                  <div>
                    <strong>Live ao vivo de 2 horas</strong>
                    <p>Um encontro intenso, direto ao ponto, para diagnosticar os principais drenos de lucro da sua empresa.</p>
                  </div>
                </article>

                <article className="lucro2x-feature">
                  <div className="lucro2x-feature-icon"><Search size={22} strokeWidth={1.8} /></div>
                  <div>
                    <strong>Diagnóstico dos vazamentos</strong>
                    <p>Entenda onde o dinheiro está sumindo, o que está travando a operação e quais problemas mais drenam resultado.</p>
                  </div>
                </article>

                <article className="lucro2x-feature">
                  <div className="lucro2x-feature-icon"><FileText size={22} strokeWidth={1.8} /></div>
                  <div>
                    <strong>Material de apoio</strong>
                    <p>Acompanhe a live com apoio prático para organizar ideias, anotar prioridades e estruturar decisões.</p>
                  </div>
                </article>

                <article className="lucro2x-feature">
                  <div className="lucro2x-feature-icon"><BarChart3 size={22} strokeWidth={1.8} /></div>
                  <div>
                    <strong>Plano prático para aplicar</strong>
                    <p>Saia da live com clareza sobre o que corrigir primeiro e com os próximos passos para começar a agir.</p>
                  </div>
                </article>

                <article className="lucro2x-feature lucro2x-feature--wide">
                  <div className="lucro2x-feature-icon"><Target size={22} strokeWidth={1.8} /></div>
                  <div>
                    <strong>Sem precisar vender mais</strong>
                    <p>O foco é melhorar lucro, estrutura e execução antes de depender apenas de mais vendas.</p>
                  </div>
                </article>
              </div>

              <div className="lucro2x-highlight">
                <div className="lucro2x-highlight-main">
                  <Star size={19} fill="currentColor" />
                  <strong>Ao final, você sai com um plano prático.</strong>
                </div>
                <p>Ideal para empresários que faturam, mas sentem que o lucro não aparece.</p>
              </div>
            </div>
          </div>

          <a
            className="funnel-primary result-cta live-result-cta lucro2x-main-cta"
            href={liveCheckout}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero minha vaga na live
          </a>
        </section>

        <section className="result-card result-section result-host" style={{ padding: 0 }}>
          <div className="result-host-photo">
            <img src={leonardoPhoto.url} alt="Leonardo Froese" />
          </div>

          <div className="result-host-content">
            <div className="funnel-kicker">Quem conduz</div>
            <h3 className="funnel-serif">Leonardo Froese, Cáliber Gestão Empresarial</h3>
            <p className="result-copy" style={{ marginTop: 0 }}>
              Empresário há 19 anos, Leonardo atua na estruturação de empresas na prática, com foco em
              gestão, lucro e execução.
            </p>

            <div className="stat-grid result-host-stats">
              {[
                ["19", "anos de experiência"],
                ["450+", "empresas estruturadas"],
                ["12.000+", "pessoas treinadas"],
                ["10", "estados atendidos"],
                ["R$ 100 mi+", "em lucro gerado para clientes"],
              ].map(([v, l]) => (
                <div className="stat" key={l}>
                  <strong>{v}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="result-section result-testimonials" aria-labelledby="testimonial-title">
          <div className="result-testimonials-head">
            <div className="funnel-kicker">Depoimentos</div>
            <h2 id="testimonial-title" className="funnel-serif">
              Resultados contados por quem viveu na prática.
            </h2>
            <p className="result-copy">
              Assista aos depoimentos sem sair desta página.
            </p>
          </div>

          <div className="testimonial-video-grid">
            {testimonialVideos.map((video) => (
              <article
                className="testimonial-video-card"
                key={video.embedUrl}
              >
                <div className="testimonial-video-top">
                  <span className="testimonial-video-badge">{video.title}</span>
                  <span className="testimonial-video-dot" aria-hidden="true" />
                </div>
                <div className="testimonial-video-frame">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>

          <a
            className="funnel-primary result-cta live-result-cta testimonial-live-cta"
            href={liveCheckout}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero minha vaga na live
          </a>
        </section>
      </article>
    </FunnelShell>
  );
}

/**
 * A camada de proteção bloqueia mouse e toque no iframe e oferece
 * uma ação explícita de play. Vimeo ainda pode exibir elementos
 * gráficos próprios no vídeo conforme o plano do proprietário.
 */
function ProtectedVimeoVsl() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);
  const [starting, setStarting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com") return;
      if (event.source !== frameRef.current?.contentWindow) return;
      let data: { event?: string; method?: string; data?: { percent?: number; seconds?: number; duration?: number } } | null = null;
      try { data = typeof event.data === "string" ? JSON.parse(event.data) : event.data; }
      catch { return; }
      if (data?.event === "timeupdate" || data?.event === "progress") {
        const percent = data.data?.percent ?? (data.data?.duration ? (data.data.seconds ?? 0) / data.data.duration : 0);
        if (Number.isFinite(percent)) setProgress(Math.min(1, Math.max(0, percent)));
      }
      if (data?.event === "ended") setProgress(1);
      if (data?.event === "play" || data?.event === "playing") {
        setPlaying(true);
        setStarting(false);
      }
      if (data?.event === "pause" || data?.event === "ended") {
        setPlaying(false);
        setStarting(false);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const play = () => {
    setStarting(true);
    // PostMessage é o protocolo usado pelo Vimeo Player SDK.
    frameRef.current?.contentWindow?.postMessage({ method: "play" }, "https://player.vimeo.com");
  };

  return (
    <div className="result-vsl-player-wrap">
    <div className="result-vsl-frame result-vsl-locked">
      <iframe
        key="lucro2x-vsl-1242446407"
        ref={frameRef}
        onLoad={() => {
          for (const name of ["play", "playing", "pause", "ended", "timeupdate"]) {
            frameRef.current?.contentWindow?.postMessage({ method: "addEventListener", value: name }, "https://player.vimeo.com");
          }
        }}
        src="https://player.vimeo.com/video/1242446407?title=0&byline=0&portrait=0&badge=0&autopause=0&controls=0&v=20261102"
        title="Apresentação da Live Lucro 2X com Leonardo Froese"
        allow="autoplay; fullscreen; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        className="result-vsl-embed"
        tabIndex={-1}
      />
      <div className="result-vsl-interaction-shield" aria-hidden="true" />
      {!playing && <div className="result-vsl-start-overlay" aria-hidden="true" />}
      {!playing && (
        <button
          type="button"
          className="result-vsl-custom-play"
          onClick={play}
          aria-label="Reproduzir vídeo de Leonardo Froese"
        >
          <svg className="result-vsl-play-symbol" viewBox="0 0 48 48" aria-hidden="true"><path d="M16 10.5C16 8.7 18 7.6 19.6 8.6L39 21.5c1.8 1.1 1.8 3.9 0 5L19.6 39.4C18 40.4 16 39.3 16 37.5Z" fill="currentColor" /></svg>
          <span className="sr-only">{starting ? "Iniciando vídeo" : "Reproduzir vídeo"}</span>
        </button>
      )}
      <div className="result-vsl-progress-track" role="progressbar" aria-label="Progresso da apresentação" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
        <div className="result-vsl-progress-fill" style={{ width: `${Math.pow(progress, 0.52) * 100}%` }} />
      </div>
    </div>
    </div>
  );
}
