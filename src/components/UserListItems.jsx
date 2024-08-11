import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import { removeUsers } from '../store'
import useThunk from '../hooks/user-hook'
import Expanded from './Expanded'
import AlbumList from './AlbumList'

const UserListItems = ({user}) => {
    const [doDeleteUsers, isLoading, error] = useThunk(removeUsers);

    const handleClick = () => {
        doDeleteUsers(user)
    }
    const header = <>
        <Button loading={isLoading} onClick={handleClick} className='mr-3'>
            <GoTrashcan />
        </Button>
        {error && <div>error delete user</div>}
        {user.name}
    </>
    return (
        <Expanded header={header}>
            <AlbumList user={user}/>
        </Expanded>
    )
}

export default UserListItems