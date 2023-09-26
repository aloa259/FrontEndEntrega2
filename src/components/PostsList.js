import { useEffect, useState } from "react";
import Posts from "./Posts";


function PostsList({posts,search}) {
    //const posts = props.posts;
    //const search = props.search;
    
    return (
        <div className="d-flex flex-wrap">
            {posts
                .filter(e => e.text.toLowerCase().includes(search.toLowerCase()))
                .map((post) => (
                    <Posts
                        key={post.id}
                        date={post.createdAt}
                        actor={post.autor}
                        descripcion={post.text}
                        comentarios={post.comments}
                        im={post.image}
                    />
                ))
            }
        </div>
    );
}

export default PostsList;
