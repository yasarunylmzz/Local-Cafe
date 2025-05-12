import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

interface Category {
  id: number;
  name_tr: string;
}

const CategoriesScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data || []);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Kategoriler
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link
              to={`/admin/panel/categories/${category.id}`}
              key={category.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl p-6 text-center border border-gray-200 hover:border-blue-500"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {category.name_tr}
              </h2>
              <p className="text-sm text-gray-500 mt-1">ID: {category.id}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesScreen;
