import * as React from 'react';
import { useStaticQuery, graphql } from "gatsby";


const ProjectList = () => {
    const data = useStaticQuery(
        graphql`
        query MyQuery {
            github {
              viewer {
                pinnedItems(first: 10) {
                  edges {
                    node {
                      ... on GitHub_Repository {
                        id
                        name
                        description
                        updatedAt
                        url
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

    const repos = data.github.viewer.pinnedItems.edges
    

return (
    <div>
<h1>Repos</h1>
<ul>
    {repos.map((repo)=> {
        return (
            <li key={repo.node.name}>
                 <h2 >
                <a href={repo.node.url}>{repo.node.name}</a>
              </h2>
            </li>
        )
    })}
</ul>
    </div>
    
)
}

export default ProjectList;
