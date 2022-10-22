import { signal } from "@preact/signals";
import api from '../api/api'
import { useEffect } from 'preact/hooks';

const blogs = signal([])
const completeBlog = signal('true')

function BlogList() {

    useEffect(() => {

    }, [])

    const removeBlog = (id) => {

    }

    const doneBlog = (id) => {
   
    }

    const undoBlog = (id) => {

    }

    console.log(!(completeBlog.value))

    return (
        <div>
            {blogs.value.map((goal) => (
                <div class='blogs-cont'>
                    {goal.done == 'true'? <strike class='strike'><p class='goal'>{goal.content}</p></strike>: <p class='goal'>{goal.content}</p>}
                    <div class='btn-cont'>
                        {goal.done == 'true' && <button class='goal-btn uncheck' onClick={() => undoBlog(goal.$id)}>⊘</button>}
                        {goal.done == 'false' && <button class='goal-btn check' onClick={() => doneBlog(goal.$id)}>✔️</button>}
                        <button class='goal-btn delete' onClick={() => removeBlog(goal.$id)}>❌</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogList