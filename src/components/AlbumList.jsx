import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumListItem from './AlbumListItem';

const AlbumList = ({ user }) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, result] = useAddAlbumMutation();

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className='h-10 w-full'/>
    }
    else if (error) {
        content = <div>Error showing data</div>
    }
    else {
        content = data.map(album => {
            return <AlbumListItem key={album.id} album={album}/>
        })
    }
    const handleClickAdd = () => {
        addAlbum(user)
    }
    return (
    <div>
        <div className='m-2 flex flex-row items-center justify-between'>
            <h2 className='text-lg font-bold'>Album for {user.name}</h2>
            <Button onClick={handleClickAdd}>
                + Add album
            </Button>   
        </div>
        {content}
    </div>
    )
}

export default AlbumList