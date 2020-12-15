// Libraries
import React from 'react'

// Posts
import {postsJSON} from '../../posts/allPosts'

// Styles
import './posts.css'


export const Posts = () => {
  return (
    <div className="posts-content">
      {postsJSON.map((post, index) => {
        return (
          // Change key to date after testing
          <div key={index}>
            <h2 className="post-title">{post.title}</h2>
            <h6 className="post-date">{post.date}</h6>
            <p className="post-summary">{post.summary}</p>
            {index === postsJSON.length-1 ? null : <hr style={{opacity: '0.4'}}/> }
          </div>
        )
      })}
    </div>
  )
}