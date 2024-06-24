// Core
import React from "react";

// Elements
import { IconButton, Box, Typography, useTheme } from "@mui/material";

// Other
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { keyframes } from "@emotion/react";

interface ScrollToSectionProps {
  onClick: () => void;
  text?: string;
  animation?: boolean;
}

const heartbeat = keyframes`
  0% {
    transform: scale(.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(.75);
  }
  100% {
    transform: scale(.75);
  }
`;

const ScrollToSection: React.FC<ScrollToSectionProps> = ({
  onClick,
  text,
  animation,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: theme.spacing(8),
        left: "50%",
        transform: "translateX(-50%)",
        color: theme.palette.primary.contrastText,
      }}
    >
      {text && (
        <Typography color="secondary.main" variant="h5" mr={3}>
          {text}
        </Typography>
      )}
      <IconButton
        onClick={onClick}
        sx={{
          color: "inherit",
          animation: animation ? `${heartbeat} 2s infinite` : "none",
          "&:hover": {
            color: theme.palette.secondary.main,
          },
        }}
      >
        <ArrowDownwardIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollToSection;
