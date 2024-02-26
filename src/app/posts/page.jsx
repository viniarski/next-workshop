import Link from 'next/link';

export default async function PostsPage({ params }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // call the API
  const posts = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <div>
            <li key={post.id}>{post.title}</li>
            <Link href={`/post/${post.id}`}>Click!</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
