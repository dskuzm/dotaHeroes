// Core
import { useRouter } from "next/router";
import NextLink from "next/link";

// Elements
import { AppBar, Toolbar, Box, styled } from "@mui/material";

const LogoImage = styled("img")({
  maxHeight: 40,
  marginRight: "1rem",
});

const HeaderComponent = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const pages = [{ name: "Home", path: "/" }];

  return (
    <AppBar color="primary" className="header" elevation={0}>
      <Toolbar>
        <Box p={3}>
          <NextLink href="/" passHref>
            <LogoImage
              src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
              alt="Dota Heroes Logo"
            />
          </NextLink>
        </Box>
        <Box className="header-navigation">
          {pages.map(
            (page) =>
              page.path !== currentPath && (
                <NextLink key={page.path} href={page.path} passHref>
                  {page.name}
                </NextLink>
              ),
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
