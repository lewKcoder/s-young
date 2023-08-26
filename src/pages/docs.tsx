import { Docs as DocsLayouts } from '@/layouts/docs';
import Head from 'next/head';

export default function Docs() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/site-icon-black.svg" />
      </Head>
      <main>
        <DocsLayouts />
      </main>
    </>
  );
}
