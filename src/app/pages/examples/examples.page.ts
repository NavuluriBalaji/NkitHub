import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-examples",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dayos-container">
      <div class="dayos-bg-glow"></div>
      
      <!-- HERO: Editorial Light Style -->
      <section class="section hero-light reveal-on-scroll">
        <div class="container">
          <h1 class="hero-main-title">TECHNICAL <br><span>SPECIFICATIONS.</span></h1>
          <p class="hero-sub-description">
            Experience the architecture of nbagents through real-world implementation patterns.
          </p>
        </div>
      </section>

      <div class="docs-split-container">
        <div class="container">
          <div class="docs-layout">
            
            <!-- SIDEBAR: Editorial Dark Style -->
            <aside class="docs-sidebar reveal-on-scroll">
              <div class="sidebar-section">
                <h4 class="sidebar-title">GETTING STARTED</h4>
                <ul class="sidebar-links">
                  <li class="active">Basic agent run</li>
                </ul>
              </div>

              <div class="sidebar-section">
                <h4 class="sidebar-title">SAFETY</h4>
                <ul class="sidebar-links">
                  <li>SafetyGate block</li>
                  <li>WhyLog audit trail</li>
                </ul>
              </div>

              <div class="sidebar-section">
                <h4 class="sidebar-title">AGENTIC</h4>
                <ul class="sidebar-links">
                  <li>Custom tools</li>
                  <li>Multi-agent</li>
                  <li>Memory agent</li>
                </ul>
              </div>
            </aside>

            <!-- MAIN CONTENT: Editorial Dark/Glass Style -->
            <main class="docs-content reveal-on-scroll">
              <div class="example-card-docs">
                <div class="content-header">
                  <div class="breadcrumb">EXAMPLES / BASIC RUN</div>
                  <button class="copy-btn">COPY SNIPPET</button>
                </div>

                <h2 class="doc-title">Basic agent run</h2>
                <p class="doc-desc">
                  The simplest way to run an agent with NKit. Create an LLM, attach observers, and call run().
                </p>

                <div class="tag-row">
                  <span class="tag">NKIT.CORE</span>
                  <span class="tag">GEMINI-2.5</span>
                  <span class="tag">LIVE-OBSERVER</span>
                </div>

                <div class="code-container">
                  <pre><code>import os
from NKit.agent.core import Agent
from NKit.llms import GeminiLLM
from NKit.observer import LiveObserver
from NKit.safety import SafetyGate
from NKit.audit import WhyLog

# Setup Safety Primitives
llm = GeminiLLM(model="gemini-2.5-flash")
safety = SafetyGate()

agent = Agent(
    llm=llm,
    safety_gate=safety
)

result = agent.run("What is time in New York right now?")
print(result)</code></pre>
                </div>

                <div class="output-section">
                  <h5 class="output-label">RUNTIME OUTPUT</h5>
                  <div class="output-row">
                    <span class="status-icon">&rarr;</span>
                    <span class="output-text">
                      Agent initialized with SafetyGate: active
                    </span>
                  </div>
                  <div class="output-row">
                    <span class="status-icon">&rarr;</span>
                    <span class="output-text-result">
                      <strong>Result:</strong> 3:42 PM EST
                    </span>
                  </div>
                </div>
              </div>
            </main>

          </div>
        </div>
      </div>

      <!-- FINAL CTA -->
      <section class="section cta-final reveal-on-scroll">
        <div class="container text-center">
          <h2 class="final-title">PUSH TO <br>PRODUCTION.</h2>
          <button class="dayos-btn primary-alt">GITHUB REPOSITORY</button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host { display: block; background: #000; color: #fff; font-family: "Inter", sans-serif; }
    .dayos-container { position: relative; }
    
    .section { padding: 120px 0; position: relative; }
    .container { max-width: 1300px; margin: 0 auto; padding: 0 30px; }

    .hero-light {
      background: #fff;
      color: #000;
      border-radius: 0 0 60px 60px;
      text-align: center;
      .hero-main-title { font-size: 100px; font-weight: 900; line-height: 0.85; letter-spacing: -4px; margin-bottom: 40px; }
      .hero-sub-description { font-size: 20px; color: #555; max-width: 600px; margin: 0 auto; line-height: 1.5; }
    }

    .docs-split-container { padding: 100px 0; }
    .docs-layout { display: flex; gap: 80px; align-items: flex-start; }

    .docs-sidebar {
      width: 280px;
      position: sticky;
      top: 100px;
      .sidebar-section { margin-bottom: 40px; }
      .sidebar-title { font-family: "JetBrains Mono"; font-size: 11px; color: #444; letter-spacing: 2px; margin-bottom: 20px; }
      .sidebar-links { list-style: none; padding: 0; 
        li { font-size: 15px; color: #888; padding: 10px 0; cursor: pointer; transition: 0.3s;
          &:hover { color: #fff; }
          &.active { color: #fff; font-weight: 700; border-left: 2px solid #fff; padding-left: 20px; margin-left: -22px; }
        }
      }
    }

    .docs-content { flex: 1; }
    .example-card-docs {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(40px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 80px;
      border-radius: 40px;
    }

    .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;
      .breadcrumb { font-family: "JetBrains Mono"; font-size: 12px; color: #555; letter-spacing: 1.5px; }
      .copy-btn { background: #fff; color: #000; border: none; padding: 8px 15px; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; }
    }

    .doc-title { font-size: 4rem; font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; }
    .doc-desc { font-size: 20px; color: #888; line-height: 1.6; margin-bottom: 40px; }

    .tag-row { display: flex; gap: 15px; margin-bottom: 50px;
      .tag { font-family: "JetBrains Mono"; font-size: 11px; color: #fff; border: 1px solid #333; padding: 6px 15px; border-radius: 100px; }
    }

    .code-container {
      background: #000;
      padding: 40px;
      border-radius: 20px;
      border: 1px solid #1a1a1a;
      margin-bottom: 50px;
      pre { margin: 0; }
      code { font-family: "JetBrains Mono"; font-size: 15px; line-height: 1.8; color: #aaa; }
    }

    .output-section { border-top: 1px solid #111; padding-top: 40px;
      .output-label { font-family: "JetBrains Mono"; font-size: 11px; color: #333; margin-bottom: 25px; }
      .output-row { display: flex; gap: 20px; margin-bottom: 15px; 
        .status-icon { color: #555; font-family: "JetBrains Mono"; }
        .output-text { font-size: 14px; color: #444; font-family: "JetBrains Mono"; }
        .output-text-result { font-size: 14px; color: #fff; font-family: "JetBrains Mono"; }
      }
    }

    .final-title { font-size: 100px; font-weight: 900; letter-spacing: -4px; line-height: 0.9; margin-bottom: 40px; }
    .dayos-btn.primary-alt { background: #fff; color: #000; padding: 22px 50px; border-radius: 100px; font-weight: 700; border: none; cursor: pointer; }

    .reveal-on-scroll { opacity: 0; transform: translateY(50px); transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1);
      &.reveal-active { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ExamplesPage implements AfterViewInit {
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
