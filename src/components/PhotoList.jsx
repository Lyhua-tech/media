import React from 'react'
import PhotoListItem from './PhotoListItem'
import { useFetchPhotosQuery, useAddPhotoMutation } from '../store'
import Button from './Button';
import Skeleton from './Skeleton';

const PhotoList = ({ album }) => {
  const [addPhoto, resultAddPhoto] = useAddPhotoMutation();
  const {data, isFetching, error } = useFetchPhotosQuery(album);
  const handleAddPhoto = () => {
    addPhoto(album)
  }
  let content;
  if (isFetching) {
    content = <Skeleton times={3} className='h-8 w-8' />
  }
  else if (error) {
    content = <div>Error fetching data</div>
  }
  else{
    content = data.map(photo => {
      return <PhotoListItem key={photo.id} photo={photo}/>
    })
  }
  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h2 className='text-xl font-bold'>
          Photos In {album.title}
        </h2>
        <Button loading={resultAddPhoto.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
      </div>
      <div className='flex flex-row gap-2 flex-wrap justify-center'>{content}</div>
    </div>
  )
}

export default PhotoList