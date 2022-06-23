import '../styles/globals.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <div className="lg:px-32 md:px-16 px-4">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  )
}

export default MyApp
