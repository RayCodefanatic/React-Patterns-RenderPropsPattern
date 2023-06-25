import React from 'react';
import './style.css';
import TemperatureConverter, {
  Kelvin,
  Fahrenheit,
} from './TemperatureConverter';

export default function App() {
  return (
    <div>
      <TemperatureConverter
        renderKelvin={(value) => <Kelvin value={value} />}
        renderFahrenheit={(value) => <Fahrenheit value={value} />}
      />
    </div>
  );
}
