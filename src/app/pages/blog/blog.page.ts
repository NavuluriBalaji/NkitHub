import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dayos-container">
      <div class="dayos-bg-glow"></div>
      
      <!-- HERO: Editorial Light Style -->
      <section class="section hero-light reveal-on-scroll">
        <div class="container">
          <h1 class="hero-main-title">THE <br><span>INSIGHTS.</span></h1>
          <p class="hero-sub-description">
            Coming soon to the NKit ecosystem. Deep dives into agentic patterns, safety research, and technical breakthroughs.
          </p>
        </div>
      </section>

      <!-- COMING SOON CONTENT -->
      <section class="section reveal-on-scroll">
        <div class="container">
          <div class="bento-coming-soon">
            <div class="bento-text">
              <div class="section-label">ESTIMATED ARRIVAL: Q3 2026</div>
              <h2 class="bento-title">WE ARE CURATING <br>TECHNICAL ALPHA.</h2>
              <p class="bento-desc">
                Our engineering team is preparing a series of whitepapers and case studies on the 
                <strong>Determinism in Agentic Workflows</strong> and <strong>Pre-Execution Safety Gates</strong>.
              </p>
              <div class="waitlist-hint">
                <span class="dot"></span> STAY TUNED ON GITHUB
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="section cta-final reveal-on-scroll">
        <div class="container text-center">
          <h2 class="final-title">PUSH TO <br>PRODUCTION.</h2>
          <button class="dayos-btn primary-alt">BACK TO HOME</button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host { display: block; background: #000; color: #fff; font-family: "Inter", sans-serif; }
    .dayos-container { position: relative; }
    
    .section { padding: 120px 0; position: relative; }
    .container { max-width: 1300px; margin: 0 auto; padding: 0 30px; }

    /* HERO: EDITORIAL LIGHT */
    .hero-light {
      background: #fff;
      color: #000;
      border-radius: 0 0 60px 60px;
      text-align: center;
      .hero-main-title { font-size: clamp(3rem, 7.5vw, 6.5rem); font-weight: 900; line-height: 0.85; letter-spacing: -4px; margin-bottom: 40px; }
      .hero-sub-description { font-size: 20px; color: #555; max-width: 600px; margin: 0 auto; line-height: 1.5; }
    }

    .section-label { font-family: "JetBrains Mono"; font-size: 11px; color: #444; letter-spacing: 2px; margin-bottom: 40px; }

    /* BENTO COMING SOON */
    .bento-coming-soon {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(40px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 100px 80px;
      border-radius: 40px;
      text-align: left;
    }

    .bento-title { font-size: 4rem; font-weight: 900; line-height: 0.9; letter-spacing: -3px; margin-bottom: 30px; }
    .bento-desc { font-size: 20px; color: #888; max-width: 700px; line-height: 1.6; margin-bottom: 50px;
      strong { color: #fff; font-weight: 600; }
    }

    .waitlist-hint {
      display: inline-flex;
      align-items: center;
      gap: 15px;
      font-family: "JetBrains Mono";
      font-size: 12px;
      color: #fff;
      letter-spacing: 1px;
      .dot { width: 8px; height: 8px; background: #fff; border-radius: 50%; display: inline-block; animation: pulse 2s infinite; }
    }

    @keyframes pulse {
      0% { opacity: 0.3; }
      50% { opacity: 1; }
      100% { opacity: 0.3; }
    }

    .final-title { font-size: clamp(3rem, 7.5vw, 6.5rem); font-weight: 900; letter-spacing: -4px; line-height: 0.9; margin-bottom: 40px; }
    .dayos-btn.primary-alt { background: #fff; color: #000; padding: 22px 50px; border-radius: 100px; font-weight: 700; border: none; cursor: pointer; transition: 0.3s;
      &:hover { background: #eee; transform: translateY(-2px); }
    }

    .reveal-on-scroll { opacity: 0; transform: translateY(50px); transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1);
      &.reveal-active { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class BlogPage implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }
}
