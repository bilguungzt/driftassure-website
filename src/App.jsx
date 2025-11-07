import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const canvasRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    console.log('App mounted, initializing Three.js...');
    
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported, showing static background');
      setWebglSupported(false);
      return;
    }
    
    try {
      // Three.js Scene Setup with error handling
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ 
          canvas: canvasRef.current, 
          alpha: true,
          antialias: false,
          powerPreference: 'low-power'
        });
      } catch (err) {
        console.warn('WebGL renderer failed, using fallback:', err);
        setWebglSupported(false);
        return;
      }
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.position.z = 50;

      console.log('Three.js scene created');

      // Blue particles (healthy data)
      const particlesCount = 2000;
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesPositions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        particlesPositions[i] = (Math.random() - 0.5) * 100;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.3,
        color: 0x4F46E5,
        transparent: true,
        opacity: 0.8,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      console.log('Blue particles added');

      // Red drift particles
      const driftCount = 1000;
      const driftGeometry = new THREE.BufferGeometry();
      const driftPositions = new Float32Array(driftCount * 3);

      for (let i = 0; i < driftCount * 3; i++) {
        driftPositions[i] = (Math.random() - 0.5) * 80;
      }

      driftGeometry.setAttribute('position', new THREE.BufferAttribute(driftPositions, 3));
      const driftMaterial = new THREE.PointsMaterial({
        size: 0.4,
        color: 0xEF4444,
        transparent: true,
        opacity: 0,
      });

      const driftMesh = new THREE.Points(driftGeometry, driftMaterial);
      scene.add(driftMesh);

      console.log('Red drift particles added');

      // Animation
      let animationId;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
        driftMesh.rotation.y -= 0.002;
        driftMesh.rotation.x -= 0.001;
        renderer.render(scene, camera);
      };

      animate();
      console.log('Animation started');

      // GSAP Scroll Animation
      gsap.to(driftMaterial, {
        opacity: 0.9,
        scrollTrigger: {
          trigger: '.drift-trigger',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      console.log('GSAP scroll trigger registered');

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        console.log('Cleanup');
      };
    } catch (error) {
      console.error('Error initializing Three.js:', error);
      setWebglSupported(false);
    }
  }, []);

  return (
    <div className="app">
      {webglSupported ? (
        <canvas ref={canvasRef} id="bg-canvas"></canvas>
      ) : (
        <div className="fallback-bg"></div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find the Drift Before It Finds You</h1>
          <p className="hero-subtitle">
            Your ML models are slowly <em>drifting away from reality</em>. 
            DriftAssure catches it before your customers do.
          </p>
          <a href="https://app.driftassure.com" className="cta-button">
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Drift Visualization Section */}
      <section className="drift-trigger">
        <div className="container">
          <h2 className="section-title">Watch Drift Happen in Real-Time</h2>
          <p className="section-subtitle">
            Scroll down to see how drift quietly infiltrates your production models
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Three Steps to Peace of Mind</h2>
          <p className="section-subtitle">Deploy monitoring in minutes, not weeks</p>

          <div className="steps">
            {/* Step 1 */}
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Install & Connect</h3>
              <div className="code-snippet">
                <pre><code>{`pip install driftassure

from driftassure import Client

client = Client(api_key="your_key")`}</code></pre>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Register Your Model</h3>
              <div className="code-snippet">
                <pre><code>{`client.register_model(
  name="fraud_detector_v1",
  baseline_data=X_train
)`}</code></pre>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Get Instant Alerts</h3>
              <div className="alert-box">
                <div className="alert-content">
                  <div className="alert-title">Drift Detected!</div>
                  <div className="alert-message">
                    Model "fraud_detector_v1" has drifted 23% from baseline.
                    Review the dashboard for feature-level diagnostics.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">No surprises. No hidden fees. Cancel anytime.</p>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <h3 className="pricing-tier">Starter</h3>
              <div className="pricing-price">
                <span className="price-amount">$49</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>Up to 3 models</li>
                <li>10,000 predictions/month</li>
                <li>Email alerts</li>
                <li>7-day data retention</li>
              </ul>
              <a href="https://app.driftassure.com" className="pricing-button">
                Get Started
              </a>
            </div>

            {/* Professional */}
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3 className="pricing-tier">Professional</h3>
              <div className="pricing-price">
                <span className="price-amount">$199</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>Up to 20 models</li>
                <li>100,000 predictions/month</li>
                <li>Slack + Email alerts</li>
                <li>30-day data retention</li>
                <li>API access</li>
              </ul>
              <a href="https://app.driftassure.com" className="pricing-button">
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <h3 className="pricing-tier">Enterprise</h3>
              <div className="pricing-price">
                <span className="price-amount">Custom</span>
              </div>
              <ul className="pricing-features">
                <li>Unlimited models</li>
                <li>Unlimited predictions</li>
                <li>Custom integrations</li>
                <li>Unlimited data retention</li>
                <li>Dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <a href="https://app.driftassure.com" className="pricing-button">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2025 DriftAssure by Cognitude. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://app.driftassure.com">Dashboard</a>
              <a href="https://api.driftassure.com/docs">API Docs</a>
              <a href="https://app.driftassure.com">Privacy</a>
              <a href="https://app.driftassure.com">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
