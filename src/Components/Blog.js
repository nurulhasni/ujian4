import React, { Component } from 'react'






class Blog extends Component {

    constructor() {
        super();
        this.state = { blogs: [], isloaded: false }
    }



    componentDidMount() {
        const url = 'https://dummyapi.io/data/api/user?limit=10'
        fetch(url, {
            method: 'GET',
            headers: { 'app-id': '601f5dce05841057a3114973' }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isloaded: true,
                    blogs: json.data
                })
            })


    }


    render() {

        const { isloaded, blogs } = this.state;

        if (!isloaded) {
            return <div>Loading...</div>
        }

        else {
            return (
                
                    <div  class="section-vcardbody section-home" id="section-home">
                    <div clasName="section-blog">
                    <h2 class="section-title">Blog</h2>
                    
                    { blogs.map(blog => {

                        return(
                           
<div className="blog-posts" >
  {/* blog-item */}
  <div className="blog-item" >
    <div className="blog-item-wrapper"key={blog.id}>
      {/* blog item thumbnail */}
      <div className="blog-item-thumb">
        <a  className="loadPost"><img src={blog.picture} alt /></a>
      </div>
      {/* /blog item thumbnail */}
      {/* Blog item - infos */}
      <div className="blog-item-infos">
        {/* blog-item-title */}
        <div className="blog-item-title-wrapper">
          <h2 className="blog-item-title title-border"><a className="loadPost">{blog.title} {blog.firstName} {blog.lastName}</a></h2>
        </div>
        {/* /blog-item-title */}
        {/* blog item - description */}
        <div className="blog-item-description">
          <p><a href="single.html" className="loadPost">{blog.email}</a></p>
        </div>
        {/* /blog-item-description */}
        {/* blog item - link */}
        <div className="blog-item-link">
          <a href="single.html" className="btn btn-default loadPost">See More</a>
        </div>
        {/* /blog item - link */}
      </div>
      {/* /blog item - infos */}
    </div>
  </div>
  {/* /blog-item */}
</div>

                        )
                    }
                    
                    

                            

                    
                )}
                    
                    
                    
                    </div>
                </div>


                
                

            )

            
        }

    }
}

export default Blog;
