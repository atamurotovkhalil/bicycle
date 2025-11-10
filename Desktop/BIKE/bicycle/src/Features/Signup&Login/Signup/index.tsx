import React, { useReducer } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiSellfy } from "react-icons/si";
import { Link } from "react-router";

export interface User {
  user: User;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  firstnameIsValid: boolean | null;
  lastnameIsValid: boolean | null;
  passwordIsValid: boolean | null;
  emailIsValid: boolean | null;
}

const initialUserState = {
  firstname: "",
  lastname: "",
  password: "",
  email: "",
  firstnameIsValid: null,
  lastnameIsValid: null,
  passwordIsValid: null,
  emailIsValid: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "FIRSTNAME_INPUT":
      return {
        ...state,
        firstname: action.payload,
        firstnameIsValid: action.payload.length >= 5,
      };
    case "LASTNAME_INPUT":
      return {
        ...state,
        lastname: action.payload,
        lastnameIsValid: action.payload.length >= 5,
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: action.payload,
        passwordIsValid:
          action.payload.length >= 5 && action.payload.length <= 20,
      };
    case "EMAIL_INPUT":
      return {
        ...state,
        email: action.payload,
        emailIsValid:
          action.payload.includes("@") && action.payload.includes("."),
      };
    case "RESET_FORM":
      return initialUserState;
    default:
      return state;
  }
}

const Index = () => {
  const [user, dispatch] = useReducer(reducer, initialUserState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check validation before submission
    if (user.firstnameIsValid && user.lastnameIsValid && user.passwordIsValid && user.emailIsValid) {
      try {
        const response = await fetch("http://localhost:8080/members/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password,
            email: user.email,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          dispatch({ type: "RESET_FORM" }); // Reset form after successful login

          localStorage.setItem("token", data.token);
          window.location.href = "/mypage";
          alert("Login successful!");
        } else {
          const errorData = await response.json();
          alert(`Signup failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred during signup. Please try again.");
      }
    } else {
      alert("Form validation failed! Please correct the errors and try again.");
    }
  };

  return (
    <div>
      <div className="lg:container mt-[90px] md:px-10 sm:px-5 px-1">
        <div className="rounded-xl border-black">
          <div className="h-full w-full">
            <div className="items-center justify-center">
              <div className="flex items-center py-8 justify-center">
                <div className="bg-yellow text-green rounded-full">
                  <SiSellfy className="p-3 text-8xl" />
                </div>
              </div>
              <p className="flex py-5 items-center justify-center text-3xl">
                Signup
              </p>
              <form onSubmit={handleSubmit}>
                <div className="container p-4">
                  <div className="flex justify-center">
                    <input
                      id="firstname"
                      type="text"
                      value={user.firstname}
                      onChange={(e) =>
                        dispatch({
                          type: "FIRSTNAME_INPUT",
                          payload: e.target.value,
                        })
                      }
                      placeholder="First Name"
                      className={`p-3 w-full lg:w-[50%] text-black rounded-full border mb-4 ${
                        user.firstnameIsValid === false ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="flex justify-center">
                    <input
                      id="lastname"
                      type="text"
                      value={user.lastname}
                      onChange={(e) =>
                        dispatch({
                          type: "LASTNAME_INPUT",
                          payload: e.target.value,
                        })
                      }
                      placeholder="Last Name"
                      className={`p-3 w-full lg:w-[50%] text-black rounded-full border mb-4 ${
                        user.lastnameIsValid === false ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="flex justify-center">
                    <input
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={(e) =>
                        dispatch({
                          type: "EMAIL_INPUT",
                          payload: e.target.value,
                        })
                      }
                      placeholder="Email"
                      className={`p-3 w-full lg:w-[50%] text-black rounded-full border mb-4 ${
                        user.emailIsValid === false ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="flex justify-center">
                    <input
                      id="password"
                      type="password"
                      value={user.password}
                      onChange={(e) =>
                        dispatch({
                          type: "PASSWORD_INPUT",
                          payload: e.target.value,
                        })
                      }
                      placeholder="Password"
                      className={`p-3 w-full lg:w-[50%] text-black rounded-full border mb-4 ${
                        user.passwordIsValid === false ? "border-red-500" : ""
                      }`}
                    />
                  </div>

                  <div className="flex justify-center text-center items-center py-2">
                    <button
                      type="submit"
                      className="flex items-center justify-between shadow-xl border py-1 px-[30px] text-lg hover:bg-primary hover:text-white bg-secondary rounded-md"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="flex items-center font-semibold justify-center">
                    or
                  </div>
                  <div className="flex justify-center text-center items-center py-2">
                    <Link
                      to="/login"
                      className="flex items-center justify-between shadow-xl border py-1 px-[40px] text-lg hover:bg-primary hover:text-white bg-secondary rounded-md"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </form>
              <div className="flex py-3 items-center justify-center">
                <button
                  type="button"
                  className="border-black flex items-center justify-around border hover:bg-slate-100 text-center text-xs sm:text-sm font-bold 
                  sm:w-4/5 md:w-2/5 base:w-3/5 lg:w-1/5 cursor-pointer bg-white text-black
                  py-1 p-5 rounded-full"
                >
                  <FcGoogle />
                  <span> Continue with Google </span>
                </button>
              </div>
              <div className="flex py-3 items-center justify-center">
                <button className="text-sky-800"> Continue with email </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
