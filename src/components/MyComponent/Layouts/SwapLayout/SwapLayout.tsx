import React from "react";
import { Stack, Box } from "@mui/material";
import SwapHeader from "./SwapHeader";
import Footer from '../../Footer';
import { LayoutProps } from "models";

const SwapLayout = (props:LayoutProps) => {
  const { children } = props;
  return (
    <Stack
      minHeight="100vh"
      sx={{
        position: "relative",
      }}
    >
      <SwapHeader />
        <Box component="main" sx={{marginTop:20}}>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default SwapLayout;
