import * as React from 'react';
import Head from 'next/head';

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
      </main>
    </div>
  );

  export default Home;
  