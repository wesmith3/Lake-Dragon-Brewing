"use client";

import Image from "next/image";
import Link from "next/link";
import Dragon from "../../public/dragon.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function MenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="bg-ldb-green" position="static" sx={{ height: "70px" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Image
              className="bg-ldb-red"
              src={Dragon}
              alt="dragon"
              width={70}
              height={70}
            />
            <Box sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
              <Link href="/" passHref>
                <Typography variant="body1" color="inherit">Home</Typography>
              </Link>
              <Link href="/about" passHref>
                <Typography variant="body1" color="inherit">About</Typography>
              </Link>
              <Link href="/services" passHref>
                <Typography variant="body1" color="inherit">Services</Typography>
              </Link>
              <Link href="/contact" passHref>
                <Typography variant="body1" color="inherit">Contact</Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuBar;

