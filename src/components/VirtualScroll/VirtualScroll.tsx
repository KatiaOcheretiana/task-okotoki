import { useState, useEffect, useRef, ReactNode } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-y: auto;
  padding: 0 15px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 20px;
  }

  scrollbar-width: thin;
  scrollbar-color: #f1f1f1 transparent;
`;

interface VirtualScrollProps {
  items: string[];
  rowHeight: number;
  visibleRows: number;
  bufferRows: number;
  renderRow: (item: string, index: number) => ReactNode;
  filter: string;
}

export default function VirtualScroll({
  items,
  rowHeight,
  visibleRows,
  bufferRows,
  renderRow,
  filter,
}: VirtualScrollProps) {
  const totalVisibleRows = visibleRows + 2 * bufferRows;

  const rootRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);

  function getTopHeight() {
    return rowHeight * Math.max(start - bufferRows, 0);
  }

  function getBottomHeight() {
    return rowHeight * Math.max(items.length - (start + totalVisibleRows), 0);
  }

  useEffect(() => {
    function onScroll(e: Event) {
      const target = e.target as HTMLElement;
      setStart(
        Math.min(
          items.length - totalVisibleRows,
          Math.floor(target.scrollTop / rowHeight)
        )
      );
    }

    const currentRef = rootRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", onScroll);
      return () => {
        currentRef.removeEventListener("scroll", onScroll);
      };
    }
  }, [items.length, totalVisibleRows, rowHeight]);

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.scrollTop = 0;
      setStart(0);
    }
  }, [filter]);

  const displayedItems = items.slice(
    Math.max(start - bufferRows, 0),
    start + totalVisibleRows
  );

  return (
    <Wrapper
      style={{ height: visibleRows * rowHeight, overflowY: "auto" }}
      ref={rootRef}
    >
      <div style={{ height: getTopHeight() }} />
      <div>
        {displayedItems.map((item, index) =>
          renderRow(item, Math.max(start - bufferRows, 0) + index)
        )}
      </div>
      <div style={{ height: getBottomHeight() }} />
    </Wrapper>
  );
}
