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
  "https://newsapi.org/v2/everything?q=tesla&from=2023-08-11&sortBy=publishedAt&apiKey=f55d9fb7b60440739bfd36676db7a671",
);

export const loadPosts = (posts: Post[], filter: number = 10, spin:Element, postContainer:Element) => {
  posts
  .filter((post) => post.author).slice(0, filter)
  .map((post) => {
    let {urlToImage, url, title, publishedAt, description} = post
    postContainer.innerHTML += `
    <article class="md:border md:rounded-3xl md:overflow-hidden flex flex-col">
        <div class="">
          <img src="${urlToImage}" alt="" class="w-[100%] h-fit">
        </div>
        <div class="py-4 px-4 flex flex-col grow">
          <div class="title flex justify-between py-4">
            <h4 class="text-xl"><a href="${url}">${title}</a></h4>
            <span class="material-symbols-outlined text-primary">share</span>
          </div>
          <h6 class="py-4 opacity-60 font-bold">${publishedAt}</h6>
          <p class="text-lg py-4 leading-8">${description}</p>
          <div class="flex justify-between py-4 grow items-end">
            <ul id="" class="tags flex gap-4 opacity-50">
            </ul>
            <span class="material-symbols-outlined text-primary">comment</span>
          </div>
        </div>
      </article>
    </section>
  `;
  spin.classList.remove('show')
  spin.classList.add('hide')
  });
}

export default posts;
