import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";

interface ExampleItem {
  id: string;
  title: string;
  breadcrumb: string;
  desc: string;
  tags: string[];
  code: string;
  pipCode?: string;
  colabUrl?: string;
  output: { isBold: boolean; text: string }[];
}

interface SidebarSection {
  title: string;
  examples: ExampleItem[];
}

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
            Experience the architecture of NKit through real-world implementation patterns.
          </p>
        </div>
      </section>

      <div class="docs-split-container">
        <div class="container">
          <div class="docs-layout">
            
            <!-- SIDEBAR: Editorial Dark Style -->
            <aside class="docs-sidebar reveal-on-scroll">
              <div class="sidebar-section" *ngFor="let section of sections">
                <h4 class="sidebar-title">{{ section.title }}</h4>
                <ul class="sidebar-links">
                  <li *ngFor="let ex of section.examples" 
                      [class.active]="selectedExample.id === ex.id"
                      (click)="selectExample(ex)">
                    {{ ex.title }}
                  </li>
                </ul>
              </div>
            </aside>

            <!-- MAIN CONTENT: Editorial Dark/Glass Style -->
            <main class="docs-content reveal-on-scroll">
              <div class="example-card-docs">
                <div class="content-header">
                  <div class="breadcrumb">{{ selectedExample.breadcrumb }}</div>
                  <div class="action-buttons">
                    <a *ngIf="selectedExample.colabUrl" 
                       [href]="selectedExample.colabUrl" 
                       target="_blank" 
                       class="colab-btn">
                      <svg class="colab-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      OPEN IN COLAB
                    </a>
                    <button class="copy-btn" (click)="copySnippet(selectedExample.code)">
                      {{ isCopied ? 'COPIED!' : 'COPY CODE' }}
                    </button>
                  </div>
                </div>

                <h2 class="doc-title">{{ selectedExample.title }}</h2>
                <p class="doc-desc">
                  {{ selectedExample.desc }}
                </p>

                <div class="tag-row">
                  <span class="tag" *ngFor="let tag of selectedExample.tags">{{ tag }}</span>
                </div>

                <!-- Terminal PIP Install Snippet -->
                <div *ngIf="selectedExample.pipCode" class="pip-container">
                  <div class="pip-header">
                    <span>TERMINAL</span>
                    <button class="pip-copy-btn" (click)="copyPipSnippet(selectedExample.pipCode)">
                      {{ isPipCopied ? 'COPIED' : 'COPY COMMAND' }}
                    </button>
                  </div>
                  <pre><code>{{ selectedExample.pipCode }}</code></pre>
                </div>

                <!-- Main Python Code Snippet -->
                <div class="code-container">
                  <pre><code>{{ selectedExample.code }}</code></pre>
                </div>

                <div class="output-section">
                  <h5 class="output-label">RUNTIME OUTPUT</h5>
                  <div class="output-row" *ngFor="let row of selectedExample.output">
                    <span class="status-icon">&rarr;</span>
                    <span [class.output-text]="!row.isBold" [class.output-text-result]="row.isBold">
                      <ng-container *ngIf="row.isBold"><strong>{{ row.text }}</strong></ng-container>
                      <ng-container *ngIf="!row.isBold">{{ row.text }}</ng-container>
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
          <a href="https://github.com/NavuluriBalaji/NKit" target="_blank" class="dayos-btn primary-alt">GITHUB REPOSITORY</a>
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
      .action-buttons { display: flex; gap: 12px; align-items: center; }
      .copy-btn { background: #fff; color: #000; border: none; padding: 8px 15px; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; transition: all 0.2s ease;
        &:hover { opacity: 0.8; }
      }
      .colab-btn { background: linear-gradient(135deg, #f57c00, #e65100); color: #fff; border: none; padding: 8px 16px; border-radius: 4px; font-size: 11px; font-weight: 700; text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 4px 12px rgba(230, 81, 0, 0.2);
        &:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(230, 81, 0, 0.4); }
        .colab-icon { display: block; }
      }
    }

    .doc-title { font-size: 4rem; font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; }
    .doc-desc { font-size: 20px; color: #888; line-height: 1.6; margin-bottom: 40px; }

    .tag-row { display: flex; gap: 15px; margin-bottom: 50px;
      .tag { font-family: "JetBrains Mono"; font-size: 11px; color: #fff; border: 1px solid #333; padding: 6px 15px; border-radius: 100px; }
    }

    .pip-container {
      background: #0d0e12;
      border: 1px solid #1a1c23;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      .pip-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;
        span { font-family: "JetBrains Mono"; font-size: 11px; color: #444; font-weight: 700; letter-spacing: 1px; }
        .pip-copy-btn { background: rgba(255, 255, 255, 0.05); color: #888; border: 1px solid rgba(255, 255, 255, 0.1); padding: 4px 10px; border-radius: 4px; font-family: "JetBrains Mono"; font-size: 10px; font-weight: 700; cursor: pointer; transition: all 0.2s ease;
          &:hover { background: rgba(255, 255, 255, 0.1); color: #fff; }
        }
      }
      pre { margin: 0; }
      code { font-family: "JetBrains Mono"; font-size: 14px; color: #00f2ff; }
    }

    .code-container {
      background: #000;
      padding: 40px;
      border-radius: 20px;
      border: 1px solid #1a1a1a;
      margin-bottom: 50px;
      pre { margin: 0; white-space: pre-wrap; word-break: break-all; }
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
    .dayos-btn.primary-alt { display: inline-block; background: #fff; color: #000; padding: 22px 50px; border-radius: 100px; font-weight: 700; border: none; cursor: pointer; text-decoration: none; transition: 0.2s;
      &:hover { opacity: 0.8; }
    }

    .reveal-on-scroll { opacity: 0; transform: translateY(50px); transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1);
      &.reveal-active { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ExamplesPage implements AfterViewInit {
  sections: SidebarSection[] = [
    {
      title: "GETTING STARTED",
      examples: [
        {
          id: "basic-run",
          title: "Basic agent run",
          breadcrumb: "EXAMPLES / BASIC RUN",
          desc: "Run a lightweight NKit agent directly in Google Colab or your local system using Gemini 2.5 Flash and register custom tools.",
          colabUrl: "https://colab.research.google.com/drive/1P0FhopscSLZHIvlY5rGsbLJNIUsHuVdb?usp=sharing",
          tags: ["NKIT.CORE", "GEMINI-2.5-FLASH", "TOOL-DECORATOR"],
          pipCode: "pip install nkit-agents",
          code: `import os
from NKit.agent import Agent
from NKit.llms import GeminiLLM
from google.colab import userdata

# Ensure your GEMINI_API_KEY is stored in Colab's secrets manager
os.environ["GEMINI_API_KEY"] = userdata.get("GEMINI_API_KEY")
llm=GeminiLLM(model="gemini-2.5-flash")
agent = Agent(llm)

# Add a tool
@agent.tool("add", "Add two numbers")
def add(a: int, b: int) -> int:
    return a + b

# Run!
result = agent.run("Calculate 5 + 37")
print(result)`,
          output: [
            { isBold: false, text: "Agent initialized with GeminiLLM: gemini-2.5-flash" },
            { isBold: false, text: "Tool registered: add (Add two numbers)" },
            { isBold: true, text: "Result: 42" }
          ]
        }
      ]
    },
    {
      title: "SAFETY",
      examples: [
        {
          id: "safety-gate",
          title: "SafetyGate block",
          breadcrumb: "EXAMPLES / SAFETY GATE",
          desc: "Preventing unauthorized file system access and system commands using SafetyGate.",
          tags: ["SAFETY", "SECURITY", "SANDBOX"],
          code: `from NKit.agent import Agent
from NKit.safety import SafetyGate

safety = SafetyGate(sandbox_root="/tmp/agent_sandbox")
agent = Agent(llm=llm, safety_gate=safety)

# Attempted path traversal / write outside sandbox
result = agent.run("Write sensitive data to /etc/passwd")`,
          output: [
            { isBold: false, text: "SafetyGate: Intercepted write attempt outside sandbox_root" },
            { isBold: true, text: "BlockedAction: Safety violation prevented" }
          ]
        },
        {
          id: "whylog",
          title: "WhyLog audit trail",
          breadcrumb: "EXAMPLES / WHYLOG AUDIT",
          desc: "Structured audit trails containing the 'Why' behind every agent's decision, formatted in JSONL.",
          tags: ["AUDIT", "WHYLOG", "JSONL"],
          code: `from NKit.audit import WhyLog

whylog = WhyLog(log_file="audit.jsonl")
agent = Agent(llm=llm, audit_logger=whylog)

agent.run("Query database for top users")`,
          output: [
            { isBold: false, text: "WhyLog: Saved reasoning to audit.jsonl" },
            { isBold: true, text: '{"timestamp": "2026-05-06T10:30:00", "action": "db_query", "why": "Need top users list to identify high-value accounts as per prompt request."}' }
          ]
        }
      ]
    },
    {
      title: "AGENTIC",
      examples: [
        {
          id: "custom-tools",
          title: "Custom tools",
          breadcrumb: "EXAMPLES / CUSTOM TOOLS",
          desc: "Define custom tools with strict input schemas using the @agent.tool decorator.",
          tags: ["TOOLS", "CUSTOM-LOGIC", "TYPE-SAFE"],
          code: `from NKit.agent import Agent

agent = Agent(llm=llm)

@agent.tool("get_weather", "Fetch weather for a city")
def get_weather(city: str) -> str:
    return f"The weather in {city} is sunny, 22°C"

result = agent.run("Check weather in New York")`,
          output: [
            { isBold: false, text: "Tool registered: get_weather" },
            { isBold: true, text: "Result: The weather in New York is sunny, 22°C" }
          ]
        },
        {
          id: "multi-agent",
          title: "Multi-agent",
          breadcrumb: "EXAMPLES / MULTI AGENT",
          desc: "Coordinate multiple specialized agents to solve complex multi-step tasks.",
          tags: ["CREWS", "MULTI-AGENT", "ORCHESTRATION"],
          code: `from NKit.crews import Crew
from NKit.agent import Agent

researcher = Agent(llm=llm, role="Researcher")
writer = Agent(llm=llm, role="Writer")

crew = Crew(agents=[researcher, writer])
crew.kickoff("Write a market report on AI trends")`,
          output: [
            { isBold: false, text: "Crew: Researcher gathered data" },
            { isBold: true, text: "Crew: Writer completed report" }
          ]
        },
        {
          id: "memory-agent",
          title: "Memory agent",
          breadcrumb: "EXAMPLES / MEMORY AGENT",
          desc: "Add persistent chat history and contextual awareness to your agent conversations.",
          tags: ["MEMORY", "STATEFUL", "CHAT-HISTORY"],
          code: `from NKit.memory import MemoryManager
from NKit.agent import Agent

memory = MemoryManager()
agent = Agent(llm=llm, memory=memory)

agent.run("Hi, my name is Balaji")
result = agent.run("What is my name?")`,
          output: [
            { isBold: false, text: "Memory: Saved 'name': 'Balaji'" },
            { isBold: true, text: "Result: Your name is Balaji." }
          ]
        }
      ]
    }
  ];

  selectedExample: ExampleItem = this.sections[0].examples[0];
  isCopied = false;
  isPipCopied = false;

  selectExample(ex: ExampleItem) {
    this.selectedExample = ex;
  }

  copySnippet(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 1500);
    });
  }

  copyPipSnippet(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      this.isPipCopied = true;
      setTimeout(() => {
        this.isPipCopied = false;
      }, 1500);
    });
  }

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


