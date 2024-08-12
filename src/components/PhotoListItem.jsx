import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { useDeletePhotoMutation } from '../store'

const PhotoListItem = ({photo}) => {
  const [removePhoto, results] = useDeletePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo)
  }
  return (
    <div className='relative m-2' onClick={handleRemovePhoto}>
      <img src={photo.url} className='h-20 w-20' alt="" />
      <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'>
        <GrFavorite className='text-3xl' />
      </div>
    </div>
  )
}

export default PhotoListItem