import { AppBar } from '@mui/material';
import { SideBar } from './SideBar';
import { Header } from './Header/Header';
const drawerWidth = 294;

const Layout = () => {
  return (
    <div>
      <section style={{ display: 'flex', gap: '10px' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` }
          }}
        >
          <Header />
        </AppBar>
        <SideBar drawerWidth={drawerWidth} />
      </section>
    </div>
  );
};

export default Layout;
