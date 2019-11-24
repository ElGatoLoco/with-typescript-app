import Head from 'next/head';
import React from 'react';
import Page from '../layouts/Page';
import Box from '../ui/Box';
import { H1 } from '../ui/text';

export default () => (
  <>
    <Head>
      <title>NextJS w/ TypeScript - About Demo Page</title>
    </Head>
    <Page>
      <Box>
        <H1>About</H1>
      </Box>
    </Page>
  </>
);
