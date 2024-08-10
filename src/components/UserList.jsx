import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchUsers, addUser } from '../store'
import Skeleton from './Skeleton'
import Button from './Button'

const UserList = () => {
  const dispatch = useDispatch();
  const [isLoadingUser, setIsLoadingUser] = useState(0);
  const [isLoadingError, setIsLoadingError] = useState(null);
  const { data } = useSelector((state) => {
    return state.users;
  })

  useEffect(() => {
    setIsLoadingUser(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => {
        setIsLoadingError(err)
        setIsLoadingUser(false)
      })
      .finally(() => {
        setIsLoadingUser(false)
      })
  }, [dispatch])

  if (isLoadingUser) {
    return <Skeleton times={6} className='h-10 w-full'/>
  }

  if (isLoadingError) {
    return <div>
      error data fetching...
    </div>
  }
  const renderUsers = data.map((user)=> {
    return (
      <div key={user.id} className='mb-2 border rounded'>
        <div className='flex p-2 justify-between items-center cursor-pointer'>
          {user.name}
        </div>
      </div>
    )
  })
  const handleAddUser = () => {
    dispatch(addUser());
  }
  return (
    <div>
      {renderUsers}
      <Button onClick={handleAddUser}>Add user</Button>
    </div>
  )
}

export default UserList