// Core
import React from "react";

// Elements
import { Container, Typography, Box } from "@mui/material";

// Components
import ScrollToSection from "@/components/scrollToSection/scrollToSection";

interface HeadingSectionProps {
  title: string;
  onClick?: () => void;
  text?: string;
  animation?: boolean;
  bgColor?: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({
  title,
  onClick,
  text,
  animation,
  bgColor = "",
}) => {
  return (
    <Box className={`heading-section ${bgColor}`}>
      <Container>
        <Typography variant="h1" color="background.paper">
          {title}
        </Typography>
      </Container>
      {onClick && (
        <ScrollToSection onClick={onClick} text={text} animation={animation} />
      )}
    </Box>
  );
};

export default HeadingSection;
