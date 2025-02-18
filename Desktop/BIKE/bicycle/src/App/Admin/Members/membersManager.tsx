import  { useEffect, useState } from "react";
import { useUserStore } from "@/Features/Signup&Login/getUsers-store";
import { FaSearch } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/UI/pagination";
import { User } from "@/Shared/Types/Member";

const MembersManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const user = useUserStore((state: any)=>state.user)
  const fetchUserData = useUserStore((state: any)=>state.fetchUserData)
  const users = useUserStore((state: any)=>state.users)
  const fetchAllUsersData = useUserStore((state: any)=>state.fetchAllUsersData)

  useEffect(() => {
    fetchAllUsersData();
    fetchUserData();
  }, [fetchAllUsersData, fetchUserData]);
  console.log(users);
  const searchUsers = (event: any) => {
    event.preventDefault();
    fetchAllUsersData("keyword", searchTerm);
  };
  function forwardPage() {
    fetchAllUsersData("keyword", searchTerm);
    if (page > 0 && 0 <= users.length) {
      setPage(page + 1);
      fetchAllUsersData("page", page + 1);
    }
  }
  function prevPage() {
    fetchAllUsersData("keyword", searchTerm);
    if (page >= 1 && 0 <= users.length) {
      setPage(page - 1);
      fetchAllUsersData("page", page - 1);
      console.log(users);
    }
  }
  console.log(user
  );
  //handle activate user
  async function handleActivate(member: User) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found. Please log in.");
      }
      if (member.status === "ACTIVE_USER") {
        const blockUser = window.confirm(
          "Are you sure you want to block this user?"
        );
        if (blockUser === true) {
          const response = await fetch(
            `http://localhost:3000/auth/userupdate/${member._id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: "BLOCK_USER" }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              `Failed to activate member: ${
                errorData.message || response.statusText
              }`
            );
          }
        }
      } else if (member.status === "BLOCK_USER") {
        const activeUser = window.confirm(
          "Are you sure you want to activate this user?"
        );
        if (activeUser === true) {
          const response = await fetch(
            `http://localhost:3000/auth/userupdate/${member._id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: "ACTIVE_USER" }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              `Failed to activate member: ${
                errorData.message || response.statusText
              }`
            );
          }
        }
      }
      fetchAllUsersData();

      console.log(`Member with ID ${member._id} was successfully activated.`);
    } catch (err: any) {
      console.error("Failed to activate member:", err.message || err);
    }
  }

  // delete member
  async function deleteMember(id: string) {
    const deleteUser = window.confirm(
      `Are you sure you want to delete member with id ${id}?`
    );
    if (deleteUser === true) {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await fetch(`http://localhost:3000/auth/deleteUser/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        fetchAllUsersData();

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to delete member: ${
              errorData.message || response.statusText
            }`
          );
        }

        console.log(`Member with ID ${id} was successfully deleted.`);
      } catch (err: any) {
        console.error("Failed to delete user:", err.message || err);
      }
    }
  }

  return (
    <div className="mx-auto">
      <h2 className="text-2xl font-bold mb-4">Members Management</h2>
      <div className="col-span-1 shadow-2xl h-[100px] m-3 p-3">
        <p className="text-xl m-2 italic">Searching:</p>
        <div className="w-[200px] flex">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" border border-black rounded-md"
          ></input>
          <button
            onClick={searchUsers}
            className="border border-primary rounded-md bg-primary text-white text-sm hover:bg-primary-dark duration-75"
          >
            <FaSearch className="text-sm bg-primary text-white  m-2" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((member: User) => (
              <tr key={member._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {member._id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.role}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 font-semibold ${
                    member.status === "ACTIVE_USER"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {member.status}
                </td>
                <td className="border flex  border-gray-300 px-4 py-2">
                  <button
                    disabled={member._id === user?._id}
                    onClick={() => {
                      handleActivate(member);
                    }}
                    className={
                      member.status === "BLOCK_USER"
                        ? "bg-green-500 text-white mx-1 px-3 py-1 rounded-md hover:bg-green-600"
                        : "bg-red-500 text-white mx-1 px-3 py-1 rounded-md hover:bg-red-600"
                    }
                  >
                    {member.status === "BLOCK_USER"
                      ? "ACTIVATE"
                      : "BLOCK"}
                  </button>
                  <button
                    disabled={member._id === user?._id}
                    onClick={() => {
                      deleteMember(member._id);
                    }}
                    className="bg-red-500 text-white mx-1 px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <button disabled={page === 1}>
              <PaginationPrevious onClick={() => prevPage()} />
            </button>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <button disabled={users?.length === 0}>
              <PaginationNext onClick={() => forwardPage()} />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MembersManager;
