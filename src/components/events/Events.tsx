const Events = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("searched!!!!!");
  }

  const handleUpdate = (id: number) => {
    console.log(id)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  return (
    <div>
        {/* search bar  */}
        <div className="search__bar">
          <form>
            <input type="text" placeholder="search" onChange={handleChange} />
            <button onClick={handleClick}>search</button>
          </form>
        </div>

        <div className="todo">
          <div className="items">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore corrupti ratione minima sit? Nostrum architecto maxime molestias blanditiis saepe pariatur vero minus mollitia! Ullam deleniti unde assumenda temporibus necessitatibus.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem in. Eum cum voluptas nisi maxime harum fugiat, quos distinctio animi, mollitia illum cumque est quaerat nesciunt deleniti vitae repudiandae.</p>
            <button>delete</button>
            <button onClick={() => handleUpdate(1)}>update</button>
          </div>
          <div className="items">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore corrupti ratione minima sit? Nostrum architecto maxime molestias blanditiis saepe pariatur vero minus mollitia! Ullam deleniti unde assumenda temporibus necessitatibus.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem in. Eum cum voluptas nisi maxime harum fugiat, quos distinctio animi, mollitia illum cumque est quaerat nesciunt deleniti vitae repudiandae.</p>
            <button>delete</button>
            <button>update</button>
          </div>
        </div>
    </div>
  )
}

export default Events
