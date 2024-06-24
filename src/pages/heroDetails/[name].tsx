// Core
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Elements
import { Container, Typography, Button, Box } from "@mui/material";

// Components
import HeroAbilitiesTabs from "@/components/heroAbilitiesTabs/heroAbilitiesTabs";
import HeadingSection from "@/components/headingSection/headingSection";

// Hooks
import useFetchData from "@/hooks/useFetchData";

// Other
import {
  HEROES_URL,
  HERO_LORE_URL,
  HERO_ABILITIES_URL,
  ABILITIES_URL,
  ATTRIBUTES,
} from "@/hooks/constants";

interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  img: string;
}

interface HeroLore {
  [key: string]: string;
}

interface HeroAbilities {
  [key: string]: {
    abilities: string[];
    talents: string[];
    facets: string[];
  };
}

interface Ability {
  id: string;
  dname: string;
  desc: string;
  img: string;
}

const HeroDetails: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const heroName = name && name.toString();
  const contentSectionRef = useRef<HTMLDivElement>(null);

  const {
    data: heroes,
    isLoading: heroesLoading,
    error: heroesError,
  } = useFetchData<Record<string, Hero>>(HEROES_URL);
  const {
    data: heroLore,
    isLoading: loreLoading,
    error: loreError,
  } = useFetchData<HeroLore>(HERO_LORE_URL);
  const {
    data: heroAbilities,
    isLoading: abilitiesLoading,
    error: abilitiesError,
  } = useFetchData<HeroAbilities>(HERO_ABILITIES_URL);
  const {
    data: abilities,
    isLoading: allAbilitiesLoading,
    error: allAbilitiesError,
  } = useFetchData<Record<string, Ability>>(ABILITIES_URL);

  const handleScrollToSection = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedAbility, setSelectedAbility] = useState(0);

  if (heroesLoading || loreLoading || abilitiesLoading || allAbilitiesLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (heroesError || loreError || abilitiesError || allAbilitiesError) {
    return (
      <Typography>
        Error loading hero data:{" "}
        {heroesError?.message ||
          loreError?.message ||
          abilitiesError?.message ||
          allAbilitiesError?.message}
      </Typography>
    );
  }

  const hero =
    heroes && Object.values(heroes).find((hero) => hero.name === heroName);
  const finalName = hero && hero.name.substring("npc_dota_hero_".length);
  const lore = heroLore && finalName && heroLore[finalName];
  const heroAbilitiesList =
    hero && heroAbilities && heroAbilities[hero.name]?.abilities;

  if (!hero) {
    return <Typography>Hero not found.</Typography>;
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedAbility(newValue);
  };

  return (
    <div className="hero-details-page">
      <video className="hero-video" autoPlay loop muted>
        <source
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${finalName}.webm`}
          type="video/webm"
        />
      </video>

      <HeadingSection
        title={hero.localized_name}
        onClick={handleScrollToSection}
        text="Scroll Down To See More Information"
        animation
      />

      <Container
        id="contentSection"
        ref={contentSectionRef}
        sx={{ pt: 14, pb: 14 }}
      >
        {heroAbilitiesList && heroAbilitiesList.length > 0 && abilities && (
          <HeroAbilitiesTabs
            heroAbilitiesList={heroAbilitiesList}
            abilities={abilities}
            selectedAbility={selectedAbility}
            handleTabChange={handleTabChange}
          />
        )}
      </Container>
      <Box className="hero-info" sx={{ pb: 10, pt: 10 }}>
        <Container>
          <Box mb={4}>
            <Typography variant="h2" component="span" mr={2}>
              Roles:
            </Typography>
            <Typography variant="h5" component="span">
              {hero.roles.join(", ")}
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="h2" component="span" mr={2}>
              Primary Attribute:
            </Typography>
            <Typography variant="h5" component="span">
              {ATTRIBUTES[hero.primary_attr]}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" component="span" mr={2}>
              Attack Type:
            </Typography>
            <Typography variant="h5" component="span">
              {hero.attack_type}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container sx={{ pt: 14, pb: 14 }}>
        <Typography variant="h2" component="span">
          Story
        </Typography>
        <Box mt={4}>
          {lore && (
            <Typography variant="h5" component="span">
              {lore}
            </Typography>
          )}
        </Box>
        <Box sx={{ pt: 14, pb: 14 }}>
          <Link href="/" passHref>
            <Button variant="outlined" color="primary" size="large">
              <Typography variant="h5" component="span">
                Back
              </Typography>
            </Button>
          </Link>
          <video className="lore-video" autoPlay loop muted>
            <source
              src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${finalName}.webm`}
              type="video/webm"
            />
          </video>
        </Box>
      </Container>
    </div>
  );
};

export default HeroDetails;
