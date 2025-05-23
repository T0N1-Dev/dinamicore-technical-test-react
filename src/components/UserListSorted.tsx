import { useSortUserList } from "../hooks/useSortUserList";
import type { User } from "../interfaces/interfacesUserListSorted";

interface UserListSortedProps {
  users: User[];
}

export const UserListSorted: React.FC<UserListSortedProps> = ({ users }) => {
  // Using a customHook to give the component a single function. Display users organized alphabetically. 
  const sortedUsers = useSortUserList(users);

  return (
    <div className="space-y-4">
      {sortedUsers.map((user, index) => (
        <div key={index} className="border border-neutral-300 rounded-lg shadow-sm">
          <div className="p-4 flex justify-between items-center">
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.age} years old</div>
          </div>
        </div>
      ))}
    </div>
  )
}

