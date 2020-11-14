import * as React from 'react';
import Head from 'next/head';
import SearchForm from '../SearchForm/SearchForm';
import Grid from '@material-ui/core/Grid';
import Results from '../Results/Results';

export interface Props {
  title: string;
};

const Home: React.FunctionComponent<Props> = (props) => (
    <div className="container">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        {props.title}
        </h1>
        <Grid container spacing={3}>
          <Grid item xs={12} justify="center">
            <div style={{ backgroundColor: 'lightblue', height: '30vh' }}>
              <Grid item xs={3}>
                <SearchForm />
              </Grid>
            </div>
          </Grid>
          <Results />
        </Grid>
      </main>
    </div>
  );

  export default Home;
  