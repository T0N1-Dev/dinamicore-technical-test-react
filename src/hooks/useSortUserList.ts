import { useEffect, useState } from "react";
import type { User } from "../interfaces/interfacesUserListSorted";

// This hook sorts a list of users by their names in alphabetical order
export const useSortUserList = (users: User[]) => {
    const [sortedUsers, setSortedUsers] = useState<User[]>([]);

    useEffect(() => {
        const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
        setSortedUsers(sorted);
    }, [users]);
    
    return sortedUsers;
}