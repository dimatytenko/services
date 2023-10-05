import { useRef, useState } from "react";

import { LayoutComponent } from "../../components/Layout";
import { Header } from "./Header";
import { Workspace } from "../Workspace";

export const Layout = () => {
  const [coord, setCoord] = useState<{ x: number; y: number } | null>(null);
  const [startCoord, setStartCoord] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const refNote = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setStartCoord({ x: e.clientX, y: e.clientY });
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const rect = refNote?.current?.getBoundingClientRect() as DOMRect;

    const left = rect.left + (e.clientX - (startCoord?.x || 0));
    const top = rect.top + (e.clientY - (startCoord?.y || 0));

    setCoord({ x: left, y: top });
  };

  const resetCoord = () => {
    setCoord(null);
  };

  return (
    <LayoutComponent header={<Header resetCoord={resetCoord} />}>
      <Workspace
        refNote={refNote}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        coord={coord}
      />
    </LayoutComponent>
  );
};
