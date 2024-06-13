import { useSearchParams } from 'react-router-dom';

interface ToggleMenuHook {
  isActive: string | null;
  setIsActiveMenu: (menu: string) => void;
  onCloseMenu: () => void;
}

export const useToggleMenu = (): ToggleMenuHook => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setIsActiveMenu = (menu: string) => {
    setSearchParams({ menu });
  };

  const onCloseMenu = () => {
    setSearchParams({});
  };

  const isActive = searchParams.get('menu');

  return {
    isActive,
    setIsActiveMenu,
    onCloseMenu
  };
};
