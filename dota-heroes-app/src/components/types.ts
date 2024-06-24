export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  img: string;
}

export interface HeroAttributesType {
  [key: string]: string;
}
