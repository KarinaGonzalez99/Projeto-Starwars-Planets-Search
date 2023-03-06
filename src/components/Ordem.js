import React, { useContext } from 'react';
import { FormControl, InputLabel, MenuItem,
  Select, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import StarWarsContext from '../context/StarWarsContext';

function Ordem() {
  const { ordem, setOrdem, random, setRandom } = useContext(StarWarsContext);
  const options = [
    { value: 'diameter', label: 'Diâmetro' },
    { value: 'orbital_period', label: 'Período orbital' },
    { value: 'population', label: 'População' },
    { value: 'rotation_period', label: 'Período de rotação' },
    { value: 'surface_water', label: 'Água na superfície' },
  ];

  return (
    <div>
      <FormControl variant="outlined" margin="dense">
        <InputLabel id="select-column-label">Coluna</InputLabel>
        <Select
          data-testid="column-sort"
          labelId="select-column-label"
          id="select-column"
          value={ ordem }
          onChange={ ({ target }) => {
            setOrdem(target.value);
          } }
          label="Coluna"
        >
          {options.map((option) => (
            <MenuItem
              key={ option.value }
              value={ option.value }
            >
              {option.label}

            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl component="fieldset" margin="dense">
        <RadioGroup
          row
          aria-label="Ordenação"
          name="sortOrder"
          value={ random }
          onChange={ ({ target }) => { setRandom(target.value); } }
        >
          <FormControlLabel
            value="ASC"
            control={ <Radio data-testid="column-sort-input-asc" /> }
            label="Ascendente"
          />
          <FormControlLabel
            value="DESC"
            control={ <Radio data-testid="column-sort-input-desc" /> }
            label="Descendente"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Ordem;
