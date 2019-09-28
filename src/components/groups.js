import React from 'react'

const Groups = ({ name, data, description }) => {
  console.log(data)
  return (
    <div className="tile is-ancestor is-vertical">
      <div className="tile is-parent">
        <div className="tile is-child box">
          <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent is-vertical">
              <p className="title">{name}</p>
              {description}
            </div>
            <div className="columns is-multiline">
              {data.edges.map(({ node }) => (
                <div className="column is-4" key={node.id}>
                  <div className="tile is-child box">
                    <p className="subtitle">{node.name}</p>
                    {node.social.map(social => (
                      <a href={social.link}>{social.name} </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Groups
