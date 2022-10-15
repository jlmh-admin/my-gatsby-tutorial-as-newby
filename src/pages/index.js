// Step 1: Import React
import * as React from 'react';
//import { Link } from 'gatsby'
import Layout from '../components/layout';
//import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo'

// Step 2: Define your component
/*
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
}
*/

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <img src={"/imgs/smartphone-abc-2.jpg"}
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" width="50%"/>
    </Layout>
  );
}

// You'll learn about this in the next task, just copy it for now
//export const Head = () => <title>Home Page</title>
//or
/*
export const Head = () => (
  <>
    <title>My First Gatsby</title>
    <meta name="description" content="Your description" />
  </>
);
*/
export const Head = () => <Seo title="Home Page" />


// Step 3: Export your component
export default IndexPage;