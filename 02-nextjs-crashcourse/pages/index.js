import fetch from'isomorphic-unfetch';
import Layout from '../components/Layout'
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
      <div className="jumbotron">
        <div className="container">
          <h1>Welcome to Axios</h1>
          <p className="mt-4 lead">{props.info.disclaimer}</p>
        </div>
      </div>
      <div className="container">
        <p className="mt-4">last updated : <span className="font-weight-bold">{new Date(props.info.time.updated).toLocaleString()}</span></p>
        <Prices bpi={props.info.bpi} />
      </div>
    </Layout>
);

Index.getInitialProps = async function(){
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    info: data
  }
}

export default Index