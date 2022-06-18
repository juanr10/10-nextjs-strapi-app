import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pageName }) => {
  return (
    <div>
      <Head>
        <title>Guitar LA - {pageName}</title>
        <meta
          name="description"
          content="website dedicated to the sale of guitars online"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
