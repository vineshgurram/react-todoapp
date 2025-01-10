export default function Header({noOfCompletedTodos,noOfTotalTodos}) {
    return (
        <>
            <header className="header">
               <div className="container">
                <h1 className="main-heading">Todo list</h1>
               <h2 className="heading text-center">Completed Task : {noOfCompletedTodos}</h2>
               <h2 className="heading text-center">Total Task : {noOfTotalTodos}</h2>
               </div>
            </header>
        </>
    )
}