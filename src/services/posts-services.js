import data from"../services/posts.json";

export function getPosts(){
    //return data.posts;
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(data.posts);
        }, Math.random () * 3000 );
    });

}
