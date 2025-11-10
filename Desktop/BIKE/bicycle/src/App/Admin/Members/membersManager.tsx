import  { useEffect } from "react";
import {UserStore, useUserStore} from "@/Features/Signup&Login/getUsers-store";
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
  const user : User | null = useUserStore((state: UserStore) : User | null=>state.user)
  const fetchUserData = useUserStore((state: UserStore)=>state.fetchUserData)
  const users = useUserStore((state)=>state.users)
  const fetchAllUsersData = useUserStore((state: UserStore)=>state.fetchAllUsersData)

    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression)
        (async () => {
            try {
                await fetchAllUsersData();
                await fetchUserData();
            } catch (err) {
                console.error("Error loading users:", err);
            }
        })();
    }, [fetchAllUsersData, fetchUserData]);
  //handle activate user
  async function handleActivate(member: User) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("No token found. Please log in.");
      }
      if (member.status === "ACTIVE") {
        const blockUser = window.confirm(
          "Are you sure you want to block this user?"
        );
        if (blockUser) {
          const response = await fetch(
            `http://localhost:3000/auth/userupdate/${member.id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: "BLOCK" }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            alert(
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
        if (activeUser) {
          const response = await fetch(
            `http://localhost:3000/auth/userupdate/${member.id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: "ACTIVE" }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            alert(
              `Failed to activate member: ${
                errorData.message || response.statusText
              }`
            );
          }
        }
      }
      await fetchAllUsersData();

      console.log(`Member with ID ${member.id} was successfully activated.`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Failed to activate member:", err.message);
        } else {
            console.error("Failed to activate member:", String(err));
        }
    }
  }

  // delete member
  async function deleteMember(id: string) {
    const deleteUser = window.confirm(
      `Are you sure you want to delete member with id ${id}?`
    );
    if (deleteUser) {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("No token found. Please log in.");
        }

        const response = await fetch(`http://localhost:8080/members/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        await fetchAllUsersData();

        if (!response.ok) {
          const errorData = await response.json();
          alert(
            `Failed to delete member: ${
              errorData.message || response.statusText
            }`
          );
        }

        console.log(`Member with ID ${id} was successfully deleted.`);
      } catch (err: unknown) {
          if (err instanceof Error) {
              console.error("Failed to delete member:", err.message);
          } else {
              console.error("Failed to delete member:", String(err));
          }
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
            className=" border border-black rounded-md"
          ></input>
          <button
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
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((member: User) => (
              <tr key={member.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {member.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.firstName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.role}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.role}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 font-semibold ${
                    member.status === "ACTIVE"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {member.status}
                </td>
                <td className="border flex  border-gray-300 px-4 py-2">
                  <button
                    disabled={member.id === user?.id}
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
                    disabled={member.id === user?.id}
                    onClick={() => {
                      deleteMember(member.id);
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
            <button >
              <PaginationPrevious  />
            </button>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <button disabled={users?.length === 0}>
              <PaginationNext  />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MembersManager;
