import { motion } from "framer-motion";

function ProviderCard({ name, logo, color, delay = 0 }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="group relative h-24 w-full bg-[#0B0C10] border border-white/5 flex items-center justify-center transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all" />
        <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all" />
        <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all" />
        <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all" />

        <div className="flex flex-col items-center gap-2">
          <div
            className={`${color} group-hover:text-white transition-all duration-300`}
          >
            {logo}
          </div>
          <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const OpenAILogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const AnthropicLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0h3.767L16.906 20.48h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm3.174 3.662L6.57 14.85h6.346L9.743 7.182z" />
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#0866FF">
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a4.892 4.892 0 0 0 1.12 2.162c.678.72 1.59 1.104 2.653 1.104 1.412 0 2.617-.726 3.688-1.813.456-.463.903-.979 1.329-1.537.226.367.474.718.756 1.048.847.991 1.903 1.587 3.174 1.587 1.063 0 1.977-.384 2.656-1.104a4.894 4.894 0 0 0 1.12-2.162c.14-.604.21-1.267.21-1.973 0-2.566-.704-5.24-2.044-7.306-1.188-1.832-2.903-3.113-4.871-3.113-1.271 0-2.327.587-3.174 1.587a9.39 9.39 0 0 0-.756 1.047 9.39 9.39 0 0 0-.756-1.047c-.847-1-1.903-1.587-3.174-1.587zm.32 2.387c.618 0 1.158.39 1.654.965.448.519.834 1.2 1.164 1.976l.158.38c.293.69.56 1.436.79 2.217.26.889.468 1.83.617 2.78a12.52 12.52 0 0 1 .147 1.869c0 .37-.025.72-.077 1.037a2.634 2.634 0 0 1-.318.88c-.217.348-.533.56-.969.56-.671 0-1.282-.412-1.82-1.02a12.66 12.66 0 0 1-1.329-1.79c-.478-.74-.902-1.553-1.264-2.405-.39-.92-.683-1.868-.875-2.808-.193-.94-.29-1.855-.29-2.71 0-.469.035-.908.104-1.308.08-.46.217-.863.418-1.183.217-.349.533-.56.969-.56h.12z" />
  </svg>
);

const MistralLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect x="0" y="0" width="5" height="5" fill="#F7D046" />
    <rect x="9.5" y="0" width="5" height="5" fill="#F7D046" />
    <rect x="19" y="0" width="5" height="5" fill="#F7D046" />
    <rect x="0" y="6.33" width="5" height="5" fill="#F7D046" />
    <rect x="4.75" y="6.33" width="5" height="5" fill="#F7D046" />
    <rect x="9.5" y="6.33" width="5" height="5" fill="#F7D046" />
    <rect x="14.25" y="6.33" width="5" height="5" fill="#F7D046" />
    <rect x="19" y="6.33" width="5" height="5" fill="#F7D046" />
    <rect x="0" y="12.66" width="5" height="5" fill="#F7D046" />
    <rect x="9.5" y="12.66" width="5" height="5" fill="#F7D046" />
    <rect x="19" y="12.66" width="5" height="5" fill="#F7D046" />
    <rect x="0" y="19" width="5" height="5" fill="#F7D046" />
    <rect x="9.5" y="19" width="5" height="5" fill="#F7D046" />
    <rect x="19" y="19" width="5" height="5" fill="#F7D046" />
  </svg>
);

const CohereLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#D18EE2">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 4.873 2.903 9.067 7.078 10.944.173-1.476.682-3.406 1.503-5.09-.914-.2-1.548-.82-1.78-1.603-.39-1.316.132-2.757 1.375-3.397.493-.254 1.002-.332 1.468-.332 1.17 0 2.136.663 2.498 1.544.19.463.253.96.253 1.42 0 1.603-.858 2.883-2.063 3.53-.074 1.033-.074 2.084-.074 3.157A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.863.279a2.05 2.05 0 0 1-.24.104c-.08.032-.143.048-.191.048-.168 0-.256-.12-.256-.367v-.393c0-.192.024-.335.08-.415a.847.847 0 0 1 .287-.175c.28-.143.616-.263 1.006-.36.39-.095.807-.143 1.252-.143.951 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586h.024zm-3.24 1.214c.263 0 .535-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.511.048-.192.08-.423.08-.694v-.335c-.231-.056-.479-.104-.734-.136a5.77 5.77 0 0 0-.79-.048c-.535 0-.926.104-1.19.32-.263.216-.39.518-.39.91 0 .367.095.64.287.815.191.176.479.263.87.263h.015zm6.401 1.02c-.215 0-.358-.032-.446-.104-.087-.064-.16-.2-.216-.4l-2.42-7.97a2.76 2.76 0 0 1-.088-.503c0-.2.096-.311.287-.311h.79c.223 0 .375.032.454.104.087.063.152.199.208.399l1.732 6.83 1.61-6.83c.048-.208.111-.336.199-.399.087-.072.247-.104.462-.104h.646c.224 0 .375.032.463.104.088.063.16.199.2.399l1.628 6.918 1.78-6.918c.056-.208.128-.336.216-.399.088-.072.24-.104.454-.104h.75c.191 0 .295.104.295.311 0 .064-.008.128-.024.2-.016.072-.04.16-.08.303l-2.484 7.97c-.056.2-.128.336-.216.4-.088.063-.24.103-.455.103h-.694c-.224 0-.375-.032-.463-.103-.088-.072-.16-.208-.2-.407l-1.596-6.655-1.587 6.647c-.048.208-.112.335-.2.407-.087.072-.247.104-.462.104h-.694zm10.24.247c-.416 0-.83-.048-1.23-.136-.4-.088-.71-.184-.927-.288a.92.92 0 0 1-.35-.256c-.048-.08-.072-.16-.072-.248v-.407c0-.247.096-.367.28-.367.072 0 .144.016.216.04.072.024.176.071.296.127.4.176.838.32 1.309.424.48.103.95.152 1.43.152.758 0 1.35-.128 1.764-.383.415-.256.63-.623.63-1.094 0-.319-.103-.583-.311-.79-.208-.208-.598-.392-1.166-.551l-1.676-.512c-.847-.263-1.476-.655-1.867-1.166-.391-.503-.591-1.07-.591-1.684 0-.487.103-.918.311-1.293.208-.375.487-.703.838-.975a3.86 3.86 0 0 1 1.198-.616c.455-.144.942-.208 1.461-.208.263 0 .534.016.806.056.279.04.543.088.798.152.247.063.487.135.71.215.224.088.39.176.503.263.144.096.248.191.303.296a.853.853 0 0 1 .08.351v.375c0 .247-.095.375-.28.375a1.23 1.23 0 0 1-.454-.16c-.607-.28-1.293-.416-2.043-.416-.687 0-1.23.104-1.628.32-.399.216-.599.55-.599 1.014 0 .319.112.591.335.807.224.216.638.415 1.238.583l1.644.503c.838.264 1.45.631 1.82 1.103.367.471.55 1.01.55 1.612 0 .495-.103.942-.303 1.341-.2.4-.479.742-.839 1.03a3.742 3.742 0 0 1-1.246.655c-.479.152-1.006.224-1.572.224h.024z" />
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#0089D6">
    <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505l7.725-16.553z" />
  </svg>
);

const CognitudeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
    <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
  </svg>
);

function TrustedPartners() {
  return (
    <section className="relative py-32 bg-[#020204] overflow-visible">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40" />
        <div className="absolute top-24 left-24 h-0.5 w-0.5 bg-white rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute top-48 right-1/4 h-1 w-1 bg-blue-400/20 rounded-full blur-[1px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/3 h-0.5 w-0.5 bg-white rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Content */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Trusted Partners
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-slate-400 leading-relaxed">
            We elevate your AI stability to the highest level alongside the
            world&apos;s leading LLM providers.
          </p>
        </motion.div>

        {/* Interactive Grid & Flow Visualization */}
        <div className="max-w-5xl mx-auto relative">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 z-10 mb-20 relative">
            {/* Row 1 */}
            <ProviderCard
              name="OpenAI"
              logo={<OpenAILogo />}
              color="text-slate-400"
              delay={0.1}
            />
            <ProviderCard
              name="Anthropic"
              logo={<AnthropicLogo />}
              color="text-slate-400"
              delay={0.15}
            />
            <ProviderCard
              name="Google"
              logo={<GoogleLogo />}
              color="text-slate-400"
              delay={0.2}
            />
            <ProviderCard
              name="Meta"
              logo={<MetaLogo />}
              color="text-slate-400"
              delay={0.25}
            />

            {/* Row 2 */}
            <ProviderCard
              name="Mistral"
              logo={<MistralLogo />}
              color="text-slate-400"
              delay={0.3}
            />
            <ProviderCard
              name="Cohere"
              logo={<CohereLogo />}
              color="text-slate-400"
              delay={0.35}
            />
            <ProviderCard
              name="AWS Bedrock"
              logo={<AWSIcon />}
              color="text-slate-400"
              delay={0.4}
            />
            <ProviderCard
              name="Azure OpenAI"
              logo={<AzureIcon />}
              color="text-slate-400"
              delay={0.45}
            />
          </div>

          {/* Flow lines from Row 2 providers to Cognitude Hub */}
          <div className="relative w-full h-[200px] -mb-8">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1000 200"
            >
              <defs>
                <linearGradient
                  id="flowGradientToHub"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                  <stop offset="50%" stopColor="rgba(59,130,246,0.4)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
                </linearGradient>
                <filter id="glowHub">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Static faint tracks from each Row 2 card to center */}
              <path
                d="M 125,0 C 125,100 450,150 500,195"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />
              <path
                d="M 375,0 C 375,80 480,130 500,195"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />
              <path
                d="M 625,0 C 625,80 520,130 500,195"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />
              <path
                d="M 875,0 C 875,100 550,150 500,195"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />

              {/* Animated Data Flow Lines - medium speed */}
              <path
                strokeDasharray="80, 250"
                d="M 125,0 C 125,100 450,150 500,195"
                fill="none"
                stroke="url(#flowGradientToHub)"
                strokeWidth="2"
                style={{ animation: "flow 18s linear infinite", opacity: 0.5 }}
              />
              <path
                strokeDasharray="80, 250"
                d="M 375,0 C 375,80 480,130 500,195"
                fill="none"
                stroke="url(#flowGradientToHub)"
                strokeWidth="2"
                style={{
                  animation: "flow 20s linear infinite -5s",
                  opacity: 0.5,
                }}
              />
              <path
                strokeDasharray="80, 250"
                d="M 625,0 C 625,80 520,130 500,195"
                fill="none"
                stroke="url(#flowGradientToHub)"
                strokeWidth="2"
                style={{
                  animation: "flow 19s linear infinite -10s",
                  opacity: 0.5,
                }}
              />
              <path
                strokeDasharray="80, 250"
                d="M 875,0 C 875,100 550,150 500,195"
                fill="none"
                stroke="url(#flowGradientToHub)"
                strokeWidth="2"
                style={{
                  animation: "flow 22s linear infinite -15s",
                  opacity: 0.5,
                }}
              />

              {/* Animated Data Packets - glowing dots */}
              <path
                strokeDasharray="12, 350"
                d="M 125,0 C 125,100 450,150 500,195"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
                filter="url(#glowHub)"
                style={{
                  animation: "flow 8s linear infinite",
                  strokeLinecap: "round",
                }}
              />
              <path
                strokeDasharray="12, 350"
                d="M 375,0 C 375,80 480,130 500,195"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
                filter="url(#glowHub)"
                style={{
                  animation: "flow 9s linear infinite -2s",
                  strokeLinecap: "round",
                }}
              />
              <path
                strokeDasharray="12, 350"
                d="M 625,0 C 625,80 520,130 500,195"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
                filter="url(#glowHub)"
                style={{
                  animation: "flow 8.5s linear infinite -4s",
                  strokeLinecap: "round",
                }}
              />
              <path
                strokeDasharray="12, 350"
                d="M 875,0 C 875,100 550,150 500,195"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
                filter="url(#glowHub)"
                style={{
                  animation: "flow 10s linear infinite -1s",
                  strokeLinecap: "round",
                }}
              />
            </svg>
          </div>

          {/* Central Convergence Hub */}
          <div className="flex z-20 relative justify-center">
            <motion.div
              className="flex relative items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Connection Tip & Beam */}
              <div className="absolute -top-32 h-32 w-[2px] bg-gradient-to-b from-transparent via-blue-500/50 to-blue-500 shadow-[0_0_20px_#3b82f6] overflow-hidden">
                <div className="absolute inset-0 bg-white/50 w-full h-1/2 animate-[scanner_2s_linear_infinite] blur-[2px]" />
              </div>

              {/* Core Icon Wrapper with Orbital Rings */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#020204] shadow-[0_0_50px_rgba(59,130,246,0.5)] border border-blue-500/30">
                {/* Outer Spinning Ring */}
                <div className="absolute inset-[-10px] rounded-full border border-blue-500/20 border-dashed animate-[spin_10s_linear_infinite]" />

                {/* Inner Reverse Spinning Ring */}
                <div className="absolute inset-[-4px] rounded-full border border-blue-400/30 border-dotted animate-[spin_15s_linear_infinite_reverse]" />

                {/* Pulsing Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse" />

                {/* Icon */}
                <div className="relative z-10 animate-pulse">
                  <CognitudeIcon />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hub Label */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-lg font-semibold text-white">Cognitude</span>
            <span className="ml-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Hub
            </span>
          </motion.div>
        </div>
      </div>

      {/* Seamless Integrations Section */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 shadow-lg shadow-blue-900/20">
              <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
                Integrations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto font-light">
              Connect with your favorite tools to streamline workflows
            </p>
          </motion.div>

          {/* Integration Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Axis Lines */}
            <div className="absolute top-1/2 left-[-50%] right-[-50%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
            <div className="absolute left-1/2 top-[-50%] bottom-[-50%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

            {/* Center Hub */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-[260px] h-[260px]">
                {/* 3 filled concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="center-circle center-circle--3 w-56 h-56 rounded-full bg-blue-500/15" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="center-circle center-circle--2 w-40 h-40 rounded-full bg-blue-500/30" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="center-circle w-24 h-24 rounded-full bg-blue-500/55" />
                </div>

                {/* Rays */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="center-ray-horizontal center-ray-left bg-gradient-to-l from-blue-400/80 via-blue-400/60 to-transparent w-14" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="center-ray-horizontal center-ray-right w-14 bg-gradient-to-r from-blue-400/80 via-blue-400/60 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="center-ray-vertical center-ray-top h-14 bg-gradient-to-t from-blue-400/80 via-blue-400/60 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="center-ray-vertical center-ray-bottom h-14 bg-gradient-to-b from-blue-400/80 via-blue-400/60 to-transparent" />
                </div>

                {/* Core Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex bg-blue-600 w-16 h-16 rounded-full ring-[#020215] ring-8 relative shadow-[0_0_40px_rgba(37,99,235,0.65)] items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-32">
              {/* Item 1 (Top Left) - OpenAI */}
              <motion.div
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <OpenAILogo />
                </div>
                <p className="text-sm text-slate-300 max-w-[240px]">
                  GPT models to generate content and build intelligent agents.
                </p>
              </motion.div>

              {/* Item 2 (Top Right) - Notion */}
              <motion.div
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <span className="font-serif text-3xl text-slate-400 group-hover:text-white transition-colors">
                    N
                  </span>
                </div>
                <p className="text-sm text-slate-300 max-w-[240px]">
                  Summarize tasks, and organize info using Notion&apos;s
                  powerful AI assistant.
                </p>
              </motion.div>

              {/* Item 3 (Bottom Left) - LinkedIn */}
              <motion.div
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400 group-hover:text-white transition-colors"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <p className="text-sm text-slate-300 max-w-[240px]">
                  Connect with LinkedIn and with dozens of other tools in it.
                </p>
              </motion.div>

              {/* Item 4 (Bottom Right) - Twitter/X */}
              <motion.div
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400 group-hover:text-white transition-colors"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </div>
                <p className="text-sm text-slate-300 max-w-[240px]">
                  Connect with Twitter and with dozens of other tools in it
                  without code.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom dark shade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#020204] z-[15]" />
    </section>
  );
}

export default TrustedPartners;
