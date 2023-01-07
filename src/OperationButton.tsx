import { Button, Grid, styled } from '@mui/material';

interface OperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: 'rgb(254, 241, 73, 0.1)',
  borderColor: props.selected ? '#fff' : 'rgba(255, 241, 73, 0.5)',
}));

export const OperationButton: React.FC<OperationButtonProps> = ({
  operation,
  selectedOperation,
  selectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};
