import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';
import { IconButton, Switch } from '@mui/material';
import { useTheme } from '@emotion/react';
const label = { inputProps: { 'aria-label': 'Color switch demo' } };

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
function Setting() {
  // Access theme settings from context
  const {
    onToggleMode,
    onToggleDirection,
    onToggleLayout,
    onToggleContrast,
    onToggleStretch,
    onChangeColor,
    colorOption,
  } = useContext(SettingsContext);




  return (
    <div>
        <Switch {...label} defaultChecked color="secondary" />

      <button onClick={onToggleMode}>Toggle Theme Mode</button>

      <button onClick={onToggleDirection}>Toggle Direction</button>
      <button onClick={onToggleLayout}>Toggle Layout</button>
      <button onClick={onToggleContrast}>Toggle Contrast</button>
      <button onClick={onToggleStretch}>Toggle Stretch</button>

    </div>
  );
}

export default Setting;
