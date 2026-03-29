export const designTokens = {
  heroStyle: "parallax",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Diza Attorneys",
    legalName: "Diza Attorneys at Law",
    tagline: "Justice. Integrity. Results.",
    description:
      "Leading Harare law firm specializing in litigation, corporate law, property conveyancing, and dispute resolution. Trusted by individuals and businesses across Zimbabwe.",
    phone: "",
    phoneRaw: "",
    whatsappNumber: "",
    email: "info@dizaattorneys.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.7,
    ratingRounded: 5,
    reviewCount: 28,
    established: "2008",
    yearsExperience: "16+",
    projectsCompleted: "2000+",
    employees: "25+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "By Appointment" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "diza-attorneys-cookie-consent",
    socialLinks: { facebook: "#", linkedin: "#", instagram: "#" },
  },

  navbar: { logoLine1: "Diza", logoLine2: "Attorneys" },

  hero: {
    badge: "Harare's Trusted Law Firm",
    titleParts: [
      { text: "Justice. " },
      { text: "Integrity.", highlight: true },
      { text: " Results." },
    ],
    subtitle: "Aggressive litigation, strategic corporate counsel, and meticulous conveyancing. When the stakes are high, Diza Attorneys delivers.",
    ctaPrimary: "Book a Consultation",
    ctaSecondary: "Our Practice Areas",
    trustBadge: "Law Society Registered",
    backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920",
    backgroundAlt: "Elegant law library with leather-bound legal texts",
  },

  stats: [
    { number: "2000+", label: "Cases Handled" },
    { number: "4.7", label: "Client Rating" },
    { number: "16+", label: "Years of Practice" },
    { number: "95%", label: "Success Rate" },
  ],

  servicesPreview: [
    { iconName: "ShieldCheck", title: "Litigation & Dispute", desc: "Civil and commercial litigation, arbitration, and mediation. We fight for your rights in court and at the negotiating table." },
    { iconName: "Buildings", title: "Corporate Law", desc: "Company formation, mergers and acquisitions, shareholder agreements, and corporate governance advisory." },
    { iconName: "HardHat", title: "Property & Conveyancing", desc: "Property transfers, title deed registration, mortgage bonds, and commercial lease agreements." },
    { iconName: "Briefcase", title: "Labour Law", desc: "Employment contracts, disciplinary procedures, retrenchment, and labour dispute resolution." },
    { iconName: "Handshake", title: "Contract Law", desc: "Drafting, reviewing, and negotiating commercial contracts, supply agreements, and partnership deals." },
    { iconName: "Heart", title: "Family Law", desc: "Divorce, custody, maintenance, estate planning, and wills. Sensitive matters handled with discretion." },
  ],

  featuredProjects: [
    { image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800", title: "Mining Rights Dispute", category: "Litigation" },
    { image: "https://images.unsplash.com/photo-1507679799987-c73b1a22ee4e?w=800", title: "M&A: Tech Sector", category: "Corporate" },
    { image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800", title: "CBD Property Transfer", category: "Conveyancing" },
  ],

  whyChooseUs: {
    titleParts: [{ text: "The Law Firm " }, { text: "Zimbabwe", highlight: true }, { text: " Trusts" }],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    imageAlt: "Diza Attorneys team in the boardroom",
    experienceYears: "16+",
    experienceLabel: "Years of Excellence",
    points: [
      { title: "Track Record", desc: "95% success rate across 2,000+ cases. Our results speak louder than promises." },
      { title: "Senior Counsel", desc: "Every matter is handled by experienced attorneys, not passed to juniors. You get the expertise you are paying for." },
      { title: "Transparent Fees", desc: "Clear fee structures communicated upfront. No hidden charges, no billing surprises." },
      { title: "Client Confidentiality", desc: "Your matters remain strictly confidential. We adhere to the highest ethical standards of the legal profession." },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1507679799987-c73b1a22ee4e?w=1920",
    backgroundAlt: "Scales of justice in a modern law office setting",
    titleParts: [{ text: "Need Legal " }, { text: "Counsel", highlight: true }, { text: "?" }],
    subtitle: "Whether you are facing a dispute, closing a deal, or transferring property, our experienced attorneys are ready to protect your interests.",
    ctaPrimary: "Book a Consultation",
    whatsappText: "Hello Diza Attorneys, I would like to book a consultation.",
  },

  homeTestimonials: [
    { name: "Tendai Chirwa", role: "CEO, Masimba Holdings", text: "Diza Attorneys handled our complex M&A transaction flawlessly. Their corporate law expertise and attention to detail saved us from potential liabilities worth millions.", rating: 5 },
    { name: "Grace Nyoni", role: "Property Developer", text: "Every property transfer I handle goes through Diza. They are thorough, fast, and their conveyancing team never misses a deadline. Highly recommended for property matters.", rating: 5 },
    { name: "Maxwell Gumbo", role: "HR Director, Delta Beverages", text: "Their labour law advice has been invaluable during our restructuring. Professional, pragmatic, and always focused on finding solutions rather than creating problems.", rating: 4 },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [{ text: "A Legacy of " }, { text: "Legal", highlight: true }, { text: " Excellence" }],
    heroSubtitle: "For 16 years, Diza Attorneys has been the firm individuals and corporations trust with their most important legal matters in Zimbabwe.",
    storyImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    storyImageAlt: "Diza Attorneys office building in Harare",
    storyProjectCount: "2000+",
    storyProjectLabel: "Cases Handled",
    storyTitle: "From One Attorney to a Full-Service Law Firm",
    storyParagraphs: [
      "Diza Attorneys was founded in 2008 by a single attorney with a vision: to provide world-class legal services with an unwavering commitment to integrity and client outcomes.",
      "Over 16 years, the firm has grown into one of Harare's most respected legal practices, with a team of 25+ professionals spanning litigation, corporate law, conveyancing, labour law, and family law.",
      "Our growth has been organic, driven by client referrals and a reputation for delivering results. Today, we serve everyone from multinational corporations to individual homeowners, bringing the same level of dedication and expertise to every matter.",
    ],
    mission: "To provide exceptional legal representation and counsel, protecting our clients' rights and interests with integrity, skill, and relentless dedication to achieving the best possible outcomes.",
    vision: "To be Zimbabwe's most respected law firm, known for legal excellence, ethical practice, and a genuine commitment to justice for every client we serve.",
    values: [
      { iconName: "ShieldCheck", title: "Integrity", desc: "Our reputation is built on honesty, transparency, and adherence to the highest ethical standards." },
      { iconName: "Trophy", title: "Excellence", desc: "We pursue the best outcome for every client, in every matter, without exception." },
      { iconName: "Lightbulb", title: "Innovation", desc: "We embrace legal technology and creative strategies to deliver better results faster." },
      { iconName: "Handshake", title: "Client Focus", desc: "We listen, we understand, and we build legal strategies around your specific objectives." },
      { iconName: "Heart", title: "Compassion", desc: "In family and personal matters, we combine legal skill with genuine care and sensitivity." },
      { iconName: "Users", title: "Teamwork", desc: "Complex matters benefit from our collaborative approach, bringing multiple specializations to bear." },
    ],
    team: [
      { name: "Advocate T. Diza", role: "Managing Partner", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Ruvimbo Maposa", role: "Senior Associate, Litigation", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Tatenda Moyo", role: "Head of Corporate Law", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Nyasha Chirwa", role: "Head of Conveyancing", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    ],
    milestones: [
      { year: "2008", title: "Firm Established", desc: "Diza Attorneys opens its doors in Harare with a focus on litigation and commercial law." },
      { year: "2012", title: "Corporate Division", desc: "Launched dedicated corporate law division to serve growing business client base." },
      { year: "2015", title: "Conveyancing Practice", desc: "Added property law and conveyancing, becoming a full-service commercial law firm." },
      { year: "2018", title: "1,000th Case", desc: "Surpassed 1,000 successfully handled legal matters across all practice areas." },
      { year: "2021", title: "Digital Transformation", desc: "Implemented legal technology platform for faster case management and client communication." },
      { year: "2024", title: "2,000+ Cases", desc: "Celebrated handling over 2,000 legal matters with a 95% success rate maintained." },
    ],
    ctaTitle: "Need Legal Advice?",
    ctaSubtitle: "Book a confidential consultation with one of our experienced attorneys.",
    ctaCta: "Book a Consultation",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [{ text: "Our " }, { text: "Practice", highlight: true }, { text: " Areas" }],
    heroSubtitle: "Six specialized practice areas covering every aspect of civil, commercial, and personal legal needs for individuals and businesses in Zimbabwe.",
    items: [
      { iconName: "ShieldCheck", title: "Litigation & Dispute Resolution", slug: "litigation", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900", desc: "Aggressive representation in civil and commercial disputes. We handle matters from the Magistrates Court to the Supreme Court, as well as arbitration and mediation.", features: ["High Court and Supreme Court litigation", "Commercial dispute resolution", "Arbitration and mediation", "Debt recovery and enforcement", "Judicial review proceedings", "Urgent and interim relief applications"] },
      { iconName: "Buildings", title: "Corporate & Commercial Law", slug: "corporate-law", image: "https://images.unsplash.com/photo-1507679799987-c73b1a22ee4e?w=900", desc: "Strategic legal counsel for businesses at every stage. From startup incorporation to complex M&A transactions, we protect your commercial interests.", features: ["Company registration and formation", "Mergers and acquisitions", "Shareholder agreements and disputes", "Corporate governance advisory", "Joint ventures and partnerships", "Regulatory compliance"] },
      { iconName: "HardHat", title: "Property & Conveyancing", slug: "property-conveyancing", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900", desc: "End-to-end property legal services. Title deed transfers, mortgage bond registration, subdivision, and commercial leasing handled with meticulous precision.", features: ["Property transfer and registration", "Mortgage bond registration", "Subdivision and consolidation", "Commercial lease agreements", "Sectional title management", "Property due diligence"] },
      { iconName: "Briefcase", title: "Labour & Employment Law", slug: "labour-law", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900", desc: "Comprehensive labour law advisory for employers and employees. From contract drafting to disciplinary hearings and retrenchment procedures.", features: ["Employment contract drafting", "Disciplinary and grievance procedures", "Retrenchment and restructuring", "Labour dispute arbitration", "Unfair dismissal claims", "Workplace policy development"] },
      { iconName: "Handshake", title: "Contract Law", slug: "contract-law", image: "https://images.unsplash.com/photo-1507679799987-c73b1a22ee4e?w=900", desc: "Expert drafting, review, and negotiation of commercial contracts. We ensure your agreements are legally sound and protect your interests.", features: ["Commercial contract drafting", "Contract review and negotiation", "Supply and distribution agreements", "Service level agreements", "Non-disclosure and non-compete", "Breach of contract claims"] },
      { iconName: "Heart", title: "Family Law", slug: "family-law", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900", desc: "Sensitive and effective legal representation in personal and family matters. Divorce, custody, maintenance, wills, and estate administration.", features: ["Divorce and separation", "Child custody and guardianship", "Maintenance claims", "Estate planning and wills", "Deceased estate administration", "Protection orders"] },
    ],
    ctaTitle: "Need Specialized Legal Advice?",
    ctaSubtitle: "Every legal matter is unique. Contact us for a confidential consultation tailored to your situation.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [{ text: "Notable " }, { text: "Cases", highlight: true }, { text: " & Matters" }],
    heroSubtitle: "A selection of significant legal matters and landmark cases handled by Diza Attorneys across our practice areas.",
    categories: ["All", "Litigation", "Corporate", "Conveyancing", "Labour", "Family"],
    items: [
      { id: 1, title: "Mining Rights Constitutional Challenge", category: "Litigation", location: "Supreme Court", year: "2024", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800", desc: "Successfully challenged the revocation of mining rights for a major platinum producer. The Supreme Court ruling set a precedent for mining sector regulatory disputes.", services: ["Litigation & Dispute Resolution"] },
      { id: 2, title: "Technology Sector M&A", category: "Corporate", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1507679799987-c73b1a22ee4e?w=800", desc: "Advised on the $12M acquisition of a Zimbabwean fintech company by a South African banking group. Handled due diligence, regulatory approvals, and transaction structuring.", services: ["Corporate & Commercial Law", "Contract Law"] },
      { id: 3, title: "Borrowdale Estate Development", category: "Conveyancing", location: "Borrowdale, Harare", year: "2023", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800", desc: "Managed the conveyancing for a 48-unit residential estate development. All transfers registered within 60 days of completion, a record for the project scale.", services: ["Property & Conveyancing"] },
      { id: 4, title: "Banking Sector Restructuring", category: "Labour", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800", desc: "Advised a major bank on the restructuring of 3 divisions affecting 200+ employees. Ensured full Labour Act compliance with zero disputes filed.", services: ["Labour & Employment Law"] },
      { id: 5, title: "Commercial Lease Portfolio", category: "Corporate", location: "Harare CBD", year: "2024", image: "https://images.unsplash.com/photo-1507679799987-c73b1a22ee4e?w=800", desc: "Reviewed and negotiated 35 commercial leases for a national retail chain, standardizing terms and achieving an average 15% reduction in rental escalation clauses.", services: ["Contract Law", "Property & Conveyancing"] },
      { id: 6, title: "High-Profile Custody Matter", category: "Family", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800", desc: "Successfully represented a parent in a complex cross-border custody dispute involving jurisdictions in Zimbabwe and the United Kingdom.", services: ["Family Law"] },
      { id: 7, title: "Infrastructure PPP Litigation", category: "Litigation", location: "High Court", year: "2023", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800", desc: "Won a landmark $8M damages claim in a public-private partnership dispute for a construction consortium. The ruling clarified PPP contract interpretation in Zimbabwe.", services: ["Litigation & Dispute Resolution", "Contract Law"] },
      { id: 8, title: "Agricultural Company Formation", category: "Corporate", location: "Mashonaland", year: "2022", image: "https://images.unsplash.com/photo-1507679799987-c73b1a22ee4e?w=800", desc: "Structured and registered a joint venture between Zimbabwean and Dutch agricultural companies for commercial horticulture operations.", services: ["Corporate & Commercial Law"] },
      { id: 9, title: "Estate Administration", category: "Family", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800", desc: "Administered a complex deceased estate worth $3M with assets in Zimbabwe and South Africa. Resolved competing claims from 6 beneficiaries through mediation.", services: ["Family Law"] },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [{ text: "Client " }, { text: "Testimonials", highlight: true }],
    heroSubtitle: "Real feedback from individuals and organizations who trust Diza Attorneys with their most important legal matters.",
    ratingBreakdown: { 5: 19, 4: 7, 3: 2, 2: 0, 1: 0 },
    items: [
      { name: "Tendai Chirwa", role: "CEO, Masimba Holdings", text: "Diza Attorneys handled our complex M&A transaction flawlessly. Their corporate law expertise and attention to detail saved us from potential liabilities worth millions. True strategic partners.", rating: 5, date: "1 month ago", project: "Mergers & Acquisitions" },
      { name: "Grace Nyoni", role: "Property Developer", text: "Every property transfer I handle goes through Diza. They are thorough, fast, and their conveyancing team never misses a deadline. Over 100 transfers completed without a single issue.", rating: 5, date: "2 months ago", project: "Conveyancing" },
      { name: "Maxwell Gumbo", role: "HR Director, Delta Beverages", text: "Their labour law advice has been invaluable during our restructuring. Professional, pragmatic, and always focused on solutions. Zero disputes from 200+ affected employees.", rating: 4, date: "3 months ago", project: "Labour Restructuring" },
      { name: "Rudo Mapfumo", role: "Small Business Owner", text: "I was terrified of the legal process when a former partner tried to dissolve our business unfairly. Diza Attorneys fought for my rights and the outcome was far better than I hoped.", rating: 5, date: "4 months ago", project: "Commercial Dispute" },
      { name: "Peter Chirenje", role: "Mining Director, Zimplats", text: "When our mining rights were threatened by a regulatory change, Diza took our case to the Supreme Court and won. Their litigation team is formidable. I would not use anyone else.", rating: 5, date: "5 months ago", project: "Constitutional Litigation" },
      { name: "Sandra Moyo", role: "Estate Agent, Pam Golding", text: "As a real estate agent, I recommend Diza Attorneys to every buyer and seller. Their conveyancing is efficient, their communication is excellent, and transfers are always on time.", rating: 5, date: "6 months ago", project: "Property Transfer" },
      { name: "Tinashe Banda", role: "IT Company CEO", text: "Diza drafted all our employment contracts and company policies. When we had our first disciplinary matter, we were fully protected because the documentation was airtight.", rating: 4, date: "7 months ago", project: "Employment Law" },
      { name: "Chipo Mukwena", role: "NGO Director", text: "The estate administration for my late father was handled with incredible sensitivity and efficiency. Multiple properties across two countries were resolved within 6 months.", rating: 5, date: "8 months ago", project: "Estate Administration" },
      { name: "Simba Dube", role: "Commercial Farmer", text: "Diza structured our joint venture with an international partner. The agreement they drafted protected our interests perfectly when a disagreement arose two years later.", rating: 5, date: "9 months ago", project: "Joint Venture" },
      { name: "Nyasha Matimba", role: "Bank Manager, CBZ", text: "We use Diza for all our mortgage bond registrations. Their turnaround time is consistently the fastest in the market. Reliable, accurate, and professional every time.", rating: 4, date: "10 months ago", project: "Bond Registration" },
      { name: "Faith Chirwa", role: "Divorce Client", text: "Going through a divorce is terrible, but Diza made it bearable. They fought hard for a fair settlement while being genuinely compassionate about what I was going through.", rating: 5, date: "11 months ago", project: "Divorce" },
      { name: "Blessing Moyo", role: "Retail Chain CEO", text: "Diza reviewed and renegotiated 35 commercial leases for our stores. They saved us hundreds of thousands in improved terms. Their contract negotiation skills are exceptional.", rating: 5, date: "1 year ago", project: "Commercial Leases" },
    ],
    ctaTitle: "Ready for Legal Representation That Delivers?",
    ctaSubtitle: "Join the individuals and businesses who trust Diza Attorneys with their most important legal matters.",
    ctaCta: "Book a Consultation",
    ctaWhatsappText: "Hello, I read your client testimonials and would like to book a consultation.",
  },

  contact: {
    heroTitle: [{ text: "Let's " }, { text: "Talk", highlight: true }, { text: " Law" }],
    heroSubtitle: "Have a legal matter to discuss? Book a confidential consultation with one of our experienced attorneys.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in the form and choose how you'd like to send it.",
  },

  careers: {
    heroTitle: [{ text: "Build Your " }, { text: "Legal", highlight: true }, { text: " Career" }],
    heroSubtitle: "Join a team of skilled attorneys and legal professionals at one of Harare's most respected law firms.",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920",
    cultureTitle: "Why Practice With Us?",
    cultureItems: [
      { iconName: "Users", title: "Mentorship", desc: "Work alongside senior attorneys who invest in your professional growth and legal expertise." },
      { iconName: "Rocket", title: "Career Progression", desc: "Clear partnership track with defined milestones for ambitious legal professionals." },
      { iconName: "ShieldCheck", title: "Ethical Practice", desc: "A firm culture built on integrity where doing the right thing is always the first priority." },
    ],
    cultureImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400",
    cultureImageAlt: "Diza Attorneys team in the office",
    cultureTagline: "More Than a Job. A Calling.",
    cultureTaglineDesc: "Every case we take on is an opportunity to make a difference. Our attorneys are driven by a genuine commitment to justice.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Competitive Salary", desc: "Market-leading remuneration with performance bonuses tied to billing targets." },
      { iconName: "FirstAid", title: "Medical Aid", desc: "Comprehensive medical cover for you and your immediate family." },
      { iconName: "GraduationCap", title: "Professional Development", desc: "Sponsored CLE courses, bar exam preparation, and specialist qualifications." },
      { iconName: "Car", title: "Travel Allowance", desc: "Monthly travel allowance for all fee-earning professionals." },
      { iconName: "Heart", title: "Work-Life Balance", desc: "Reasonable billable targets and flexible arrangements for senior staff." },
      { iconName: "ShieldCheck", title: "Professional Indemnity", desc: "Full professional indemnity insurance coverage for all practicing attorneys." },
    ],
    positions: [
      { id: 1, title: "Senior Associate, Litigation", department: "Litigation", type: "Full-Time", location: "Harare", description: "Experienced litigation attorney to handle complex commercial disputes in the High Court and Supreme Court.", requirements: ["LLB degree and admission to practice", "5+ years litigation experience", "High Court trial experience essential", "Strong legal research and drafting", "Client management skills"] },
      { id: 2, title: "Associate, Corporate Law", department: "Corporate", type: "Full-Time", location: "Harare", description: "Corporate attorney to handle M&A, company formations, and commercial agreements.", requirements: ["LLB degree and admission to practice", "3+ years corporate law experience", "M&A transaction experience preferred", "Strong contract drafting skills", "Attention to detail"] },
      { id: 3, title: "Conveyancer", department: "Conveyancing", type: "Full-Time", location: "Harare", description: "Qualified conveyancer to handle property transfers, bond registrations, and related matters.", requirements: ["LLB with conveyancing endorsement", "3+ years conveyancing experience", "Deeds Office procedure knowledge", "High volume work capacity", "Excellent organizational skills"] },
      { id: 4, title: "Candidate Attorney", department: "General", type: "Articles", location: "Harare", description: "Two-year articles of clerkship program with exposure to all practice areas under senior attorney mentorship.", requirements: ["LLB degree (completed or final year)", "Strong academic record", "Legal writing samples required", "Research and analytical skills", "Professional demeanor"] },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle: "We are always open to hearing from talented legal professionals. Send us your CV.",
    generalApplicationCta: "Send Your CV",
  },

  footer: {
    description: "Justice. Integrity. Results. Trusted by individuals and businesses across Zimbabwe for over 16 years.",
    copyright: "Diza Attorneys at Law",
  },
};

export default siteData;
