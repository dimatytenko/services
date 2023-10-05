import { BiPlus } from "react-icons/bi";
import clsx from "clsx";

import { Button } from "../Button";
import styles from "./Workspace.module.scss";
import { ICategory } from "../../types/category";
import { NestedCategories } from "../Category";

interface WorkspaceComponentProps {
  zoom: number;
  refNote: React.RefObject<HTMLDivElement>;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  coord: { x: number; y: number } | null;
  categories: ICategory[];
  addCategory: () => void;
  onEditCategory: (value: string, id: number) => void;
  onDeleteCategory: (id: number) => void;
  addNestedCategory: (id: number) => void;
}

export const WorkspaceComponent: React.FC<WorkspaceComponentProps> = ({
  zoom,
  refNote,
  onDragStart,
  onDragEnd,
  coord,
  categories,
  addCategory,
  onEditCategory,
  onDeleteCategory,
  addNestedCategory,
}) => {
  return (
    <div
      className={styles.workspace_wrapper}
      style={{ transform: `scale(${zoom / 100})` }}
    >
      <div
        className={styles.workspace}
        ref={refNote}
        draggable={true}
        onDragStart={(e) => onDragStart(e)}
        onDragEnd={(e) => onDragEnd(e)}
        style={{
          top: `${!coord?.y ? "50%" : coord?.y + "px"}`,
          left: `${!coord?.x ? "50%" : coord?.x + "px"}`,
          transform: `${!coord?.x && !coord?.y ? "translate(-50%, -50%)" : ""}`,
        }}
      >
        <div className={styles.item_wrapper}>
          <div
            className={clsx(styles.item, {
              [styles.active]: !!categories.length,
            })}
          >
            Categories
          </div>
          <Button title={<BiPlus />} onClick={addCategory} roundType />
        </div>
        <NestedCategories
          categories={categories}
          onEditCategory={onEditCategory}
          onDeleteCategory={onDeleteCategory}
          addNestedCategory={addNestedCategory}
          active={categories.length > 1}
        />
      </div>
    </div>
  );
};
