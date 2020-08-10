import React from 'react'
import Film from './Film'

const FilmList = ({films}) => {
    const filmNodes = films.map(({id, name, url}) =>
<Film key ={id} name={name}>{url}</Film>
)

return (
    <div className="film-list">
        {filmNodes}
        <p><a href="https://www.imdb.com/calendar/?region=gb">View more</a></p>

    </div>
)
}
export default FilmList
