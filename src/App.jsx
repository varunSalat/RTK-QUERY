import AddPostForm from "./components/AddPostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <section className="mx-auto w-[min(800px,100%)]">
      <AddPostForm />
      <PostList />
    </section>
  );
}

export default App;
