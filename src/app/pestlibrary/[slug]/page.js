"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FaCheckCircle, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";

// --- Reusable Assets ---
const infestationPlaceholderImage = "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Termite_whu5uj.png"; // Using Termite as placeholder
// --- End of Assets ---

// --- Pest Data ---
const pestData = {
  // 1. Cockroach
  "cockroach": {
    name: "Cockroach",
    commonName: "American Cockroach",
    scientificName: "Periplaneta americana",
    type: "Crawling Insect",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Cockroach_rokrlj.png",
    overview: "The cockroach is one of the most ancient and adaptable pests on Earth... Known for their reddish-brown color and oval-shaped bodies, these insects measure about 1.5 inches in length...",
    habitatBehavior: "Cockroaches thrive in environments that provide food, moisture, and warmth. Common hiding areas include kitchens, bathrooms, basements... They are primarily nocturnal... Cockroaches reproduce at an alarming rate...",
    lifecycleText: "The life cycle consists of three main stages: egg, nymph, and adult. Females lay egg capsules (oothecae). Nymphs resemble smaller adults and undergo several molts. Adults develop wings and live for around one year.",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805448/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/cockroach-life-cycle_efuvni.avif",
    signsInfestationText: "Recognizing signs early helps prevent severe contamination: Sightings (even during the day), Droppings (dark specks), Egg Capsules (oothecae), Shed Skins, Musty Odor.",
    signsInfestationImage: infestationPlaceholderImage,
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
  "termite": {
    name: "Termite",
    commonName: "White Ant / Deemak",
    scientificName: "Isoptera",
    type: "Wood-Destroying Insect",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Termite_whu5uj.png",
    overview: "Termites are small, soft-bodied, pale insects that feed primarily on cellulose found in wood and paper... They cause billions in structural damage yearly... Unlike ants, they avoid light and remain hidden...",
    habitatBehavior: "Termites live in large, organized colonies... Typical habitats include foundations, wooden beams, furniture, gardens... They thrive in warm, humid environments... Subterranean termites build mud tubes...",
    lifecycleText: "Termites undergo incomplete metamorphosis (egg, nymph, adult). The queen lays thousands of eggs. Nymphs develop into workers, soldiers, or swarmers. Workers gather food, soldiers defend, and swarmers start new colonies.",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805452/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/termite-life-cycle_leelfr.jpg",
    signsInfestationText: "Early detection is crucial: Mud Tubes on walls/foundations, Hollow-Sounding Wood, Discarded Wings after swarming, Frass (termite droppings for drywood termites), Bubbling Paint or Blisters on walls.",
    signsInfestationImage: infestationPlaceholderImage,
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
  "rat": {
    name: "Rodent",
    commonName: "Rat / Mouse",
    scientificName: "Rattus rattus, Rattus norvegicus, Mus musculus",
    type: "Commensal Pest",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Rat_jcz3di.png",
    overview: "Rodents are among the most destructive pests... constantly gnawing on materials including wood, plastic, wires... causing property damage and fire hazards... Common types include Roof Rats, Norway Rats, and House Mice...",
    habitatBehavior: "Highly adaptive, living in sewers, warehouses, kitchens... Roof Rats climb, Norway Rats burrow, House Mice explore small spaces... Exceptional sense of smell, taste, hearing; can squeeze through tiny gaps...",
    lifecycleText: "Rodents reproduce rapidly year-round. Gestation is about 21 days. Females have 6-12 pups per litter, up to 7 litters a year. Young mature in 8-12 weeks. Lifespan is 9-12 months.",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805450/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Rodent_Lifecycle_yamehf.jpg",
    signsInfestationText: "Look for: Droppings (dark pellets), Gnaw Marks on wires, wood, packaging, Scratching Noises in walls/ceilings, Footprints & Smear Marks along walls, Burrows & Nests, Foul Odor (ammonia-like).",
    signsInfestationImage: infestationPlaceholderImage,
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
  "mosquito": {
    name: "Mosquito",
    commonName: "Mosquito",
    scientificName: "Culicidae",
    type: "Flying Insect / Vector Pest",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Mosquitos_jnw16v.png",
    overview: "Mosquitoes are among the most dangerous pests, vectors of deadly diseases like dengue, malaria, chikungunya... India's climate provides ideal breeding conditions... Breed in small amounts of stagnant water...",
    habitatBehavior: "Thrive in warm, moist environments with stagnant water... Breeding sites include flower pots, gutters, water tanks, puddles... Only females bite (need blood for eggs)... Activity time varies by species (Aedes=day, Anopheles=night, Culex=dusk/night)...",
    lifecycleText: "Four stages: Egg (laid on/near water), Larva ('wigglers' in water), Pupa (transitional stage), Adult (emerges to feed/breed). Cycle takes 7-10 days in warm conditions.",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805450/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Mosquito_lifecycle_cqw36n.jpg",
    signsInfestationText: "Indicators include: Persistent buzzing sound, Frequent bites (itchy welts), Visible larvae in stagnant water, Increased activity at dusk/night, Presence of breeding sites nearby.",
    signsInfestationImage: infestationPlaceholderImage,
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
  "flies": {
    name: "Flies",
    commonName: "Housefly",
    scientificName: "Musca domestica",
    type: "Flying Insect",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804700/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Housefly_vt153s.png",
    overview: "Flies are common pests, especially the housefly... Thrives in human habitations, major carrier of diseases... Greyish, 6-7mm long, large reddish eyes... Presence indicates poor sanitation or decaying matter nearby...",
    habitatBehavior: "Found near food, waste, organic material... Breeding sites include garbage bins, animal waste, food areas... Rapid life cycle (egg to adult in a week)... Feed by liquefying food, spreading pathogens...",
    lifecycleText: "Complete metamorphosis: Egg (hatches quickly), Larva (maggot, feeds on decaying matter), Pupa (transforms in a casing), Adult (emerges to feed and reproduce).",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805449/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/housefly_svgpnm.avif",
    signsInfestationText: "Common signs: Frequent sightings around lights/food/waste, Larvae (Maggots) in waste/decaying matter, Dark spots (fly droppings) on surfaces, Buzzing sounds near windows/lights.",
    signsInfestationImage: infestationPlaceholderImage,
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
  "bedbug": {
    name: "Bed Bug",
    commonName: "Bed Bug",
    scientificName: "Cimex lectularius",
    type: "Crawling Insect",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Bedbug_am4fgb.png",
    overview: "Small, flat, reddish-brown insects feeding on blood (primarily human)... Infest bedrooms, hotels, transport... Wingless, 4-5mm... Nocturnal, bite exposed skin during sleep, leaving itchy welts...",
    habitatBehavior: "Expert hitchhikers (luggage, clothing)... Hide in tight crevices near sleeping areas: mattress seams, furniture, wall cracks, behind wallpapers... Can survive months without feeding... Drawn by body heat and CO2...",
    lifecycleText: "Incomplete metamorphosis: Egg (tiny, whitish), Nymph (smaller versions, need blood meals to molt, 5 stages), Adult (lives several months, reproduces).",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805449/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Bedbug_Lifecycle_ybt4ck.png",
    signsInfestationText: "Look for: Bite marks (red, itchy bumps in rows/clusters), Blood stains (rusty spots on sheets), Fecal spots (dark dots near hiding places), Shed skins, Musty odor (sweet, unpleasant).",
    signsInfestationImage: infestationPlaceholderImage,
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
  "lizard": {
    name: "Lizard",
    commonName: "Common House Gecko",
    scientificName: "Hemidactylus frenatus",
    type: "Crawling Pest / Nuisance Pest",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Lizard_apbydc.png",
    overview: "Common visitors in homes, especially House Geckos... Feed on insects but presence indoors considered unpleasant/unhygienic... Light brown/grey, flat body, scaly skin... Nocturnal, active near lights...",
    habitatBehavior: "Prefer warm, sheltered areas with insects... Found on walls, ceilings, behind frames, near lights... Agile climbers (adhesive pads)... Cold-blooded, activity depends on temperature... Droppings can stain...",
    lifecycleText: "Life cycle: Egg (small, white, oval, laid in hidden spots), Hatchling (miniature version), Adult (grows over several months). Tail can detach (autotomy) as defense.",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805451/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Lizard_Lifecycle_dkbp6l.png",
    signsInfestationText: "Easy to spot: Frequent sightings near walls/lights at night, Droppings (small black pellets with white tips), Eggs (tiny white ovals hidden), Noise (soft clicking/chirping).",
    signsInfestationImage: infestationPlaceholderImage,
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
  "ant": {
    name: "Ants",
    commonName: "Common Household Ants",
    scientificName: "Formicidae",
    type: "Crawling Insect",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804700/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Ant_czljgk.png",
    overview: "Small, social insects living in colonies... Highly adaptable... Household ants like Pharaoh ants and Carpenter ants can be persistent pests... 2-10mm, various colors... Known for organized colonies and foraging trails...",
    habitatBehavior: "Thrive near food, water, shelter... Indoors: kitchens, pantries... Outdoors: gardens, lawns... Carpenter ants nest in wood... Worker ants leave pheromone trails to food...",
    lifecycleText: "Complete metamorphosis: Egg, Larva (legless, grub-like), Pupa (transforms in cocoon), Adult (worker, soldier, queen). Development time varies by species and conditions.",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805448/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/ant_lifecycle_yfkunr.jpg",
    signsInfestationText: "Look for: Visible Trails of ants, Nests (mounds in soil, cracks, wood), Food Contamination (ants crawling on food), Chewed Materials (sawdust-like frass from carpenter ants), Multiple Entry Points.",
    signsInfestationImage: infestationPlaceholderImage,
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
  "silverfish": {
    name: "Silverfish",
    commonName: "Silverfish",
    scientificName: "Lepisma saccharinum",
    type: "Crawling Insect",
    mainImage: "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Silverfish_xldj0a.png",
    overview: "Small, wingless insects with silvery-grey appearance and fish-like movements... 12-19mm long... Nocturnal, damage paper, fabrics, food... Thrive in damp, dark, humid areas (bathrooms, basements)...",
    habitatBehavior: "Prefer moist, cool, undisturbed areas: bathrooms, kitchens, basements, attics, inside books, behind wallpaper... Nocturnal, avoid light... Feed on starches, sugars, cellulose (books, glue, clothing, dried food)... Move rapidly...",
    lifecycleText: "Simple metamorphosis (egg, nymph, adult), long lifespan (up to 8 years). Eggs laid in hidden spots. Nymphs resemble small adults, molt multiple times. Adults continue to molt throughout life.",
    lifecycleImage: "https://res.cloudinary.com/epcorn/image/upload/v1761805451/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_LIFECYCCLE_IMAGES/Silverfish_Lifecycle_pgrgig.avif",
    signsInfestationText: "Often detected indirectly: Sightings (quick, silvery movement at night), Damage (irregular holes in paper/books), Yellow stains or scales near feeding areas, Droppings (tiny dark pellets), Musty odor (in heavy infestations).",
    signsInfestationImage: infestationPlaceholderImage,
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
// --- End of Pest Data ---


export default function PestDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Find the pest data based on the slug
  const pest = pestData[slug];

  // Show a "not found" message if the slug is invalid
  if (!pest) {
    return (
      <main className="pt-32 min-h-screen"> {/* Adjusted padding */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Pest Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">
              Sorry, we couldn't find the pest you were looking for.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // --- Main Pest Page Layout ---
  return (
    <main className="pt-32"> {/* Adjusted padding */}
      {/* 1. Pest Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {pest.name}
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            ({pest.commonName} - <i>{pest.scientificName}</i>)
          </p>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mt-4 px-3 py-1 rounded-full">
            {pest.type}
          </span>
        </div>
      </section>

      {/* 2. Intro Section (Text + Image) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
             <h2 className="text-3xl font-bold text-blue-600 mb-4">
               Meet the {pest.name}
             </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pest.overview}
            </p>
          </div>
           {/* Pest Image */}
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg border bg-white">
            <Image
              src={pest.mainImage}
              alt={pest.name}
              fill
              className="object-contain p-4" 
            />
          </div>
        </div>
      </section>

      {/* 3. Overview & Habitat/Behavior */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Habitat and Behavior
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {pest.habitatBehavior}
          </p>
        </div>
      </section>

      {/* 4. Lifecycle Section (Image + Text) */}
       <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           {/* Lifecycle Image */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg border">
            <Image
              src={pest.lifecycleImage}
              alt={`${pest.name} Lifecycle`}
              fill
              className="object-contain p-2" 
            />
          </div>
          {/* Lifecycle Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Life Cycle
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pest.lifecycleText}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Signs of Infestation (Text + Image) */}
       <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Signs of Infestation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pest.signsInfestationText}
            </p>
          </div>
           {/* Infestation Image */}
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg border bg-white">
            <Image
              src={pest.signsInfestationImage}
              alt={`Signs of ${pest.name} Infestation`}
              fill
              className="object-contain p-4" 
            />
          </div>
        </div>
      </section>

      {/* 6. Health Risks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
             <FaExclamationTriangle className="inline-block text-red-500 mr-2 mb-1" /> Health Risks
          </h2>
          <ul className="space-y-4">
            {pest.healthRisks.map((risk) => (
              <li key={risk} className="flex items-start">
                <FaExclamationTriangle className="text-red-400 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Prevention Tips */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            <FaShieldAlt className="inline-block text-green-600 mr-2 mb-1" /> Prevention Tips
          </h2>
          <ul className="space-y-4">
            {pest.preventionTips.map((tip) => (
              <li key={tip} className="flex items-start">
                <FaCheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}