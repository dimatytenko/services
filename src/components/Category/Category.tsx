import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BsCheck } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import clsx from "clsx";

import { ICategory } from "../../types/category";
import styles from "./Category.module.scss";
import { Button } from "../Button";
import { NestedCategories } from "./index";

interface CategoryProps {
  category: ICategory;
  onEditCategory: (value: string, id: number) => void;
  onDeleteCategory: (id: number) => void;
  addNestedCategory: (id: number) => void;
  active_top: boolean;
  active_bottom?: boolean;
}

export const Category: React.FC<CategoryProps> = ({
  category,
  onEditCategory,
  onDeleteCategory,
  addNestedCategory,
  active_top,
}) => {
  const [edit, setEdit] = useState(!category.title ? true : false);
  const [value, setValue] = useState(category.title);

  const onEdit = (id: number) => {
    onEditCategory(value, id);
    setEdit(false);
  };

  return (
    <li>
      <div className={styles.item}>
        <div
          className={clsx(styles.item_mark, {
            [styles.active_top]: active_top,
            [styles.active_bottom]: !!category?.categories?.length,
          })}
        >
          {edit ? (
            <input
              className={styles.input}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <div className={styles.category_icon}>
              <div
                className={styles.label}
                style={{ backgroundColor: `${category.color}` }}
              >
                {category.title}
              </div>
            </div>
          )}
        </div>
        {edit ? (
          <div className={styles.buttons}>
            <Button
              title={<RxCross2 />}
              onClick={() => setEdit(false)}
              roundType
              yellowStyle
              disabled={!value}
            />
            <Button
              title={<BsCheck />}
              onClick={() => onEdit(category.id)}
              roundType
              greenStyle
              disabled={!value}
            />
          </div>
        ) : (
          <div className={styles.buttons}>
            <Button
              title={<BiPlus />}
              onClick={() => addNestedCategory(category.id)}
              roundType
            />
            <Button
              title={<MdEdit />}
              onClick={() => setEdit(true)}
              roundType
            />
            <Button
              title={<RxCross2 />}
              onClick={() => onDeleteCategory(category.id)}
              roundType
              redStyle
            />
          </div>
        )}
      </div>
      <NestedCategories
        categories={category.categories || []}
        onEditCategory={onEditCategory}
        onDeleteCategory={onDeleteCategory}
        addNestedCategory={addNestedCategory}
        active={(category?.categories?.length || 0) > 1}
      />
    </li>
  );
};
