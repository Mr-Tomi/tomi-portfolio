export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  innerImage: string;
  overview: string;
  descriptions: string[];
  projectType: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "yoobic-website",
    title: "Yoobic Website Rebrand",
    category: "Website Design, Creative Direction",
    coverImage: "https://framerusercontent.com/images/6tIgLsABo96N1GZeVdboY31uQKg.jpg",
    innerImage: "https://framerusercontent.com/images/y62AjvuHTVTKyFtpkexAt5HAk.png",
    overview: "A comprehensive website rebrand focused on streamlining the digital experience and enhancing the core brand identity.",
    descriptions: [
      "At Superside, we had the opportunity to collaborate with YOOBIC on a unique branding initiative tied to their presence at NRF 2025: Retail’s Big Show. The project involved integrating the dynamic brand elements from the event branding into YOOBIC’s existing website, ensuring a cohesive and impactful digital presence that reflected the energy and innovation of their participation in the event.",
      "The primary challenge was to seamlessly blend the bold, event-specific visuals and messaging with YOOBIC’s established brand identity. It was crucial to maintain consistency across their website while capturing the essence of the NRF 2025 branding.",
      "The client’s intention was to balance professionalism with creativity. By testing both options, they aimed to understand which design resonated more with their audience:",
      "The Mockup Option: Focused on showcasing YOOBIC’s innovation and solutions in a polished, corporate aesthetic.",
      "The Brush Stroke Option: Aimed to convey energy, creativity, and excitement, capturing the essence of the NRF 2025 branding.",
      "As part of the YOOBIC website update, implementing responsive design was a critical priority. The goal was to ensure that the branding updates and new features, including light/dark modes and event-specific elements, delivered a seamless user experience across desktop, and mobile devices.",
      "The final website updates achieved a perfect balance between YOOBIC’s core brand and the vibrant elements of NRF 2025. The stakeholders were not only satisfied with the outcome but genuinely excited about how the updated website amplified their event presence."
    ],
    projectType: "Website Redesign",
    role: "Creative Lead"
  },
  {
    id: "2",
    slug: "flexi-solutions",
    title: "Flexi Ride",
    category: "Mobile App Design",
    coverImage: "https://framerusercontent.com/images/PdXL49MeqKje05fhzgOkIBSvDMw.png",
    innerImage: "https://framerusercontent.com/images/mwmkdMk2EyUhIkvlKOMksfQ4dU.png",
    overview: "An intuitive mobile application designed to simplify ride-hailing and logistics.",
    descriptions: [
      "The goal was to create a fresh, user-centered ride-hailing experience that prioritizes fairness and flexibility. FlexiRide empowers users to propose their own fares, split ride costs with peers, and manage payments directly within the app—all while maintaining a smooth, intuitive interface.",
      "This project is about more than just booking a ride; it's about building trust and transparency into urban mobility. I aimed to create a seamless mobile experience that feels both empowering and elegant.",
      "This project involved the complete UI/UX design of a mobile app MVP, built to disrupt the conventional ride-hailing model. The app introduces dynamic fare proposals and peer-to-peer payment requests, giving users more control over their rides and costs.",
      "I started by mapping out the end-to-end experience: from fare suggestions and ride requests to cost splitting and transaction tracking. Through collaborative sessions with the client, we honed in on the features users care about most—simplicity, transparency, and speed.",
      "The final design is clean, intuitive, and flexible across both iOS and Android, ensuring a smooth ride every step of the way.",
      "The challenge lay in balancing innovation with usability. Dynamic pricing and peer payment aren’t standard in most ride apps, so we needed to guide users clearly through unfamiliar flows.",
      "We tackled this with well-placed onboarding prompts, contextual tooltips, and intuitive interactions to ensure users felt confident every step of the way."
    ],
    projectType: "Mobile App MVP",
    role: "Lead Designer"
  },
  {
    id: "3",
    slug: "poolside-tech",
    title: "Poolside tech",
    category: "Website Design, Creative Direction",
    coverImage: "https://framerusercontent.com/images/Lwz78mto15I4uTWO376zzhT1NI.png",
    innerImage: "https://framerusercontent.com/images/bgqEf8tKUwjFDBPZ2Li8mG8D64.png",
    overview: "A high-conversion marketing website tailored for a cutting-edge tech startup.",
    descriptions: [
      "The goal was to create a bold, futuristic brand website for Poolside—a startup building an AI-native programming environment. As Creative Lead, I guided the full visual and UX direction, ensuring the site reflected the cutting-edge nature of the product while remaining clear and engaging for a technical audience. We aimed to capture Poolside’s vision through immersive visuals, modern layouts, and a tone that balances ambition with clarity.",
      "This project involved designing a high-impact marketing website that could communicate technical complexity with style and simplicity. A major highlight of the project was our use of AI-generated imagery, which allowed us to craft visually stunning, one-of-a-kind graphics that aligned perfectly with the brand's narrative.",
      "We used AI tools to generate conceptual visuals that reflected ideas like machine learning, code intelligence, and creative collaboration, saving time and unlocking creative possibilities that would’ve been difficult with traditional stock assets.",
      "From strategy and structure to final interactions, every touchpoint was intentionally crafted to reflect the brand’s forward-thinking identity. The design system we created ensured scalability and consistency across future pages and campaigns.",
      "A key challenge was balancing abstract AI concepts with tangible messaging. It was essential that the site not only looked innovative but also conveyed trust and clarity to pool owners.",
      "We solved this by: Pairing AI-generated visuals with strong editorial design, simplifying navigation and interaction flow, and collaborating closely with Poolside’s leadership to fine-tune tone and messaging."
    ],
    projectType: "Responsive Website Design",
    role: "Creative Lead"
  },
  {
    id: "4",
    slug: "professional-me",
    title: "Professional.Me",
    category: "Web Dashboard Design, Creative Direction",
    coverImage: "https://framerusercontent.com/images/FQUgJNUGFkBiPq3W8EjaKKI5ac.png",
    innerImage: "https://framerusercontent.com/images/PLUzuWl1rEsGS6NOHMjDDN0Yq2w.png",
    overview: "A robust web dashboard interface created for professionals to track analytics and manage portfolios.",
    descriptions: [
      "The goal was to design a seamless, intuitive dashboard experience that supports job seekers through each stage of their career journey—from account creation to onboarding, job search, and profile management. Our focus was to simplify a complex flow into a guided, step-by-step experience that feels empowering and user-first.",
      "By mapping out key stages and creating a visually guided process, we helped users feel in control, informed, and supported throughout the platform.",
      "This project involved designing a multi-phase dashboard that covers the full candidate lifecycle. From initial sign-up to job discovery and profile building, each phase was crafted to reduce friction, boost engagement, and make navigation effortless.",
      "We designed five key modules: Phase 1: Account Creation, Phase 2: Onboarding, Phase 3: (Pending rollout), Phase 4: Job Search, Phase 5: Candidate Profile.",
      "Color-coded progress indicators and a consistent UI language helped users track their journey and understand what comes next. The result is a clean, scalable dashboard experience built for clarity and momentum, helping users take the next step in their career with confidence.",
      "The challenge was in managing complexity across multiple user states and scenarios. Each user might be at a different stage of their journey, and we needed to accommodate that variability without overwhelming them.",
      "To solve this, we implemented: A visual step-based system to reduce cognitive load, smart UI states based on progress and data completion, and modular design components for future scalability."
    ],
    projectType: "Web App Dashboard",
    role: "Creative Lead"
  }
];
