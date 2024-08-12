import React from 'react'
import Expanded from './Expanded'
import Button from './Button'
import { useRemoveAlbumMutation } from '../store';
import { GoX } from "react-icons/go";
import PhotoList from './PhotoList';

const AlbumListItem = ({ album }) => {
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleDeleteAlbum = () => {
        removeAlbum(album)
    }
    const header = 
    <>
        <Button onClick={handleDeleteAlbum} className='mr-3'>
            <GoX />
        </Button>
        {album.title}
    </>
    return (
        <Expanded header={header}>
            <PhotoList album={album} />
        </Expanded>
    )
}

export default AlbumListItem