import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { EditCalendarOutlined } from '@mui/icons-material';
import EditDate from './EditDate';

export default function PopoverPopupState() {
 return (
  <PopupState variant="popover" popupId="demo-popup-popover">
   {(popupState) => (
    <div>
     <Button variant="text" {...bindTrigger(popupState)}>
     <EditCalendarOutlined />
      edit
     </Button>
     <Popover
      {...bindPopover(popupState)}
      anchorOrigin={{
       vertical: 'bottom',
       horizontal: 'center',
      }}
      transformOrigin={{
       vertical: 'top',
       horizontal: 'center',
      }}
     >
      <Typography sx={{ p: 2 }}>
       {/* <EditDate /> */}
       {/* <MyVisits /> */}
      </Typography>
     </Popover>
    </div>
   )}
  </PopupState>
 );
}
