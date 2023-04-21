import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Card } from '@material-ui/core';

export function Copyright(props) {
  return (
    <Card >
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © Sandra Yun '}
        <Link color="inherit" href="https://github.com/sandyml/take-a-hike">
          Github
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Card>
  );
}