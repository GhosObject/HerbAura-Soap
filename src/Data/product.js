const products = [
  // ==================== MULTANI MITTI SOAP ====================-
  {
    id: 11,
    name: "Multani Mitti Soap",
    category: "Soap",
    ingredients: "Multani Mitti",
    size: "50g",
    price: 25,
    description: "Natural Multani Mitti se bana handmade soap.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqXy-aKbzUWNhGa6z07EGmY4nO0nj-OXwkzYsM1YP6w&s=10",
  },

  {
    id: 12,
    name: "Multani Mitti Soap",
    category: "Soap",
    ingredients: "Multani Mitti",
    size: "100g",
    price: 40,
    description: "Natural Multani Mitti se bana handmade soap.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqXy-aKbzUWNhGa6z07EGmY4nO0nj-OXwkzYsM1YP6w&s=10",
  },
  // ==================== ALOE VERA SOAP ====================
  {
    id: 1,
    name: "Aloe Vera Soap",
    category: "Soap",
    ingredients: "Aloe Vera",
    size: "50g",
    price: 25,
    description: "Natural Aloe Vera se bana handmade soap.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/8/440430783/YD/FO/UJ/14124065/aloevera-soap-500x500.jpg",
  },

  {
    id: 2,
    name: "Aloe Vera Soap",
    category: "Soap",
    ingredients: "Aloe Vera",
    size: "100g",
    price: 40,
    description: "Natural Aloe Vera se bana handmade soap.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/8/440430783/YD/FO/UJ/14124065/aloevera-soap-500x500.jpg",
  },

  // ==================== NEEM SOAP ====================
  {
    id: 3,
    name: "Neem Soap",
    category: "Soap",
    ingredients: "Neem",
    size: "50g",
    price: 25,
    description: "Neem ke natural ingredients se bana handmade soap.",
    image:
      "https://tiimg.tistatic.com/fp/1/007/602/handmade-herbal-green-neem-organic-soap-with-square-shape-and-skin-friendly-388.jpg",
  },

  {
    id: 4,
    name: "Neem Soap",
    category: "Soap",
    ingredients: "Neem",
    size: "100g",
    price: 40,
    description: "Neem ke natural ingredients se bana handmade soap.",
    image:
      "https://tiimg.tistatic.com/fp/1/007/602/handmade-herbal-green-neem-organic-soap-with-square-shape-and-skin-friendly-388.jpg",
  },

  // ==================== HONEY SOAP ====================
  {
    id: 5,
    name: "Honey Soap",
    category: "Soap",
    ingredients: "Honey",
    size: "50g",
    price: 40,
    description: "Natural Honey se bana handmade soap.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSDhcAVdPEHn-HfZvDZSyM7RI9x92aGAoqNxopkMcWg&s=10",
  },

  {
    id: 6,
    name: "Honey Soap",
    category: "Soap",
    ingredients: "Honey",
    size: "100g",
    price: 70,
    description: "Natural Honey se bana handmade soap.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSDhcAVdPEHn-HfZvDZSyM7RI9x92aGAoqNxopkMcWg&s=10",
  },

  // ==================== RICE SOAP ====================
  {
    id: 7,
    name: "Rice Soap",
    category: "Soap",
    ingredients: "Rice",
    size: "50g",
    price: 40,
    description: "Rice ingredients se bana handmade soap.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/5/513637233/PG/UL/FQ/159072879/himalayan-rock-salt-500x500.jpeg",
  },

  {
    id: 8,
    name: "Rice Soap",
    category: "Soap",
    ingredients: "Rice",
    size: "100g",
    price: 70,
    description: "Rice ingredients se bana handmade soap.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/5/513637233/PG/UL/FQ/159072879/himalayan-rock-salt-500x500.jpeg",
  },

  // ==================== COFFEE SOAP ====================
  {
    id: 9,
    name: "Coffee Soap",
    category: "Soap",
    ingredients: "Coffee",
    size: "50g",
    price: 40,
    description: "Coffee se bana natural handmade soap.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyv0cI0ZcDVd15puUDr-JcAaoKkCSQemtsH6kO6xdQ&s",
  },

  {
    id: 10,
    name: "Coffee Soap",
    category: "Soap",
    ingredients: "Coffee",
    size: "100g",
    price: 70,
    description: "Coffee se bana natural handmade soap.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyv0cI0ZcDVd15puUDr-JcAaoKkCSQemtsH6kO6xdQ&s",
  },

  // ==================== SHAMPOO ====================
  {
    id: 13,
    name: "Amla Reetha Shikakai Shampoo",
    category: "Shampoo",
    ingredients: "Amla + Reetha + Shikakai",
    size: "50ml",
    price: 40,
    description:
      "Amla, Reetha aur Shikakai se bana natural herbal shampoo.",
    image:
      "https://cdn.shopify.com/s/files/1/2395/7673/files/How_to_make_amla_reetha_shikakai_shampoo_at_home_480x480.jpg?v=1779277020",
  },

  {
    id: 14,
    name: "Amla Reetha Shikakai Shampoo",
    category: "Shampoo",
    ingredients: "Amla + Reetha + Shikakai",
    size: "100ml",
    price: 80,
    description:
      "Amla, Reetha aur Shikakai se bana natural herbal shampoo.",
    image:
      "https://cdn.shopify.com/s/files/1/2395/7673/files/How_to_make_amla_reetha_shikakai_shampoo_at_home_480x480.jpg?v=1779277020",
  },
];

export default products;