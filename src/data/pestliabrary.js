export const pests = [
  {
    name: "Ant",
    logo: "/assets/Pest_library_icons/Ant.png",
  },
  {
    name: "Rat",
    logo: "/assets/Pest_library_icons/Rodent.png",
  },
  {
    name: "Cockroach",
    logo: "/assets/Pest_library_icons/cockroach.png",
  },
  {
    name: "Termite",
    logo: "/assets/Pest_library_icons/Termite.png",
  },
  {
    name: "Mosquito",
    logo: "/assets/Pest_library_icons/Mosquito.png",
  },
  {
    name: "Flies",
    logo: "/assets/Pest_library_icons/fly.png",
  },
  {
    name: "Silverfish",
    logo: "/assets/Pest_library_icons/Silverfish.png",
  },
  {
    name: "Lizard",
    logo: "/assets/Pest_library_icons/Lizard.png",
  },
  {
    name: "Bedbug",
    logo: "/assets/Pest_library_icons/bedbug.png",
  },
];

export const infestationPlaceholderImage =
  "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Termite_whu5uj.png";

export const pestData = {
  // 1. Cockroach
  cockroach: {
    name: "Cockroach",
    commonName: "American Cockroach",
    scientificName: "Periplaneta americana",
    type: "Crawling Insect",
    heading: "What do cockroaches look like?",
    mainImage: "/assets/Pest_library_icons/cockroach.png",
    overview:
      "Cockroaches are oval-shaped insects with flattened bodies, long antennae, and six spiny legs. Depending on the species, they range from light brown to reddish-brown or nearly black. Most cockroaches are nocturnal and hide in cracks, crevices, kitchens, drains, storage rooms, and other warm, humid locations where food and water are readily available.",
    habitatBehavior:
      "Cockroaches thrive in environments that provide food, moisture, and warmth. Common hiding areas include kitchens, bathrooms, basements... They are primarily nocturnal... Cockroaches reproduce at an alarming rate...",
    typeOfPest: [
      {
        name: "German Cockroach",
        img: "/assets/Pest_library_icons/Types_of_Pest/Cockroaches/German_Cockroach.png",
      },
      {
        name: "American Cockroach",
        img: "/assets/Pest_library_icons/Types_of_Pest/Cockroaches/American_Cockroach.png",
      },
      {
        name: "Oriental Cockroach",
        img: "/assets/Pest_library_icons/Types_of_Pest/Cockroaches/Oriental_Cockroach.png",
      },
      {
        name: "Brown-banded Cockroach",
        img: "/assets/Pest_library_icons/Types_of_Pest/Cockroaches/Brown-banded_Cockroach.png",
      },
    ],
    lifecycleText:
      "The life cycle consists of three main stages: egg, nymph, and adult. Females lay egg capsules (oothecae). Nymphs resemble smaller adults and undergo several molts. Adults develop wings and live for around one year.",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805448/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/cockroach-life-cycle_efuvni.avif",
    signsInfestationText: [
      "Live cockroaches, especially at night. ",
      "Small black droppings resembling pepper or coffee grounds.",
      "Egg capsules (oothecae) in hidden areas.",
      "Musty, unpleasant odour.",
      "Shed skins near cracks, cabinets, and appliances.",
      "Smear marks on walls or surfaces in damp areas.",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Cockroaches",
      descrption:
        "Cockroach control requires professional identification of hiding places, breeding sites, and entry points. At Express Pesticides, our experts inspect the infestation, assess the level of activity, and implement targeted control measures using advanced gel baiting, residual treatments, monitoring devices, and sanitation recommendations. \nOur Integrated Pest Management (IPM) program focuses on eliminating existing infestations while preventing future cockroach activity, providing safe and effective protection for residential, commercial, hospitality, healthcare, and industrial facilities.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909329/express_pesticides/Signs_of_infestation/Cockroach_infestation_fglaad.webp",
    healthRisks: [
      "Food Poisoning: Transmit bacteria like Salmonella and E. coli.",
      "Allergic Reactions: Saliva, shed skins, and droppings trigger allergies and worsen asthma.",
      "Contamination: Spoil food, utensils, and surfaces.",
    ],
    preventionTips: [
      "Keep Food Covered: Store in airtight containers.",
      "Clean Regularly: Wipe counters, floors, and remove grease/crumbs.",
      "Dispose Garbage Daily: Use sealed bins.",
      "Fix Leaks: Eliminate moisture sources.",
      "Seal Entry Points: Close cracks and gaps.",
      "Declutter: Remove cardboard and old newspapers.",
    ],
  },

  // 2. Termite
  termite: {
    name: "Termite",
    commonName: "White Ant / Deemak",
    scientificName: "Isoptera",
    type: "Wood-Destroying Insect",
    heading: "What do termites look like?",
    mainImage: "/assets/Pest_library_icons/Termite.png",
    overview:
      "Termites are small, soft-bodied, pale insects that feed primarily on cellulose found in wood and paper... They cause billions in structural damage yearly... Unlike ants, they avoid light and remain hidden...",
    typeOfPest: [
      {
        name: "Subterranean Termites",
        img: "/assets/Pest_library_icons/Types_of_Pest/Termite/Subterranean_Termite.png",
      },
      {
        name: "Drywood Termites",
        img: "/assets/Pest_library_icons/Types_of_Pest/Termite/Subterranean_Termite.png",
      },
      {
        name: "Dampwood Termites",
        img: "/assets/Pest_library_icons/Types_of_Pest/Termite/Dampwood_termite.png",
      },
    ],
    habitatBehavior:
      "Termites live in large, organized colonies... Typical habitats include foundations, wooden beams, furniture, gardens... They thrive in warm, humid environments... Subterranean termites build mud tubes...",
    lifecycleText:
      "Termites undergo incomplete metamorphosis (egg, nymph, adult). The queen lays thousands of eggs. Nymphs develop into workers, soldiers, or swarmers. Workers gather food, soldiers defend, and swarmers start new colonies.",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805452/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/termite-life-cycle_leelfr.jpg",
    signsInfestationText: [
      "Mud tubes on walls or foundations.",
      "Hollow-sounding or damaged wood.",
      "Discarded wings near windows or doors.",
      "Bubbling or peeling paint.",
      "Tight-fitting doors or windows.",
      "Fine termite droppings (drywood termites).",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Termites",
      descrption:
        "Termite control requires professional inspection and targeted treatment. At Express Pesticides, our experts identify termite species, locate active colonies, and assess the extent of infestation before recommending a customized treatment plan.\nUsing advanced Integrated Pest Management (IPM) techniques, including pre- and post-construction anti-termite treatments, drilling and injection, soil treatment, wood treatment, baiting systems, and routine monitoring, we provide reliable, long-term protection for homes, commercial buildings, and industrial facilities.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909330/express_pesticides/Signs_of_infestation/Termite_infestation_ioze9x.webp",
    healthRisks: [
      "Structural Weakening: Damage compromises building safety.",
      "Financial Losses: Significant repair costs.",
      "Electrical Hazards: Can damage wiring insulation.",
      "Hygiene Concerns: Moisture attracts mold and secondary pests.",
    ],
    preventionTips: [
      "Termiscan: Use scanners to identify active colonies.",
      "Inspect Wooden Areas: Check furniture, frames, skirting boards.",
      "Fix Leaks: Control moisture sources.",
      "Seal Cracks: Fill gaps in foundations, walls.",
      "Maintain Garden Hygiene: Avoid wood debris near walls.",
      "Ensure Proper Ventilation: Reduce humidity.",
      "Pre & Post-Construction Treatment: Apply soil barriers or baiting systems.",
    ],
  },

  // 3. Rodent (Rat / Mouse)
  rat: {
    name: "Rodent",
    commonName: "Rat / Mouse",
    scientificName: "Rattus rattus, Rattus norvegicus, Mus musculus",
    type: "Commensal Pest",
    heading: "What do rats look like?",
    mainImage: "/assets/Pest_library_icons/Rodent.png",
    overview:
      "Rats are medium-sized rodents with strong incisors that continuously grow throughout their lives. They have long tails, sensitive whiskers, and excellent climbing and gnawing abilities, allowing them to access buildings through very small openings.",
    typeOfPest: [
      {
        name: "Norway Rat",
        img: "/assets/Pest_library_icons/Types_of_Pest/Rat/Norway_Rat.png",
      },
      {
        name: "Roof Rat",
        img: "/assets/Pest_library_icons/Types_of_Pest/Rat/Roof_rat.png",
      },
      {
        name: "House Mouse",
        img: "/assets/Pest_library_icons/Types_of_Pest/Rat/House_mouse.png",
      },
    ],
    habitatBehavior:
      "Highly adaptive, living in sewers, warehouses, kitchens... Roof Rats climb, Norway Rats burrow, House Mice explore small spaces... Exceptional sense of smell, taste, hearing; can squeeze through tiny gaps...",
    lifecycleText:
      "Rodents reproduce rapidly year-round. Gestation is about 21 days. Females have 6-12 pups per litter, up to 7 litters a year. Young mature in 8-12 weeks. Lifespan is 9-12 months.",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805450/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Rodent_Lifecycle_yamehf.jpg",
    signsInfestationText: [
      "Rodent droppings around food storage.",
      "Gnaw marks on wires, wood, or plastic.",
      "Scratching sounds in ceilings or walls.",
      "Burrows around buildings.",
      "Grease marks along walls.",
      "Footprints or tail marks in dusty areas",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Rats",
      descrption:
        "Rodent control requires identifying nesting sites, entry points, food sources, and travel routes. Express Pesticides conducts comprehensive inspections and implements Integrated Rodent Management using bait stations, trapping systems, exclusion techniques, and continuous monitoring. \n Our customized rodent management solutions help protect residential, commercial, industrial, food processing, and healthcare facilities from rodent-related damage and contamination.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909330/express_pesticides/Signs_of_infestation/Rat_infestation_xi9kik.webp",
    healthRisks: [
      "Leptospirosis: Spread via urine-contaminated water.",
      "Salmonellosis: Food contamination causing food poisoning.",
      "Plague: Carried by fleas from infected rats.",
      "Fire Hazards: Gnawing on electrical wires.",
      "Economic Losses: Destruction of goods and infrastructure.",
    ],
    preventionTips: [
      "Maintain Cleanliness: Keep food areas clean and dry.",
      "Seal Ingress Points: Block holes, gaps, drains.",
      "Store Food Securely: Use airtight containers.",
      "Dispose Garbage Daily: Use bins with tight lids.",
      "Declutter: Remove nesting materials like cardboard.",
      "Fix Leaks: Eliminate water sources.",
      "Trim Vegetation: Keep plants away from walls/roofs.",
    ],
  },

  // 4. Mosquito
  mosquito: {
    name: "Mosquito",
    commonName: "Mosquito",
    scientificName: "Culicidae",
    type: "Flying Insect / Vector Pest",
    heading: "What do Mosquito look like?",
    mainImage: "/assets/Pest_library_icons/Mosquito.png",
    overview:
      "Mosquitoes are small, slender flying insects with long legs, narrow wings, and a needle-like mouthpart used for feeding. They are typically 3–6 mm long and range in colour from grey to black, with some species displaying white markings on their legs or body. Female mosquitoes feed on blood to produce eggs, while males feed on plant nectar. Mosquitoes breed in stagnant water and are most active during dawn, dusk, or nighttime, depending on the species.",
    typeOfPest: [
      {
        name: "Aedes Mosquito",
        img: "/assets/Pest_library_icons/Types_of_Pest/Mosquito/Aades_Mosquito.png",
      },
      {
        name: "Anopheles Mosquito",
        img: "/assets/Pest_library_icons/Types_of_Pest/Mosquito/Anopheles_Mosquito.png",
      },
      {
        name: "Culex Mosquito",
        img: "/assets/Pest_library_icons/Types_of_Pest/Mosquito/Culex_Mosquito.png",
      },
    ],
    habitatBehavior:
      "Thrive in warm, moist environments with stagnant water... Breeding sites include flower pots, gutters, water tanks, puddles... Only females bite (need blood for eggs)... Activity time varies by species (Aedes=day, Anopheles=night, Culex=dusk/night)...",
    lifecycleText:
      "Four stages: Egg (laid on/near water), Larva ('wigglers' in water), Pupa (transitional stage), Adult (emerges to feed/breed). Cycle takes 7-10 days in warm conditions.",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805450/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Mosquito_lifecycle_cqw36n.jpg",
    signsInfestationText: [
      "Mud tubes on walls or foundations.",
      "Hollow-sounding or damaged wood.",
      "Discarded wings near windows or doors.",
      "Bubbling or peeling paint.",
      "Tight-fitting doors or windows.",
      "Fine termite droppings (drywood termites).",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Mosquitoes",
      descrption:
        "Effective mosquito control requires eliminating breeding sites as well as reducing adult mosquito populations. At Express Pesticides, our specialists conduct a detailed inspection to identify stagnant water sources, breeding areas, and mosquito resting sites. \nUsing our Integrated Pest Management (IPM) approach, we combine source reduction, larval control, ULV fogging, residual spraying, and continuous monitoring to provide long-lasting mosquito protection for residential, commercial, industrial, and public spaces.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909329/express_pesticides/Signs_of_infestation/Mosquito_infestation_l5ykjg.webp",
    healthRisks: [
      "Dengue & Chikungunya (Aedes)",
      "Malaria (Anopheles)",
      "Filariasis / Elephantiasis (Culex)",
      "Zika Virus (Aedes)",
      "Disturbed sleep, irritation, allergic reactions.",
    ],
    preventionTips: [
      "Eliminate Stagnant Water: Empty or cover containers.",
      "Change Water Regularly: Clean pots, bowls every 2-3 days.",
      "Install Screens: Use window/door screens.",
      "Use Mosquito Nets: Especially at night.",
      "Apply Repellents: Use safe skin repellents.",
      "Maintain Clean Surroundings: Clear garbage/debris.",
      "Regular Fogging: In outdoor/high-risk areas.",
    ],
  },

  // 5. Flies
  flies: {
    name: "Flies",
    commonName: "Housefly",
    scientificName: "Musca domestica",
    type: "Flying Insect",
    heading: "What do flies look like?",
    mainImage: "/assets/Pest_library_icons/fly.png",
    overview:
      "Flies are fast-moving insects with one pair of wings, large compound eyes, and sponging mouthparts. They breed rapidly in organic waste, garbage, drains, food waste, and animal matter.",
    habitatBehavior:
      "Found near food, waste, organic material... Breeding sites include garbage bins, animal waste, food areas... Rapid life cycle (egg to adult in a week)... Feed by liquefying food, spreading pathogens...",
    typeOfPest: [
      {
        name: "House Fly ",
        img: "/assets/Pest_library_icons/Types_of_Pest/Fly/Housefly.png",
      },
      {
        name: "Fruit Fly",
        img: "/assets/Pest_library_icons/Types_of_Pest/Fly/Fruitfly.png",
      },
      {
        name: "Blow Fly",
        img: "/assets/Pest_library_icons/Types_of_Pest/Fly/Blowfly.png",
      },
      {
        name: "Drain Fly",
        img: "/assets/Pest_library_icons/Types_of_Pest/Fly/Drain_Fly.png",
      },
    ],
    lifecycleText:
      "Complete metamorphosis: Egg (hatches quickly), Larva (maggot, feeds on decaying matter), Pupa (transforms in a casing), Adult (emerges to feed and reproduce).",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805449/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/housefly_svgpnm.avif",
    signsInfestationText: [
      "Large numbers of flies indoors.",
      "Maggots in garbage or organic waste. ",
      "Dark fly specks on walls and ceilings.",
      "Flies around food preparation areas. ",
      "Breeding around drains, bins, or waste storage.",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Flies",
      descrption:
        "Effective fly management requires eliminating breeding sites and reducing adult fly populations. Express Pesticides provides professional inspections, sanitation recommendations, fly-proofing solutions, residual treatments, insect light traps, and continuous monitoring.\n Our IPM program delivers effective fly control for restaurants, food processing facilities, commercial buildings, healthcare facilities, and residential properties.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909330/express_pesticides/Signs_of_infestation/Fly_infestation_ofc82w.webp",
    healthRisks: [
      "Typhoid Fever",
      "Cholera",
      "Dysentery",
      "Gastroenteritis",
      "Tuberculosis & Salmonellosis",
      "Contaminate food via regurgitation, defecation, and contact.",
    ],
    preventionTips: [
      "Dispose of garbage daily, use sealed bins.",
      "Clean kitchen counters and drains.",
      "Eliminate standing water, keep areas dry.",
      "Use window and door screens.",
      "Install air curtains or UV fly traps (commercial).",
      "Cover food properly.",
      "Disinfect waste disposal areas.",
    ],
  },

  // 6. Bed Bug
  bedbug: {
    name: "Bed Bug",
    commonName: "Bed Bug",
    scientificName: "Cimex lectularius",
    type: "Crawling Insect",
    heading: "What do bed bugs look like?",
    mainImage: "/assets/Pest_library_icons/bedbug.png",
    overview:
      "Bed bugs are small, flat, reddish-brown insects that feed exclusively on blood. They hide in mattresses, bed frames, furniture, wall cracks, and upholstery during the day and become active at night when searching for a host.",
    habitatBehavior:
      "Expert hitchhikers (luggage, clothing)... Hide in tight crevices near sleeping areas: mattress seams, furniture, wall cracks, behind wallpapers... Can survive months without feeding... Drawn by body heat and CO2...",
    typeOfPest: [
      {
        name: "Common Bed Bug",
        img: "/assets/Pest_library_icons/Types_of_Pest/Bedbug/Common_Bedbug.png",
      },
      {
        name: "Tropical Bed Bug",
        img: "/assets/Pest_library_icons/Types_of_Pest/Bedbug/Trophical_Bedbug.png",
      },
    ],
    lifecycleText:
      "Incomplete metamorphosis: Egg (tiny, whitish), Nymph (smaller versions, need blood meals to molt, 5 stages), Adult (lives several months, reproduces).",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805449/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Bedbug_Lifecycle_ybt4ck.png",
    signsInfestationText: [
      "Red, itchy bite marks on exposed skin.",
      "Small blood stains on bed sheets.",
      "Black faecal spots on mattresses and furniture.",
      "Live bed bugs in mattress seams or furniture joints.",
      "Tiny white eggs or shed skins.",
      "Sweet, musty odour in heavy infestations.",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Bed Bugs",
      descrption:
        "Bed bug infestations require detailed inspection and thorough treatment of all hiding places. Express Pesticides provides professional inspection, targeted chemical and non-chemical treatments, and follow-up monitoring to ensure complete control. \nOur technicians use proven Integrated Pest Management techniques to eliminate bed bugs while helping prevent re-infestation.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909330/express_pesticides/Signs_of_infestation/Bedbug_infestation_bekh3q.webp",
    healthRisks: [
      "Allergic reactions: Severe itching or rashes in some people.",
      "Sleep disruption: Anxiety, restlessness, insomnia.",
      "Secondary infections: From scratching bites.",
      "Psychological stress: Fear and anxiety.",
      "Damage to business reputation (hospitality).",
    ],
    preventionTips: [
      "Inspect luggage and clothing after travel.",
      "Regularly vacuum mattresses, sofas, carpets.",
      "Use mattress and pillow encasements.",
      "Inspect second-hand furniture thoroughly.",
      "Check bed corners and headboards periodically.",
      "Wash bed linens in hot water, dry on high heat.",
    ],
  },

  // 7. Lizard
  lizard: {
    name: "Lizard",
    commonName: "Common House Gecko",
    scientificName: "Hemidactylus frenatus",
    type: "Crawling Pest / Nuisance Pest",
    heading: "What do lizards look like?",
    mainImage: "/assets/Pest_library_icons/Lizard.png",
    overview:
      "Common visitors in homes, especially House Geckos... Feed on insects but presence indoors considered unpleasant/unhygienic... Light brown/grey, flat body, scaly skin... Nocturnal, active near lights...",
    habitatBehavior:
      "Prefer warm, sheltered areas with insects... Found on walls, ceilings, behind frames, near lights... Agile climbers (adhesive pads)... Cold-blooded, activity depends on temperature... Droppings can stain...",
    typeOfPest: [
      {
        name: "Common House Gecko",
        img: "/assets/Pest_library_icons/Types_of_Pest/Lizard/Common_House_lizard.png",
      },
      {
        name: "Asian House Gecko",
        img: "/assets/Pest_library_icons/Types_of_Pest/Lizard/Asian_House_Lizard.png",
      },
    ],
    lifecycleText:
      "Life cycle: Egg (small, white, oval, laid in hidden spots), Hatchling (miniature version), Adult (grows over several months). Tail can detach (autotomy) as defense.",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805451/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Lizard_Lifecycle_dkbp6l.png",
    signsInfestationText: [
      "Lizard droppings on floors, walls, or countertops.",
      "Frequent sightings near lights at night.",
      "Eggs or eggshells in hidden corners.",
      "Tail fragments left behind.",
      "Increased insect activity attracting lizards.",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Lizards",
      descrption:
        "Lizard control begins with identifying food sources, entry points, and harbourage areas. Express Pesticides uses exclusion techniques, habitat modification, professional repellents, and insect population reduction to discourage lizard activity. \n Our customized management program provides safe and effective long-term lizard control for homes, offices, warehouses, hotels, and industrial facilities.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909329/express_pesticides/Signs_of_infestation/Lizard_infestation_xutxdn.webp",
    healthRisks: [
      "Food Contamination: Can carry Salmonella.",
      "Allergies: Droppings or shed skin may cause reactions in some.",
      "Unpleasant Odor: Accumulated droppings.",
      "Fear and Discomfort: Disturbing presence for many.",
    ],
    preventionTips: [
      "Reduce insects indoors (their food source).",
      "Seal cracks and gaps around windows/doors.",
      "Keep walls and shelves clean.",
      "Use mesh screens on windows/vents.",
      "Avoid leaving lights on unnecessarily.",
      "Use natural repellents (naphthalene balls, garlic).",
      "Maintain cleanliness and declutter hiding spots.",
    ],
  },

  // 8. Ants
  ant: {
    name: "Ants",
    commonName: "Common Household Ants",
    scientificName: "Formicidae",
    type: "Crawling Insect",
    heading: "What do ants look like?",
    mainImage: "/assets/Pest_library_icons/Ant.png",
    overview:
      "Adult ants vary in size, colour, and species, but every colony consists of three main castes: queens, workers, and males. Queens are fertile females responsible for laying eggs, workers are wingless females that gather food, care for the young, build and protect the nest, while winged males exist only to mate during the swarming season. Ants have six legs, elbowed antennae, and a narrow waist, allowing them to move quickly and communicate efficiently within the colony.",
    habitatBehavior:
      "Thrive near food, water, shelter... Indoors: kitchens, pantries... Outdoors: gardens, lawns... Carpenter ants nest in wood... Worker ants leave pheromone trails to food...",
    typeOfPest: [
      {
        name: "Black Ants",
        img: "/assets/Pest_library_icons/Types_of_Pest/Ants/Black_ant.png",
      },
      {
        name: "Carpenter Ants",
        img: "/assets/Pest_library_icons/Types_of_Pest/Ants/Carpenter_Ant.png",
      },
      {
        name: "Red Ants",
        img: "/assets/Pest_library_icons/Types_of_Pest/Ants/Red_Ant.png",
      },
    ],
    lifecycleText:
      "Complete metamorphosis: Egg, Larva (legless, grub-like), Pupa (transforms in cocoon), Adult (worker, soldier, queen). Development time varies by species and conditions.",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805448/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/ant_lifecycle_yfkunr.jpg",

    signsInfestationText: [
      "Ant Trails – Lines of ants moving to and from food sources.",
      "Frequent Sightings – Ants in kitchens, pantries, or bathrooms.",
      "Winged Ants – Flying ants seen during the swarming season. ",
      "Ant Nests – Soil mounds or nests near walls, gardens, or foundations.",
      "Food Contamination – Ants found in or around stored food. ",
      "Wood Shavings – Fine sawdust-like frass from carpenter ants.",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Ants",
      descrption:
        "Getting rid of ants and preventing them from returning requires more than a single treatment. At Express Pesticides, our trained pest management professionals inspect your property, identify the ant species, locate nesting sites, and determine the source of the infestation before recommending the most effective treatment solution. \n Using our Integrated Pest Management (IPM) approach, we combine detailed inspection, targeted treatments, habitat modification, and continuous monitoring to provide long-term ant protection for homes, commercial facilities, restaurants, offices, industries, and institutions. \n Our experienced technicians use advanced treatment methods and professional-grade products to eliminate active colonies while helping prevent future infestations, ensuring a safer and healthier environment.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909329/express_pesticides/Signs_of_infestation/Ant_infestation_gsgztu.webp",
    healthRisks: [
      "Food Contamination: Transport bacteria.",
      "Allergic Reactions: Some species bite or sting.",
      "Structural Damage: Carpenter ants weaken wood.",
      "Nuisance Factor: Disrupt hygiene and daily life.",
    ],
    preventionTips: [
      "Keep food sealed in airtight containers.",
      "Clean kitchens regularly, removing crumbs/spills.",
      "Fix leaks and remove standing water.",
      "Seal cracks and crevices.",
      "Trim plants away from the house.",
      "Dispose of garbage daily, use sealed bins.",
      "Remove debris and clutter.",
    ],
  },

  // 9. Silverfish
  silverfish: {
    name: "Silverfish",
    commonName: "Silverfish",
    scientificName: "Lepisma saccharinum",
    type: "Crawling Insect",
    heading: "What do silverfish look like?",
    mainImage: "/assets/Pest_library_icons/Silverfish.png",
    overview:
      "Small, wingless insects with silvery-grey appearance and fish-like movements... 12-19mm long... Nocturnal, damage paper, fabrics, food... Thrive in damp, dark, humid areas (bathrooms, basements)...",
    habitatBehavior:
      "Prefer moist, cool, undisturbed areas: bathrooms, kitchens, basements, attics, inside books, behind wallpaper... Nocturnal, avoid light... Feed on starches, sugars, cellulose (books, glue, clothing, dried food)... Move rapidly...",
    typeOfPest: [
      {
        name: "Common Silverfish",
        img: "/assets/Pest_library_icons/Types_of_Pest/Silverfish/Silverfish.png",
      },
      {
        name: "Firebrat",
        img: "/assets/Pest_library_icons/Types_of_Pest/Silverfish/Firebrat.png",
      },
    ],
    lifecycleText:
      "Simple metamorphosis (egg, nymph, adult), long lifespan (up to 8 years). Eggs laid in hidden spots. Nymphs resemble small adults, molt multiple times. Adults continue to molt throughout life.",
    lifecycleImage:
      "https://res.cloudinary.com/epcorn/image/upload/v1761805451/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Silverfish_Lifecycle_pgrgig.avif",
    signsInfestationText: [
      "Small holes in books, paper, or wallpaper.",
      "Yellow stains on paper and fabrics.",
      "Tiny black droppings.",
      "Shed silver scales or skins.",
      "Silverfish found in bathrooms, kitchens, or storage rooms.",
    ],
    getRid: {
      title: "How Express Pesticides Helps Get Rid of Silverfish",
      descrption:
        "Silverfish control begins with identifying moisture problems and harbourage areas.\n Express Pesticides provides professional inspection, targeted treatments, moisture management recommendations, and ongoing monitoring to eliminate infestations and reduce the risk of recurrence.",
    },
    signsInfestationImage:
      "https://res.cloudinary.com/djc8opvcg/image/upload/v1785909330/express_pesticides/Signs_of_infestation/Silverfish_infestation_pyephx.webp",
    healthRisks: [
      "Food contamination: Ruin grains, cereals, flour.",
      "Damage to paper and fabrics: Feed on books, wallpaper, clothing.",
      "Structural damage: May damage cardboard, insulation.",
      "Allergy triggers: Shed scales/droppings (rare).",
    ],
    preventionTips: [
      "Fix leaks and ensure proper ventilation.",
      "Maintain cleanliness: Vacuum regularly.",
      "Store books, papers, fabrics in sealed containers.",
      "Dispose of cardboard and old papers.",
      "Reduce humidity: Use dehumidifiers.",
      "Seal cracks and crevices.",
    ],
  },
};
