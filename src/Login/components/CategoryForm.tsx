// components/CategoryForm.tsx
import { useState } from "react";
import { supabase } from "../../../supabaseClient";

interface CategoryTranslations {
  English: string[];
  Turkish: string[];
}

interface CategoryFormProps {
  categoryTranslations: CategoryTranslations;
  setCategoryTranslations: React.Dispatch<
    React.SetStateAction<CategoryTranslations>
  >;
}

export default function CategoryForm({
  categoryTranslations,
  setCategoryTranslations,
}: CategoryFormProps) {
  const [newCategoryEN, setNewCategoryEN] = useState("");
  const [newCategoryTR, setNewCategoryTR] = useState("");

  const addCategory = async () => {
    if (!newCategoryEN || !newCategoryTR) return;

    const { error } = await supabase.from("categories").insert({
      name_en: newCategoryEN,
      name_tr: newCategoryTR,
    });

    if (error) {
      console.error("Kategori eklenemedi:", error.message);
      return;
    }

    setCategoryTranslations({
      English: [...categoryTranslations.English, newCategoryEN],
      Turkish: [...categoryTranslations.Turkish, newCategoryTR],
    });

    setNewCategoryEN("");
    setNewCategoryTR("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">📂 Add Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          value={newCategoryEN}
          onChange={(e) => setNewCategoryEN(e.target.value)}
          placeholder="Category (English)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          value={newCategoryTR}
          onChange={(e) => setNewCategoryTR(e.target.value)}
          placeholder="Kategori (Türkçe)"
          className="border px-3 py-2 rounded w-full"
        />
      </div>
      <button
        onClick={addCategory}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        ➕ Add Category
      </button>
    </div>
  );
}
