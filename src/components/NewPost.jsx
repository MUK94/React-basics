import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({onCancel, onAddPost}) {
    const [enteredBody, updateEnteredBody] = useState('');
    const [enteredAuthor, updateEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        updateEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        updateEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} required onChange={bodyChangeHandler}/>
            </p>
            
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
        
    );
}

export default NewPost;