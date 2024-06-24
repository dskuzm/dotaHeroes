import { HeroAttributesType } from "@/components/types";

export const API_URL =
  "https://raw.githubusercontent.com/odota/dotaconstants/master/build/";

export const HEROES_URL = `${API_URL}heroes.json`;
export const HERO_LORE_URL = `${API_URL}hero_lore.json`;
export const HERO_ABILITIES_URL = `${API_URL}hero_abilities.json`;
export const ABILITIES_URL = `${API_URL}abilities.json`;

export const ATTRIBUTES: HeroAttributesType = {
  all: "Universal",
  agi: "Agility",
  str: "Strength",
  int: "Intelligence",
};
