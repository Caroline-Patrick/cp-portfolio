import * as React from "react";
import {container} from '../../components/Layout/layout.module.css';
import Layout from "../../components/Layout";
import ProjectList from "../../components/ProjectList/index.js"



const Projects = () => {
  return (
    <div className={container}>
      <Layout pageTitle="Projects"></Layout>
      <ProjectList />
    </div>
  );
};
export const Head = () => <title>Projects</title>;

export default Projects;
