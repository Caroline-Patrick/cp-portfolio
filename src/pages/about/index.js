import * as React from "react";
import {container} from '../../components/Layout/layout.module.css';
import Layout from "../../components/Layout";


const AboutPage = () => {
  return (
    <div className={container}>
      <Layout pageTitle="About Me"></Layout> 
    </div>
  );
};
export const Head = () => <title>About</title>;

export default AboutPage;
