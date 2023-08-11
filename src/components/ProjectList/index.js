import * as React from "react";
import { Button, Chip, Card, CardContent, Typography } from "@mui/joy";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./project-list.module.css";
import { heading } from "../Layout/layout.module.css";

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
    const repoNameMatch = repoUrl.match(
      /https:\/\/github\.com\/(.*?)\/(.*?)(\/|$)/
    );
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
      <hr></hr>

      <ul>
        {repos.map((repo) => {
          if (!repo.node || !repo.node.repositoryTopics) {
            console.error("No repositoryTopics found for:", repo);
            return null;
          }

          const repoTopics = repo.node.repositoryTopics.nodes;
          const gifPath =
            repo.node.object && repo.node.object.text
              ? extractGifPath(repo.node.object.text)
              : null;
          const absoluteGifUrl = gifPath
            ? constructGifUrl(repo.node.url, gifPath)
            : null;

          return (
            <Card
              className="projectCards"
              sx={{ margin: 10 }}
              variant="soft"
              key={repo.node.id}
            >
              <CardContent>
                <li>
                  <Typography level="title-md" className={heading}>
                    <a href={repo.node.homepageUrl}>{repo.node.name}</a>
                  </Typography>
                  <Typography sx={{ marginBottom: 5 }}>
                    {repo.node.description}
                  
<br></br>
<br></br>
                  <a href={repo.node.url} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                    <Button color="neutral">View on GitHub</Button>
                  </a>
            
                  </Typography>
                  {absoluteGifUrl && (
                    <img src={absoluteGifUrl} alt="Repository demo GIF" />
                  )}
<br></br>
                  {repoTopics.map((topicNode) => (
                    <Chip
                    sx={{
                      backgroundColor: '#2f3e46', 
                      color: '#cad2c5',
                        "--Chip-minHeight": "15px",
                        "--Chip-paddingInline": "20px",
                        "--Chip-radius": "10px",
                        "--Chip-gap": "10px",
                        "--Chip-margin": "2px",
                      }}
                      key={topicNode.topic.name}
                    >
                      {topicNode.topic.name}
                      
                    </Chip>
                  ))}
                </li>
              </CardContent>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
