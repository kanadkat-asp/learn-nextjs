import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1>About Axios</h1>
          <p className="mt-4 lead">CoinDesk provides a simple API to make its Bitcoin Price Index (BPI) data programmatically available to others. You are free to use this API to include our data in any application or website as you see fit, as long as each page or app that uses it includes the text “Powered by CoinDesk”, linking to our price page. CoinDesk data is made available through a number of HTTP resources, and data is returned in JSON format.</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About