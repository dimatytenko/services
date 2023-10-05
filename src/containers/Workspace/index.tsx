import { useSelector, useDispatch } from "react-redux";

import { WorkspaceComponent } from "../../components/Workspace";
import { zoomSelectors } from "../../redux/zoom";
import { categoriesSelectors, categoriesReducer } from "../../redux/categories";

interface WorkspaceProps {
  refNote: React.RefObject<HTMLDivElement>;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  coord: { x: number; y: number } | null;
}

export const Workspace: React.FC<WorkspaceProps> = ({
  refNote,
  onDragStart,
  onDragEnd,
  coord,
}) => {
  const dispatch = useDispatch();
  const zoom = useSelector(zoomSelectors.getZoom);
  const categories = useSelector(categoriesSelectors.getCategories);
  const { addCategory, onEditCategory, onDeleteCategory, addNestedCategory } =
    categoriesReducer;

  return (
    <WorkspaceComponent
      zoom={zoom}
      refNote={refNote}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      coord={coord}
      categories={categories}
      addCategory={() => dispatch(addCategory())}
      onEditCategory={(value: string, id: number) =>
        dispatch(onEditCategory({ title: value, id }))
      }
      onDeleteCategory={(id: number) => dispatch(onDeleteCategory({ id }))}
      addNestedCategory={(id: number) => dispatch(addNestedCategory({ id }))}
    />
  );
};
