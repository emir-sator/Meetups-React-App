import React from 'react'
import { useContext } from 'react'

import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favoritesContext'

const MeetupItem = (props) => {

    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatusHandler = () => {

        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);

        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                address: props.address,
                image: props.image,
                description: props.description
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}>
                    </img>
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>

                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite? 'Remove from Favorites':'To Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
