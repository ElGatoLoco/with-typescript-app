import Head from 'next/head';
import React from 'react';
import Page from '../layouts/Page';
import Box from '../ui/Box';
import { H1 } from '../ui/text';

const Something = () => (
  <>
    <Head>
      <title>NextJS w/ TypeScript - Something Demo Page</title>
    </Head>
    <Page>
      <Box>
        <H1>Something</H1>
      </Box>
    </Page>
  </>
);

export default Something;
