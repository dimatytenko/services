import clsx from "clsx";

import { Category } from "./Category";
import { ICategory } from "../../types/category";
import styles from "./Category.module.scss";

interface NestedCategoryProps {
  categories: ICategory[];
  onEditCategory: (value: string, id: number) => void;
  onDeleteCategory: (id: number) => void;
  addNestedCategory: (id: number) => void;
  active: boolean;
}

export const NestedCategories: React.FC<NestedCategoryProps> = ({
  categories,
  onEditCategory,
  onDeleteCategory,
  addNestedCategory,
  active,
}) => {
  return (
    <>
      {!!categories.length && (
        <ul
          className={clsx(styles.categories_list, {
            [styles.active]: active,
          })}
        >
          {categories.map((category) => (
            <Category
              key={category.id + category.title}
              category={category}
              onEditCategory={onEditCategory}
              onDeleteCategory={onDeleteCategory}
              addNestedCategory={addNestedCategory}
              active_top={active}
            />
          ))}
        </ul>
      )}{" "}
    </>
  );
};
