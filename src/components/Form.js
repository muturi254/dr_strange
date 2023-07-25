import React from "react";

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("yeiiii we have submitted");
    }


    const handleChange = (e) => {
        console.log(e.target.value);
    }


    return (
        <form className="mb-6 w-full" onSubmit={handleSubmit}>
            <input type="text" name="todo" className="border border-[#41BFF5] py-3 mr-4 rounded-lg pl-[.5rem] w-[90%]" placeholder="Add Todo" onChange={handleChange} />
            <button className="rounded-lg bg-[#41BFF5] py-3 w-[8rem] text-white font-bold hover:bg-white hover:border hover:text-[#41BFF5] hover:border-[#41BFF5]">Add</button>

        </form>
    )
}


export default Form;