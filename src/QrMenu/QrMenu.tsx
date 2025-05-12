import { useState, type FC, useEffect } from "react";
import { type CategoryTranslations, type MenuData } from "../../public/data";
import { supabase } from "../../supabaseClient";

type LanguageType = "English" | "Turkish";

const QrMenu: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [language, setLanguage] = useState<LanguageType>("Turkish");
  const [categories, setCategories] = useState<CategoryTranslations>({
    English: [],
    Turkish: [],
  });
  const [menuItems, setMenuItems] = useState<MenuData>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("id, name_en, name_tr");
        if (error) throw error;

        const translations: CategoryTranslations = { English: [], Turkish: [] };
        const categoryMap: Record<string, string> = {};

        data.forEach((category) => {
          translations.English.push(category.name_en);
          translations.Turkish.push(category.name_tr);
          categoryMap[category.id] = category.name_en; // Map category ID to English name for access
        });

        setCategories(translations);
        setActiveCategory(translations.English[0] || "");
        return categoryMap as Record<string, string>; // Returning map to use in items fetching
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    const fetchMenuItems = async (categoryMap: Record<string, string>) => {
      try {
        const { data, error } = await supabase.from("menu_items").select("*");
        if (error) throw error;

        const items: MenuData = {};

        data.forEach((item) => {
          const category = categoryMap[item.category_id]; // Using item.category_id to get category name

          if (!items[category]) {
            items[category] = [];
          }

          items[category].push({
            id: item.id,
            name: {
              English: item.name_en,
              Turkish: item.name_tr,
            },
            description: {
              English: item.description_en,
              Turkish: item.description_tr,
            },
            price: {
              English: item.price_en,
              Turkish: item.price_tr,
            },
            image: item.image,
          });
        });

        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu items: ", error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      try {
        const categoryMap = await fetchCategories();
        if (categoryMap) {
          await fetchMenuItems(categoryMap);
        } else {
          console.error("Category map is undefined.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTranslatedCategory = (category: string): string => {
    const index = categories.English.indexOf(category);
    if (index !== -1) {
      return categories[language][index] || category;
    }
    return category;
  };

  const handleCategoryChange = (category: string): void => {
    const englishCategory =
      categories.English[categories[language].indexOf(category)] || category;
    setActiveCategory(englishCategory);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <div className="max-w-2xl  bg-white min-h-screen shadow-xl relative">
        <header className="relative">
          <div className="relative h-72 md:h-80 overflow-hidden rounded-b-3xl shadow-xl">
            <img
              src="../../public/logo.jpg"
              alt="Cafe Ambiance"
              className="w-full h-full object-cover brightness-75"
            />

            {/* Kahverengi degrade örtü */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#3a250f80] to-[#5c4033]/80"></div>

            {/* Başlık ve Alt Başlık */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg tracking-wider">
                Local's Cafe
              </h1>
              <p className="text-sm md:text-base text-white mt-2 italic font-light">
                Kahve & Lezzet
              </p>
            </div>
          </div>
        </header>

        {/* Header ile içerik arasına ufak boşluk */}
        <div className="h-8"></div>

        {/* Header Altı Boşluk */}
        <div className="h-14"></div>

        {/* Dil Değiştirme */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2 rounded-full bg-gray-100 p-1 border">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                language === "Turkish"
                  ? "bg-[#5c4033] text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setLanguage("Turkish")}
            >
              Türkçe
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                language === "English"
                  ? "bg-[#5c4033] text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setLanguage("English")}
            >
              English
            </button>
          </div>
        </div>

        {/* Kategoriler */}
        <div className="flex overflow-x-auto py-4 px-6 mt-4 scrollbar-hide">
          <div className="flex space-x-3 mx-auto">
            {categories[language].map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 text-sm font-medium transition-all rounded-full whitespace-nowrap ${
                  getTranslatedCategory(activeCategory) === category
                    ? "bg-[#5c4033] text-white shadow-lg"
                    : "bg-amber-50 text-[#5c4033] border border-amber-200 hover:bg-amber-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menü Öğeleri */}
        <div className="py-6 px-4 space-y-4 mx-auto max-w-2xl">
          <h2 className="text-xl font-bold text-[#5c4033] mb-4 pl-2 border-l-4 border-[#5c4033]">
            {getTranslatedCategory(activeCategory)}
          </h2>

          {menuItems[activeCategory]?.length ? (
            menuItems[activeCategory].map((item) => (
              <div
                key={item.id}
                className="group flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 hover:border-amber-300"
              >
                <div className="relative flex-shrink-0 mr-4">
                  <img
                    src={item.image}
                    alt={item.name[language]}
                    className="w-28 h-28 object-cover rounded-lg shadow-md border-2 border-white group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#5c4033] text-white px-3 py-1 text-sm font-bold rounded-tl-lg rounded-br-lg">
                    {item.price[language]}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-[#5c4033] mb-1 group-hover:text-amber-800">
                    {item.name[language]}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description[language]}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="mt-2 font-medium">
                {language === "English"
                  ? "No items available in this category."
                  : "Bu kategoride ürün bulunmamaktadır."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QrMenu;
