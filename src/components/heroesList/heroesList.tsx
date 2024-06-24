// Core
import React from "react";
import NextLink from "next/link";

// Elements
import { Grid } from "@mui/material";

// Components
import HeroCard from "../heroCard/heroCard";

// Other
import { Hero } from "../types";

interface HeroesListProps {
  heroes: Hero[];
}

const HeroesList: React.FC<HeroesListProps> = ({ heroes }) => {
  return (
    <>
      {heroes.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <NextLink href={`/heroDetails/${item.name}`} passHref>
            <HeroCard hero={item} />
          </NextLink>
        </Grid>
      ))}
    </>
  );
};

export default HeroesList;
