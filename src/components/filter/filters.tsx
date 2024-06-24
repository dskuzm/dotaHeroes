// Core
import React from "react";

// Elements
import {
  Grid,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";

// Hooks
import { ATTRIBUTES } from "@/hooks/constants";

interface FiltersProps {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  attrFilter: string[];
  handleAttrFilterChange: (value: string) => void;
  attackTypeFilter: string;
  handleAttackTypeFilterChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  nameFilter,
  setNameFilter,
  attrFilter,
  handleAttrFilterChange,
  attackTypeFilter,
  handleAttackTypeFilterChange,
}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} color="background.paper">
        <TextField
          color="secondary"
          label="Filter by Name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Filter by Attribute
        </Typography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={attrFilter.includes("str")}
                onChange={() => handleAttrFilterChange("str")}
                value="str"
              />
            }
            label={ATTRIBUTES["str"]}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={attrFilter.includes("agi")}
                onChange={() => handleAttrFilterChange("agi")}
                value="agi"
              />
            }
            label={ATTRIBUTES["agi"]}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={attrFilter.includes("int")}
                onChange={() => handleAttrFilterChange("int")}
                value="int"
              />
            }
            label={ATTRIBUTES["int"]}
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Filter by Attack Type
        </Typography>
        <RadioGroup
          value={attackTypeFilter}
          onChange={(e) => handleAttackTypeFilterChange(e.target.value)}
          row
        >
          <FormControlLabel
            color="secondary"
            value=""
            control={<Radio color="secondary" />}
            label="All"
          />
          <FormControlLabel
            value="Melee"
            control={<Radio color="secondary" />}
            label="Melee"
          />
          <FormControlLabel
            value="Ranged"
            control={<Radio color="secondary" />}
            label="Ranged"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default Filters;
