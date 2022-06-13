import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";

function Account() {
  const { loggedInUser, logout } = UserAuth();
  const navigate = useNavigate();

  const signOuFn = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loggedInUser) {
    return (
      <div className="mlg:max-w-[1140px] max-w-4xl mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome, {loggedInUser?.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={signOuFn}
              className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Watch List</h1>

            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
}

export default Account;
