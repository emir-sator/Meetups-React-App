import React from 'react'
import { useRef } from 'react'

import Card from '../ui/Card'


import classes from './NewMeetupForm.module.css'
const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adressInputRef = useRef();
    const descriptionInputRef = useRef();



    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAdress = adressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAdress,
            description: enteredDescription
        };
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title' >Meetup title</label>
                    <input type='text' required id='title' ref={titleInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='image' >Meetup image</label>
                    <input type='url' required id='image' ref={imageInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='address' >Adress</label>
                    <input type='text' required id='address' ref={adressInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='description' >Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
