import React, { useState } from "react";

const InputExample = () => {
  // const [name, setName] = useState("");
  // const [sname, setSname] = useState("");
  const [form, setForm] = useState({ name: "", sname: "" });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // console.log(name);
  return (
    <div>
      Please enter a name <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      Enter Surname
      <input name="sname" value={form.sname} onChange={onChangeInput} />
      <br />
      {form.name} {form.sname}
    </div>
  );
};

export default InputExample;


