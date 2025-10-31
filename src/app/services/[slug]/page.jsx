// app/services/[slug]/page.js
"use client";

import ServiceDetailPage from "@/components/ServiceDetailPage";
import Footer from "@/components/Footer";

const servicesData = {
  "green-shield": {
    name: "Green Shield Service",
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Green_Sheild_ghgou6.png",
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
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Ratrid_fpsjvx.png",
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
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Termiproof_n7gexz.png",
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
    types: ["Termiproof (CS)", "Termiproof (DISP)", "Termiproof (CIP) (Continued Injected process)", "Termiproof SIP (Installation of smart injecting system)"],
  },

  "bug-free": {
    name: "BugFree Service",
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1761891012/Express_Pesticides_Website/Bugfree_Service_yt3rcu.png",
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
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Flyban_cqavfk.png",
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
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Mosquit_pzudp3.png",
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
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682117/Express_Pesticides_Website/Woodsafe_z4lp1y.png",
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
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Anti_Termite_vhso7e.png",
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
};

export default function Page({ params }) {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Service not found
      </div>
    );
  }

  return (
    <>
      <ServiceDetailPage {...service} slug={slug} />
      <Footer />
    </>
  );
}