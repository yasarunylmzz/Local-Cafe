// components/Panel.tsx
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import CategoryForm from "./components/CategoryForm";
import MenuItemForm from "./components/MenuItemForm";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import type { MenuItem } from "../../public/data";

export default function Panel() {
  const [categories, setCategories] = useState<
    { id: number; name_en: string; name_tr: string }[]
  >([]);
  const [menuData, setMenuData] = useState<{ [category: string]: MenuItem[] }>(
    {}
  );
  interface CategoryTranslations {
    English: string[];
    Turkish: string[];
  }

  const [categoryTranslations, setCategoryTranslations] =
    useState<CategoryTranslations>({
      English: [],
      Turkish: [],
    });

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) {
      console.error("Kategoriler alınamadı:", error.message);
      return;
    }
    setCategories(data);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Çıkış yapılamadı:", error.message);
    } else {
      console.log("Başarıyla çıkış yapıldı");
      // Redirect the user to the login page or homepage, if necessary
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <Header />
      <div className="bg-white p-6 rounded-md shadow-md">
        <Link
          to={"/"}
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded"
        >
          Çıkış Yap
        </Link>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <CategoryForm
          categoryTranslations={categoryTranslations}
          setCategoryTranslations={setCategoryTranslations}
        />
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <MenuItemForm
          categories={categories}
          menuData={menuData}
          setMenuData={setMenuData}
        />
      </div>
    </div>
  );
}
