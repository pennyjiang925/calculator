import React, { useState } from 'react';
import { Grid, Container, Paper, styled, Button } from '@mui/material';
import { OperationButton } from './OperationButton';
import { DigitalButton } from './DigitalButton';

const OutputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'right',
  height: '2em',
  padding: theme.spacing(2),
  fontSize: '3em',
  overflow: 'hidden',
}));
const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [operation, setOperation] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [overWrite, setOverWrite] = useState(true);

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
    switch (operation) {
      case '÷':
        result = prev / curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '+':
        result = prev + curr;
        break;
    }
    return result;
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue('');
    setOperation('');
    setOverWrite(true);
  };
  const clear = () => {
    setPrevValue('');
    setOperation('');
    setCurrentValue('0');
    setOverWrite(true);
  };

  const del = () => {
    setCurrentValue('0');
    setOverWrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };
  const selectOperation = (operation: string) => {
    setPrevValue(currentValue);
    setOperation(operation);
    setOverWrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === '0' && digit === '0') return;
    if (currentValue.includes('.') && digit === '.') return;
    if (overWrite && digit !== '.') {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverWrite(false);
  };
  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <OperationButton
              operation={'AC'}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <OperationButton
              operation={'C'}
              selectOperation={del}
              selectedOperation={operation}
            />
            <OperationButton
              operation={'%'}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <OperationButton
              operation={'÷'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitalButton digit={'7'} enterDigit={setDigit} />
            <DigitalButton digit={'8'} enterDigit={setDigit} />
            <DigitalButton digit={'9'} enterDigit={setDigit} />
            <OperationButton
              operation={'*'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>

          <Grid item container columnSpacing={1}>
            <DigitalButton digit={'4'} enterDigit={setDigit} />
            <DigitalButton digit={'5'} enterDigit={setDigit} />
            <DigitalButton digit={'6'} enterDigit={setDigit} />
            <OperationButton
              operation={'-'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>

          <Grid item container columnSpacing={1}>
            <DigitalButton digit={'1'} enterDigit={setDigit} />
            <DigitalButton digit={'2'} enterDigit={setDigit} />
            <DigitalButton digit={'3'} enterDigit={setDigit} />
            <OperationButton
              operation={'+'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>

          <Grid item container columnSpacing={1}>
            <DigitalButton digit={'0'} enterDigit={setDigit} xs={6} />
            <DigitalButton digit={'.'} enterDigit={setDigit} />

            <Grid item xs={3}>
              <Button fullWidth variant="contained" onClick={equals}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
