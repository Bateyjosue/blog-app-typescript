export interface Post {
  author: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
  urlToImage: string;
  url: string;
}
let posts: Post[] = [];
export const fetchPost = async (url: string) => {
  let posts: Post[] = [];
  try {
    const res = await fetch(url).then((response) => response.json());
    posts = res.articles;
  } catch (err :any){console.log(`Something went wrong: ${err.message}`)}
  return posts;
};

posts = await fetchPost(
  "https://newsapi.org/v2/everything?q=tesla&from=2023-08-07&sortBy=publishedAt&apiKey=f55d9fb7b60440739bfd36676db7a671",
);

export default posts;
