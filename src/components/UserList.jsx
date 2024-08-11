import { useSelector } from 'react-redux';
import { useEffect,} from 'react';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import UserListItems from './UserListItems';
import useThunk from '../hooks/user-hook'

const UserList = () => {
  // Pass the appropriate thunk to useThunk
  const [doFetchData, loadingUserError, isLoading] = useThunk(fetchUsers);
  const [doAddData, creatingUserError, isCreatingUser] = useThunk(addUser);
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchData();
  }, [doFetchData]);

  let content;
  if (isLoading) {
    content =  <Skeleton times={6} className="h-10 w-full"></Skeleton>;
  }
  else if (loadingUserError) {
    content =  <div>Error fetching data...</div>;
  }
  else {
    content = data.map((user) => {
      return <UserListItems key={user.id} user={user}/>
    });
  }

  const handleAddUser = () => {
    doAddData();
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className='text-2xl font-medium text-green-500'>Users</h1>
        <Button onClick={handleAddUser} loading={isCreatingUser}>Add user</Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  );
};

export default UserList;