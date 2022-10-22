import { signal } from "@preact/signals";
import api  from '../api/api'
import { v4 as uuid } from 'uuid';
import BlogList from './BlogList'

const blog = signal("")

const addBlog = (e) => {
    e.preventDefault()

    blog.value = ""

}

const setBlog = (e) => { blog.value = e.target.value }

export default function Blog() {

    return (
        <div class='goal-wrap'>
            <div class='goal-cont'>
                <h1>Your Blogs</h1>
                <div class='inp'>
                    <input class='blog-inp' value={blog.value} onInput={setBlog} placeholder='Add your Blogs' />
                    <button class='add-blog-btn' onClick={addBlog}>Add Blog</button>
                </div>

                <BlogList />
            </div>
        </div>
    );
}