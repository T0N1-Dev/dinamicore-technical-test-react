import { usersList } from "./data/userList"
import { UserForm } from "./components/UserForm"
import { UserListSorted } from "./components/UserListSorted"


export const App = () => {
  return (
    <main className="container mx-auto py-10 px-4 space-y-10">
      <h1 className="text-3xl font-bold text-neutral-800 text-center mb-8">User Management</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          <UserListSorted users={usersList} />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Form</h2>
          <UserForm />
        </div>
      </div>
    </main>
  )
}
