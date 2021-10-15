import React from 'react'
import { useHistory } from 'react-router'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = (props) => {

const history=useHistory();

    const addMeetupHandler = (meetupData) => {
        fetch('https://meetups-8b242-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add mew meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>

    )
}

export default NewMeetup
