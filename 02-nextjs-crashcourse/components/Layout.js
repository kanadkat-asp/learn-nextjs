import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Axios</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;