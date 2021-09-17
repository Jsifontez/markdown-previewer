const Layout = ({ children }) => {

  return (
    <>
      <header className="header">
        <h1 id="title">Markdown Previewer</h1>
      </header>
      {children}
    </>
  )
}

export default Layout