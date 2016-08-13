import React from 'react'

const Posts = ({posts}) => {
    return (
      <div>
          {posts.map((data,index) => {
              return (
                  //The Key here should be a id from our database
                  <div className="list-group-item" key={index}>
                     <img src={data.link} alt=""/>
                     <h1>{data.name}</h1>
                      <p>{data.link}</p>
                      <p>{data.desc}</p>
                  </div>
              )
          })}
      </div>
    )
};

export default Posts
