import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-community",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="dayos-container">
      <div class="dayos-bg-glow"></div>
      
      <!-- HERO: Editorial Light Style -->
      <section class="section hero-light reveal-on-scroll">
        <div class="container">
          <h1 class="hero-main-title">JOIN THE <br><span>COLLECTIVE.</span></h1>
          <p class="hero-sub-description">
            Building the next generation of reliable AI agents. Connect with the architects and explorers.
          </p>
        </div>
      </section>

      <!-- FAQ SECTION -->
      <section class="section faq-section reveal-on-scroll">
        <div class="container">
          <div class="section-label">FREQUENTLY ASKED QUESTIONS</div>
          <div class="faq-grid">
            <div class="faq-item">
              <h3 class="faq-question">What is NKit exactly?</h3>
              <p class="faq-answer">NKit is a high-reliability framework for building AI agents that won't break production. It focuses on safety gates, audit logs, and deterministic control flows.</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Does it support local LLMs?</h3>
              <p class="faq-answer">Yes. Through our LM Studio integration and local llama.cpp adapters, you can run high-security agents entirely on-premise.</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How does SafetyGate work?</h3>
              <p class="faq-answer">SafetyGate interceptors analyze model outputs against your business logic before they are executed or returned to the user.</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Is it free for open source?</h3>
              <p class="faq-answer">Absolutely. NKit is MIT licensed and we love seeing what the community builds with it.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT FORM SECTION -->
      <section class="section contact-section reveal-on-scroll">
        <div class="container">
          <div class="contact-split">
            <div class="contact-info">
              <h2 class="contact-title">HAVE A <br>PROJECT?</h2>
              <p class="contact-desc">
                Whether you're looking to scale agentic workflows or have questions about the framework, we're here to help.
              </p>
              <div class="contact-links">
                <a href="#" class="social-link">GITHUB</a>
                <a href="#" class="social-link">DISCORD</a>
                <a href="#" class="social-link">X / TWITTER</a>
              </div>
            </div>

            <div class="contact-form-card">
              <form class="dayos-form">
                <div class="form-group">
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div class="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div class="form-group">
                  <label>INQUIRY TYPE</label>
                  <select>
                    <option>Technical Support</option>
                    <option>Enterprise Licensing</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>MESSAGE</label>
                  <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" class="dayos-btn primary-alt w-100">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL GITHUB CTA -->
      <section class="section cta-final reveal-on-scroll">
        <div class="container text-center">
          <h2 class="final-title">CONTRIBUTE <br>ON GITHUB.</h2>
          <button class="dayos-btn primary-alt">VIEW REPOSITORY</button>
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

    .section-label { font-family: "JetBrains Mono"; font-size: 11px; color: #444; letter-spacing: 2px; margin-bottom: 60px; text-align: center; }

    /* FAQ GRID */
    .faq-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 60px;
      .faq-item {
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 30px;
        .faq-question { font-size: 24px; font-weight: 700; margin-bottom: 15px; }
        .faq-answer { font-size: 16px; color: #888; line-height: 1.6; }
      }
    }

    /* CONTACT SECTION */
    .contact-split { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
    .contact-title { font-size: 5rem; font-weight: 900; line-height: 0.85; letter-spacing: -4px; margin-bottom: 30px; }
    .contact-desc { font-size: 20px; color: #888; margin-bottom: 40px; line-height: 1.6; }
    
    .contact-links { display: flex; gap: 30px;
      .social-link { font-family: "JetBrains Mono"; font-size: 12px; color: #fff; text-decoration: none; border-bottom: 1px solid #333; padding-bottom: 5px; transition: 0.3s;
        &:hover { border-color: #fff; }
      }
    }

    /* DAYOS FORM STYLE */
    .contact-form-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(40px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 60px;
      border-radius: 40px;
    }

    .dayos-form {
      .form-group { margin-bottom: 25px; 
        label { display: block; font-family: "JetBrains Mono"; font-size: 10px; color: #444; letter-spacing: 1px; margin-bottom: 10px; }
        input, select, textarea {
          width: 100%;
          background: #000;
          border: 1px solid #222;
          padding: 15px;
          border-radius: 8px;
          color: #fff;
          font-family: inherit;
          font-size: 14px;
          &:focus { outline: none; border-color: #555; }
        }
      }
    }

    .w-100 { width: 100%; }
    .final-title { font-size: clamp(3rem, 7.5vw, 6.5rem); font-weight: 900; letter-spacing: -4px; line-height: 0.9; margin-bottom: 40px; }
    .dayos-btn.primary-alt { background: #fff; color: #000; padding: 22px 50px; border-radius: 100px; font-weight: 700; border: none; cursor: pointer; transition: 0.3s;
      &:hover { background: #eee; transform: translateY(-2px); }
    }

    .reveal-on-scroll { opacity: 0; transform: translateY(50px); transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1);
      &.reveal-active { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class CommunityPage implements AfterViewInit {
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
