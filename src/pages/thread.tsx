import { Thread as ThreadLayouts } from '@/layouts/thread';
import Head from 'next/head';

export default function Thread() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <ThreadLayouts />
      </main>
    </>
  );
}
