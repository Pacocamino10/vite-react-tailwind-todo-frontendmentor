const TodoFilter = ({changeFilter}) => { 
    return (
        <section className="container mx-auto mt-8">
        <div className="bg-white rounded-md p-4 flex justify-center gap-4">
          <button onClick={()=>changeFilter("all")}  className=" text-blue-600">All</button>
          <button onClick={()=>changeFilter("active")} className=" hover: text-blue-600">Active</button>
          <button onClick={()=>changeFilter("completed")}>Completed</button>
        </div>
      </section>
    )
 }
 export default TodoFilter