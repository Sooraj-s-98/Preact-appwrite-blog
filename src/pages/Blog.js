import { signal } from "@preact/signals";
import { useState } from "preact/hooks";
import { useGetBlogs, useGetUser } from "../hooks";
import api from "../api/api";
import { Server } from "../utils/config";

const completeBlog = signal("true");
const currentBlog = signal("");
function BlogList() {
  const [stale, setStale] = useState({ stale: false });
  const [{ user }, dispatch] = useGetUser();
  const [{ blogs, isLoading, isError }] = useGetBlogs(stale);

  const addBlog = async (e) => {
    e.preventDefault();
    console.log("Adding Todo");
    const data = {
      content: currentBlog.value,
      name: user.name,
    };
    console.log(data, user);
    try {
      await api.createDocument(Server.collectionID, data);
      setStale({ stale: true });
      currentBlog.value = "";
    } catch (e) {
      console.log("Error in adding blog");
    }
  };

  const setBlog = (e) => {
    currentBlog.value = e.target.value;
  };
  console.log(!completeBlog.value);

  return (
    <div>
        <div class="goal-wrap pt-5">
        <div class="inp">
        <input
          class="blog-inp"
          value={currentBlog.value}
          onInput={setBlog}
          placeholder="Add your Blogs"
        />
        <button class="add-blog-btn" onClick={addBlog}>
          Add Blog
        </button>
      </div>
        </div>
      <div class="goal-wrap">
        <div class="goal-cont p-3">
          {blogs.map((blog) => (
            <div class="card border-dark mb-3" >
              <div class="card-header">{blog.name}</div>
              <div class="card-body text-dark">
                <p class="card-text">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
