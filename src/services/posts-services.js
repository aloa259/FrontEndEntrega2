import data from"../services/posts.json";

export function getPosts(){
    return data.post;
    return new Promise ( (resolve,reject) => {
        setTimeout(() => {
            resolve(data.posts);
        }, Math.random () * 3000 );

    });

}
export default getPosts;