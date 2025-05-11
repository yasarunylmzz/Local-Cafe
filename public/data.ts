// src/data/menuData.ts

export interface MenuItem {
  id: number;
  name: {
    English: string;
    Turkish: string;
  };
  description: {
    English: string;
    Turkish: string;
  };
  price: {
    English: string;
    Turkish: string;
  };
  image: string;
}

export interface MenuData {
  [category: string]: MenuItem[];
}

export interface CategoryTranslations {
  English: string[];
  Turkish: string[];
}

export const categories: CategoryTranslations = {
  English: [
    "Desserts",
    "Food & Snacks",
    "Toasts",
    "3rd Generation Coffee",
    "Hot Drinks",
    "Herbal Teas",
    "Espresso Special",
    "Matcha Drinks",
    "Turkish Coffee",
    "Cold Drinks",
    "Soft Drinks",
  ],
  Turkish: [
    "Tatlılar",
    "Yiyecekler/Atıştırmalıklar",
    "Tostlar",
    "3.Nesil Kahveler",
    "Sıcak İçecekler",
    "Bitki Çayları",
    "Espresso Special",
    "Matchalar",
    "Türk Kahveleri",
    "Soğuk İçecekler",
    "Soft İçecekler",
  ],
};

export const menuItems: MenuData = {
  Desserts: [
    {
      id: 1,
      name: {
        English: "San Sebastian",
        Turkish: "San Sebastian",
      },
      description: {
        English: "Classic Basque burnt cheesecake",
        Turkish: "Klasik Bask usulü cheesecake",
      },
      price: { English: "₺250", Turkish: "₺250" },
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 2,
      name: {
        English: "Cheesecake",
        Turkish: "Cheesecake",
      },
      description: {
        English: "Creamy cheesecake with cookie crust",
        Turkish: "Kremalı cheesecake bisküvi tabanı ile",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 3,
      name: {
        English: "Tiramisu",
        Turkish: "Tiramisu",
      },
      description: {
        English: "Coffee-flavored Italian dessert",
        Turkish: "Kahve aromalı İtalyan tatlısı",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 4,
      name: {
        English: "Brownie",
        Turkish: "Brownie",
      },
      description: {
        English: "Chocolate brownie served warm",
        Turkish: "Sıcak servis edilen çikolatalı brownie",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 5,
      name: {
        English: "Magnolia",
        Turkish: "Magnolia",
      },
      description: {
        English: "No-bake dessert with biscuit and cream",
        Turkish: "Pişirilmeden yapılan bisküvili kremalı tatlı",
      },
      price: { English: "₺180", Turkish: "₺180" },
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=250&auto=format&fit=crop",
    },
  ],
  "Food & Snacks": [
    {
      id: 6,
      name: {
        English: "Chicken Burger",
        Turkish: "Tavuk Burger",
      },
      description: {
        English: "Grilled chicken patty with fresh vegetables",
        Turkish: "Izgarada pişirilmiş tavuk köftesi ve taze sebzeler",
      },
      price: { English: "₺350", Turkish: "₺350" },
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 7,
      name: {
        English: "Mixed Pizza",
        Turkish: "Karışık Pizza",
      },
      description: {
        English: "Pizza with variety of toppings",
        Turkish: "Çeşitli malzemelerle hazırlanmış pizza",
      },
      price: { English: "₺320", Turkish: "₺320" },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 8,
      name: {
        English: "French Fries",
        Turkish: "Patates Tava",
      },
      description: {
        English: "Crispy fried potatoes",
        Turkish: "Çıtır kızarmış patates",
      },
      price: { English: "₺160", Turkish: "₺160" },
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 9,
      name: {
        English: "Onion Rings",
        Turkish: "Soğan Halkası",
      },
      description: {
        English: "Deep-fried onion rings with sauce",
        Turkish: "Soslu kızarmış soğan halkaları",
      },
      price: { English: "₺180", Turkish: "₺180" },
      image:
        "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 10,
      name: {
        English: "Mozzarella Sticks",
        Turkish: "Mozzarella Stick",
      },
      description: {
        English: "Breaded and fried mozzarella cheese",
        Turkish: "Panelenmiş ve kızartılmış mozzarella peyniri",
      },
      price: { English: "₺180", Turkish: "₺180" },
      image:
        "https://images.unsplash.com/photo-1548340748-6d98de4463d5?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 11,
      name: {
        English: "Cheese Roll",
        Turkish: "Sigara Böreği",
      },
      description: {
        English: "Traditional Turkish pastry with cheese filling",
        Turkish: "Geleneksel peynirli sigara böreği",
      },
      price: { English: "₺180", Turkish: "₺180" },
      image:
        "https://images.unsplash.com/photo-1678465152188-ede70c884018?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 12,
      name: {
        English: "Crispy Chicken",
        Turkish: "Çıtır Tavuk",
      },
      description: {
        English: "Crispy chicken bites with special sauce",
        Turkish: "Özel soslu çıtır tavuk parçaları",
      },
      price: { English: "₺290", Turkish: "₺290" },
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 13,
      name: {
        English: "Local's Platter",
        Turkish: "Local's Tabağı",
      },
      description: {
        English: "Mixed platter with variety of appetizers",
        Turkish: "Çeşitli atıştırmalıklardan oluşan karışık tabak",
      },
      price: { English: "₺350", Turkish: "₺350" },
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=250&auto=format&fit=crop",
    },
  ],
  Toasts: [
    {
      id: 14,
      name: {
        English: "Ayvalik Mixed Toast",
        Turkish: "Ayvalık Karışık Tost",
      },
      description: {
        English: "Toast with mixed ingredients in Ayvalik style",
        Turkish: "Ayvalık usulü karışık malzemeli tost",
      },
      price: { English: "₺260", Turkish: "₺260" },
      image:
        "https://images.unsplash.com/photo-1660744868370-dd3cb2b81821?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 15,
      name: {
        English: "Ayvalik Cheese Toast",
        Turkish: "Ayvalık Kaşarlı Tost",
      },
      description: {
        English: "Toast with yellow cheese in Ayvalik style",
        Turkish: "Ayvalık usulü kaşarlı tost",
      },
      price: { English: "₺250", Turkish: "₺250" },
      image:
        "https://images.unsplash.com/photo-1662287436869-35519ff0c881?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 16,
      name: {
        English: "Ayvalik Feta Toast",
        Turkish: "Ayvalık Beyaz Peynirli Tost",
      },
      description: {
        English: "Toast with feta cheese in Ayvalik style",
        Turkish: "Ayvalık usulü beyaz peynirli tost",
      },
      price: { English: "₺230", Turkish: "₺230" },
      image:
        "https://images.unsplash.com/photo-1662287436785-d2bef840d31e?q=80&w=250&auto=format&fit=crop",
    },
  ],
  "3rd Generation Coffee": [
    {
      id: 17,
      name: {
        English: "Cold Brew",
        Turkish: "Cold Brew",
      },
      description: {
        English: "Ground coffee steeped in cold/room temperature water",
        Turkish: "Oda sıcaklığında demlenmiş kahve",
      },
      price: { English: "₺280", Turkish: "₺280" },
      image:
        "https://images.unsplash.com/photo-1560704429-529dd0e8536c?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 18,
      name: {
        English: "V60",
        Turkish: "V60",
      },
      description: {
        English: "Pour-over coffee using V60 dripper",
        Turkish: "V60 kullanılarak demlenen filtre kahve",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1520903121852-59949ce2f70f?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 19,
      name: {
        English: "Chemex",
        Turkish: "Chemex",
      },
      description: {
        English: "Pour-over coffee using Chemex brewer",
        Turkish: "Chemex kullanılarak demlenen filtre kahve",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1552346989-e069318e20a5?q=80&w=250&auto=format&fit=crop",
    },
  ],
  "Hot Drinks": [
    {
      id: 20,
      name: {
        English: "Tea",
        Turkish: "Çay",
      },
      description: {
        English: "Traditional Turkish tea",
        Turkish: "Geleneksel Türk çayı",
      },
      price: { English: "₺45", Turkish: "₺45" },
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 21,
      name: {
        English: "Cup of Tea",
        Turkish: "Fincan Çay",
      },
      description: {
        English: "Tea served in a cup",
        Turkish: "Fincanda servis edilen çay",
      },
      price: { English: "₺80", Turkish: "₺80" },
      image:
        "https://images.unsplash.com/photo-1594631336803-c11de2c80307?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 22,
      name: {
        English: "Honey Milk",
        Turkish: "Ballı Süt",
      },
      description: {
        English: "Warm milk with honey",
        Turkish: "Ballı sıcak süt",
      },
      price: { English: "₺120", Turkish: "₺120" },
      image:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 23,
      name: {
        English: "Salep",
        Turkish: "Salep",
      },
      description: {
        English: "Traditional hot drink made with orchid flour",
        Turkish: "Orkide yumrusundan yapılan geleneksel sıcak içecek",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 24,
      name: {
        English: "Hot Chocolate",
        Turkish: "Sıcak Çikolata",
      },
      description: {
        English: "Rich hot chocolate drink",
        Turkish: "Zengin sıcak çikolata içeceği",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 25,
      name: {
        English: "Chai Tea Latte",
        Turkish: "Chai Tea Latte",
      },
      description: {
        English: "Spiced tea with steamed milk",
        Turkish: "Baharatlı çay ve buharla ısıtılmış süt",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1576698483491-8c43f0862543?q=80&w=250&auto=format&fit=crop",
    },
  ],
  "Herbal Teas": [
    {
      id: 26,
      name: {
        English: "Linden Tea",
        Turkish: "Ihlamur Çayı",
      },
      description: {
        English: "Soothing linden flower tea",
        Turkish: "Rahatlatıcı ıhlamur çiçeği çayı",
      },
      price: { English: "₺135", Turkish: "₺135" },
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 27,
      name: {
        English: "Winter Tea",
        Turkish: "Kış Çayı",
      },
      description: {
        English: "Warm blend of spices for winter",
        Turkish: "Kış için ısıtıcı baharat karışımı",
      },
      price: { English: "₺135", Turkish: "₺135" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 28,
      name: {
        English: "Green Tea",
        Turkish: "Yeşil Çay",
      },
      description: {
        English: "Refreshing green tea",
        Turkish: "Rahatlatıcı yeşil çay",
      },
      price: { English: "₺135", Turkish: "₺135" },
      image:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 29,
      name: {
        English: "Chamomile Tea",
        Turkish: "Papatya Çayı",
      },
      description: {
        English: "Calming chamomile tea",
        Turkish: "Rahatlatıcı papatya çayı",
      },
      price: { English: "₺135", Turkish: "₺135" },
      image:
        "https://images.unsplash.com/photo-1594631336803-c11de2c80307?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 30,
      name: {
        English: "Sage Tea",
        Turkish: "Ada Çayı",
      },
      description: {
        English: "Herbal sage tea",
        Turkish: "Bitkisel ada çayı",
      },
      price: { English: "₺135", Turkish: "₺135" },
      image:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 31,
      name: {
        English: "Hibiscus Tea",
        Turkish: "Hibiskus Çayı",
      },
      description: {
        English: "Fruity hibiscus tea",
        Turkish: "Meyveli hibiskus çayı",
      },
      price: { English: "₺135", Turkish: "₺135" },
      image:
        "https://images.unsplash.com/photo-1594631336803-c11de2c80307?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 32,
      name: {
        English: "Blue Butterfly Tea",
        Turkish: "Mavi Kelebek Çayı",
      },
      description: {
        English: "Color-changing blue butterfly pea flower tea",
        Turkish: "Renk değiştiren mavi kelebek bezelyesi çiçeği çayı",
      },
      price: { English: "₺135", Turkish: "₺135" },
      image:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=250&auto=format&fit=crop",
    },
  ],
  "Espresso Special": [
    {
      id: 33,
      name: {
        English: "Espresso",
        Turkish: "Espresso",
      },
      description: {
        English:
          "Strong coffee brewed by forcing hot water through finely-ground coffee",
        Turkish:
          "İnce çekilmiş kahve ile sıcak suyun zorla geçirilmesiyle yapılan güçlü kahve",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 34,
      name: {
        English: "Lungo",
        Turkish: "Lungo",
      },
      description: {
        English: "Long espresso with more water",
        Turkish: "Daha fazla su ile uzun espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 35,
      name: {
        English: "Americano",
        Turkish: "Americano",
      },
      description: {
        English: "Espresso with hot water",
        Turkish: "Sıcak su ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 36,
      name: {
        English: "Caramel Macchiato",
        Turkish: "Karamel Macchiato",
      },
      description: {
        English: "Espresso with steamed milk and caramel",
        Turkish: "Buharla ısıtılmış süt ve karamel ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 37,
      name: {
        English: "Cortado",
        Turkish: "Cortado",
      },
      description: {
        English: "Espresso with a small amount of warm milk",
        Turkish: "Küçük miktarda sıcak süt ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 38,
      name: {
        English: "Latte",
        Turkish: "Latte",
      },
      description: {
        English: "Espresso with steamed milk and microfoam",
        Turkish: "Buharla ısıtılmış süt ve mikro köpük ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 39,
      name: {
        English: "Capuccino",
        Turkish: "Capuccino",
      },
      description: {
        English: "Espresso with steamed milk and foam",
        Turkish: "Buharla ısıtılmış süt ve köpük ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 40,
      name: {
        English: "Flat White",
        Turkish: "Flat White",
      },
      description: {
        English: "Espresso with steamed milk and microfoam",
        Turkish: "Buharla ısıtılmış süt ve mikro köpük ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 41,
      name: {
        English: "Mocha",
        Turkish: "Mocha",
      },
      description: {
        English: "Espresso with chocolate and steamed milk",
        Turkish: "Çikolata ve buharda ısıtılmış süt ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 42,
      name: {
        English: "Caramel Latte",
        Turkish: "Karamel Latte",
      },
      description: {
        English: "Espresso with caramel and steamed milk",
        Turkish: "Karamel ve buharda ısıtılmış süt ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 43,
      name: {
        English: "Spanish Latte",
        Turkish: "Spanish Latte",
      },
      description: {
        English: "Espresso with condensed milk and steamed milk",
        Turkish: "Kondanse süt ve buharda ısıtılmış süt ile espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 44,
      name: {
        English: "Affogato",
        Turkish: "Affogato",
      },
      description: {
        English: "Espresso poured over ice cream",
        Turkish: "Dondurmanın üzerine dökülen espresso",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 45,
      name: {
        English: "Red Eye",
        Turkish: "Red Eye",
      },
      description: {
        English: "Coffee with a shot of espresso",
        Turkish: "Espresso ile yapılan kahve",
      },
      price: { English: "₺90", Turkish: "₺90" },
      image:
        "https://images.unsplash.com/photo-1608057003305-a7fc5fef9ae7?q=80&w=250&auto=format&fit=crop",
    },
  ],
  "Matcha Drinks": [
    {
      id: 46,
      name: {
        English: "Matcha Latte",
        Turkish: "Matcha Latte",
      },
      description: {
        English: "Creamy matcha latte",
        Turkish: "Kremalı matcha latte",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 47,
      name: {
        English: "Strawberry Matcha Latte",
        Turkish: "Çilekli Matcha Latte",
      },
      description: {
        English: "Matcha latte with strawberry flavor",
        Turkish: "Çilek aromalı matcha latte",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 48,
      name: {
        English: "Caramel Matcha Latte",
        Turkish: "Caramel Matcha Latte",
      },
      description: {
        English: "Matcha latte with caramel flavor",
        Turkish: "Karamel aromalı matcha latte",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 49,
      name: {
        English: "Chocolate Matcha Latte",
        Turkish: "Çikolatalı Matcha Latte",
      },
      description: {
        English: "Matcha latte with chocolate flavor",
        Turkish: "Çikolata aromalı matcha latte",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 50,
      name: {
        English: "Hazelnut Matcha Latte",
        Turkish: "Fındıklı Matcha Latte",
      },
      description: {
        English: "Matcha latte with hazelnut flavor",
        Turkish: "Fındık aromalı matcha latte",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 51,
      name: {
        English: "Vanilla Matcha Latte",
        Turkish: "Vanilyalı Matcha Latte",
      },
      description: {
        English: "Matcha latte with vanilla flavor",
        Turkish: "Vanilya aromalı matcha latte",
      },
      price: { English: "₺220", Turkish: "₺220" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 52,
      name: {
        English: "Local's Matcha Latte",
        Turkish: "Local's Matcha Latte",
      },
      description: {
        English: "Special matcha latte by Local's Cafe",
        Turkish: "Local's Cafe'ye özel matcha latte",
      },
      price: { English: "₺250", Turkish: "₺250" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
  ],

  "Turkish Coffee": [
    {
      id: 53,
      name: {
        English: "Turkish Coffee",
        Turkish: "Türk Kahvesi",
      },
      description: {
        English: "Traditional Turkish coffee",
        Turkish: "Geleneksel Türk kahvesi",
      },
      price: { English: "₺100", Turkish: "₺100" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 54,
      name: {
        English: "Menengic Coffee",
        Turkish: "Menengiç Kahvesi",
      },
      description: {
        English: "Special Turkish coffee with menengic flavor",
        Turkish: "Menengiç aromalı özel Türk kahvesi",
      },
      price: { English: "₺110", Turkish: "₺110" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 55,
      name: {
        English: "Dibek Coffee",
        Turkish: "Dibek Kahvesi",
      },
      description: {
        English: "Traditional Dibek coffee",
        Turkish: "Geleneksel Dibek kahvesi",
      },
      price: { English: "₺110", Turkish: "₺110" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 56,
      name: {
        English: "Hazelnut Turkish Coffee",
        Turkish: "Fındıklı Türk Kahvesi",
      },
      description: {
        English: "Turkish coffee with hazelnut flavor",
        Turkish: "Fındık aromalı Türk kahvesi",
      },
      price: { English: "₺110", Turkish: "₺110" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 57,
      name: {
        English: "Double Turkish Coffee",
        Turkish: "Double Türk Kahvesi",
      },
      description: {
        English: "Double portion of Turkish coffee",
        Turkish: "Çift porsiyon Türk kahvesi",
      },
      price: { English: "₺150", Turkish: "₺150" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
  ],

  "Cold Drinks": [
    {
      id: 58,
      name: {
        English: "Iced Americano",
        Turkish: "Ice Americano",
      },
      description: {
        English: "Cold version of Americano",
        Turkish: "Soğuk Americano",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 59,
      name: {
        English: "Iced Latte",
        Turkish: "Ice Latte",
      },
      description: {
        English: "Cold version of Latte",
        Turkish: "Soğuk Latte",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 60,
      name: {
        English: "Iced Mocha",
        Turkish: "Ice Mocha",
      },
      description: {
        English: "Cold version of Mocha",
        Turkish: "Soğuk Mocha",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 61,
      name: {
        English: "Iced Spanish Latte",
        Turkish: "Ice Spanish Latte",
      },
      description: {
        English: "Cold version of Spanish Latte",
        Turkish: "Soğuk Spanish Latte",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 62,
      name: {
        English: "Iced Caramel Latte",
        Turkish: "Ice Karamel Latte",
      },
      description: {
        English: "Cold version of Caramel Latte",
        Turkish: "Soğuk Karamel Latte",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 63,
      name: {
        English: "Iced Filter Coffee",
        Turkish: "Ice Filtre Kahve",
      },
      description: {
        English: "Cold version of Filter Coffee",
        Turkish: "Soğuk Filtre Kahve",
      },
      price: { English: "₺140", Turkish: "₺140" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 64,
      name: {
        English: "Milshake",
        Turkish: "Milshake",
      },
      description: {
        English: "Milkshake with various flavors",
        Turkish: "Çeşitli aromalarla hazırlanan milkshake",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 65,
      name: {
        English: "Frappe",
        Turkish: "Frappe",
      },
      description: {
        English: "Cold coffee drink with ice and milk",
        Turkish: "Buz ve süt ile hazırlanan soğuk kahve içeceği",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 66,
      name: {
        English: "Frozen",
        Turkish: "Frozen",
      },
      description: {
        English: "Frozen coffee drink with ice",
        Turkish: "Buz ile hazırlanan dondurulmuş kahve içeceği",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 67,
      name: {
        English: "Cool Lime",
        Turkish: "Cool Lime",
      },
      description: {
        English: "Refreshing lime drink",
        Turkish: "Rahatlatıcı lime içeceği",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 68,
      name: {
        English: "Limonade",
        Turkish: "Limonata",
      },
      description: {
        English: "Refreshing lemon drink",
        Turkish: "Rahatlatıcı limon içeceği",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 69,
      name: {
        English: "Fresh Orange Juice",
        Turkish: "Sıkma Portakal Suyu",
      },
      description: {
        English: "Refreshing orange drink",
        Turkish: "Rahatlatıcı portakal içeceği",
      },
      price: { English: "₺200", Turkish: "₺200" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
  ],

  "Soft Drinks": [
    {
      id: 70,
      name: {
        English: "Water",
        Turkish: "Su",
      },
      description: {
        English: "Bottled water",
        Turkish: "Şişe su",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 71,
      name: {
        English: "Sparkling Water",
        Turkish: "Maden Suyu",
      },
      description: {
        English: "Sparkling bottled water",
        Turkish: "Maden suyu",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 72,
      name: {
        English: "Sparkling Juice",
        Turkish: "Meyveli Soda",
      },
      description: {
        English: "Sparkling juice drink",
        Turkish: "Meyveli soda",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 73,
      name: {
        English: "Italian Soda",
        Turkish: "İtalyan Soda",
      },
      description: {
        English: "Italian-style soda drink",
        Turkish: "İtalyan usulü soda içeceği",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 74,
      name: {
        English: "Churcill",
        Turkish: "Churcill",
      },
      description: {
        English: "Churcill drink",
        Turkish: "Churcill içeceği",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 75,
      name: {
        English: "Redbull",
        Turkish: "Redbull",
      },
      description: {
        English: "Redbull energy drink",
        Turkish: "Redbull enerji içeceği",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 76,
      name: {
        English: "Ice Tea",
        Turkish: "Buzlu Çay",
      },
      description: {
        English: "Ice Tea drink",
        Turkish: "Buzlu çay içeceği",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 77,
      name: {
        English: "Coca Cola",
        Turkish: "Coca Cola",
      },
      description: {
        English: "Coca Cola soft drink",
        Turkish: "Coca Cola gazlı içecek",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 78,
      name: {
        English: "Sprite",
        Turkish: "Sprite",
      },
      description: {
        English: "Sprite soft drink",
        Turkish: "Sprite gazlı içecek",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 79,
      name: {
        English: "Fanta",
        Turkish: "Fanta",
      },
      description: {
        English: "Fanta soft drink",
        Turkish: "Fanta gazlı içecek",
      },
      price: { English: "₺30", Turkish: "₺30" },
      image:
        "https://images.unsplash.com/photo-1574169208507-843761748d8b?q=80&w=250&auto=format&fit=crop",
    },
  ],
};
