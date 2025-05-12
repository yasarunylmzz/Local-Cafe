import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";

interface MenuItem {
  id: number;
  category_id: number;
  name_tr: string;
  description_tr?: string;
  price_tr?: string;
  name_en?: string;
  description_en?: string;
  price_en?: string;
  image?: string;
}

interface Category {
  id: number;
  name_tr: string;
}

const ItemsScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedItem, setEditedItem] = useState<Partial<MenuItem>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const categoryId = parseInt(id || "", 10);
      if (!categoryId) return;

      const { data: categoryData } = await supabase
        .from("categories")
        .select("*")
        .eq("id", categoryId)
        .single();

      setCategory(categoryData || null);

      const { data: itemsData } = await supabase
        .from("menu_items")
        .select("*")
        .eq("category_id", categoryId);

      setMenuItems(itemsData || []);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleDelete = async (itemId: number) => {
    await supabase.from("menu_items").delete().eq("id", itemId);
    setMenuItems(menuItems.filter((item) => item.id !== itemId));
  };

  const handleEditClick = (item: MenuItem) => {
    setEditingId(item.id);
    setEditedItem(item);
  };

  const handleSave = async () => {
    if (!editingId) return;

    await supabase.from("menu_items").update(editedItem).eq("id", editingId);

    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, ...editedItem } : item
      )
    );
    setEditingId(null);
    setEditedItem({});
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) return <div className="p-4">Yükleniyor...</div>;
  if (!category) return <div>Kategori bulunamadı.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">{category.name_tr}</h1>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col border p-4 rounded space-y-2"
            >
              {editingId === item.id ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">Adı (TR)</label>
                    <input
                      name="name_tr"
                      value={editedItem.name_tr || ""}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">Name (EN)</label>
                    <input
                      name="name_en"
                      value={editedItem.name_en || ""}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">
                      Açıklama (TR)
                    </label>
                    <textarea
                      name="description_tr"
                      value={editedItem.description_tr || ""}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">
                      Description (EN)
                    </label>
                    <textarea
                      name="description_en"
                      value={editedItem.description_en || ""}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">Fiyat (₺)</label>
                    <input
                      name="price_tr"
                      value={editedItem.price_tr || ""}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">Price (€)</label>
                    <input
                      name="price_en"
                      value={editedItem.price_en || ""}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">İmage_Url</label>
                    <input
                      name="image"
                      value={editedItem.image || ""}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div className="col-span-full flex space-x-2 mt-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Kaydet
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                      Vazgeç
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">
                        {item.name_tr} / {item.name_en}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.description_tr}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {item.description_en}
                      </p>
                      <p className="text-green-700">{item.price_tr}₺</p>
                      <p className="text-blue-700">{item.price_en}€</p>
                      <p>{item.image}</p>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemsScreen;
