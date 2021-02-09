import * as React from "react";
import { createRef, useState } from "react";
import {
  DropdownHeader,
  DropdownItem,
  DropdownItemContainer,
} from "../utils/styles";
import { MenuItem } from "../utils/types";

type Props = {
  title: string;
  items: MenuItem[];
};

export const Dropdown = ({ title, items }: Props) => {
  const menuRef = createRef<HTMLDivElement>();
  const [selected, setSelected] = useState<MenuItem | undefined>();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<MenuItem[]>(items);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const resetState = () => {
    setExpanded(false);
    setSearchResults(items);
    setSelected(undefined);
    setSearch("");
  };

  return (
    <div>
      <DropdownHeader onClick={() => setExpanded(!expanded)}>
        <p>{title}</p>
        <p>{selected && selected.name}</p>
      </DropdownHeader>
      <DropdownItemContainer ref={menuRef} expanded={expanded}>
        {searchResults.map((item) => (
          <DropdownItem
            key={item.value}
            onClick={() => setSelected(item)}
            isSelected={selected && item.value === selected.value}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownItemContainer>
    </div>
  );
};