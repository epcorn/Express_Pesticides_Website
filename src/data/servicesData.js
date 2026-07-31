import {
  FaHospital,
  FaBriefcase,
  FaHotel,
  FaWarehouse,
  FaSchool,
  FaIndustry,
  FaHome,
  FaShoppingBag,
  FaCapsules,
  FaBuilding,
} from "react-icons/fa";

export const workAreas = [
  { name: "Hospitals", icon: <FaHospital /> },
  { name: "Offices", icon: <FaBriefcase /> },
  { name: "Hotels & Restaurants", icon: <FaHotel /> },
  { name: "Warehouses", icon: <FaWarehouse /> },
  { name: "Schools & Colleges", icon: <FaSchool /> },
  { name: "Factories", icon: <FaIndustry /> },
  { name: "Residential Societies", icon: <FaHome /> },
  { name: "Shopping Malls", icon: <FaShoppingBag /> },
  { name: "Pharmaceutical Units", icon: <FaCapsules /> },
  { name: "Corporate Buildings", icon: <FaBuilding /> },
];

export const servicePestImages = {
  "green-shield": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890421/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/german_cockroach_jcuo0h.webp",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890422/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/ant_rfwaxe.webp",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890423/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/silverfish_fg7qbk.webp",
    ],
    gallery: [],
  },
  "rat-rid": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890434/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/pexels-denitsa-kireva-2915302-9783103_gq1c6s.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890431/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/Rat_damaged_01_oljzj7.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890429/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/Rat_damage_rahdbx.jpg",
    ],
    gallery: [
      "/assets/service_icons/Service_Gallery/Ratrid_2.jpg",
      "/assets/service_icons/Service_Gallery/Ratrid_1.png",
    ],
  },
  "anti-termite-treatment": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890369/Express_Pesticides_Website/SERVICES_IMAGES/Anti-termite/Termite_for_background_zbsitg.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890369/Express_Pesticides_Website/SERVICES_IMAGES/Anti-termite/Termite_image_yt4hwy.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890368/Express_Pesticides_Website/SERVICES_IMAGES/Anti-termite/Termite_damage_qekjam.jpg",
    ],
    gallery: [
      "/assets/service_icons/Service_Gallery/Anti-termite_1.jpg",
      "/assets/service_icons/Service_Gallery/Anti-termite_2.jpg",
    ],
  },
  mosquit: {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890428/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/MOSQUITO-FACTS_xmtcp4.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890425/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/Mosquito_sv7q5e.webp",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890426/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/Mosquito_biite_qlrrnq.jpg",
    ],
    gallery: [
      "/assets/service_icons/Service_Gallery/Mosquito_1.jpg",
      "/assets/service_icons/Service_Gallery/Mosquito_2.jpg",
    ],
  },
  flyban: {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890420/Express_Pesticides_Website/SERVICES_IMAGES/Flyban/fly-447307_1280_hjjzaz.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890419/Express_Pesticides_Website/SERVICES_IMAGES/Flyban/green-flies-on-food-garbage-260nw-440779216_utbqoz.png",
    ],
    gallery: [],
  },
  "termi-proof": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890439/Express_Pesticides_Website/SERVICES_IMAGES/Termiproof/shutterstock_1078415000_web-2_idemnv.webp",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890437/Express_Pesticides_Website/SERVICES_IMAGES/Termiproof/istockphoto-1300681997-612x612_pdeqf8.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890437/Express_Pesticides_Website/SERVICES_IMAGES/Termiproof/close-termites-on-woodhome-damaged-260nw-578777110_f5hvqy.webp",
    ],
    gallery: [
      "/assets/service_icons/Service_Gallery/Termiproof_1.webp",
      "/assets/service_icons/Service_Gallery/Termiproof_2.jpg",
    ],
  },
  "bug-free": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890410/Express_Pesticides_Website/SERVICES_IMAGES/Bugfree/bug_Background_rrdhcw.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890409/Express_Pesticides_Website/SERVICES_IMAGES/Bugfree/Bed-bug_IMage_bzodfr.webp",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890409/Express_Pesticides_Website/SERVICES_IMAGES/Bugfree/bedbugs_on_bed_cqaozy.webp",
    ],
    gallery: ["/assets/service_icons/Service_Gallery/Bedbug-Service_1.jpg"],
  },
  woodsafe: {
    hero: "/assets/service_icons/woodBoarer/Wood_borer.jpg", // will use fallback
    signs: [],
    gallery: [],
  },
  antron: {
    hero: "/assets/service_icons/Antron/Antron_Backside.jpg",
    signs: [
      "/assets/service_icons/Antron/sign_1.jpeg",
      "/assets/service_icons/Antron/Sign_2.jpg",
    ],
    gallery: [
      "/assets/service_icons/Service_Gallery/Woodsafe_1.jpg",
      "/assets/service_icons/Service_Gallery/Woodsafe_2.jpg",
    ],
  },
  rapron: {
    hero: "/public/assets/service_icons/Repron.png",
    signs: [],
    gallery: [],
  },
};

export const servicesIcons = [
  {
    name: "Green Shield Service",
    slug: "green-shield",
    logo: "/assets/service_icons/Greenshield.png",
  },
  {
    name: "Ratrid Service",
    slug: "rat-rid",
    logo: "/assets/service_icons/Ratrid.png",
  },
  {
    name: "Anti-Termite Treatment (Pre-Construction)",
    slug: "anti-termite-treatment",
    logo: "/assets/service_icons/Anti-termite.png",
  },
  {
    name: "Mosquit Service",
    slug: "mosquit",
    logo: "/assets/service_icons/Mosquit.png",
  },
  {
    name: "Flyban Service",
    slug: "flyban",
    logo: "/assets/service_icons/Flyban.png",
  },
  {
    name: "TermiProof Service",
    slug: "termi-proof",
    logo: "/assets/service_icons/Termiproof.png",
  },
  {
    name: "BugFree Service",
    slug: "bug-free",
    logo: "/assets/service_icons/Bugfree.png",
  },
  {
    name: "Woodsafe Service",
    slug: "woodsafe",
    logo: "/assets/service_icons/Woodsafe.png",
  },
  {
    name: "Antron Service",
    slug: "antron",
    logo: "/assets/service_icons/Antron.png",
  },
  {
    name: "Rapron Service",
    slug: "rapron",
    logo: "/assets/service_icons/Repron.png",
  },
];

export const faqData = {
  "green-shield": [
    {
      q: "What is the Green Shield Service?",
      a: "Green Shield Service is a certified Integrated Pest Management (IPM) program by Express Pesticides designed to control cockroaches, ants, and silverfish using gel baits with latest bait matrix combined with odorless spray applications for safe and effective results.",
    },
    {
      q: "How does the treatment work?",
      a: "Trained applicators apply gel baits at critical infestation points where pests hide, followed by odorless spray to eliminate ants and silverfish. This dual-action approach ensures long-term protection.",
    },
    {
      q: "Do you offer customized pest control plans for businesses?",
      a: "Absolutely. We conduct a detailed site audit and pest risk assessment, provide expert consultation on pest-proofing and sanitation, and implement tailored, sustainable IPM strategies for your facility.",
    },
    {
      q: "How often should I schedule the Green Shield Service?",
      a: "For best results, we recommend quarterly or bi-monthly treatments depending on your property type, infestation level, and hygiene standards required. Regular monitoring ensures continued protection.",
    },
  ],
  "rat-rid": [
    {
      q: "What types of rodents do you treat?",
      a: "We provide management plans for all types of common rodents such as rats, mice, and bandicoots that invade homes, offices, or commercial spaces. Our methods are effective for all typical infestations.",
    },
    {
      q: "How do you detect a rodent problem?",
      a: "Our trained technicians inspect your property for signs like fecal droppings, gnaw marks, nesting signs, or unusual sounds. We also identify ingress points and areas prone to infestation for suggestive proofing works.",
    },
    {
      q: "What rodent control methods do you use?",
      a: "We use a combination of eco-friendly baiting, trapping, and repelling sprays. Our methods are safe for humans and pets while ensuring long-term prevention.",
    },
    {
      q: "Is your treatment safe for children and pets?",
      a: "Yes. All the rodenticides and traps are placed strategically to avoid non-targeted exposure, and we use non-toxic alternatives wherever possible.",
    },
    {
      q: "How long does a treatment take?",
      a: "Initial inspection and setup usually take 1–2 hours. Near elimination may require follow-up visits over a period of 1–3 weeks depending on the severity of the pest infestation.",
    },
  ],
  "termi-proof": [
    {
      q: "How do I know if my home has termites?",
      a: "Look for signs like hollow wood, mud tubes on walls, or discarded wings near windows. If you notice any of these, it’s time for a professional Termiscan® inspection using Termitrack backed professionals.",
    },
    {
      q: "Is termite treatment safe for my family?",
      a: "Yes, our treatment uses approved, eco-safe chemicals applied by trained professionals — ensuring safety for your family and pets.",
    },
    {
      q: "How long does the treatment protect my home?",
      a: "A single treatment can protect your home for up to 3–5 years, depending on the structure and maintenance of your property.",
    },
    {
      q: "Can termites come back after treatment?",
      a: "Regular inspections and preventive maintenance keep your property termite-free. Our experts also provide after-treatment checks for complete reassurance of effective treatment.",
    },
  ],
  "bug-free": [
    {
      q: "I keep seeing bedbugs even after cleaning — will your treatment really help?",
      a: "Yes! Regular cleaning can’t always reach bug hiding spots. Our professional treatment targets cracks, corners, and hidden areas to completely eliminate bugs and stop the re-infestation.",
    },
    {
      q: "How soon will I see results?",
      a: "You’ll notice a big reduction in bug activity within 24–48 hours. Some bugs may appear briefly as they come in contact with the treatment — that’s a sign it’s working. May be a repeat application will need to be done.",
    },
    {
      q: "Do I need to prepare my home before treatment?",
      a: "We recommend light cleaning and covering food or utensils before the service. Our technician will guide you through all necessary steps to ensure the best results.",
    },
  ],
  flyban: [
    {
      q: "I keep getting flies even after cleaning — how will your treatment help?",
      a: "Flies often breed in hidden areas like drains, garbage bins, and moisture spots. Our professional treatment targets both adult flies and breeding sources, ensuring long-lasting control.",
    },
    {
      q: "Is your treatment safe for food areas and kitchens?",
      a: "Yes, completely! We use odourless, food-safe, and government-approved products that can be safely used in kitchens, restaurants, and food-handling zones once the area is dry.",
    },
    {
      q: "How long does it take to see results?",
      a: "You’ll notice fewer flies within a few hours of treatment. Full results are seen within 24–48 hours, depending on the severity of infestation and cleanliness of the area.",
    },
    {
      q: "Do I need to leave the area during treatment?",
      a: "It’s recommended to keep safe distance for a few minutes, about 30–60 minutes post the treatment or spray treatment. Once the area is aired out, cleaned up post treatment, you can safely return and enjoy a fly-free environment.",
    },
  ],
  mosquit: [
    {
      q: "How do you control mosquitoes?",
      a: "We use a combination of fogging, larvicidal treatment, and source reduction to eliminate mosquitoes at every life stage — from larvae to adults.",
    },
    {
      q: "Is the treatment safe for my family and pets?",
      a: "Yes. We use WHO-approved, safe-eco friendly chemicals that are safe when applied by our trained technicians. The treatment area is ventilated post-application.",
    },
    {
      q: "How long does the treatment last?",
      a: "One treatment provides protection for 2–3 weeks. We recommend monthly or bi-monthly services during peak mosquito season for continuous control.",
    },
    {
      q: "Do you treat outdoor areas?",
      a: "Yes. We treat gardens, terraces, drains, and stagnant water zones to prevent mosquito breeding and entry into your home.",
    },
  ],
  woodsafe: [
    {
      q: "What is Woodsafe treatment?",
      a: "Woodsafe is a preventive and curative treatment for wood-boring insects like powder post beetles and termites in wooden furniture and structures.",
    },
    {
      q: "How is it applied?",
      a: "We drill small holes and inject specialized wood preservatives deep into the wood, followed by surface spraying for complete protection.",
    },
    {
      q: "Is it safe for furniture?",
      a: "Yes. The chemicals are odorless, non-staining, and safe for indoor use. Your furniture remains usable after treatment.",
    },
  ],
  "anti-termite-treatment": [
    {
      q: "When should I get pre-construction anti-termite treatment?",
      a: "It is mandatory during the foundation stage before slab casting. This creates a chemical barrier in the soil that prevents termites from entering the building.",
    },
    {
      q: "How long does the treatment last?",
      a: "The soil treatment lasts up to 5–7 years. We provide a warranty and recommend periodic inspections.",
    },
    {
      q: "Is it safe for construction workers?",
      a: "Yes. We follow strict safety protocols, and the area is cleared before workers resume.",
    },
  ],
};

export const servicesData = {
  "green-shield": {
    name: "Green Shield Service",
    logo: "/assets/service_icons/Greenshield.png",
    subtitle: "Comprehensive. Customizable. Certified Pest Management Service.",
    description: `The Green Shield Service by Express Pesticides is a specialized Integrated Pest Management (IPM) program designed to effectively control cockroaches, ants, and silverfish using a combination of branded gel baits and odorless chemical spray applications.\n\nThis service is highly recommended as a preventive pest management solution for residential, commercial, food, industrial, retail, mall and public properties, ensuring a hygienic and pest-free environment.\n\nOur treatment process involves strategic application of gel baits at critical infestation and harborage points, followed by a targeted odorless spray treatment to other locations to eliminate ants and silverfish effectively.\n\nFor industrial, manufacturing, food processing, retail, and mall establishments, Express Pesticides offers a customized IPM program that includes:\nDetailed site audit and pest risk assessment\nConsultation on pest-proofing and sanitation practices\nImplementation of long-term, sustainable pest control strategies\n\nGreen Shield services are executed in compliance with compliance to food safety-hygiene expectations, adopting quality verified chemicals backed by and documentation, processes to ensure consistency, safety, and dependable results.`,
    signs: [
      "Black droppings or smear marks in moist, dark areas.",
      "Musty or oily odor in kitchens or storerooms.",
      "Egg capsules and shed skins in hidden corners.",
      "Daytime sightings indicate heavy infestation.",
      "Visible trails leading to food or water sources.",
      "Small dirt piles near cracks or walls.",
      "Frequent presence around sweet or greasy spills.",
      "Hollow sounds in wood may indicate nesting.",
      "Holes or yellow stains on paper, fabric, or wallpaper.",
      "Pepper-like droppings in cupboards or closets.",
      "Quick, silvery insects seen in dark, humid areas.",
    ],
    benefits: [
      "Comprehensive Protection: Targets multiple pests — cockroaches, ants, and silverfish — with a single, integrated approach.",
      "Odorless & Safe Treatment: Uses advanced, branded gel baits and odorless sprays safe for homes and workplaces.",
      "Customizable IPM Program: Tailored treatment plans for residential, commercial, industrial, and retail environments.",
      "Sustainable & Long-Term Control: Prevents future infestations through pest-proofing, sanitation, and continuous monitoring.",
      "Certified & Compliant: Service application is conducted using approved chemicals, compliant with food safety and hygiene standards.",
      "Documented & Traceable: Every service is recorded and quality-checked to ensure consistency and accountability.",
      "Expert Execution: Performed by trained technicians following detailed site audits and pest risk assessments.",
    ],
    types: ["Green Shield Service (CA)"],
  },
  "rat-rid": {
    name: "Ratrid Service",
    logo: "/assets/service_icons/Ratrid.png",
    subtitle: "Smart. Strategic. Sustainable Rodent Management.",
    description: `The Ratrid Service by Express Pesticides is a comprehensive rodent management program designed to deliver effective, long-term control through an integrated approach. The process includes detailed site inspection, baiting, glue boarding, trapping, and recommendations for structural proofing to eliminate rodent activity and prevent recurrence.\n\nThis service is highly recommended for industrial, manufacturing, food processing, residential, retail, data center, mall and commercial properties seeking proactive and preventive rodent control solutions.\n\nExpress Pesticides’s specially trained rodent management team conducts systematic inspections to identify entry points, nesting zones, and foraging pathways. Based on the assessment done by the experts, new age baits, smart traps, and glue boards are strategically placed for maximum effectiveness. The implementation of proofing recommendations ensures to secure the premises against future infestations.\n\nAll Ratrid services adhere to food safety and hygiene standards, using approved, high-quality rodenticides and documented processes to ensure consistent, safe, and compliant pest management practices.`,
    signs: [
      "Gnaw marks on wires, packaging, or furniture.",
      "Droppings found near food storage, walls, or corners.",
      "Scratching noises from ceilings, walls, or attics at night.",
      "Burrows or nesting materials (paper, fabric, or insulation) in hidden areas.",
      "Greasy rub marks along walls or frequent rodent sightings.",
      "Unpleasant, musky odor in enclosed spaces.",
    ],
    benefits: [
      "Comprehensive Control: Targets all stages of rodent activity — entry, nesting, and feeding.",
      "Smart & Strategic Approach: Combines baiting, trapping, glue boarding, and proofing for lasting results.",
      "Sustainable & Preventive: Focuses on long-term prevention, not just temporary elimination.",
      "Expert Assessment: Detailed site inspection and rodent risk analysis by trained professionals.",
      "Safe & Compliant: Uses high-quality, expert approved rodenticides meeting food safety and hygiene standards.",
      "Customizable Solutions: Tailored programs for residential, industrial, retail, and food facilities.",
      "Documented & Traceable: Every service is recorded for safety compliance and performance tracking.",
    ],
    types: [],
  },
  "termi-proof": {
    name: "TermiProof Service",
    logo: "/assets/service_icons/Termiproof.png",
    subtitle: "Advanced Termite Protection. Long-Lasting Assurance.",
    description: `Termites are silent destroyers, causing billions in structural damage every year. Express Pesticides’s TermiProof Service offers a proven, science-based solution to safeguard properties from termite infestation and damage.\n\nDesigned specifically for existing structures (post-construction), this treatment involves a precision drilling and injection process. Small holes are drilled along the wall–floor junctions at equal intervals and injected with branded termiticides to create a protective chemical barrier beneath the surface. Once treated, the holes are neatly sealed, leaving your interiors clean and intact.\n\nIn areas showing visible termite activity (such as mud tubes), our experts perform direct chemical injection to ensure immediate and effective control.\n\nExpress Pesticides uses premium-graded-verified termiticides known for superior soil binding and long-lasting efficacy, ensuring extended protection for your property.\n\nOur Edge\nWire Detection Technology: We use advanced wire-detecting machines prior to drilling to prevent cable damage and short circuits.\nTrained Technicians: Certified professionals ensure safe, precise, and efficient treatment.\nAssured Protection: Our 5-Year Service Warranty Program provides an assurance of quality conscious service, backed by the protection seal.\n\nThis service is highly recommended for resorts, hotels, industrial, manufacturing, food processing, residential, retail, and mall properties requiring reliable and durable termite management solutions.\n\nExpress Pesticides offers TERMISCAN, a technologically backed service where scanning is done to affected areas providing precise location of termite presence to ensure 100%+ accuracy of treatment.`,
    signs: [
      "Mud tubes or earthen tunnels on walls, floors, or wooden surfaces.",
      "Hollow-sounding or blistered wood when tapped.",
      "Discarded wings near windows, doors, or light fixtures.",
      "Presence of tiny holes or frass (powder-like droppings) around furniture or skirting.",
      "Visible damage to door frames, cupboards, or wooden flooring.",
      "Swarmer's (flying termites) seen around lights, especially during humid weather.",
    ],
    benefits: [
      "Advanced Post-Construction Treatment: Designed specifically for existing buildings with proven, science-backed methods.",
      "Long-Lasting Protection: Creates a durable chemical barrier beneath floors and walls for years of termite resistance.",
      "Precision Drilling & Injection: Ensures complete coverage while keeping interiors clean and undisturbed.",
      "Immediate Action: Direct injection into active termite areas ensures fast, effective elimination.",
      "Premium Termiticides: Uses high-quality, branded chemicals with strong soil-binding and long-term efficacy.",
      "Wire Detection Safety: Prevents cable damage through advanced wire-detecting technology before drilling.",
      "Trained & Certified Team: Expert technicians ensure safe and precise treatment execution.",
      "TERMISCAN: Use of advanced technology, scanning for termites in walls and fixtures without breaking to ascertain the precise location of infestation.",
    ],
    types: [
      "Termiproof (CS)",
      "Termiproof (DISP)",
      "Termiproof (CIP) (Continued Injected process)",
      "Termiproof SIP (Installation of smart injecting system)",
    ],
  },
  "bug-free": {
    name: "BugFree Service",
    logo: "/assets/service_icons/Bugfree.png",
    subtitle: "Targeted. Safe. Effective Bed Bug Management.",
    description: `The BugFree Service by Express Pesticides is a professional bed bug management program designed to deliver complete eradication through a scientifically proven chemical spray process.\n\nOur trained technicians conduct a thorough inspection to identify bed bug harborages in critical areas such as bed seams, mattress folds, wall cracks, crevices, and adjoining furniture or fixtures. This precision-based inspection ensures accurate treatment application and maximum effectiveness in eliminating infestations.\n\nOur Edge:\nOdorless Treatment: We biggest advantage is use of odorless, safe chemical formulations, ideal for clients with allergies or respiratory sensitivities, ensuring minimal disruption to daily routines.\nTrained Experts: Each service is delivered by our trained professionals with specialized expertise in bed bug detection and its management.\nCustomized Approach: Every service plan is tailored to the client’s property type and infestation level for optimal results.\n\nThe BugFree Service is recommended for residential, hospitality, healthcare, and commercial properties seeking fast, safe, and long-lasting bed bug control solutions.`,
    signs: [
      "Small reddish-brown stains or blood spots on bed sheets, mattresses, or pillow covers.",
      "Tiny black droppings or shed skins near mattress seams, headboards, or furniture joints.",
      "Clusters of small white eggs in cracks, crevices, or under cushions.",
      "Itchy red bite marks on arms, neck, or back, often in a line or cluster.",
      "Musty, sweet odor around heavily infested areas.",
      "Visible live bugs hiding in seams, folds, or behind wall hangings and switches.",
    ],
    benefits: [
      "Targeted Eradication: Precision chemical spray process ensures complete bed bug elimination.",
      "Safe & Odorless Treatment: Uses non-irritant, allergy-safe formulations suitable for sensitive environments.",
      "Expert Inspection: Trained professionals detect even hidden infestations in critical harborages.",
      "Customized Solutions: Treatment tailored to property type and infestation severity for best results.",
      "Fast & Effective: Rapid control with minimal disruption to daily life or business operations.",
      "Lasting Results: Prevents re-infestation through comprehensive follow-up and monitoring.",
      "Trusted Expertise: Delivered by trained pest management team with proven experience.",
    ],
    types: [],
  },
  flyban: {
    name: "Flyban Service",
    logo: "/assets/service_icons/Flyban.png",
    subtitle: "Professional Fly Management Solution",
    description: `Flyban service is a professional fly management solution offered by Express Pesticides, designed through an integrated approach combining chemical spray, baiting treatments with expert recommendations on sanitation practices — effectively minimizing fly infestations and preventing re-infestation.\n\nThis service is recommended for food, retails, manufacturing facilities, food processing units, customer experience centers and malls, where hygiene and safety standards are crucial.\n\nFlyban is implemented by our specially trained team members, who apply approved branded chemicals and food-grade baits to ensure efficient fly control while maintaining strict adherence to food safety norms and documented procedures. We also provide guidance on structural proofing and sanitation measures to help prevent recurrence, as exclusion is a best way to deal with fly infestation.\n\nOur Edge:\n* Our trained professionals identify key breeding and entry points, enabling effective long-term fly management and reduced re-infestation.\n* We use BIOKLEN(TM) a product made form plant extracts to keep locations free from flies. The repellancy is more than 90% and is 100% pesticides free.`,
    signs: [
      "Frequent sighting of adult flies around food preparation or waste disposal areas.",
      "Presence of maggots or larvae in decaying organic matter, drains, or garbage bins.",
      "Clusters of small dark spots (fly droppings) on walls, ceilings, or light fixtures.",
      "Unpleasant odor caused by breeding and decomposing waste materials.",
      "Increased fly activity near open doors, windows, or improperly sealed food containers.",
      "Buzzing sounds and visible fly movement around lights or food-handling zones.",
    ],
    benefits: [
      "Comprehensive Control: Targets both adult flies and breeding sites for total eradication.",
      "Food-Safe Treatments: Utilizes approved branded chemicals and food-grade baits that meet safety and hygiene standards.",
      "BIOKLEN(TM): Use of 100% pesticides free sprays for 90% repellancy.",
      "Integrated Approach: Combines chemical treatment, structural proofing, and sanitation practices for lasting fly management.",
      "Expert Implementation: Conducted by Express Pesticides’s trained professionals with strict adherence to documentation and safety protocols.",
      "Hygiene Assurance: Helps maintain pest-free, hygienic environments critical for food industries, retail spaces, and commercial areas.",
      "Reduced Re-Infestation: Proactive identification of breeding and entry points ensures long-term control and minimal recurrence.",
      "Compliance Support: Ensures conformance with food safety regulations and audit requirements through systematic reporting and preventive measures.",
    ],
    types: [],
  },
  mosquit: {
    name: "Mosquit Service",
    logo: "/assets/service_icons/Mosquit.png",
    subtitle: "Professional Mosquito Management Program",
    description: `Mosquit Service is a professional mosquito management program offered by Express Pesticides, designed through an integrated approach combining larviciding, chemical spray treatments, thermal and cold fogging, along with sanitation and proofing recommendations to ensure effective control and long-term prevention of mosquito infestations.\n\nMosquito infestations can arise from multiple factors such as open entry points, nearby breeding reservoirs, and stagnant water in or around premises. Understanding these root causes, Express Pesticides has developed its comprehensive Mosquit Service, tailored to address every stage of mosquito development and habitat.\n\nThis service is recommended for homes, societies, office complexes, manufacturing units, food processing facilities, large gated communities, retail spaces, and malls, ensuring safety, comfort, and hygiene across environments.\n\nLarviciding\nThe larviciding process involves applying approved larvicidal chemicals to stagnant water bodies, storm drains, and other breeding sites. This treatment effectively destroys egg rafts and larvae, breaking the mosquito life cycle at its source.\n\nResidual Spraying\nThis treatment targets adult flying mosquitoes by using chemically infused vaporizing formulations that disperse as fine mist or smoke. The vapor cloud penetrates resting areas and open spaces, eliminating airborne mosquitoes and providing lasting residual protection.\n\nThermal Fogging\nThermal fogging employs heated vapor-based formulations to create dense smoke clouds that spread through the air, rapidly knocking down adult mosquitoes hiding in cracks, vegetation, or shaded areas. It is ideal for large outdoor or semi-open environments.\n\nCold Fogging\nCold fogging is a eco-friendly alternative using aqueous-based mosquito control solutions dispersed as an ultra-low volume mist, forming an invisible chemical cloud that targets flying and resting mosquitoes. This method is non-polluting, and non-hazardous, making it safer for sensitive environments compared to thermal fogging.\n\nOur Edge:\nCold fogging technology provides a superior, environmentally responsible alternative to conventional methods. Combined with our trained experts, targeted application techniques, and focus on sanitation, it ensures maximum mosquito control with minimal environmental impact.`,
    signs: [
      "Frequent mosquito bites, especially during early morning or evening hours.",
      "Constant buzzing sound near ears, damp areas, or stagnant water.",
      "Visible larvae or pupae wriggling in stagnant water (flower pots, drains, containers).",
      "Clusters of adult mosquitoes resting on walls, curtains, or shaded corners.",
      "Increased mosquito presence near water sources, gardens, or open drains.",
      "Itchy, red marks or skin irritation among residents or employees.",
    ],
    benefits: [
      "Comprehensive Control: Targets all mosquito life stages — from eggs and larvae to adult mosquitoes — ensuring complete eradication.",
      "Multi-Method Approach: Combines larviciding, residual spraying, thermal, and cold fogging for maximum coverage and long-lasting protection.",
      "Eco-Friendly Solutions: Uses advanced cold fogging and water-based formulations that are safe, non-polluting, and environment-friendly.",
      "Expert Implementation: Performed by our trained technicians and subject matter experts, using precise and safe application techniques.",
      "Health & Hygiene Protection: Reduces the risk of mosquito-borne diseases like Dengue, Malaria, and Chikungunya.",
      "Customized Programs: Tailored treatment schedules and frequency to suit residential, commercial, or industrial environments.",
      "Long-Term Prevention: Includes sanitation audits, proofing & trapping recommendations to eliminate breeding sources and prevent recurrence.",
    ],
    types: [
      "Thermal Fogging",
      "Cold Fogging",
      "Chemical Spray",
      "Larviciding Spray",
      "Residual Spray",
      "Microning Process",
      "W.P spray",
      "Anti Larva spray",
    ],
  },
  woodsafe: {
    name: "Woodsafe Service",
    logo: "/assets/service_icons/Woodsafe.png",
    subtitle: "Professional Wood Borer Management Program",
    description: `Woodsafe Service is a professional wood borer management program offered by Express Pesticides, designed through an integrated approach that combines direct chemical injection and sealing techniques to ensure effective elimination of wood-boring insects and long-term protection of wooden structures.\n\nAt Express Pesticides, Woodsafe is executed by our specially trained technicians, who identify active borer holes and precisely inject specialized chemicals into them, followed by sealing to prevent re-infestation and preserve the integrity of the treated wood.\n\nOur Edge:\nOur targeted direct-injection method offers higher efficacy and durability compared to conventional surface treatments, significantly reducing the chances of re-infestation and ensuring lasting protection for your valuable wooden assets.`,
    signs: [
      "Tiny round or oval holes on the surface of wooden furniture, doors, or beams (exit holes).",
      "Fine powdery dust (frass) accumulating beneath or around wooden items.",
      "Weak, hollow-sounding, or crumbling wood when tapped or pressed.",
      "Presence of adult beetles emerging from wooden surfaces.",
      "Faint clicking or tapping sounds from inside infested wood (caused by larvae feeding).",
      "Discoloration, blistering, or peeling of wooden coatings indicating internal damage.",
      "Visible tunnels or galleries inside cross-sections of damaged wood.",
    ],
    benefits: [
      "Targeted Elimination: Direct chemical injection ensures complete extermination of active wood-boring insects at the source.",
      "Long-Term Protection: The sealing process prevents re-entry and future infestations, extending the life of wooden assets.",
      "High Efficacy: Our direct-injection method delivers deeper penetration and superior results compared to surface spraying.",
      "Expert Execution: Carried out by our trained professionals with precise identification and treatment of infested areas.",
      "Preserves Aesthetics & Strength: Protects the natural look and structural integrity of furniture, doors, and fixtures.",
      "Eco-Responsible Approach: Uses approved, effective chemicals in controlled quantities to ensure safety for occupants and surroundings.",
      "Cost-Effective Solution: Prevents expensive replacements or repairs through timely, professional protection and maintenance.",
    ],
    types: [],
  },
  "anti-termite-treatment": {
    name: "Anti-Termite Treatment (Pre-Construction)",
    logo: "/assets/service_icons/Anti-termite.png",
    subtitle: "Professional Anti-Termite Pre-Construction Treatment",
    description: `Express Pesticides provides professional anti-termite treatment during the pre-construction phase of structures, including RCC frameworks, basements, and masonry work. Using advanced sprayers and sprinklers, our trained technicians ensure uniform and thorough application of chemical emulsions, effectively protecting the structure from termite infestations. This treatment comes with a 10-year service warranty, offering long-term assurance of structural safety and durability.`,
    signs: [
      "Uneven or bubbling paint/wallpaper caused by moisture accumulation from termite activity.",
      "Damaged insulation in walls or ceilings that appears gnawed or shredded.",
      "Soft or hollow spots in flooring, skirting boards, or furniture when pressed.",
      "Tiny holes in wood or plaster not caused by nails or screws, often leading to sawdust-like residue.",
      "Unexplained structural sagging in ceilings, staircases, or partitions.",
      "Moist, musty odor near infested areas due to termite secretions.",
      "Insect activity around electrical wires as termites sometimes chew through cables.",
    ],
    benefits: [
      "Early Protection: Applied during the pre-construction phase to prevent termite infestations before they start.",
      "Comprehensive Coverage: Uniform application using sprayers and sprinklers ensures every part of the structure is protected.",
      "Long-Term Assurance: Comes with a 10-year service warranty for peace of mind and structural safety.",
      "Expert Application: Carried out by trained technicians using approved chemical emulsions for maximum efficacy.",
      "Structural Preservation: Safeguards RCC, masonry, and wooden components from termite damage, maintaining durability and value.",
      "Cost-Effective Solution: Prevents expensive repairs or replacements caused by termite infestations.",
    ],
    types: [
      "Anti-Termite Pre-Construction RCC Treatment",
      "Anti-Termite Pre-Construction Masonry Treatment",
    ],
  },
  antron: {
    name: "Antron Service",
    logo: "/assets/service_icons/Antron.png",
    subtitle: "Professional Antron Service Treatment",
    description: `Antron Service is a professional ant management program offered by Express Pesticides, designed through an Integrated Pest Management (IPM) approach that combines detailed inspection, targeted baiting, residual treatment, nest elimination, and preventive measures to provide complete control of ant infestations. <br/>
    At Express Pesticides, Antron Service is carried out by our specially trained technicians, who identify ant species, locate nesting sites and foraging trails, eliminate active colonies using scientifically proven treatment methods, and implement preventive solutions to minimize future infestations.
`,
    signs: [
      "Continuous trails of ants moving along walls, floors, windows, or kitchen counters.",
      "Presence of ants around food storage areas, sinks, dustbins, or moisture sources.",
      "Small piles of soil, sand, or wood particles near cracks, pavements, or wall joints indicating nest entrances.",
      "Winged ants (swarmer’s) appearing indoors, especially during warm or humid weather.",
      "Ant nests found in gardens, under paving blocks, wall voids, electrical conduits, or wooden structures.",
      "Food contamination caused by ants invading packaged or exposed food products. ",
      "Frequent sightings of ants despite regular cleaning and housekeeping. ",
    ],
    benefits: [
      "Complete Colony Elimination: Targets the entire ant colony, including the queen, ensuring long-lasting control rather than temporary relief.",
      "Long-Term Protection: Combines treatment with preventive measures to reduce future infestations and recurring ant activity.",
      "Long-Term Assurance: Comes with a 10-year service warranty for peace of mind and structural safety.",
      "Targeted Treatment: Scientifically selected baits and residual applications provide effective control while minimizing unnecessary pesticide use.",
      "Expert Inspection & Execution: Performed by trained pest management professionals who accurately identify ant species, nesting locations, and treatment requirements.",
      "Improves Hygiene & Food Safety: Protects homes, restaurants, offices, warehouses, and food-handling areas from contamination caused by ants.",
      "Eco-Responsible Approach: Uses approved products in controlled quantities following Integrated Pest Management (IPM) principles for safety of occupants and the environment.",
      "Cost-Effective Solution: Early detection and professional treatment prevent recurring infestations, reducing maintenance costs and avoiding repeated treatments.",
    ],
    types: [],
  },
  rapron: {
    name: "Rapron Service",
    logo: "/assets/service_icons/Repron.png",
    subtitle: "Professional Rapron Service Treatment",
    description: `Repron Service is a professional snake repellent and reptile management program offered by Express Pesticides, designed through an Integrated Pest Management (IPM) approach that combines habitat assessment, reptile repellent application, exclusion techniques, and preventive recommendations to reduce the risk of snake entry into residential, commercial, industrial, and institutional premises.
    At Express Pesticides, Repron Service is carried out by our specially trained technicians, who inspect the property for potential snake harbourage areas, identify entry points and environmental risk factors, apply scientifically formulated snake repellent products, and recommend preventive measures to create a safer environment.
`,
    signs: [
      "Snake sightings around buildings, gardens, warehouses, or open areas.",
      "Shed snake skins found near walls, vegetation, storage areas, or drainage channels.",
      "Snake tracks or slithering marks visible on dusty floors or loose soil. ",
      "Presence of rodent activity, which attracts snakes searching for food. ",
      "Dense vegetation, overgrown grass, or clutter providing ideal hiding places.",
      "Burrows, rock piles, wood stacks, or debris where snakes may shelter. ",
      "	Increased reptile activity during warm or rainy seasons. ",
    ],
    benefits: [
      "Effective Snake Repellent Protection: Scientifically formulated repellents help discourage snakes from entering and staying around the treated premises.",
      "Long-Term Preventive Solution: Regular applications and preventive recommendations reduce the likelihood of future snake encounters.",
      "Comprehensive Risk Assessment: Our technicians identify snake-prone areas, potential entry points, and environmental conditions that encourage reptile activity.",
      "Expert Application: Performed by trained professionals using proven application techniques for maximum effectiveness and safety.",
      "Improves Workplace & Residential Safety: Reduces the risk of accidental snake encounters, protecting occupants, employees, visitors, and pets.",
      "Eco-Responsible Approach: Uses approved repellent formulations applied responsibly while minimizing environmental impact and ensuring occupant safety.",
      "Cost-Effective Protection: Prevents costly disruptions, safety incidents, and emergency snake management by implementing proactive, professional reptile prevention measures.",
    ],
    types: [],
  },
};
