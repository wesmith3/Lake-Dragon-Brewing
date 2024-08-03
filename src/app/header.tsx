'use client'
import { useContext, useState }from 'react'
import Image from 'next/image'
import Dragon from '../../public/dragon.png'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'


function MenuBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  className='bg-ldb-green' position="static" sx={{ height: '70px' }}>
        <Toolbar>
        <Box className="flex items-center justify-center h-screen" sx={{ flexGrow: 1 }}>
          <Image className='bg-ldb-red' src={Dragon} alt="dragon" width={90} height={90}/>
        </Box>
        </Toolbar>
          <List>
            <br />
            <ListItem className='menu-item' button >
              Home
            </ListItem>
            <br />
            <ListItem className='menu-item' button >
              Explore
            </ListItem>
            <br />
            <ListItem className='menu-item' button >
              Search
            </ListItem>
          </List>
          <List
            >
            <ListItem className='menu-item' button >
              My Gallery
            </ListItem>
            <ListItem className='menu-item' button >
              My Account
            </ListItem>
            <ListItem className='menu-item' button >
              Sign Out
    
                </ListItem>
          </List>
              </AppBar>
    </Box>
    </>
  );
}

export default MenuBar
