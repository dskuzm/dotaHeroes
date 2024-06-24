// Core
import React from "react";

// Elements
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

// Hooks
import { ATTRIBUTES } from "@/hooks/constants";

// Other
import { Hero } from "../types";

interface Props {
  hero: Hero;
}

const HeroCard: React.FC<Props> = ({ hero }) => {
  return (
    <Card className="customCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://cdn.cloudflare.steamstatic.com/${hero.img}`}
          alt={hero.localized_name}
        />
        <CardContent sx={{ minHeight: "125px" }}>
          <Typography
            gutterBottom
            color="background.paper"
            variant="h5"
            component="div"
          >
            {hero.localized_name}
          </Typography>
          <Typography variant="body2" color="background.paper">
            Primary Attribute: {ATTRIBUTES[hero.primary_attr]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HeroCard;
