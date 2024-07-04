import { useSearchParams } from 'react-router-dom';

interface ToggleMenuHook {
  isActive: string | null;
  settings: string | null;
  setIsActiveMenu: (menu: string, settings?: string) => void;
  onCloseMenu: () => void;
}

export const useToggleMenu = (): ToggleMenuHook => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setIsActiveMenu = (menu: string, settings?: string) => {
    const params: Record<string, string> = { menu };

    if (settings !== undefined) {
      params.settings = settings;
    }

    setSearchParams(params);
  };

  const onCloseMenu = () => {
    setSearchParams({});
  };

  const isActive = searchParams.get('menu');
  const settings = searchParams.get('settings');

  return {
    isActive,
    settings,
    setIsActiveMenu,
    onCloseMenu
  };
};
