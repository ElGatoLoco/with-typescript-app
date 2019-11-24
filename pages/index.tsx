import Head from 'next/head';
import React from 'react';
import Page from '../layouts/Page';
import Box from '../ui/Box';
import { H1 } from '../ui/text';

export default () => (
  <>
    <Head>
      <title>NextJS w/ TypeScript Starter</title>
    </Head>
    <Page>
      <Box>
        <H1>Home</H1>
      </Box>
    </Page>
  </>
);
