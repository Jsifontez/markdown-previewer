const Layout = ({ children }) => {

  return (
    <>
      <header className="header">
        <h1 id="title">Markdown Previewer</h1>
      </header>
      {children}
      <footer>
        <p>
          Code with ❤️ by <a href="twitter.com/jsifontez_" target="_blank" rel="noreferrer">@jsifontez_</a>
        </p>
        <p>
          Commits are welcome in <a href="https://github.com/Jsifontez/markdown-previewer" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </footer>
    </>
  )
}

export default Layout