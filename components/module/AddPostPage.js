import React, { useState } from 'react';
import { useRouter } from "next/router";
//components
import Form from './Form';

const AddPostPage = () => {

    const router = useRouter();

    const [form, setForm] = useState({
        title:"",
        body:"",
      });


  const saveHandler = async () => {

      if(form.title === "" || form.body === ""){
          alert("please fill out the title and body")
          return;
      }

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    
    if (data.id > 100) router.push("/");
  };

  const cancelHandler = () => {
    setForm({
      title: "",
      body: "",
    });
    router.push("/");
  };
  
    return (
    <div className="post-page">
      <h4>Add New Post</h4>
      <Form form={form} setForm={setForm} />
      <div className="post-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
    );
};

export default AddPostPage;