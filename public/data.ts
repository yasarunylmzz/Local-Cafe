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
