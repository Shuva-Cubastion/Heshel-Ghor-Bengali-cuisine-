const data = [
  {
    id: "shorshe-ilish",
    title: "Shorshe Ilish",
    subtitle: "Mustard Hilsa",
    image: "assets/shorshe_ilish.png",
    description: "A quintessential Bengali delicacy featuring Ilish (Hilsa) fish cooked in a pungent and rich mustard sauce, typically served with steaming hot rice.",
    ingredients: [
      "500g Ilish (Hilsa) fish pieces",
      "3 tbsp Mustard seed paste (black and yellow)",
      "1 tbsp Poppy seed paste",
      "4-5 Green chilies (slit)",
      "1/2 tsp Turmeric powder",
      "3 tbsp Mustard oil",
      "Salt to taste",
      "Coriander leaves (for garnish)"
    ],
    tips: [
      "Use high-quality fresh mustard oil for the authentic pungent aroma.",
      "Soak mustard seeds with a pinch of salt and green chilies before making the paste to prevent bitterness.",
      "Do not fry the Ilish too much; it should ideally be lightly sautéed or used raw depending on preference, as the fish is very delicate."
    ]
  },
  {
    id: "kosha-mangsho",
    title: "Kosha Mangsho",
    subtitle: "Spicy Mutton Curry",
    image: "assets/kosha_mangsho.png",
    description: "A legendary Sunday staple in Bengali households. This slow-cooked, rich, and dark brown mutton curry is deeply flavorful with caramelized onions and spices.",
    ingredients: [
      "1 kg Mutton (curry cut)",
      "4 large Onions (finely sliced)",
      "2 tbsp Ginger-Garlic paste",
      "1/2 cup Yogurt (beaten)",
      "1 tbsp Cumin & Coriander powder",
      "1 tsp Kashmiri red chili powder",
      "Garam masala (cinnamon, cardamom, cloves)",
      "4 tbsp Mustard oil",
      "Salt and Sugar to taste",
      "Potatoes (optional, quartered and fried)"
    ],
    tips: [
      "The key to Kosha Mangsho is 'Bhuna' or slow-cooking the meat over low heat until the spices deeply penetrate and the oil separates.",
      "Marinate the mutton overnight for the best tender texture.",
      "Let the onions caramelize very slowly; the dark brown color of the curry comes from the caramelized onions and slow roasting."
    ]
  },
  {
    id: "chingri-malai",
    title: "Chingri Malai Curry",
    subtitle: "Prawn Coconut Curry",
    image: "assets/chingri_malai.png",
    description: "An elegant, creamy, and mildly sweet prawn curry made with coconut milk, celebrated as a centerpiece for many Bengali festivities.",
    ingredients: [
      "500g Jumbo Prawns or Golda Chingri",
      "1 cup Thick Coconut Milk",
      "1/2 cup Thin Coconut Milk",
      "1 tbsp Ginger-Onion paste",
      "2 Green chilies",
      "1/2 tsp Turmeric & Sugar",
      "Ghee or Mustard oil",
      "Salt to taste"
    ],
    tips: [
      "Clean the prawns thoroughly but keep the head intact for maximum flavor.",
      "Cook on low flame once the coconut milk is added so that it does not curdle.",
      "Adding a small dollop of ghee at the very end enhances the rich aroma of the malai curry."
    ]
  },
  {
    id: "bhapa-doi",
    title: "Bhapa Doi",
    subtitle: "Steamed Sweet Yogurt",
    image: "assets/bhapa_doi.png",
    description: "A silky, melt-in-your-mouth steamed sweet yogurt dessert topped with nuts, known as the Bengali cheesecake.",
    ingredients: [
      "2 cups Hung Curd (thick yogurt)",
      "1 tin (400g) Sweetened Condensed Milk",
      "1/2 Vanilla extract or Cardamom powder",
      "Chopped pistachios and almonds for garnish",
      "A few strands of saffron (soaked in milk)"
    ],
    tips: [
      "Make sure the yogurt is completely hung and drained of water; excess water will ruin the creamy texture.",
      "Whisk the yogurt and condensed milk vigorously until perfectly smooth before steaming.",
      "Chill for at least 3-4 hours after steaming before serving."
    ]
  },
  {
    id: "aloo-posto",
    title: "Aloo Posto",
    subtitle: "Potato in Poppy Seed Paste",
    image: "assets/aloo_posto.png",
    description: "A comforting and earthy Bengali classic made with potatoes cooked in a rich, nutty poppy seed (posto) paste. It is a staple in Bengali households, best enjoyed with a side of Biulir Dal and steamed rice.",
    ingredients: [
      "3-4 Potatoes (peeled and diced)",
      "3 tbsp Poppy seeds (soaked and ground into a fine paste)",
      "3-4 Green chilies (slit)",
      "1/2 tsp Nigella seeds (Kalo Jeera)",
      "A pinch of Turmeric powder",
      "2-3 tbsp Mustard oil",
      "Salt to taste"
    ],
    tips: [
      "The poppy seed paste should be ground with a green chili and a splash of water for the best flavor.",
      "Do not use too much turmeric as it can overpower the delicate nutty flavor of the poppy seeds.",
      "A final drizzle of raw mustard oil at the end is essential for the authentic punch."
    ]
  },
  {
    id: "mochar-ghonto",
    title: "Mochar Ghonto",
    subtitle: "Banana Blossom Stir-fry",
    image: "assets/mochar_ghonto.png",
    description: "A traditional and intricate Bengali vegetarian dish made from finely chopped banana blossoms (mocha), slow-cooked with aromatic spices, coconut shards, and chickpeas.",
    ingredients: [
      "Banana blossom (mocha) – cleaned & chopped",
      "Potato – 1 (diced, optional)",
      "Chickpeas – 2 tbsp (boiled)",
      "Grated Coconut – 2 tbsp",
      "Ginger paste – 1 tsp",
      "Turmeric – ½ tsp",
      "Ghee – 1 tsp",
      "Garam masala – ½ tsp",
      "Mustard oil – 2 tbsp",
      "Salt – to taste"
    ],
    tips: [
      "Rub your hands and the knife with oil before cleaning the mocha to prevent staining.",
      "Pressure cook the chopped mocha with a little turmeric and salt before the main cooking to remove any bitterness.",
      "The subtle crunch of fried coconut bits adds a wonderful texture to the dish."
    ]
  },
  {
    id: "chitol-muitha",
    title: "Chitol Macher Muitha",
    subtitle: "Clown Knifefish Dumplings",
    image: "assets/chitol_macher_muitha.png",
    description: "A royal Bengali delicacy. Scraped Chitol fish meat is seasoned, shaped into balls (muitha), boiled, and then fried before being simmered in a rich, spicy ginger-onion gravy.",
    ingredients: [
      "Chitol fish paste – 400g",
      "Potato – 1 medium (boiled & mashed)",
      "Onion paste – 2 tbsp",
      "Ginger-Garlic paste – 2 tbsp",
      "Cumin & Turmeric powder – 1 tsp each",
      "Green chilies – 3-4",
      "Garam masala & Bay leaves",
      "Mustard oil – 4 tbsp",
      "Salt to taste"
    ],
    tips: [
      "Add a little mashed potato to the fish paste to help it bind better when making the dumplings.",
      "Ensure the water is boiling vigorously before dropping the muithas so they don't break.",
      "Fry the boiled muithas until golden brown for a firm yet soft texture in the curry."
    ]
  },
  {
    id: "katla-kalia",
    title: "Katla Kalia",
    subtitle: "Rich Bengali Fish Curry",
    image: "assets/katla_kaliya.png",
    description: "A traditional, spicy, and aromatic gravy made with Katla/Rohu fish. This rich curry is a centerpiece of Bengali festive meals.",
    ingredients: [
      "Katla fish – 5–6 pieces",
      "Onion paste – 3 tbsp",
      "Ginger paste – 1 tbsp",
      "Garlic paste – 1 tbsp",
      "Tomato – 1 (chopped)",
      "Curd/Yogurt – 2 tbsp",
      "Turmeric, Red chili, Cumin powder – 1 tsp each",
      "Garam masala powder – ½ tsp",
      "Whone spices: Bay leaves, Cinnamon, Cardamom, Cloves",
      "Mustard oil – 4 tbsp",
      "Salt and Sugar to taste"
    ],
    tips: [
      "Lightly fry the fish with a pinch of turmeric and salt before adding to the gravy to keep the pieces intact.",
      "Beaten yogurt should be added on low heat to prevent curdling.",
      "The secret to a good Kalia is slow-cooking the spices until the oil separates from the masala."
    ]
  },
  {
    id: "shukto",
    title: "Shukto",
    subtitle: "Traditional Mixed Vegetable Stew",
    image: "assets/sukto.png",
    description: "A classic Bengali starter — mild, creamy, and slightly bitter. This cooling vegetable stew is prized for its complex flavors and health benefits.",
    ingredients: [
      "Vegetables: Bitter gourd, Raw banana, Potato, Drumsticks, Eggplant, Green beans",
      "White mustard paste – 2 tbsp",
      "Poppy seed paste – 1 tbsp",
      "Ginger paste – ½ tsp",
      "Panch phoron – ½ tsp & Bay leaves",
      "Milk – ½ cup",
      "Ghee – 1 tsp",
      "Sugar – 1 tsp (essential for balance)",
      "Mustard oil – 2 tbsp",
      "Salt to taste"
    ],
    tips: [
      "Always fry the bitter gourd separately and add it towards the end to keep the bitterness subtle.",
      "Using a mix of mustard and poppy seed paste gives the signature creamy texture and pungent kick.",
      "Small lentil dumplings (Bori) can be fried and added for an extra crunch."
    ]
  },
  {
    id: "potol-chingri",
    title: "Potol Chingri",
    subtitle: "Parwal Prawn Curry",
    image: "assets/potol_chingri.jpeg",
    description: "A mildly spiced Bengali curry combining tender potol (pointed gourd) with juicy prawns, often served as a side in traditional Bengali meals.",
    ingredients: [
      "Potol (parwal/pointed gourd) – 8–10 pieces",
      "Medium prawns – 200–250 g (cleaned & de-veined)",
      "Onion paste – 2 tbsp",
      "Ginger paste – 1 tsp",
      "Garlic paste – 1 tsp",
      "Tomato – 1 small (chopped or paste)",
      "Green chilies – 2–3",
      "Turmeric – 1.5 tsp",
      "Red chili powder – 1 tsp",
      "Cumin powder – 1 tsp",
      "Coriander powder – ½ tsp",
      "Garam masala – ½ tsp",
      "Bay leaf – 1",
      "Whole cumin – ½ tsp",
      "Mustard oil – 3–4 tbsp",
      "Salt & Sugar – to taste",
      "Water – as needed"
    ],
    tips: [
      "Lightly fry the potol and prawns separately with a pinch of turmeric and salt before adding to the curry.",
      "Do not overcook the prawns, as they can become rubbery; add them towards the end of the cooking process.",
      "A pinch of sugar helps balance the spices and brings out the natural sweetness of the pointed gourd."
    ]
  }
];

module.exports = data;
