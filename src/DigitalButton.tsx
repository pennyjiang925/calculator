import { Button, Grid } from '@mui/material';

interface DigitalButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
}

export const DigitalButton: React.FC<DigitalButtonProps> = ({
  digit,
  enterDigit,
  xs = 3,
}) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};
