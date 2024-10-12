"use client";

import React from "react";

const AddCategoryForm = () => {
  const SubmitHandler = async (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const imageLink = event.target[1].value;
    console.log(title);

    await fetch(`http://localhost:3000/api/categories`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        image: imageLink,
      }),
    });
  };

  return (
    <div className="max-w-[600px] mx-auto outline p-6">
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col justify-center"
        action=""
      >
        <label htmlFor="categoryTitle">Title</label> <br />
        <input className="border" type="text" /> <br />
        <label htmlFor="image">Image Link</label>
        <br />
        <input className="border" type="text" /> <br />
        <button className="border" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
