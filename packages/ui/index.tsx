import * as React from "react";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
  Navbar,
  UnstyledButton,
  Group,
  Text,
} from "@mantine/core";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";

export type RouteType = {
  element: React.FunctionComponent;
  path: string;
};
export type NavLinkType = {
  label: string;
  path: string;
};

function MainLink({ label, path }: NavLinkType) {
    return (
        <Link to={path}>
            <UnstyledButton
                sx={(theme) => ({
                    display: "block",
                    width: "100%",
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color:
                        theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                    "&:hover": {
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[6]
                                : theme.colors.gray[0],
                    },
                })}
            >
                <Group>
                    <Text>{label}</Text>
                </Group>
            </UnstyledButton>
        </Link>
    );
}

export const AppShell: React.FunctionComponent<{
  title: string;
  routes: RouteType[];
  navLinks: NavLinkType[];
  colorScheme?: "light" | "dark";
}> = ({ title, routes, navLinks, colorScheme }) => (
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
      <MantineAppShell
                padding="md"
                navbar={
                    <Navbar width={{ base: 300 }} height={500} p="xs">
                        {
                            navLinks.map(link => (
                                <MainLink {...link} key={link.path} />
                            ))
                        }

                    </Navbar>
                }
        header={
          <Header
            height={60}
            p="xs"
            sx={{
              display: "flex",
            }}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            <Title>{title}</Title>
          </Header>
        }
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Outlet />
      </MantineAppShell>
    </MantineProvider>
  </BrowserRouter>
);
