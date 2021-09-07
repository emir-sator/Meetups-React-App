import React from 'react'
import { useState,useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://react-getting-started-af2c5-default-rtdb.firebaseio.com/meetups.json')
        .then((response) => {
            return response.json();
        }).then((data) => {
            const meetups=[];

            for(const key in data){
                const meetup={
                    id:key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    },[]);

    
    if (isLoading) {
        <section>
            <p>Loading....</p>
        </section>
    }

    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={loadedMeetups}></MeetupList>
        </section>
    )
}

export default AllMeetups
