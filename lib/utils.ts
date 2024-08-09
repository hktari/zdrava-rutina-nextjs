import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function makeGroupsOf<TItem>(items: TItem[], groupSize): TItem[][] {
  let curGroupIdx = 0;
  const groupedItems = [];

  for (let i = 0, j = 0; i < items.length; i++, j++) {
    const item = items[i];
    if (j === groupSize) {
      j = 0;
      curGroupIdx++;
    }

    if (!groupedItems[curGroupIdx]) {
      groupedItems[curGroupIdx] = [];
    }

    const curGroup = groupedItems[curGroupIdx];

    curGroup.push(item);
  }

  return groupedItems;
}
