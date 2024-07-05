import { SideBar } from './SideBar';
import { Header } from './Header/Header';
import { styled } from '@mui/material';
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <WrapperOutlet>
          <h1>Outlet</h1>
        </WrapperOutlet>
      </main>
    </div>
  );
};

export default Layout;

const WrapperOutlet = styled('div')(() => ({
  marginLeft: '294px',
}));
