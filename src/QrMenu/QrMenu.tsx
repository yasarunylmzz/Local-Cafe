import { useState, FC } from "react";

interface MenuItem {
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

interface MenuData {
  [category: string]: MenuItem[];
}

interface CategoryTranslations {
  English: string[];
  Turkish: string[];
}

type LanguageType = "English" | "Turkish";

const QrMenu: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Iced Drinks");
  const [language, setLanguage] = useState<LanguageType>("English");

  const CoffeeIcon: FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-[#5c4033]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>
  );

  const IcedCoffeeIcon: FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-[#5c4033]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2l1.5 5.5L6 2"></path>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    </svg>
  );

  const menuItems: MenuData = {
    "Iced Drinks": [
      {
        id: 1,
        name: {
          English: "Iced Latin Latte - Large",
          Turkish: "Buzlu Latin Latte - Büyük",
        },
        description: {
          English: "Espresso with sweetened milk",
          Turkish: "Espresso ve tatlı süt karışımı",
        },
        price: { English: "₺22", Turkish: "₺42" },
        image:
          "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=250&auto=format&fit=crop",
      },
      {
        id: 2,
        name: {
          English: "Iced Americano - Large",
          Turkish: "Buzlu Americano - Büyük",
        },
        description: {
          English: "Espresso diluted with water",
          Turkish: "Espresso ve su",
        },
        price: { English: "₺16", Turkish: "₺36" },
        image:
          "https://images.unsplash.com/photo-1585494156145-1c60a0e0e9f3?q=80&w=250&auto=format&fit=crop",
      },
      {
        id: 3,
        name: { English: "Cold Brew - Large", Turkish: "Cold Brew - Büyük" },
        description: {
          English: "Ground coffee steeped in cold/room temperature water",
          Turkish: "Oda sıcaklığında demlenmiş kahve",
        },
        price: { English: "₺20", Turkish: "₺40" },
        image:
          "https://images.unsplash.com/photo-1560704429-529dd0e8536c?q=80&w=250&auto=format&fit=crop",
      },
      {
        id: 4,
        name: { English: "Iced Latte - Large", Turkish: "Buzlu Latte - Büyük" },
        description: {
          English: "Espresso with milk",
          Turkish: "Espresso ve süt",
        },
        price: { English: "₺18", Turkish: "₺38" },
        image:
          "https://images.unsplash.com/photo-1579888944880-d98341245702?q=80&w=250&auto=format&fit=crop",
      },
    ],
    "Hot Drinks": [],
    "Pour Over": [],
    Sandwiches: [],
  };

  const categories: CategoryTranslations = {
    English: ["Iced Drinks", "Hot Drinks", "Pour Over", "Sandwiches"],
    Turkish: [
      "Soğuk İçecekler",
      "Sıcak İçecekler",
      "Filtre Kahveler",
      "Sandviçler",
    ],
  };

  const getTranslatedCategory = (category: string): string => {
    const index = categories.English.indexOf(category);
    if (index !== -1) {
      return categories[language][index] || categories.English[index];
    }
    return category;
  };

  const handleCategoryChange = (category: string): void => {
    const englishCategory =
      categories.English[categories[language].indexOf(category)] || category;
    setActiveCategory(englishCategory);
  };

  const CafeLogo: FC = () => (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-2">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="#5c4033">
          <path d="M50,10 C30,10 20,30 20,50 C20,70 30,80 50,80 C70,80 80,70 80,50 C80,30 70,10 50,10 Z M50,70 C35,70 30,65 30,50 C30,35 35,20 50,20 C65,20 70,35 70,50 C70,65 65,70 50,70 Z" />
          <rect x="45" y="80" width="10" height="15" />
          <rect x="30" y="95" width="40" height="5" />
        </svg>
      </div>
      <div className="text-xl font-semibold text-[#5c4033]">
        <span className="text-xs align-top">café</span> Locals
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <div className="lg:w-[480px] bg-white min-h-screen shadow-lg">
        <div className="bg-[#d2b48c] p-2">
          <div className="border-4 border-[#5c4033] bg-[#e6d2b5] p-4 rounded-sm">
            <div className="flex justify-center items-center py-2">
              <div className="text-[#5c4033] text-center">
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-semibold">
                    <span className="text-xs align-top">café</span> Locals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-4">
          <div>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-2 rounded-full bg-gray-100 p-1">
            <button
              className={`px-3 py-1 rounded-full ${
                language === "Turkish" ? "bg-white shadow" : "text-gray-500"
              }`}
              onClick={() => setLanguage("Turkish")}
            >
              Türkçe
            </button>
            <button
              className={`px-3 py-1 rounded-full ${
                language === "English" ? "bg-white shadow" : "text-gray-500"
              }`}
              onClick={() => setLanguage("English")}
            >
              English
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center px-4 py-2 border-b gap-4">
          {categories[language].map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 transition-all ${
                getTranslatedCategory(activeCategory) === category
                  ? "font-bold border-b-2 border-black"
                  : "hover:bg-gray-100 rounded"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="py-4 px-2 md:px-4">
          {menuItems[activeCategory].map((item) => (
            <div
              key={item.id}
              className="flex flex-row mb-6 p-2 hover:bg-gray-50 rounded-lg transition-all"
            >
              <div className="mr-4 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-20 h-20 object-cover rounded-md shadow-sm"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold">{item.name[language]}</h3>
                <p className="text-gray-600 text-sm">
                  {item.description[language]}
                </p>
                <div className="mt-1 flex items-center">
                  <span className="text-lg font-semibold">
                    {item.price[language]}
                  </span>
                  <div className="ml-2">
                    {activeCategory === "Iced Drinks" ? (
                      <IcedCoffeeIcon />
                    ) : (
                      <CoffeeIcon />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {menuItems[activeCategory].length > 0 && (
          <div className="flex justify-center py-8 border-t mt-4">
            <div className="text-center">
              <CafeLogo />
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex flex-1 bg-[#f5f0e8] items-center justify-center p-8">
        <div className="max-w-2xl">
          <div className="text-5xl mb-6 text-[#5c4033] font-bold flex items-baseline">
            <span className="text-lg mr-1">café</span> Locals
          </div>
          <p className="text-2xl text-[#8b5a2b] font-light">
            Kahvenizin tadını çıkarın, kendinizi evinizde hissedin.
          </p>
          <p className="text-2xl text-[#8b5a2b] mt-2 font-light">
            Enjoy your coffee, feel at home.
          </p>
          <div className="mt-12 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop"
              alt="Coffee"
              className="rounded-lg shadow-xl max-w-full h-auto border-8 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrMenu;
