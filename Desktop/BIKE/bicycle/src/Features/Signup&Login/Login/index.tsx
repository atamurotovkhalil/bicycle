import { useReducer } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiSellfy } from "react-icons/si";
import { Link } from "react-router";

const initialLoginState = {
  username: "",
  password: "",
  usernameIsValid: null,
  passwordIsValid: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "USERNAME_INPUT":
      return {
        ...state,
        username: action.payload,
        usernameIsValid: action.payload.length >= 6,
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: action.payload,
        passwordIsValid: action.payload.length >= 6,
      };
    case "RESET_FORM":
      return initialLoginState;
    default:
      return state;
  }
}

const Login = () => {
  const [user, dispatch] = useReducer(reducer, initialLoginState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (user.usernameIsValid && user.passwordIsValid) {
      try {
        const response = await fetch("http://localhost:8080/members/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.username,
            password: user.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          alert("Login successful!");
          dispatch({ type: "RESET_FORM" }); // Reset form after successful login

          localStorage.setItem("token", data.token);
          window.location.href = "/mypage";
        } else {
          const errorData = await response.json();
          alert(`Login failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
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
                Login
              </p>
              <form onSubmit={handleSubmit}>
                <div className="container p-4">
                  <div className="flex justify-center">
                    <input
                      id="username"
                      type="text"
                      value={user.username}
                      onChange={(e) =>
                        dispatch({
                          type: "USERNAME_INPUT",
                          payload: e.target.value,
                        })
                      }
                      placeholder="Email"
                      className={`p-3 w-full lg:w-[50%] text-black rounded-full border mb-4 ${
                        user.usernameIsValid === false ? "border-red-500" : ""
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
                      Log In
                    </button>
                  </div>
                  <div className="flex items-center font-semibold justify-center">
                    or
                  </div>
                  <div className="flex justify-center text-center items-center py-2">
                    <Link
                      to="/signup"
                      className="flex items-center justify-between shadow-xl border py-1 px-[40px] text-lg hover:bg-primary hover:text-white bg-secondary rounded-md"
                    >
                      Sign Up
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

export default Login;
