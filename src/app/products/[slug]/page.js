"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FaCheckCircle, FaTools, FaMapPin, FaListAlt } from "react-icons/fa";

// --- Reusable Assets ---
const dummyTechSpecs = [
  { spec: "Formulation", value: "Data Not Available" },
  { spec: "Target Pests", value: "Data Not Available" },
  { spec: "Application", value: "Data Not Available" },
];
// --- End of Assets ---


// --- Product Data ---
// The 'whereToUse' property is now an array of objects with names and images.
const productData = {
  // 1. Soto Rodent Repellent
  "soto-rodent-repellent": {
    name: "Soto Rodent Repellent",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738048/Express_Pesticides_Website/Rodent_Repellent_Product_e16igr.png",
    intro: "Rodent problems are not just a nuisance... SOTO Rodent Repellent provides an innovative, herbal-based solution...",
    whyChoose: [
      "Non-toxic, eco-friendly, and safe for humans & pets",
      "Prevents wire, cable, and machinery damage",
      "Ideal for homes, offices, vehicles & warehouses",
      "Long-lasting, ready-to-use spray",
      "Scientifically formulated & proven effective",
    ],
    howItWorks: "Rodents rely heavily on their sense of smell... SOTO’s special blend of essential oils... overwhelms their olfactory senses...",
    techSpecs: dummyTechSpecs,
    whereToUse: [
      { name: "Kitchens", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739400/Express_Pesticides_Website/SOTO_RODENT_REPELLER_IMAGES/Kitchen_fybca6.avif" },
      { name: "Hotels", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739400/Express_Pesticides_Website/SOTO_RODENT_REPELLER_IMAGES/Hotels_ejirle.jpg" },
      { name: "Warehouses", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739402/Express_Pesticides_Website/SOTO_RODENT_REPELLER_IMAGES/Warehouse_k6ewrw.jpg" },
      { name: "Cable Rooms", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739400/Express_Pesticides_Website/SOTO_RODENT_REPELLER_IMAGES/Cable_Room_a0utwp.jpg" },
      { name: "Schools", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739401/Express_Pesticides_Website/SOTO_RODENT_REPELLER_IMAGES/School_agxgdh.jpg" },
    ],
    directionsForUse: [
      "Shake the bottle well before spraying.",
      "Clean the area of droppings, grease, or food remains.",
      "Spray Rodent Repellent evenly on surfaces, corners, wires, and entry points.",
      "Allow to dry naturally.",
      "Reapply every 15–20 days or sooner in high-infestation areas.",
      "Tip: For car engines and cable protection, spray lightly on visible wires and corners where rats may enter.",
    ],
    keyAdvantages: [
      "Prevents wire chewing and insulation damage",
      "Repels rodents without killing them",
      "Non-poisonous, safe for all environments",
      "Mild herbal fragrance",
      "Effective both indoors and outdoors",
      "Reduces risk of disease and contamination",
    ],
    consumerAssurance: "Made with safe, high-quality ingredients. Tested for consistent and lasting performance. Non-toxic, pet-friendly, and environmentally safe. Scientifically developed for maximum rodent repellency. Trusted by households and industries nationwide.",
  },

  // 2. Soto Reptout
  "soto-reptout": {
    name: "Soto REPTOUT Repellent",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738470/Express_Pesticides_Website/Repout_Repellent_Product_gl6yjg.png",
    intro: "Snakes often enter residential and industrial areas... SOTO REPTOUT Snake Repellent offers a natural, safe, and highly effective solution...",
    whyChoose: [
      "Effectively repels snakes with strong natural ingredients",
      "Non-toxic, eco-friendly, and safe for humans & pets",
      "Ideal for gardens, farms, warehouses, and outdoor areas",
      "Long-lasting protection with each application",
      "Weather-resistant and easy to apply",
    ],
    howItWorks: "Snakes use their Jacobson’s organ to detect scents... The strong aroma from Reptout... overwhelms their sensory system...",
    techSpecs: dummyTechSpecs,
    whereToUse: [
      { name: "Gardens", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739630/Express_Pesticides_Website/SOTO_REPTOUT_IMAGES/Garden_obyrje.jpg" },
      { name: "Farmhouses", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739629/Express_Pesticides_Website/SOTO_REPTOUT_IMAGES/Farmhouse_s3bnhs.jpg" },
      { name: "Warehouses", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739631/Express_Pesticides_Website/SOTO_REPTOUT_IMAGES/warehouse_x4d6wl.png" },
      { name: "Building Areas", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739627/Express_Pesticides_Website/SOTO_REPTOUT_IMAGES/Building_Areas_v53ea1.jpg" },
      { name: "Construction Sites", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739629/Express_Pesticides_Website/SOTO_REPTOUT_IMAGES/Construction_Sites_popdtj.png" },
    ],
    directionsForUse: [
      "Shake the bottle well before use.",
      "Spray Reptout around the perimeter of your area...",
      "Reapply every 15–20 days or immediately after heavy rain.",
      "For large areas, use in combination with regular inspection and habitat cleaning.",
      "Tip: Apply along boundary walls, near gardens, and under parked vehicles for best results.",
    ],
    keyAdvantages: [
      "Prevents snakes from entering your property",
      "Non-toxic, chemical-free, and biodegradable",
      "Mild herbal aroma",
      "Safe for pets, plants, and the environment",
      "Easy spray application",
      "Provides peace of mind for outdoor areas",
    ],
    consumerAssurance: "Made with safe, high-quality herbal formulation. Tested for performance and reliability. Eco-safe, non-poisonous, and pet-friendly. Trusted for use in residential, commercial, and agricultural spaces. Ensures safety, satisfaction, and lasting protection.",
  },

  // 3. Soto Bird Repellent
  "soto-bird-repellent": {
    name: "Soto Bird Repellent",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738141/Express_Pesticides_Website/Bird_Repellent_Product_bkoe7f.png",
    intro: "Birds often become a nuisance when they roost or nest on buildings... SOTO Bird Repellent provides a safe, herbal, and non-toxic solution...",
    whyChoose: [
      "Effectively keeps birds away from unwanted areas",
      "Non-toxic, eco-friendly, and safe for humans & animals",
      "Ideal for buildings, balconies, warehouses, and signage",
      "Weather-resistant formula for long-lasting protection",
      "Easy to apply and leaves no permanent stains",
    ],
    howItWorks: "SOTO Bird Repellent uses a blend of strong-scented natural ingredients... it creates a non-stick, invisible coating that deters birds...",
    techSpecs: dummyTechSpecs,
    whereToUse: [
      { name: "Balconies", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739752/Express_Pesticides_Website/SOTO_BIRD_REPELLANT/Balconies_yzpqqy.jpg" },
      { name: "Building Roofs", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739754/Express_Pesticides_Website/SOTO_BIRD_REPELLANT/Building_Roof_w3uhqs.jpg" },
      { name: "Factory Sheds", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739755/Express_Pesticides_Website/SOTO_BIRD_REPELLANT/Factory_sheds_ssgm3j.jpg" },
      { name: "Farms", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739757/Express_Pesticides_Website/SOTO_BIRD_REPELLANT/Farms_lands_j3gcnv.jpg" },
      { name: "Loading Dock", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739758/Express_Pesticides_Website/SOTO_BIRD_REPELLANT/Loading_Docks_magl1f.webp" },
    ],
    directionsForUse: [
      "Shake the bottle well before use.",
      "Clean the area to remove droppings or nesting material.",
      "Spray evenly on ledges, beams, signboards, or other resting spots.",
      "Reapply every 15–20 days or after heavy rain.",
      "For larger surfaces, repeat application for complete coverage.",
      "Tip: For best results, apply early in the morning or late evening when birds are least active.",
    ],
    keyAdvantages: [
      "Herbal & Non-Toxic Formula",
      "Humane, Eco-Friendly & Safe",
      "Prevents Nesting & Perching",
      "Reduces Droppings and Maintenance",
      "No Need for Nets or Spikes",
      "Long-Lasting Protection",
    ],
    consumerAssurance: "Made from safe, high-quality, and non-toxic ingredients. Tested for lasting outdoor performance. Environmentally friendly and pet-safe. Suitable for residential, commercial, and industrial spaces. Ensures satisfaction, hygiene, and reliable protection.",
  },

  // 4. TERMIDA (mapped from "tremida" slug)
  "tremida": {
    name: "TERMIDA",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738316/Express_Pesticides_Website/Termida_Product_viy4i8.png",
    intro: "Powerful Protection — Defending Your Space from Termite Damage... TERMIDA Termite Spray offers instant and long-lasting protection...",
    whyChoose: [
      "Instant Kill Action: Eliminates visible and hidden termites quickly.",
      "Deep Penetration: Reaches inside wood and soil gaps where termites hide.",
      "Long-Lasting Protection: Forms a barrier that prevents re-entry for up to 3 months.",
      "Ready-to-Use Formula: No dilution or mixing required.",
      "Non-Staining & Low Odor: Safe for indoor use on furniture and walls.",
      "Professional Strength: Trusted by pest control experts and homeowners alike.",
    ],
    howItWorks: "TERMIDA contains a highly effective anti-termite active... that kills termites on contact and ingestion...",
    techSpecs: dummyTechSpecs,
    whereToUse: [
      { name: "Wooden Furniture", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740086/Express_Pesticides_Website/TERMIDA_IMAGES/Wooden_furniture_bmfwri.webp" },
      { name: "Door Frames", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740081/Express_Pesticides_Website/TERMIDA_IMAGES/Door_frames_tca9hq.jpg" },
      { name: "Wall Edges", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740084/Express_Pesticides_Website/TERMIDA_IMAGES/wall_edges_tblrou.jpg" },
      { name: "Storage Units", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740083/Express_Pesticides_Website/TERMIDA_IMAGES/storage_unit_eyd9jr.jpg" },
      { name: "Construction Sites", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740081/Express_Pesticides_Website/TERMIDA_IMAGES/construction_site_hlamne.webp" },
    ],
    directionsForUse: [
      "Shake well before use.",
      "Spray directly on termite trails, holes, or infested areas.",
      "Allow to penetrate — do not wipe immediately.",
      "For wooden furniture, apply evenly on joints, undersides, and corners.",
      "Repeat every 2–3 months or as needed for preventive care.",
      "Tip: For best results, treat new wooden furniture or construction sites before infestation begins.",
    ],
    keyAdvantages: [
      "Eliminates termites instantly and prevents recurrence",
      "Long-lasting barrier protection",
      "Safe for indoor & outdoor applications",
      "Low odor and non-staining",
      "Easy-to-use spray bottle",
      "Protects wood, walls, and structures",
    ],
    consumerAssurance: "Certified effective against all common termite species. Professional-grade formula for homeowner use. Guaranteed protection for your valuable assets.",
  },

  // 5. Snapper
  "snapper": {
    name: "SNAPPER – Electric Fly Catcher",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738225/Express_Pesticides_Website/Snapper_Product_suka9f.png",
    intro: "Energy Efficient | Effective | Advanced Insect Trapping. SNAPPER® is a highly effective electric fly-catching solution...",
    whyChoose: [
      "Energy-efficient build ensures low power consumption...",
      "Operates without chemicals, making it safe for use in homes, kitchens...",
      "Silent performance works quietly in the background...",
      "Modern and compact design...",
      "Engineered with high-efficiency insect trapping technology.",
      "Long-lasting UV tubes are designed for sustained performance...",
    ],
    howItWorks: "The SNAPPER Electric Fly Catcher uses UV-A light to attract flying insects... Once drawn toward the light, the insects get trapped on the glue board...",
    techSpecs: [
      { spec: "Model", value: "Snapper" },
      { spec: "Power Consumption", value: "20W" },
      { spec: "Input Voltage", value: "230V AC / 50 Hz" },
      { spec: "Lamp Type", value: "UV Lamp" },
      { spec: "Tube Wattage", value: "10W × 2 Tubes" },
      { spec: "Approx. Coverage Area", value: "300 sq. ft. – 500 sq. ft." },
      { spec: "Mounting Type", value: "Wall Mount" },
      { spec: "Size", value: "Standard Compact Form" },
      { spec: "Weight", value: "Light & Easy to Install" },
    ],
    whereToUse: [
      { name: "Kitchens", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739960/Express_Pesticides_Website/SNAPPER_IMAGES/Home_hztqmz.jpg" }, // Matched "Kitchens" to "Home"
      { name: "Hotels", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739964/Express_Pesticides_Website/SNAPPER_IMAGES/Hotel_room_flznmw.jpg" },
      { name: "Supermarkets", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739965/Express_Pesticides_Website/SNAPPER_IMAGES/Supermarket_ntsbax.jpg" },
      { name: "Factories", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739958/Express_Pesticides_Website/SNAPPER_IMAGES/Factory_qszifp.jpg" },
      { name: "Laboratories", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739963/Express_Pesticides_Website/SNAPPER_IMAGES/Lab_dlncgn.jpg" },
    ],
    directionsForUse: [
      "Mount or Place: Install the unit on a wall, ideally 1.5–2 meters above the ground...",
      "Power On: Plug into a standard electrical socket and switch on.",
      "Insert Glue Board: Place the sticky board inside the trap behind the UV lamp.",
      "Operate Continuously: Keep the unit running for best performance...",
      "Replace Regularly: Change the glue board every 15–30 days or when filled with insects.",
      "Maintain: Clean the exterior and check UV tubes every 6–12 months...",
    ],
    keyAdvantages: [
      "Cost & Energy Efficient: Low electricity usage ensures reduced operational cost.",
      "International Delivery: We supply globally to meet commercial and industrial needs.",
      "Research-Backed Product: Engineered using proven and tested trapping methods.",
      "Certified Quality: Manufactured under high-standard quality controls.",
    ],
    consumerAssurance: "We ensure: Easy Installation, After-Sales Support, Reliable Performance, and Clean Pest-Free Spaces.",
  },

  // 6. RODEIN (mapped from "rodent-smart-bait-station" slug)
  "rodent-smart-bait-station": {
    name: "RODEIN – Smart Bait Station",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738394/Express_Pesticides_Website/Rodent_Bait_station_Product_e4bkpu.png",
    intro: "Available in Alert & Wi-Fi Enabled model. Effective | Evolved Rodent Management. RODEIN is India’s only patented bait station...",
    whyChoose: [
      "Smart alert feature instantly notifies staff when bait activity or trapping occurs.",
      "Optional Wi-Fi connectivity enables centralized monitoring...",
      "Controlled bait containment prevents accidental access by humans, pets...",
      "Compact and sturdy build, suitable for indoor and outdoor use.",
      "Cost-efficient, reducing manpower dependency and preventing property damage.",
      "Environmentally responsible and research-backed solution.",
    ],
    howItWorks: "The Rodent Bait Station is a tamper-resistant device... Rodents are naturally drawn to the station’s dark, tunnel-like interior...",
    techSpecs: [
      { spec: "Product Name", value: "RODEIN Smart Bait Station" },
      { spec: "Model Variants", value: "Alert Model / Wi-Fi Model" },
      { spec: "Operating Mode", value: "Intelligent Rodent Monitoring" },
      { spec: "Material", value: "Heavy-Duty, Non-Corrosive Body" },
      { spec: "Placement", value: "Floor/Ground Level (Indoor or Outdoor)" },
      { spec: "Ideal Use", value: "Commercial, Industrial & Residential Spaces" },
    ],
    whereToUse: [
      { name: "Food Processing & Storage", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740276/Express_Pesticides_Website/RODENT_SMART_BAIT_SYSTEM_IMAGES/Food_processing_and_storage_facilities_rmmuvl.jpg" },
      { name: "Commercial Kitchens", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740272/Express_Pesticides_Website/RODENT_SMART_BAIT_SYSTEM_IMAGES/commercial_kitchen_t9vqpz.webp" },
      { name: "Logistics Units", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740281/Express_Pesticides_Website/RODENT_SMART_BAIT_SYSTEM_IMAGES/logistic_unit_smzmog.jpg" },
      { name: "Corporate Buildings", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740274/Express_Pesticides_Website/RODENT_SMART_BAIT_SYSTEM_IMAGES/Corporate_building_episjc.avif" },
      { name: "Livestock Storage Areas", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740278/Express_Pesticides_Website/RODENT_SMART_BAIT_SYSTEM_IMAGES/Livestock_storage_area_dgqwzk.jpg" },
    ],
    directionsForUse: [
      "Inspect Area: Identify rodent activity zones...",
      "Place Bait: Open the station and insert the recommended rodenticide bait block securely inside.",
      "Position Station: Close the lid and place the station flush against walls or along rodent pathways.",
      "Secure: Lock the lid to prevent accidental access by children or pets.",
      "Monitor Regularly: Check every 3–5 days; replace consumed or spoiled bait...",
      "Maintain Hygiene: Clean the exterior and reposition if no activity is observed.",
    ],
    keyAdvantages: [
      "Alert Notification System: Eliminates continuous manual checking.",
      "Wi-Fi Model (Optional): Enables remote monitoring from a centralized dashboard.",
      "Cost & Energy Efficient: Optimizes manpower usage and reduces maintenance cycles.",
      "Research-Driven: Developed using extensive rodent behavioral study.",
      "Improved Hygiene Control: Prevents contamination spread from rodent movement or droppings.",
    ],
    consumerAssurance: "We commit to delivering: Safe & Controlled Rodent Management, Easy Installation & Maintenance Support, High Durability & Reliable Performance, and Smart Monitoring for Faster Response.",
  },

  // 7. Cockroach Trap
  "cockroach-trap": {
    name: "Cockroach Trap",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738214/Express_Pesticides_Website/Cockroach_Trap_Product_n8esto.png",
    intro: "Safe | Ergonomically Designed | Patented | Effective Cockroach Trap. The Cockroach Trap is a non-toxic and highly effective solution...",
    whyChoose: [
      "Operates without any chemicals, additional lures, making it safe for use around food, children, and pets.",
      "Ready-to-use, compact, and can be placed discreetly in corners...",
      "UV Sustainable-adhesion glue layer ensures effective trapping, preventing escape.",
      "Patented design ensures there is no direct contact during handling and disposal.",
    ],
    howItWorks: "The Cockroach Trap is a simple yet effective, non-toxic device... Once lured inside, roaches get stuck on the strong adhesive glue surface...",
    techSpecs: [
      { spec: "Product Type", value: "Glue-Based Cockroach Trap" },
      { spec: "Material", value: "Cardboard with adhesive glue pad" },
      { spec: "Attractant", value: "Natural food-based lure" },
      { spec: "Usage Type", value: "Indoor Only" },
      { spec: "Shelf Life", value: "Long-lasting glue adhesion" },
      { spec: "Safety", value: "Chemical-free, odorless & non-toxic" },
    ],
    whereToUse: [
      { name: "Kitchen Cabinets", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739868/Express_Pesticides_Website/COCKROACH_TRAP_IMAGES/Kitchen_Cabinet_dz3tuc.jpg" },
      { name: "Under Sinks", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739869/Express_Pesticides_Website/COCKROACH_TRAP_IMAGES/Kitchen_sink_k6vsla.jpg" },
      { name: "Store Rooms", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739873/Express_Pesticides_Website/COCKROACH_TRAP_IMAGES/storage_room_cntbo6.jpg" },
      { name: "Office Pantry Areas", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739871/Express_Pesticides_Website/COCKROACH_TRAP_IMAGES/office_pantry_kiuxzo.png" },
      { name: "Restaurant Space", img: "https://res.cloudinary.com/epcorn/image/upload/v1761739871/Express_Pesticides_Website/COCKROACH_TRAP_IMAGES/restaurant-space_qbbtx3.jpg" },
    ],
    directionsForUse: [
      "Open the trap and unfold into its box shape.",
      "Place it in areas where cockroaches travel or hide.",
      "Replace the trap once filled with insects or after usage period.",
      "No monitoring effort — the trap works quietly and continuously.",
    ],
    keyAdvantages: [
      "Safe for Family & Pets",
      "No Sprays | No Smell | No Mess",
      "Works Continuously Once Placed",
      "Quick Setup — No Expertise Required",
      "Cost-Effective Compared to Traditional Pest Control",
    ],
    consumerAssurance: "Cockroach trap ensures: Reliable & Consistent Performance, Easy Disposal After Use, and Support and Guidance for Best Placement Techniques.",
  },

  // 8. Tuffbait
  "tuffbait": {
    name: "TUFF BAIT",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738355/Express_Pesticides_Website/Tuff_bait_product_ktycdf.png",
    intro: "TUFF BAIT is a ready-to-use, high-performance bait formulation... it facilitates rapid feeding behavior which has long-lasting and effective control...",
    whyChoose: [
      "Instant Attraction: SF9 the refined bait matrix facilitates which draws cockroaches to feed fast.",
      "Long-Lasting Control: Effective for up to 3–4 weeks after application.",
      "No Smell, No Mess: Odorless, non-staining gel safe for kitchens and food areas.",
      "Precision Application: Works in cracks, crevices, and hard-to-reach areas.",
      "Safe & Convenient: No need to vacate rooms or move food during treatment.",
      "Professional Quality: Used by pest control experts for residential and industrial hygiene.",
    ],
    howItWorks: "TUFF BAIT is formulated with a new refined matrix, attracting cockroaches to consume the gel... The secondary transfer effect ensures that even other cockroaches in the nest die...",
    techSpecs: dummyTechSpecs,
    whereToUse: [
      { name: "Kitchens", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740169/Express_Pesticides_Website/TUFFBAIT_IMAGES/Home_kitchen_rosovh.png" },
      { name: "Cafeterias", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740166/Express_Pesticides_Website/TUFFBAIT_IMAGES/cafeteria-kitchen_cljjd9.jpg" },
      { name: "Food Processing Units", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740167/Express_Pesticides_Website/TUFFBAIT_IMAGES/food-processing-unit_qftqah.jpg" },
      { name: "Hospitals", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740171/Express_Pesticides_Website/TUFFBAIT_IMAGES/Hospitals_rb9d0h.jpg" },
      { name: "Schools", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740173/Express_Pesticides_Website/TUFFBAIT_IMAGES/Schools_yhisi2.png" },
    ],
    directionsForUse: [
      "Remove the cap and attach the plunger or applicator nozzle.",
      "Apply small gel dots (~0.5 cm) in areas frequented by cockroaches.",
      "Avoid applying on hot or wet surfaces.",
      "Reapply every 3–4 weeks or when gel spots are consumed.",
      "Tip: A small amount goes a long way — do not overapply.",
    ],
    keyAdvantages: [
      "Ready-to-use — no mixing or spraying",
      "Kills both visible and hidden cockroaches",
      "Effective against German, American & Oriental cockroaches",
      "Non-repellent and odorless",
      "Minimal quantity, maximum impact",
      "Safe for indoor environments",
    ],
    consumerAssurance: "Ready-to-use — no mixing or spraying. Kills both visible and hidden cockroaches. Effective against German, American & Oriental cockroaches. Non-repellent and odorless. Minimal quantity, maximum impact. Safe for indoor environments.",
  },

  // 9. Rat Guard
  "rat-guard": {
    name: "RAT GUARD",
    image: "https://res.cloudinary.com/epcorn/image/upload/v1761738402/Express_Pesticides_Website/Rat_Guard_Product_z0xfc3.png",
    intro: "Specialized Service for a focused approach in Rodent Prevention. Rats are among the most intelligent and highly dynamic pests... RAT GUARD is a specialized physical barrier system...",
    whyChoose: [
      "Part of a preventive rodent management strategy for long-term protection.",
      "Helps avoid costly structural damage and business downtime...",
      "Supports audit-ready and rodent-free environments...",
      "Customized solutions designed for specific industrial and commercial requirements.",
      "Durable, rust-resistant, and reliable for years of performance...",
      "Expert technical support available for installation and service guidance.",
    ],
    howItWorks: "A Rat Guard is a metal conical barrier affixed around utility pipes, cables, and wires... Each Rat Guard is made from high-quality, pre-coated galvanized steel...",
    techSpecs: [
      { spec: "Product Type", value: "Physical Rodent Barrier" },
      { spec: "Material", value: "Pre-coated galvanized steel" },
      { spec: "Gauge", value: "Z8 gauge" },
      { spec: "Application", value: "Utility pipes, cables, wires" },
      { spec: "Sizes", value: "Available in custom sizes" },
    ],
    whereToUse: [
      { name: "Food & Beverage Units", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740375/Express_Pesticides_Website/RAT_GUARD_IMAGES/Food_Beverage_Manufacturing_Units_ovpyay.jpg" },
      { name: "Warehouses", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740382/Express_Pesticides_Website/RAT_GUARD_IMAGES/Warehouse_rqzpts.webp" },
      { name: "Pharmaceutical", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740380/Express_Pesticides_Website/RAT_GUARD_IMAGES/Pharmaceutical_Healthcare_Facilities_ve5qds.jpg" },
      { name: "Hotels & Malls", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740378/Express_Pesticides_Website/RAT_GUARD_IMAGES/Hotels_vsfhdi.jpg" },
      { name: "Commercial Buildings", img: "https://res.cloudinary.com/epcorn/image/upload/v1761740373/Express_Pesticides_Website/RAT_GUARD_IMAGES/Commercial_building_ghwujx.jpg" },
    ],
    directionsForUse: [
      "Inspect: Identify pipes, cables, or ducts used by rodents to enter.",
      "Select Size: Choose the correct guard size matching pipe diameter.",
      "Clean Surface: Wipe the area to remove dust or oil.",
      "Position Guard: Place the cone around the pipe — wide side facing down.",
      "Secure: Fix tightly using clamps or brackets with no gaps.",
      "Check Regularly: Inspect every 3–6 months and clean if required.",
      "For Best Results: Install on all exposed lines and combine with rodent control measures.",
    ],
    keyAdvantages: [
      "Installed around utility cables, water or electrical pipes, and air-conditioning ducts.",
      "Available in custom sizes to fit different diameters and layouts.",
      "Maintenance-free — requires only periodic inspection.",
      "Can be integrated with other rodent management systems for enhanced protection.",
    ],
    consumerAssurance: "Each Rat Guard meets strict industrial standards for performance and reliability. Made from pre-coated galvanized sheet to prevent rusting. Built using Z8 gauge metal — strong enough to resist chewing, denting, or deformation. Designed for long-term protection even under harsh weather or industrial conditions.",
  },
};
// --- End of Product Data ---


export default function ProductDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Find the product data based on the slug
  const product = productData[slug];

  // Show a "not found" message if the slug is invalid
  if (!product) {
    return (
      <main className="pt-32 min-h-screen">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">
              Sorry, we couldn't find the product you were looking for.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // --- Main Product Page Layout ---
  return (
    <main className="pt-32">
      {/* 1. Product Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
            {product.name}
          </h1>
        </div>
      </section>

      {/* 2. Intro Section (Image + Text) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4" // Use "object-contain"
            />
          </div>
          {/* Product Intro */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.intro}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Our Product? */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Why Choose {product.name}?
          </h2>
          <ul className="space-y-4">
            {product.whyChoose.map((point) => (
              <li key={point} className="flex items-start">
                <FaCheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

       {/* 4. How It Works */}
       <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.howItWorks}
          </p>
        </div>
      </section>

      {/* 5. Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Technical Specifications
          </h2>
          <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {product.techSpecs.map((spec, index) => (
                  <tr key={spec.spec} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 w-1/3">
                      {spec.spec}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Where to Use (IMAGE GALLERY) - UPDATED SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Where to Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {product.whereToUse.map((area) => (
              <div key={area.name} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                <div className="w-full h-48 relative">
                  <Image
                    src={area.img}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="p-4 text-center font-semibold text-gray-800 bg-white flex-grow">
                  {area.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Directions for Use */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Directions for Use
          </h2>
          <ul className="space-y-4">
            {product.directionsForUse.map((step) => (
              <li key={step} className="flex items-start">
                <FaListAlt className="text-blue-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Key Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Key Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.keyAdvantages.map((adv) => (
              <div key={adv} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-center">
                <FaCheckCircle className="text-green-500 w-6 h-6 mr-4 flex-shrink-0" />
                <p className="text-gray-800 text-lg">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 9. Consumer Assurance */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Consumer Assurance
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {product.consumerAssurance}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}