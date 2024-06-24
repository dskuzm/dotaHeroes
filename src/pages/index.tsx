// Core
import React, { useRef } from "react";
import { NextPage } from "next";
import {Container, Box, Typography, Grid, useTheme, CircularProgress} from "@mui/material";

// Components
import HeroesList from "@/components/heroesList/heroesList";
import Filters from "@/components/filter/filters";
import HeadingSection from "@/components/headingSection/headingSection";

// Hooks
import { useHeroes } from "@/hooks/useHeroes/useHeroes";

const Home: NextPage = () => {
  const theme = useTheme();
  const contentSectionRef = useRef<HTMLDivElement>(null);
  const {
    isLoading,
    error,
    filteredHeroes,
    nameFilter,
    setNameFilter,
    attrFilter,
    handleAttrFilterChange,
    attackTypeFilter,
    handleAttackTypeFilterChange,
  } = useHeroes();

  if (isLoading) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
    );
  }
  if (isLoading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography>Error loading data: {error.message}</Typography>;

  const handleScrollToSection = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeadingSection
        title="Heroes"
        onClick={handleScrollToSection}
        bgColor="heroes-bg"
        animation
      />
      <Container
        id="contentSection"
        ref={contentSectionRef}
        sx={{ pt: 14, pb: 14 }}
      >
        <Filters
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
          attrFilter={attrFilter}
          handleAttrFilterChange={handleAttrFilterChange}
          attackTypeFilter={attackTypeFilter}
          handleAttackTypeFilterChange={handleAttackTypeFilterChange}
        />

        {filteredHeroes.length > 0 ? (
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <HeroesList heroes={filteredHeroes} />
          </Grid>
        ) : (
          <Box pt={8} pb={8}>
            <Typography variant="h5" color="secondary.main">
              No heroes match the selected filters.
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Home;
