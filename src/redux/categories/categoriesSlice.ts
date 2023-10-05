import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ICategory } from "../../types/category";
import { generateRandomId } from "../../helpers/generateRandomId";

export interface ICategoriesState {
  categories: ICategory[];
}

const categorieState: ICategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: categorieState,
  reducers: {
    addCategory: (state) => {
      state.categories = [
        ...state.categories,
        {
          id: generateRandomId(),
          title: "",
          color: "#FFB833",
        },
      ];
    },
    addNestedCategory: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const req = (categories: ICategory[]): ICategory[] => {
        const newCategories = categories.map((category) => {
          if (category.id === id) {
            return {
              ...category,
              categories: [
                ...(category.categories || []),
                {
                  id: generateRandomId(),
                  title: "",
                  color: `#${category.id.toString().slice(-6)}`,
                },
              ],
            };
          } else if (!category.categories) {
            return category;
          } else {
            return {
              ...category,
              categories: req(category.categories),
            };
          }
        });

        return newCategories;
      };

      state.categories = req(state.categories);
    },
    onEditCategory: (
      state,
      action: PayloadAction<{ title: string; id: number }>
    ) => {
      const { title, id } = action.payload;

      const req = (categories: ICategory[]): ICategory[] => {
        const newCategories = categories.map((category) => {
          if (category.id === id) {
            return {
              ...category,
              title,
            };
          } else if (!category.categories) {
            return category;
          } else {
            return {
              ...category,
              categories: req(category.categories),
            };
          }
        });

        return newCategories;
      };

      state.categories = req(state.categories);
    },
    onDeleteCategory: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const req = (categories: ICategory[]): ICategory[] => {
        const newCategories = categories.filter((category, i) => {
          if (category.id === id) {
            return categories.splice(i, 1);
          } else if (!category.categories) {
            return category;
          } else {
            return {
              ...category,
              categories: req(category.categories),
            };
          }
        });

        return newCategories;
      };

      req(state.categories);
    },
  },
});

export const {
  addCategory,
  addNestedCategory,
  onEditCategory,
  onDeleteCategory,
} = categoriesSlice.actions;

export const categories = categoriesSlice.reducer;
