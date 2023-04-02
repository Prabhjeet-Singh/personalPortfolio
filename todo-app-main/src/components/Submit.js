import React from "react";

const Submit = ({name, setName ,handleSubmit,lightMode}) => {
  return ( <form onSubmit={(e)=>handleSubmit(e)}>
  <input
    type="text"
    value={name}
    onChange={e =>  setName(e.target.value)}
    className={"md:min-w-[28rem] min-h-[2.5rem] rounded-md mt-5 text-black focus:outline-none pl-2 "+(lightMode?"day":"night-card")}
    />
    </form>);
};

export default Submit;
