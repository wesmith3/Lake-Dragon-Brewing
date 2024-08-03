"use client";
import Image from "next/image";
import Dragon from "../../public/dragon.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

function MenuBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="bg-ldb-green"
          position="static"
          sx={{ height: "70px" }}
        >
          <Toolbar>
            <Box
              className="flex items-center justify-center h-screen"
              sx={{ flexGrow: 1 }}
            >
              <Image
                className="bg-ldb-red"
                src={Dragon}
                alt="dragon"
                width={90}
                height={90}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default MenuBar;
