import React from 'react'
import { useContext } from 'react'

import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favoritesContext'

const Favorites = () => {

    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some.</p>
    }
    else {
        content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
    }


    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites
