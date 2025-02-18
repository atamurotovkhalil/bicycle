type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <div>
        <div className="">
          <p>
            <span className="text-2xl  font-bold">Change Password</span>
          </p>
        </div>
        <div className=" gap-3">
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-700"
          >
            <span className="text-sm font-bold">Current Password*</span>
          </label>
          <input
            type="text"
            name="currentpassword"
            placeholder="Current Password*"
            className="my-3 border-0 bg-slate-200 col-span-5  rounded-lg p-4  w-full"
            //onChange={handleChange}
          />
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            New Password*
          </label>
          <input
            type="text"
            name="newpassword"
            placeholder="New Password*"
            className="my-3 border-0 bg-slate-200 col-span-5 rounded-lg p-4  w-full"
            //onChange={handleChange}
          />
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password*
          </label>
          <input
            type="text"
            name="confirmpassword"
            placeholder="Confirm Password*"
            className="my-3 border-0 bg-slate-200 col-span-4 rounded-lg p-4  w-full"
            //onChange={handleChange}
          />
          <button
            //onClick={() => confirmedOrder()}
            className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg font-bold"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
