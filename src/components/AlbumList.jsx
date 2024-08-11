import React from 'react'
import { useFetchAlbumsQuery } from '../store'

const AlbumList = ({ user }) => {
    const { data, isLoading, error } = useFetchAlbumsQuery(user);
    return (
    <div>
        Album for {user.name}
    </div>
    )
}

export default AlbumList