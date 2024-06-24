// Core
import { useState } from "react";

// Components
import { Hero } from "@/components/types";

// Hooks
import useFetchData from "@/hooks/useFetchData";
import { HEROES_URL } from "@/hooks/constants";

export const useHeroes = () => {
  const {
    data: heroes,
    isLoading,
    error,
  } = useFetchData<Record<string, Hero>>(HEROES_URL);
  const [nameFilter, setNameFilter] = useState("");
  const [attrFilter, setAttrFilter] = useState<string[]>([]);
  const [attackTypeFilter, setAttackTypeFilter] = useState<string>("");

  const handleAttrFilterChange = (value: string) => {
    setAttrFilter((prev) =>
      prev.includes(value)
        ? prev.filter((attr) => attr !== value)
        : [...prev, value],
    );
  };

  const handleAttackTypeFilterChange = (value: string) => {
    setAttackTypeFilter(value);
  };

  const filteredHeroes = heroes
    ? Object.values(heroes).filter((hero) => {
        return (
          (nameFilter === "" ||
            hero.localized_name
              .toLowerCase()
              .includes(nameFilter.toLowerCase())) &&
          (attrFilter.length === 0 || attrFilter.includes(hero.primary_attr)) &&
          (attackTypeFilter === "" || hero.attack_type === attackTypeFilter)
        );
      })
    : [];

  return {
    isLoading,
    error,
    nameFilter,
    setNameFilter,
    attrFilter,
    handleAttrFilterChange,
    attackTypeFilter,
    handleAttackTypeFilterChange,
    filteredHeroes,
  };
};
