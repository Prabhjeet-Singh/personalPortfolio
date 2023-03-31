import React from "react";

const Submit = ({name, setName ,handleSubmit}) => {
  return ( <form onSubmit={(e)=>handleSubmit(e)}>
  <input
    type="text"
    value={name}
    onChange={e =>  setName(e.target.value)}
    className="md:min-w-[25rem] min-h-[2.5rem] rounded-md mt-5 text-black"
    />
    </form>);
};

export default Submit;
