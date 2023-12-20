import React from "react";
import { useState } from "react";
import { apiConnector } from "../operations/apiconnector";
const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    selectedBatch: "",
    phoneNumber: "",
    enrollmentDate: "",
    payment: "",
  });
  const handleChange = (e) => {
    if (
      e.target.age === "age" &&
      (isNaN(e.target.value) || parseInt(e.target.value, 10) < 18)
    ) {
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await apiConnector("POST", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setFormData({
      name: "",
      age: "",
      selectedBatch: "",
      phoneNumber: "",
      enrollmentDate: "",
      payment: "",
    });
  };
  return (
    <div className="text-white">
      <div>
        <form onSubmit={handleSubmit} className="flex w-full flex-col ">
          <div className=" gap-x-4">
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter Your name"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Age <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="Enter Age"
                inputMode="numeric"
                min="18"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>

            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Phone Number <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                min="1000000000"
                max="9999999999"
                placeholder="Enter Phone Number"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Select Batch <sup className="text-pink-200">*</sup>
              </p>
              <select
                name="selectedBatch"
                value={formData.selectedBatch}
                onChange={handleChange}
                required
                placeholder="Select your batch"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              >
                <option value="">Select Batch</option>
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
              </select>
            </label>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Enrollment Date <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="date"
                name="enrollmentDate"
                value={formData.enrollmentDate}
                onChange={handleChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[16px] font-medium text-richblack-900 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
