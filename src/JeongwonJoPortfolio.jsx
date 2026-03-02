import { useState, useEffect } from "react";
import profileImg from "./profile.jpg";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Jeongwon Jo",
  role: "Postdoctoral Researcher",
  affiliation: "University of Notre Dame",
  department: "Department of Computer Science and Engineering",
  advisor: "Ronald Metoyer",
  email: "jwjo48@gmail.com",
  bio: `I am a Postdoctoral Researcher at the <b>University of Notre Dame's Department of Computer Science and Engineering</b>, advised by <b><a href="https://sites.nd.edu/ronald-metoyer/" target="_blank" rel="noopener noreferrer" style="color:#2563EB;text-decoration:none;">Dr. Ronald Metoyer</a></b>. I completed my Ph.D. in Informatics (Human-Computer Interaction) at Pennsylvania State University's <b>College of Information Sciences and Technology</b> in 2024, advised by <b><a href="https://jcarroll.ist.psu.edu/" target="_blank" rel="noopener noreferrer" style="color:#2563EB;text-decoration:none;">Dr. John M. Carroll</a></b>.`,
  researchIntro: `My research investigates the complex interconnections between technology and the social, organizational, and ethical systems that underpin human support networks. I focus on how we can design and deploy technologies to be <b>equitable, trustworthy, and human-centered</b> when they mediate access to essential support for vulnerable populations. Through mixed methods — including interviews, online ethnography, scenario-based experiments, and system design — I study the sociotechnical dimensions of technology and AI in the high-stakes context of community and social services.`,
  interests: [
    "Human-Computer Interaction",
    "Computer-Supported Cooperative Work",
    "Responsible AI",
    "Community Informatics",
    "AI Ethics", 'Social Computing',
  ],
  links: {
    scholar: "https://scholar.google.com/citations?user=iXBQi0UAAAAJ&hl=en&oi=ao",
    linkedin: "https://www.linkedin.com/in/jeongwonjo/",
    cv: "https://drive.google.com/file/d/1sIO8-CITndgx1zzsBM73KPfyhxL1ILJG/view",
  },
};

const NEWS = [
  { date: "January 2026", text: "My two first-author full papers were accepted at <b>ACM CHI 2026</b>!" },
  { date: "September 2025", text: "Serving as an <b>AC for ACM CHI'26</b> full papers. Serving as a <b>Session Chair</b> for \"Identifying and Mitigating AI Risks\" at <b>ACM CSCW'25</b>." },
  { date: "Summer 2025", text: "Submitted grant proposals to <b>Google Academic Research Awards</b> and <b>The IBM Center for The Business of Government</b>. Serving as a <b>PC for ACM CSCW'26</b>." },
  { date: "April 2025", text: "My first-author full paper was accepted at <b>ACM FAccT 2025</b>! Submitted a grant proposal to <b>NSF S&CC</b>." },
  { date: "January 2025", text: "Serving as an <b>AC for ACM CSCW'25</b> full papers and for <b>ACM CHI'25 LBW</b>." },
  { date: "September 2024", text: "My first-author full paper was accepted at <b>ACM CSCW 2025</b>." },
  { date: "July 2024", text: "Started working as a <b>postdoctoral researcher</b> at the University of Notre Dame." },
  { date: "February 2024", text: "My first-author short paper was accepted at <b>ACM CHI 2024</b>." },
];

const CLUSTERS = [
  {
    id: "mutual-aid",
    title: "Community Mutual Aid & Crisis Resilience",
    color: "#2563EB",
    icon: "🤝",
    shortDesc: "How communities self-organize grassroots support through coproduction when government systems fail them.",
    description: "How do communities self-organize grassroots support when government systems fail them? Through extensive interviews and online ethnographic studies of COVID-19 mutual aid networks and the Community Fridge movement, I documented how coproduction — where boundaries between helper and recipient become fluid — is the foundation of sustainable community support. This work also identified stigma as a critical barrier to accepting available help.",
    papers: [
      { title: "COVID-19 Kindness: Patterns of Neighborly Cooperation during a Global Pandemic", authors: "Jo, Knearem, Tsai, Carroll", venue: "C&T 2021", award: "Best Paper Award", rq: "What adaptations did local communities make to provide support during the pandemic, and how can they be formulated into reusable patterns?", method: "Interviews with 18 civic initiative organizers; pattern language framework", summary: "Identified two reusable design patterns for community-based pandemic relief: the local expert network and the virtual third place." },
      { title: "Making Space for Support: An Exploratory Analysis of Pandemic-Response Mutual Aid Platforms", authors: "Knearem, Jo, Tsai, Carroll", venue: "C&T 2021", rq: "What are the benefits and challenges of using Facebook Groups and Google Drive for mutual aid, and what design features make platforms effective?", method: "Scenario-based claims analysis of 60 mutual aid organizations across the U.S.", summary: "Effective mutual aid platforms require request standardization and balanced visibility alongside validation and conversational interaction." },
      { title: "Local Community Support for Tangible Food Aid During COVID-19", authors: "Knearem, Jo, Carroll", venue: "CSCW 2021 Companion", rq: "How are local community members facilitating food aid through online mutual aid during a global pandemic?", method: "Semi-structured interviews with 17 mutual aid group administrators", summary: "Online groups provided immediate food relief and seeded long-term food security infrastructure like community fridges and free pantries." },
      { title: "Using Local Community to Ease Long Haul Uncertainty During the COVID-19 Pandemic", authors: "Jo, Knearem, Tsai, Carroll", venue: "iConference 2022", rq: "What types of local-specific information were sought in local communities at the initial phase of COVID-19?", method: "Qualitative content analysis of 2,120 posts from a pandemic-relief Facebook group", summary: "People leveraged local networks for timely updates, regulation clarity, and social norm confirmation, though inaccurate information exchange emerged as a challenge." },
      { title: "Making Community Beliefs and Capacities Visible Through Care-mongering during COVID-19", authors: "Knearem, Jo, Tsai, Carroll", venue: "ACM GROUP 2022", rq: "How do care-mongering groups make community beliefs and capacities visible during a prolonged crisis?", method: "Interview study with online mutual aid group administrators", summary: "Care-mongering groups made community needs and assets visible, enabling recognition and reciprocal support through online platforms." },
      { title: "Coproducing Support Together: Sustainable and Reciprocal Civic Disaster Relief during COVID-19", authors: "Jo, Knearem, Carroll", venue: "CSCW 2023", rq: "How do civic disaster relief groups carry out online and offline coordination, and what are their effects on individuals and communities?", method: "13 interviews with civic initiative organizers and participants", summary: "Civic relief initiatives exemplify coproduction, where all participants play active roles in producing and exchanging support, fostering sustainability and community resilience." },
      { title: "Solidarity not Charity! Empowering Local Communities for Disaster Relief during COVID-19 through Grassroots Support", authors: "Knearem, Jo, Alliyu, Carroll", venue: "Springer CSCW Journal 2024", rq: "What needs were addressed by local online mutual aid groups, how did members exchange aid, and how did focus progress over time?", method: "Interview study with 17 mutual aid group administrators representing 13 groups", summary: "Mutual aid groups evolved from immediate relief to long-term community solutions and justice-centered work, demonstrating the strength of grassroots community capacity." },
      { title: "Infrastructuring Community Fridges for Food Commoning", authors: "Jo, Xie, Aiyer, Knearem, Carroll", venue: "CSCW 2024", rq: "What commoning and infrastructuring work do people practice for food sharing, and how do they affect the use and management of commons?", method: "Semi-structured interviews with 17 Community Fridge volunteers from 11 groups across the U.S.", summary: "Community Fridges sustain horizontal food sharing through commoning principles and self-organized infrastructuring of technology, human networks, and physical spaces." },
      { title: "Coproducing Care: Synergies of Recognition", authors: "Carroll, Jo, Gupta, Gui, Sandbulte, Lin, Lee, Knearem, Tsai", venue: "Springer Book 2025", rq: "How does coproduction and mutual recognition operate within community care networks?", method: "Book-length synthesis of multiple empirical studies on community support", summary: "A comprehensive synthesis examining how synergies of recognition in community care networks enable coproduction and sustain reciprocal support." },
    ],
  },
  {
    id: "help-seeking",
    title: "Designing for Help-Seeking in Support Platforms",
    color: "#7C3AED",
    icon: "🔬",
    shortDesc: "Experimental investigation into psychological drivers of participation in citizen-led support systems.",
    description: "Insights from my qualitative mutual aid research revealed that stigma is a major barrier to seeking help. This motivated a systematic, experimental investigation into the psychological drivers of participation in citizen-led support systems. Using scenario-based experiments and structural equation modeling, I uncovered a counterintuitive finding: confidence in one's ability to give support is a more powerful motivator than confidence in receiving it.",
    papers: [
      { title: "Understanding and Balancing Trade-offs of Visibility in Support Requests", authors: "Jo, Xie, Carroll", venue: "CHI EA 2024", rq: "How do preferences and perceptions around different methods of making support requests affect help-seeking on local support exchange platforms?", method: "Scenario-based survey presenting three support scenarios with three visibility levels", summary: "No one-size-fits-all approach exists for support requests; preferences vary by urgency, privacy concerns, social image, and perceived control over the situation." },
      { title: "Psychological Barriers and Facilitators in the Sharing Economy: Exploring Recognition, Visibility, Social Costs, Community Belonging, and Efficacies", authors: "Jo, Xie, Carroll", venue: "CSCW 2025", rq: "How do support request visibility and recognition affect perceived social costs and future participation in non-monetized peer-to-peer support exchanges?", method: "Within-subjects experiment (N=93) with nine conditions; partial least squares structural equation modeling (PLS-SEM)", summary: "Confidence in one's ability to give support is a more powerful motivator for both seeking and offering help than confidence in receiving it, and recognition from helpers effectively reduces social costs." },
    ],
  },
  {
    id: "dignity-trust",
    title: "Food Security, Dignity & Trust in Public Systems",
    color: "#DC2626",
    icon: "⚖️",
    shortDesc: "How technology and AI mediate access to public benefits and food security, impacting dignity and trust.",
    description: "A recurring theme in my community-based research was that grassroots efforts often emerged in direct response to dehumanizing experiences of formal government aid. This stream investigates how technology mediates access to public benefits and food security, examining failures in preserving dignity and the complex dynamics of trust when AI enters the picture. I explore both bottom-up interventions (food information systems) and top-down systems (SNAP benefits).",
    papers: [
      { title: "Food with Dignity: Public Values in the Supplemental Nutrition Assistance Program Mobile Applications", authors: "Jo, Xie, Carroll", venue: "GoodIT 2023", rq: "How are public values for digital government supported or violated in existing SNAP mobile apps, and which values of beneficiaries are missing?", method: "Value-Sensitive Design analysis of ~1,100 app reviews and ~3,000 Reddit posts", summary: "SNAP mobile apps often fail to preserve human dignity, with users feeling humiliated and disempowered throughout public benefit processes." },
      { title: "AI Trust Reshaping Administrative Burdens: Understanding Trust-Burden Dynamics in LLM-Assisted Benefits Systems", authors: "Jo, Zhang, Cai, Goyal", venue: "FAccT 2025", rq: "How does trust in AI — across competence, integrity, and benevolence — shape the experience of administrative burdens in LLM-assisted benefits systems?", method: "Mixed-method interviews with 10 SNAP applicants employing a scenario-writing technique with an LLM prototype", summary: "While LLMs can reduce traditional administrative burdens, they introduce new trust-mediated burdens — when users perceive AI as lacking benevolence, psychological burdens increase." },
      { title: "Balancing Goals, Health, and Cost: A Food Information System for Managing Complex Choices and Fostering Sustained Food Agency", authors: "Szymanski*, Jo*, Sawwan, Eicher-Miller, Conrado, Wood, Dillahunt, Metoyer", venue: "CHI 2026", note: "* Equal contribution", rq: "How might we design technology to encourage sustained food agency behaviors for healthy food choices among low-income populations?", method: "8-week within-subjects intervention study with 55 participants from a food-insecure community, plus focus groups with 20 participants", summary: "A food planning tool with multi-objective optimization and LLM-powered reflection reports improved low-income individuals' nutritional awareness and perceived food agency." },
    ],
  },
  {
    id: "methods",
    title: "HCI Research Methods",
    color: "#059669",
    icon: "📐",
    shortDesc: "Contributions to HCI methodology, scenario-based design, and community engagement technology.",
    description: "Alongside my empirical research, I contribute to HCI methodology and community engagement design. This includes exploring how mobile technologies can foster lightweight civic participation and conducting comprehensive reviews of foundational HCI design methods.",
    papers: [
      { title: "What Happened to Scenario-Based Design in HCI?: A Scoping Review", authors: "Carroll*, Jo*, Kim, Lin, Chen", venue: "CHI 2026", note: "* Equal contribution", rq: "How has Scenario-Based Design (SBD) evolved in contemporary HCI practice, and what are its current methodological lineages?", method: "Scoping review of 125 papers from SIGCHI core venues published between 2015–2025", summary: "SBD continues to evolve with diverse approaches organized into method family trees, yielding a hierarchical framework balancing participant agency, resources, and temporal scope." },
    ],
  },
];

const PUBLICATIONS = [
  { cite: "Szymanski A.*, Jo, J.*, Sawwan M., Eicher-Miller H., Conrado A.M., Wood, D., Dillahunt, T., & Metoyer, R. (2026, In Press). Balancing Goals, Health, and Cost: A Food Information System for Managing Complex Choices and Fostering Sustained Food Agency. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.", venue: "CHI'26", note: "*first co-authors", hasLink: false, hasPdf: true, pdfUrl: "https://drive.google.com/file/d/1sd8ENdJ9hDeqBDfWhgYnCrolyKzALpxM/view?usp=drive_link" },
  { cite: "Carroll J.M.*, Jo, J.*, Kim, J., Lin, Y., & Chen, E. (2026, In Press). What Happened to Scenario-Based Design in HCI?: A Scoping Review. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.", venue: "CHI'26", note: "*first co-authors", hasLink: false, hasPdf: true, pdfUrl: "https://drive.google.com/file/d/1P0Tdqk4TmhadkD0wwUWF9fd3rkoMmPd3/view?usp=drive_link" },
  { cite: "Jo, J., Zhang, H., Cai, J, Goyal, N. (2025). AI Trust Reshaping Administrative Burdens: Understanding Trust-Burden Dynamics in LLM-Assisted Benefits Systems. In Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency.", venue: "FAccT'25", hasLink: true, hasPdf: true },
  { cite: "Jo, J., Xie, J., & Carroll, J. M. (2025). Psychological Barriers and Facilitators in the Sharing Economy: Exploring Recognition, Visibility, Social Costs, Community Belonging, and Efficacies. Proceedings of the ACM on Human-Computer Interaction, CSCW.", venue: "CSCW'25", hasLink: true, hasPdf: true },
  { cite: "Jo, J., Xie, J., & Carroll, J. M. (2024, May). Understanding and Balancing Trade-offs of Visibility in Support Requests. In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (pp. 1-8).", venue: "CHI EA'24", hasLink: true, hasPdf: true },
  { cite: "Jo, J., Xie, J., Aiyer, P., Knearem, T., & Carroll, J. M. (2024). Infrastructuring Community Fridges for Food Commoning. Proceedings of the ACM on Human-Computer Interaction, 8(CSCW1), 1-27.", venue: "CSCW'24", hasLink: true, hasPdf: true },
  { cite: "Knearem, T., Jo, J., Alliyu, O., & Carroll, J. M. (2024). Solidarity not charity! empowering local communities for disaster relief during covid-19 through grassroots support. Computer Supported Cooperative Work (CSCW), 1-46.", venue: "J of CSCW'24", hasLink: true, hasPdf: false },
  { cite: "Jo, J., Xie, J., & Carroll, J. M. (2023, September). Food with Dignity: Public Values in the Supplemental Nutrition Assistance Program Mobile Applications. Proceedings of the 2023 ACM Conference on Information Technology for Social Good (pp. 246-256).", venue: "GoodIT'23", hasLink: true, hasPdf: true },
  { cite: "Jo, J., Knearem, T., & Carroll, J. M. (2023). Coproducing Support Together: Sustainable and Reciprocal Civic Disaster Relief during COVID-19. Proceedings of the ACM on Human-Computer Interaction, 7(CSCW1), 1-25.", venue: "CSCW'23", hasLink: true, hasPdf: true },
  { cite: "Jo, J., Knearem, T., Tsai, C. H., & Carroll, J. M. (2022, February). Using Local Community to Ease Long Haul Uncertainty During the COVID-19 Pandemic. In Information for a Better World: 17th International Conference, iConference 2022, Proceedings, Part II (pp. 211-227). Springer.", venue: "iConference'22", hasLink: true, hasPdf: true },
  { cite: "Knearem, T., Jo, J., Tsai, C. H., & Carroll, J. M. (2022). Making community beliefs and capacities visible through care-mongering during covid-19. Proceedings of the ACM on Human-Computer Interaction, 6(GROUP), 1-19.", venue: "GROUP'22", hasLink: true, hasPdf: true },
  { cite: "Knearem, T., Jo, J., & Carroll, J. M. (2021, October). Local community support for tangible food aid during covid-19. In Companion publication of the 2021 conference on computer supported cooperative work and social computing (pp. 104-107).", venue: "CSCW'21", hasLink: true, hasPdf: true },
  { cite: "Jo, J., Knearem, T., Tsai, C. H., & Carroll, J. M. (2021, June). Covid-19 kindness: Patterns of neighborly cooperation during a global pandemic. In C&T'21: Proceedings of the 10th International Conference on Communities & Technologies (pp. 1-14).", venue: "C&T'21", award: "Best Paper Award", hasLink: true, hasPdf: true },

  { cite: "Knearem, T., Jo, J., Tsai, C. H., & Carroll, J. M. (2021, June). Making space for support: an exploratory analysis of pandemic-response mutual aid platforms. In C&T'21: Proceedings of the 10th International Conference on Communities & Technologies (pp. 38-43).", venue: "C&T'21", hasLink: true, hasPdf: true },
  { cite: "Lee, K., Jo, J., Kim, J., & Kang, Y. (2019). Can chatbots help reduce the workload of administrative officers?-Implementing and deploying FAQ chatbot service in a university. In HCI International 2019-Posters (pp. 348-354). Springer.", venue: "HCII'19", hasLink: false, hasPdf: false },
];

const SERVICE = {
  conferenceService: [
    { role: "Session Chair", detail: "\"Identifying and Mitigating AI Risks\", ACM CSCW 2025" },
  ],
  programCommittee: [
    { conf: "ACM CHI '26", role: "Associate Chair, Paper Track" },
    { conf: "ACM CSCW '26", role: "Program Committee, Paper Track" },
    { conf: "ACM CSCW '25", role: "Associate Chair, Paper Track" },
    { conf: "ACM CSCW '24", role: "Associate Chair, Paper Track" },
    { conf: "ACM CHI '25", role: "Associate Chair, Late-Breaking Work" },
    { conf: "ACM CHI '24", role: "Associate Chair, Late-Breaking Work" },
  ],
  reviewing: {
    summary: "7× Outstanding Reviewer Recognition (ACM CHI, ACM CSCW)",
  },
  awards: [
    { award: "Best Paper Award", detail: "ACM C&T 2021" },
    { award: "Outstanding Reviewer Recognition (x7)", detail: "ACM CHI & ACM CSCW, 2022–2025" },
  ],
  grants: [
    { title: "NSF Smart & Connected Communities", amount: "$1.5M", status: "Submitted", role: "Led proposal writing" },
    { title: "Google Academic Research Awards", amount: "$100K", status: "Submitted", role: "PI" },
    { title: "IBM Center for The Business of Government", amount: "", status: "Submitted", role: "PI" },
  ],
};

// ─── Styles ──────────────────────────────────────────────────────────────────

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const s = {
  page: { maxWidth: 1080, margin: "0 auto", padding: "0 24px 60px", fontFamily: FONT, color: "#1F2937", lineHeight: 1.6 },
  h1: { fontSize: 36, fontWeight: 800, color: "#111827", margin: "0 0 4px", letterSpacing: "-0.02em" },
  h2: { fontSize: 26, fontWeight: 700, color: "#111827", margin: "40px 0 16px", paddingBottom: 8, borderBottom: "2px solid #E5E7EB" },
  h3: { fontSize: 20, fontWeight: 700, color: "#374151", margin: "24px 0 12px" },
  p: { fontSize: 16, color: "#4B5563", margin: "0 0 12px", lineHeight: 1.7 },
  link: { color: "#2563EB", textDecoration: "none", fontWeight: 600 },
  pill: { display: "inline-block", fontSize: 13, fontWeight: 600, padding: "4px 12px", borderRadius: 6, margin: "0 6px 6px 0" },
  card: { background: "white", border: "1px solid #E5E7EB", borderRadius: 12, padding: 20, marginBottom: 12, transition: "box-shadow 0.2s", cursor: "pointer" },
};

function boldMyName(text) {
  return text
    .replace(/\bJo, J\.\*/g, '<b>Jo, J.*</b>')
    .replace(/\bJo, J\./g, '<b>Jo, J.</b>')
    .replace(/(?<=, |^)Jo(?=,|$)/g, '<b>Jo</b>');
}

// ─── Components ──────────────────────────────────────────────────────────────

function Nav({ page, setPage }) {
  const [researchOpen, setResearchOpen] = useState(false);
  const items = [
    { id: "home", label: "Home" },
    { id: "research", label: "Research", dropdown: true },
    { id: "publications", label: "Publications" },
    { id: "service", label: "Service" },
  ];

  return (
    <nav style={{ borderBottom: "1px solid #E5E7EB", marginBottom: 32, position: "sticky", top: 0, background: "white", zIndex: 100, fontFamily: FONT }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 56, gap: 4 }}>
        <span onClick={() => setPage("home")} style={{ fontWeight: 800, fontSize: 18, color: "#111827", cursor: "pointer", marginRight: 32 }}>Jeongwon Jo</span>
        {items.map((item) =>
          item.dropdown ? (
            <div key={item.id} style={{ position: "relative" }}
              onMouseEnter={() => setResearchOpen(true)}
              onMouseLeave={() => setResearchOpen(false)}>
              <button onClick={() => { setPage("research"); setResearchOpen(false); }}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: page.startsWith("research") ? 700 : 500, color: page.startsWith("research") ? "#2563EB" : "#4B5563", padding: "8px 12px", fontFamily: FONT }}>
                Research ▾
              </button>
              {researchOpen && (
                <div style={{ position: "absolute", top: "100%", left: 0, background: "white", border: "1px solid #E5E7EB", borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", minWidth: 280, zIndex: 200, padding: "4px 0" }}>
                  <div onClick={() => { setPage("research"); setResearchOpen(false); }}
                    style={{ padding: "10px 16px", cursor: "pointer", fontSize: 14, fontWeight: 600, color: "#111827", borderBottom: "1px solid #F3F4F6" }}>
                    All Research Themes
                  </div>
                  {CLUSTERS.map((c) => (
                    <div key={c.id} onClick={() => { setPage("research-" + c.id); setResearchOpen(false); }}
                      style={{ padding: "10px 16px", cursor: "pointer", fontSize: 13, color: "#4B5563", display: "flex", alignItems: "center", gap: 8 }}>
                      <span>{c.icon}</span> {c.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button key={item.id} onClick={() => setPage(item.id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: page === item.id ? 700 : 500, color: page === item.id ? "#2563EB" : "#4B5563", padding: "8px 12px", fontFamily: FONT }}>
              {item.label}
            </button>
          )
        )}
      </div>
    </nav>
  );
}

function PaperCard({ paper, accentColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ ...s.card, boxShadow: open ? "0 4px 12px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)" }} onClick={() => setOpen(!open)}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, color: "#1F2937", margin: 0, lineHeight: 1.4 }}>{paper.title}</h4>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
            <span style={{ ...s.pill, color: accentColor, background: accentColor + "10" }}>{paper.venue}</span>
            {paper.award && <span style={{ ...s.pill, color: "#D97706", background: "#FEF3C7" }}>★ {paper.award}</span>}
            {paper.note && <span style={{ fontSize: 11, color: "#6B7280", fontStyle: "italic" }}>{paper.note}</span>}
          </div>
          <p style={{ fontSize: 13, color: "#6B7280", margin: "4px 0 0" }} dangerouslySetInnerHTML={{ __html: boldMyName(paper.authors) }} />
        </div>
        <span style={{ fontSize: 18, color: "#9CA3AF", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0, marginTop: 2 }}>▾</span>
      </div>
      {open && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #F3F4F6" }}>
          {[["Research Question", paper.rq, true], ["Method", paper.method, false], ["Key Finding", paper.summary, false]].map(([label, text, italic]) => (
            <div key={label} style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
              <p style={{ fontSize: 14, color: "#374151", margin: "4px 0 0", lineHeight: 1.5, fontStyle: italic ? "italic" : "normal" }}>{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Pages ───────────────────────────────────────────────────────────────────

function HomePage({ setPage }) {
  return (
    <div style={s.page}>
      {/* Profile */}
      <div style={{ display: "flex", gap: 32, alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap" }}>
        <img
          src={profileImg}
          alt="Jeongwon Jo"
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
            border: "3px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={s.h1}>Hi! I am Jeongwon Jo</h1>
          <p style={{ ...s.p, marginTop: 16 }} dangerouslySetInnerHTML={{ __html: PROFILE.bio }} />
          <p style={{ ...s.p }} dangerouslySetInnerHTML={{ __html: PROFILE.researchIntro }} />
        </div>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
        {[
          { label: "Google Scholar", url: PROFILE.links.scholar, bg: "#4285F4" },
          { label: "LinkedIn", url: PROFILE.links.linkedin, bg: "#0A66C2" },
          { label: "CV", url: PROFILE.links.cv, bg: "#374151" },
        ].map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", fontSize: 13, fontWeight: 600, color: "white", background: l.bg, padding: "8px 16px", borderRadius: 8, textDecoration: "none" }}>
            {l.label}
          </a>
        ))}
      </div>

      {/* Research Interests */}
      <h3 style={s.h3}>Research Interests</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
        {PROFILE.interests.map((i) => (
          <span key={i} style={{ ...s.pill, color: "#4B5563", background: "#F3F4F6", border: "1px solid #E5E7EB" }}>{i}</span>
        ))}
      </div>

      {/* Latest News */}
      <h2 style={s.h2}>Latest News</h2>
      <div>
        {NEWS.map((n, i) => (
          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", minWidth: 120, flexShrink: 0, paddingTop: 2 }}>{n.date}</span>
            <span style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: n.text }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchOverviewPage({ setPage }) {
  return (
    <div style={s.page}>
      <h1 style={s.h1}>Research</h1>
      <p style={{ ...s.p, marginTop: 12, marginBottom: 32 }}>
        My research investigates how technology can be designed to be equitable, trustworthy, and human-centered when it mediates access to essential support for vulnerable populations.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340, 1fr))", gap: 16 }}>
        {CLUSTERS.map((c) => (
          <div key={c.id} onClick={() => setPage("research-" + c.id)}
            style={{ ...s.card, borderLeft: `4px solid ${c.color}`, padding: 24 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{c.icon}</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{c.title}</h3>
            <p style={{ fontSize: 14, color: "#6B7280", margin: "0 0 12px", lineHeight: 1.6 }}>{c.shortDesc}</p>
            <span style={{ fontSize: 12, fontWeight: 600, color: c.color }}>{c.papers.length} publication{c.papers.length > 1 ? "s" : ""} →</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchThemePage({ cluster, setPage }) {
  return (
    <div style={s.page}>
      <button onClick={() => setPage("research")}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#6B7280", padding: 0, marginBottom: 16, fontFamily: FONT }}>
        ← Back to all themes
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span style={{ fontSize: 32 }}>{cluster.icon}</span>
        <h1 style={{ ...s.h1, fontSize: 26 }}>{cluster.title}</h1>
      </div>
      <p style={{ ...s.p, marginBottom: 24 }}>{cluster.description}</p>
      {cluster.papers.slice().reverse().map((paper, i) => (
        <PaperCard key={i} paper={paper} accentColor={cluster.color} />
      ))}
    </div>
  );
}

function PublicationsPage() {
  return (
    <div style={s.page}>
      <h1 style={s.h1}>Publications</h1>
      <p style={{ ...s.p, marginTop: 8, marginBottom: 32 }}>
        17 peer-reviewed publications at top HCI and responsible AI venues (CHI, CSCW, FAccT, C&T, GoodIT).
      </p>
      <div>
        {PUBLICATIONS.map((pub, i) => (
          <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #F3F4F6" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ ...s.pill, color: "#2563EB", background: "#EFF6FF", flexShrink: 0, marginTop: 2 }}>{pub.venue}</span>
              {pub.award && <span style={{ ...s.pill, color: "#D97706", background: "#FEF3C7", flexShrink: 0, marginTop: 2 }}>★ {pub.award}</span>}
            </div>
            <p style={{ fontSize: 14, color: "#374151", margin: "8px 0 0", lineHeight: 1.6 }}>
              <span dangerouslySetInnerHTML={{ __html: boldMyName(pub.cite) }} />
              {pub.note && <span style={{ fontSize: 12, color: "#6B7280", fontStyle: "italic" }}> ({pub.note})</span>}
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              {pub.hasLink && (
                <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", textDecoration: "underline", cursor: "pointer" }}>[Link]</span>
              )}
              {pub.hasPdf && pub.pdfUrl ? (
                <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", textDecoration: "underline", cursor: "pointer" }}>[PDF]</a>
              ) : pub.hasPdf ? (
                <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", textDecoration: "underline", cursor: "pointer" }}>[PDF]</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicePage() {
  return (
    <div style={s.page}>
      <h1 style={s.h1}>Service and Leadership</h1>

      {/* Conference Service */}
      <h2 style={s.h2}>Conference Service</h2>
      <ul style={{ paddingLeft: 20, margin: 0 }}>
        {SERVICE.conferenceService.map((item, i) => (
          <li key={i} style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>
            <b>{item.role}</b>, {item.detail}
          </li>
        ))}
      </ul>

      {/* Program Committee / AC */}
      <h2 style={s.h2}>Program Committee / Associate Chair</h2>
      <ul style={{ paddingLeft: 20, margin: 0 }}>
        {SERVICE.programCommittee.map((item, i) => (
          <li key={i} style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>
            <b>{item.conf}</b>: {item.role}
          </li>
        ))}
      </ul>


      {/* Awards */}
      <h2 style={s.h2}>Awards and Recognitions</h2>
      <ul style={{ paddingLeft: 20, margin: 0 }}>
        {SERVICE.awards.map((item, i) => (
          <li key={i} style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>
            <b>{item.award}</b>, {item.detail}
          </li>
        ))}
      </ul>

      {/* Grants */}
      <h2 style={s.h2}>Grant Activity</h2>
      <ul style={{ paddingLeft: 20, margin: 0 }}>
        {SERVICE.grants.map((item, i) => (
          <li key={i} style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>
            <b>{item.title}</b>{item.amount ? ` (${item.amount})` : ""} — {item.status}{item.role ? `, ${item.role}` : ""}
          </li>
        ))}
      </ul>

      {/* Education */}
      <h2 style={s.h2}>Education</h2>
      <ul style={{ paddingLeft: 20, margin: 0 }}>
        <li style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>
          <b>Ph.D., Informatics (HCI)</b>, Pennsylvania State University, 2019–2024<br />
          <span style={{ color: "#6B7280" }}>Advisor: Dr. John M. Carroll | Committee: Ting-Hao Kenneth Huang, Xinning Gui, S. Shyam Sundar</span>
        </li>
        <li style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>
          <b>B.S., Technology Management</b>, Yonsei University, Seoul, Korea, 2015–2019
        </li>
      </ul>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function JeongwonJoPortfolio() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const cluster = CLUSTERS.find((c) => page === "research-" + c.id);

  let content;
  if (page === "home") content = <HomePage setPage={setPage} />;
  else if (page === "research") content = <ResearchOverviewPage setPage={setPage} />;
  else if (cluster) content = <ResearchThemePage cluster={cluster} setPage={setPage} />;
  else if (page === "publications") content = <PublicationsPage />;
  else if (page === "service") content = <ServicePage />;
  else content = <HomePage setPage={setPage} />;

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      <Nav page={page} setPage={setPage} />
      {content}
      <footer style={{ textAlign: "center", padding: "24px 0 40px", borderTop: "1px solid #E5E7EB", marginTop: 40 }}>
        <p style={{ fontSize: 13, color: "#9CA3AF" }}>Jeongwon Jo © 2026</p>
      </footer>
    </div>
  );
}
