import * as React from "react";
import {Chip, Card} from '@mui/joy';
import { useStaticQuery, graphql } from "gatsby";
import styles from "./project-list.module.css";
import {heading} from '../Layout/layout.module.css';


const ProjectList = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        github {
          viewer {
            avatarUrl(size: 10)
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    description
                    homepageUrl
                    url
                    updatedAt
                    languages(first: 10) {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                    repositoryTopics(first: 10) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                    object(expression: "main:README.md") {
                      ... on GitHub_Blob {
                        id
                        text
                      }
                    }
                  }
                }
              }
              totalCount
            }
          }
        }
      }
    `
  );

  const repos = data.github.viewer.pinnedItems.edges;

  const extractGifPath = (readmeContent) => {
    const regex = /!\[.*?\]\((.*?\.gif)\)/;
    const match = readmeContent && readmeContent.match(regex);
    return match ? match[1] : null;
  };

  const constructGifUrl = (repoUrl, gifPath) => {
    const repoNameMatch = repoUrl.match(/https:\/\/github\.com\/(.*?)\/(.*?)(\/|$)/);
    if (repoNameMatch) {
      const username = repoNameMatch[1];
      const repoName = repoNameMatch[2];
      const baseRawUrl = `https://raw.githubusercontent.com/${username}/${repoName}/main/`;
      return baseRawUrl + gifPath;
    }
    return null;
  };
  

  return (
    <div>
      <ul>
        {repos.map((repo) => {
          if (!repo.node || !repo.node.repositoryTopics) {
            console.error("No repositoryTopics found for:", repo);
            return null; 
          }

          const repoTopics = repo.node.repositoryTopics.nodes;
          const gifPath = repo.node.object && repo.node.object.text ? extractGifPath(repo.node.object.text) : null;
          const absoluteGifUrl = gifPath ? constructGifUrl(repo.node.url, gifPath) : null;
          

          return (
            <Card key={repo.node.id}>
              <li>
                <h2 className={heading}>
                  <a href={repo.node.url}>{repo.node.name}</a>
                </h2>
                <p>{repo.node.description}</p>
                
                {absoluteGifUrl && <img src={absoluteGifUrl} alt="Repository demo GIF" />}

                {repoTopics.map((topicNode) => (
                  <Chip  
                    sx={{
                      "--Chip-minHeight": "15px",
                      "--Chip-paddingInline": "20px",
                      "--Chip-radius": "10px",
                      "--Chip-gap": "10px"
                    }} 
                    key={topicNode.topic.name}
                  >
                    {topicNode.topic.name}
                  </Chip>
                ))}
              </li>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
