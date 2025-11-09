import './App.css';
import ThreeBackground from './components/ThreeBackground';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
 { href: '#pricing', label: 'Pricing' },
  { href: '#resources', label: 'Resources' },
];

const features = [
  {
    title: 'Real-time Cost Monitoring',
    description:
      'Track your OpenAI spend with granular detail. See costs by model, endpoint, and user in real-time.',
    detail: 'Per-request tracking • Dashboard analytics • Usage alerts',
  },
  {
    title: 'Intelligent Caching',
    description:
      'Automatically cache responses to reduce API calls and cut costs by up to 50% without sacrificing quality.',
    detail: 'Smart TTL • Context-aware • Performance optimized',
  },
 {
    title: 'Rate Limiting & Queuing',
    description:
      'Prevent API limits and unexpected charges with intelligent rate limiting and request queuing.',
    detail: 'Per-minute limits • Queue management • Retry logic',
  },
];

const howItWorksSteps = [
  {
    step: 'Step 1',
    title: 'Change Your Base URL',
    description: 'Point your OpenAI requests to our secure proxy endpoint',
    code: 'openai.api_base = "https://api.driftassure.com/v1"',
  },
  {
    step: 'Step 2',
    title: 'Use Your Same Keys',
    description: 'We securely pass through your API keys without storing them',
    code: 'openai.api_key = "your-openai-api-key"',
  },
  {
    step: 'Step 3',
    title: 'See Instant Savings',
    description: 'Monitor your costs and performance in real-time',
    screenshot: 'dashboard-screenshot',
  },
];

const pricingPlans = [
  {
    tier: 'Startups',
    price: '$49/mo',
    blurb: 'For teams tracking up to $1k/mo in spend.',
    features: ['Up to 1M requests', 'Basic analytics', 'Email support'],
  },
  {
    tier: 'Growth',
    price: '$199/mo',
    blurb: 'For teams tracking up to $10k/mo in spend.',
    features: ['Up to 10M requests', 'Advanced analytics', 'Priority support', 'Custom caching rules'],
  },
];

const testimonials = [
  {
    quote:
      '“DriftAssure cut our OpenAI bill by 43% in the first month. The real-time dashboard gives us complete visibility into our costs.”',
    name: 'Sarah Johnson',
    role: 'CTO, StartupX',
  },
 {
    quote:
      '“The caching layer saved us thousands without any changes to our application code. Setup took less than 5 minutes.”',
    name: 'Michael Chen',
    role: 'Engineering Lead, TechCorp',
  },
];

const stats = [
  { value: '50%', label: 'Average cost reduction' },
  { value: '60s', label: 'Setup time' },
  { value: 'Zero', label: 'Code changes required' },
  { value: '24/7', label: 'Monitoring coverage' },
];

const resourceLinks = [
  { label: 'Cost Optimization Guide (PDF)', href: '#resources' },
  { label: 'Integration Documentation', href: '#resources' },
  { label: 'ROI Calculator', href: '#resources' },
];


function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <div className="brand">DriftAssure</div>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="ghost-button" href="https://app.driftassure.com">
            Log in
          </a>
          <a className="primary-button" href="#cta">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <ThreeBackground />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI Infrastructure</p>
          <h1>
            Cut Your OpenAI Bill in Half with One Line of Code
          </h1>
          <p className="hero-subtitle">
            DriftAssure is the intelligent AI proxy that gives you real-time cost monitoring, caching, and rate-limiting for your LLM apps. Setup in 60 seconds.
          </p>
          <div className="hero-ctas">
            <a className="primary-button" href="#cta">
              Start Saving Now
            </a>
            <a className="ghost-button" href="#how-it-works">
              See how it works
            </a>
          </div>
          <dl className="hero-metrics" aria-label="Impact metrics">
            <div>
              <dt>50% average savings</dt>
              <dd>Teams typically reduce their OpenAI costs by 40-60% in the first month.</dd>
            </div>
            <div>
              <dt>60 seconds setup</dt>
              <dd>Change one line of code and start saving without any application changes.</dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <span className="visual-title">Cost Dashboard</span>
            <div className="visual-chart">
              <div className="chart-line chart-line-primary" />
              <div className="chart-line chart-line-alert" />
            </div>
            <div className="visual-insight">
              <p>$2,480 saved this month</p>
              <span className="badge">Caching active</span>
            </div>
            <div className="visual-footer">
              <span>Requests</span>
              <span>1.2M • 43% cached</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="container section-header">
        <p className="eyebrow">Platform Features</p>
        <h2>Why DriftAssure Saves Teams Money</h2>
        <p className="section-subtitle">
          Built with cost efficiency, security, and seamless integration at its core. Each feature addresses a critical cost management gap in LLM applications.
        </p>
      </div>
      <div className="container feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <span className="feature-detail">{feature.detail}</span>
          </article>
        ))}
      </div>
    </section>
 );
}

function HowItWorks() {
  return (
    <section className="section alt" id="how-it-works">
      <div className="container section-header">
        <p className="eyebrow">Simple Integration</p>
        <h2>Get Started in 3 Easy Steps</h2>
        <p className="section-subtitle">
          Connect DriftAssure to your OpenAI application in minutes, not hours. No code changes required beyond redirecting your API calls.
        </p>
      </div>
      <div className="container">
        <div className="usecase-grid">
          {howItWorksSteps.map((step, index) => (
            <article key={index} className="usecase-card">
              <h3>{step.title}</h3>
              <p className="usecase-result">{step.description}</p>
              {step.code ? (
                <div className="code-block">
                  <pre><code>{step.code}</code></pre>
                </div>
              ) : (
                <div className="screenshot-placeholder">
                  <div className="screenshot">Cost Dashboard Screenshot</div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="section proof" id="proof">
      <div className="container proof-grid">
        <div className="proof-testimonials">
          <p className="eyebrow">Trusted by Engineering Teams</p>
          <h2>Real Results from Real Teams</h2>
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              <p>{testimonial.quote}</p>
              <footer>
                <span>{testimonial.name}</span>
                <span>{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="proof-stats">
          {stats.map((stat) => (
            <div key={stat.value} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container section-header">
        <p className="eyebrow">Simple, Transparent Pricing</p>
        <h2>Plans That Scale With Your Usage</h2>
        <p className="section-subtitle">
          Pay only for what you use. All plans include core features, with advanced capabilities for scaling teams.
        </p>
      </div>
      <div className="container pricing-grid">
        {pricingPlans.map((plan) => (
          <article key={plan.tier} className="pricing-card">
            <h3>{plan.tier}</h3>
            <p className="pricing-price">{plan.price}</p>
            <p>{plan.blurb}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <a className="secondary-button" href="#cta">
              Start with {plan.tier}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="container cta-grid">
        <div>
          <p className="eyebrow">Start Saving Today</p>
          <h2>Ready to Cut Your OpenAI Bill?</h2>
          <p>
            Join thousands of teams using DriftAssure to optimize their AI costs. Get started in 60 seconds with a simple API change.
          </p>
        </div>
        <form className="cta-form" aria-label="Get started form">
          <label>
            <span>Work email</span>
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            <span>Current monthly OpenAI spend</span>
            <input type="text" name="spend" placeholder="e.g., $2000" />
          </label>
          <button type="submit" className="primary-button">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="section alt" id="resources">
      <div className="container resources-grid">
        <div>
          <p className="eyebrow">Resource Hub</p>
          <h2>Learn More About Cost Optimization</h2>
          <p>
            Access guides, documentation, and tools to maximize your AI cost efficiency with DriftAssure.
          </p>
        </div>
        <ul>
          {resourceLinks.map((resource) => (
            <li key={resource.label}>
              <a href={resource.href}>{resource.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">DriftAssure</div>
          <p>© {new Date().getFullYear()} DriftAssure by Cognitude. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a href="https://app.driftassure.com">Customer login</a>
          <a href="#resources">Privacy & terms</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Proof />
        <Pricing />
        <CTA />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
