import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export interface Props {
};

const SearchForm: React.FunctionComponent<Props> = (props) => (
  <form noValidate autoComplete="off">
    <Card>
    <CardContent>
      <TextField required id="distrito" label="Distrito" />
      <TextField required id="calle" label="Calle" />
      <Button variant="contained" color="primary">
        Buscar servicios
      </Button>
      </CardContent>
    </Card>
  </form>
  );

  export default SearchForm;
  