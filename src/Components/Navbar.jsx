export default function Navbar({ darkMode, setdarkMode }) {
  return (
 <nav className="navbar">
<h2 className="logo">Tesla⚡</h2>
<ul className="nav-links">
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#inventions">Inventions</a></li>
<li><a href="#products">Products</a></li>

<li><a href="#timeline">Timeline</a></li>


      <button
        className="theme-btn"
        onClick={() => setdarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

</ul>
</nav>
)
}
