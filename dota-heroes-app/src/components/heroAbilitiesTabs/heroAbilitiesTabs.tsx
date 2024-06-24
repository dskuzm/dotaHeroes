// Core
import React from "react";

// Elements
import { Tabs, Tab, Box, Typography, Card, CardContent } from "@mui/material";

// Components
import ImageFallback from "@/components/imageFallback/imageFallback";

interface Props {
  heroAbilitiesList: string[];
  abilities: Record<string, Ability>;
  selectedAbility: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface Ability {
  id: string;
  dname: string;
  desc: string;
  img: string;
}

const HeroAbilitiesTabs: React.FC<Props> = ({
  heroAbilitiesList,
  abilities,
  selectedAbility,
  handleTabChange,
}) => {
  return (
    <Box>
      <Box mr={2} mb={4}>
        <Typography variant="h2" component="span">
          Abilities:
        </Typography>
      </Box>
      <Tabs
        value={selectedAbility}
        onChange={handleTabChange}
        aria-label="ability tabs"
      >
        {heroAbilitiesList.map((abilityId, index) => {
          const ability = abilities[abilityId];
          return ability ? (
            <Tab
              key={`tab-${index}`} // Уникальный ключ для Tab
              label={
                <ImageFallback
                  src={`https://cdn.cloudflare.steamstatic.com${ability.img}`}
                  alt={ability.dname}
                  fallbackSrc="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              }
            />
          ) : null;
        })}
      </Tabs>
      <Box>
        {heroAbilitiesList.map((abilityId, index) => {
          const ability = abilities[abilityId];
          return ability && selectedAbility === index ? (
            <Card
              key={`card-${ability.id}`}
              className="customCard"
              sx={{ mb: 2 }}
            >
              <CardContent>
                <Typography variant="h5" pt={2} pb={2} color="secondary.main">
                  {ability.dname}
                </Typography>
                <Typography variant="h6" color="background.paper">
                  {ability.desc || (
                    <Typography
                      component="span"
                      variant="h5"
                      color="secondary.main"
                    >
                      Sorry, data temporarily unavailable.
                    </Typography>
                  )}
                </Typography>
              </CardContent>
            </Card>
          ) : null;
        })}
      </Box>
    </Box>
  );
};

export default HeroAbilitiesTabs;
