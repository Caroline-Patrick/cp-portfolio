import * as React from "react";
import { container } from '../../components/Layout/layout.module.css';
import Layout from "../../components/Layout";

const ResumePage = () => {
  return (
    <div className={container}>
      <Layout pageTitle="CV">
      <embed src="/resume.pdf" type="application/pdf" width="100%" height="600px" />
    </Layout>
    </div>
  )
};

export const Head = () => <title>CV</title>;

export default ResumePage;
