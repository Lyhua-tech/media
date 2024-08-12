import React from 'react'
import Expanded from './Expanded'
import Button from './Button'
import { useRemoveAlbumMutation } from '../store';
import { GoX } from "react-icons/go";

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

        </Expanded>
    )
}

export default AlbumListItem