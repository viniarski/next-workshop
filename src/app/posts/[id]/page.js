export default function Page(params) {
  return (
    <div>
      <h1>Post</h1>
      <p>This is a post on dynamic page.</p>
      <h1>Post Page {params.id}</h1>;
    </div>
  );
}
