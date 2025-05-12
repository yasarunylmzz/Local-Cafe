// components/MenuItemForm.tsx
import { useState } from "react";
import { supabase } from "../../../supabaseClient";
import type { MenuItem } from "../../../public/data"; // MenuItem tipini import ediyoruz
// MenuItem tipini import ediyoruz

interface MenuItemFormProps {
  categories: { id: number; name_en: string; name_tr: string }[];
  menuData: { [category: string]: MenuItem[] };
  setMenuData: React.Dispatch<
    React.SetStateAction<{ [category: string]: MenuItem[] }>
  >;
}

export default function MenuItemForm({
  categories,
  menuData,
  setMenuData,
}: MenuItemFormProps) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [newItem, setNewItem] = useState<MenuItem>({
    id: Date.now(),
    name: { English: "", Turkish: "" },
    description: { English: "", Turkish: "" },
    price: { English: "", Turkish: "" },
    image: "",
  });

  const addMenuItem = async () => {
    const selectedCategory = categories[currentCategoryIndex];
    if (!selectedCategory) return;

    const newMenuItem = {
      name_en: newItem.name.English,
      name_tr: newItem.name.Turkish,
      description_en: newItem.description.English,
      description_tr: newItem.description.Turkish,
      price_en: newItem.price.English,
      price_tr: newItem.price.Turkish,
      image: newItem.image,
      category_id: selectedCategory.id,
    };

    const { error } = await supabase.from("menu_items").insert([newMenuItem]);

    if (error) {
      console.error("Menü öğesi eklenemedi:", error.message);
      return;
    }

    setMenuData({
      ...menuData,
      [selectedCategory.name_en]: [
        ...(menuData[selectedCategory.name_en] || []),
        { ...newItem, id: Date.now() },
      ],
    });

    setNewItem({
      id: Date.now(),
      name: { English: "", Turkish: "" },
      description: { English: "", Turkish: "" },
      price: { English: "", Turkish: "" },
      image: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">🍽️ Add Menu Item</h2>
      <div className="mb-4">
        <select
          value={currentCategoryIndex}
          onChange={(e) => setCurrentCategoryIndex(Number(e.target.value))}
          className="border px-3 py-2 rounded w-full"
        >
          {categories.map((cat, i) => (
            <option key={i} value={i}>
              {cat.id} - {cat.name_en} / {cat.name_tr}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          value={newItem.name.English}
          onChange={(e) =>
            setNewItem({
              ...newItem,
              name: { ...newItem.name, English: e.target.value },
            })
          }
          placeholder="Name (English)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          value={newItem.name.Turkish}
          onChange={(e) =>
            setNewItem({
              ...newItem,
              name: { ...newItem.name, Turkish: e.target.value },
            })
          }
          placeholder="İsim (Türkçe)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          value={newItem.description.English}
          onChange={(e) =>
            setNewItem({
              ...newItem,
              description: { ...newItem.description, English: e.target.value },
            })
          }
          placeholder="Description (EN)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          value={newItem.description.Turkish}
          onChange={(e) =>
            setNewItem({
              ...newItem,
              description: { ...newItem.description, Turkish: e.target.value },
            })
          }
          placeholder="Açıklama (TR)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          value={newItem.price.English}
          onChange={(e) =>
            setNewItem({
              ...newItem,
              price: { ...newItem.price, English: e.target.value },
            })
          }
          placeholder="Price (EN)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          value={newItem.price.Turkish}
          onChange={(e) =>
            setNewItem({
              ...newItem,
              price: { ...newItem.price, Turkish: e.target.value },
            })
          }
          placeholder="Fiyat (TR)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
          placeholder="Image URL"
          className="border px-3 py-2 rounded w-full col-span-2"
        />
      </div>
      <button
        onClick={addMenuItem}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        ➕ Add Menu Item
      </button>
    </div>
  );
}
