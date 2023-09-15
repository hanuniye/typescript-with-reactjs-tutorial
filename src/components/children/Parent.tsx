const Parent = ({ children } : { children : React.ReactNode}) => {
  return (
    <div>
      <p>children type</p>
      {
        children
      }
    </div>
  )
}

export default Parent
