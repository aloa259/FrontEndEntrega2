import { useEffect, useState } from "react";
import { getPosts } from "../services/posts-services";
import Posts from "./Posts";

function PostsList() {
    const [posts,setPosts] = useState([]);
    console.log(posts);
    useEffect(() => {
        getPosts().then((posts) => setPosts(posts));
    }, []);
    
    return (
        <div className="d-flex flex-wrap">
            {posts.map((post) => {
                <Posts
                    date={post.createdAt}
                    actor={post.autor}
                    descripcion={post.text}
                    comentarios={post.comments}
                    im={post.image}
                    key={post.id}
                />
            })}
        </div>
    );
}

export default PostsList;
