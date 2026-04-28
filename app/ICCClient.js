import ‘./globals.css’
import ICCClient from ‘./ICCClient’

export default function Home() {
return (
<>
<ICCClient />

```
  <nav id="main-nav">
    <div className="container">
      <a href="#" className="brand">
        Imperium Curia Capital<span className="mono">ICC</span>
      </a>
      <div className="nav-links">
        <a href="#thesis">Thesis</a>
        <a href="#process">Process</a>
        <a href="#focus">Focus</a>
        <a href="#structure">Structure</a>
        <a href="#access" className="nav-cta">Inquire</a>
      </div>
    </div>
  </nav>

  {/* HERO */}
  <header className="hero">
    <div className="container">
      <div className="hero-eyebrow reveal">Private Investment Platform</div>
      <h1 className="reveal">
        A disciplined approach to <em>pre-public</em> capital, built on principal experience.
      </h1>
      <p className="hero-sub reveal">
        Imperium Curia Capital is a co-investment platform structured around single-asset SPVs in companies approaching public market liquidity. Built for a select group of accredited investors and family offices.
      </p>
      <div className="btn-row reveal">
        <a href="#access" className="btn btn-primary">Request Information</a>
        <a href="#thesis" className="btn btn-secondary">Read the Thesis</a>
      </div>
    </div>
  </header>

  {/* STRIP */}
  <div className="strip">
    <div className="container">
      <span className="strip-item">Principal Track Record</span>
      <span className="strip-divider" />
      <span className="strip-item">Public Market Exits</span>
      <span className="strip-divider" />
      <span className="strip-item">Energy &middot; AI &middot; Life Sciences</span>
      <span className="strip-divider" />
      <span className="strip-item">Institutional Discipline</span>
    </div>
  </div>

  {/* THESIS */}
  <section className="block" id="thesis">
    <div className="container">
      <span className="section-num reveal">01 &mdash; Thesis</span>
      <h2 className="section-title reveal">A narrow mandate, executed <em>with care</em>.</h2>
      <p className="section-lede reveal">
        ICC focuses on a specific category of opportunity: companies in the eighteen-month window before broad public recognition. The discipline is in what we decline.
      </p>
      <div className="thesis-grid">
        <div className="thesis-prose reveal">
          <p>Most pre-public capital is allocated on momentum. The ICC mandate is the opposite. We invest behind structural conviction, supported by primary diligence and a clear thesis on the path to liquidity.</p>
          <p>The platform is principal-led. The general partner has personally executed transactions across advanced energy, AI infrastructure, and life sciences that reached public markets. That experience defines what ICC will and will not pursue.</p>
          <p>We are not a fund. Each opportunity is offered as a discrete, single-asset vehicle, allowing investors to evaluate every commitment on its own terms.</p>
        </div>
        <div className="principles reveal">
          <div className="principle">
            <span className="principle-num">i.</span>
            <div className="principle-text"><strong>Infrastructure before engagement</strong><span>Diligence, structure, and counsel precede capital deployment.</span></div>
          </div>
          <div className="principle">
            <span className="principle-num">ii.</span>
            <div className="principle-text"><strong>Downside protection first</strong><span>Position sizing and entry discipline before upside modeling.</span></div>
          </div>
          <div className="principle">
            <span className="principle-num">iii.</span>
            <div className="principle-text"><strong>Thesis-coherent diversification</strong><span>Concentration around a defended view, not breadth for its own sake.</span></div>
          </div>
          <div className="principle">
            <span className="principle-num">iv.</span>
            <div className="principle-text"><strong>Scalable systems</strong><span>Repeatable diligence and reporting infrastructure across every vehicle.</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* PROCESS */}
  <section className="block" id="process">
    <div className="container">
      <span className="section-num reveal">02 &mdash; Process</span>
      <h2 className="section-title reveal">From sourcing to liquidity.</h2>
      <p className="section-lede reveal">Every opportunity follows the same path. The structure is consistent; the underwriting is bespoke.</p>
      <div className="process-grid reveal">
        <div className="process-step">
          <span className="process-num">i</span>
          <div className="process-title">Origination</div>
          <p className="process-desc">Direct sourcing through operator and capital-markets relationships, filtered against a narrow mandate.</p>
        </div>
        <div className="process-step">
          <span className="process-num">ii</span>
          <div className="process-title">Diligence</div>
          <p className="process-desc">Primary research, financial review, and an internal investment memorandum prior to commitment.</p>
        </div>
        <div className="process-step">
          <span className="process-num">iii</span>
          <div className="process-title">Structuring</div>
          <p className="process-desc">Single-asset Delaware SPV, administered with institutional reporting standards from day one.</p>
        </div>
        <div className="process-step">
          <span className="process-num">iv</span>
          <div className="process-title">Realization</div>
          <p className="process-desc">Disciplined exit planning aligned to the company&rsquo;s path to public markets or strategic outcome.</p>
        </div>
      </div>
    </div>
  </section>

  {/* FOCUS */}
  <section className="block" id="focus">
    <div className="container">
      <span className="section-num reveal">03 &mdash; Focus</span>
      <h2 className="section-title reveal">Where we look, and <em>where we don&rsquo;t</em>.</h2>
      <p className="section-lede reveal">
        ICC concentrates capital where the general partner has direct operating and transaction experience. Other categories &mdash; however attractive in the abstract &mdash; are declined.
      </p>
      <div className="focus-grid reveal">
        <div className="focus-item">
          <div className="focus-label">Sector One</div>
          <div className="focus-title">Advanced Energy</div>
          <p className="focus-desc">Next-generation power infrastructure, including small modular nuclear, grid-adjacent platforms, and sovereign-scale energy assets.</p>
        </div>
        <div className="focus-item">
          <div className="focus-label">Sector Two</div>
          <div className="focus-title">AI &amp; Compute Infrastructure</div>
          <p className="focus-desc">Companies building the substrate of the AI economy: compute, model infrastructure, and applied vertical platforms.</p>
        </div>
        <div className="focus-item">
          <div className="focus-label">Sector Three</div>
          <div className="focus-title">Life Sciences</div>
          <p className="focus-desc">Late-stage clinical and commercial-stage opportunities with defined regulatory pathways and identifiable catalysts.</p>
        </div>
        <div className="focus-item">
          <div className="focus-label">Sector Four</div>
          <div className="focus-title">Special Situations</div>
          <p className="focus-desc">Selective public-market adjacent transactions where structural inefficiency, not narrative, creates the opportunity.</p>
        </div>
      </div>
    </div>
  </section>

  {/* STRUCTURE */}
  <section className="block structure-block" id="structure">
    <div className="container">
      <span className="section-num reveal">04 &mdash; Structure</span>
      <h2 className="section-title reveal">How participation works.</h2>
      <p className="section-lede reveal">
        ICC operates with the structural clarity sophisticated capital expects. Every vehicle is a discrete entity with documented terms, third-party administration, and institutional reporting.
      </p>
      <div className="structure-table reveal">
        <div className="structure-row">
          <div className="structure-key">Vehicle</div>
          <div className="structure-val">Single-asset Delaware special purpose vehicle, formed per opportunity.</div>
        </div>
        <div className="structure-row">
          <div className="structure-key">Investor Eligibility</div>
          <div className="structure-val">Accredited investors, qualified purchasers, and family offices, subject to verification.</div>
        </div>
        <div className="structure-row">
          <div className="structure-key">Administration</div>
          <div className="structure-val">Institutional SPV administration platform with audited reporting and K-1 delivery.</div>
        </div>
        <div className="structure-row">
          <div className="structure-key">Reporting</div>
          <div className="structure-val">Quarterly written updates, annual valuation, and event-driven communication tied to material developments.</div>
        </div>
        <div className="structure-row">
          <div className="structure-key">Allocation</div>
          <div className="structure-val">Capacity is limited per vehicle. Allocation prioritizes existing investors and is not guaranteed.</div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="cta-block" id="access">
    <div className="container-narrow">
      <span className="section-num reveal">05 &mdash; Inquiry</span>
      <h2 className="section-title reveal">Access is by <em>introduction</em> or qualified inquiry.</h2>
      <p className="section-lede reveal">
        ICC does not maintain a public deal calendar. Investors who wish to be considered for future vehicles are invited to submit a brief inquiry. We respond to qualified submissions within five business days.
      </p>
      <a href="#" id="inquire-cta" className="btn btn-primary">Submit Inquiry</a>
      <p className="cta-direct reveal">
        Or write directly: <a href="mailto:inquiries@imperiumcuria.com?subject=ICC%20Inquiry">inquiries@imperiumcuria.com</a>
      </p>
      <p className="cta-discipline reveal">
        ICC operates on a deal-by-deal basis. Vehicles are formed only when conviction supports it.
      </p>
    </div>
  </section>

  {/* FOOTER */}
  <footer>
    <div className="container">
      <div className="footer-top">
        <div>
          <div className="footer-brand">Imperium Curia Capital</div>
          <p className="footer-tag">A private co-investment platform for accredited investors and family offices.</p>
        </div>
        <div className="footer-contact">
          <a href="mailto:inquiries@imperiumcuria.com">inquiries@imperiumcuria.com</a>
          <a href="#access">Submit an inquiry</a>
        </div>
      </div>
      <p className="footer-disclaimer">
        The information presented on this website is for general informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any security. Any such offer or solicitation will be made only by means of confidential offering documents and only to qualified investors in jurisdictions where permitted by law. Past performance is not indicative of future results. Investments described or referenced may involve substantial risk, including the loss of principal, and are illiquid. Prospective investors should consult their own legal, tax, and financial advisors before making any investment decision. Imperium Curia Capital is not a registered investment adviser. References to the general partner&rsquo;s prior experience reflect transactions undertaken in other capacities and are not representative of any ICC vehicle.
      </p>
      <div className="footer-meta">
        <span>&copy; 2026 Imperium Curia Capital</span>
        <span>Private &middot; By Invitation</span>
      </div>
    </div>
  </footer>
</>
```

)
}
