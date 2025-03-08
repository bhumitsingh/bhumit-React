import {createRoot} from 'react-dom/client'
import Slideshow from './components/Slideshow'

const root = createRoot(document.getElementById('root'))
const images = [
    "https://images.unsplash.com/photo-1735342623463-eb38dcb7e8de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1735094495688-bb97e435de73?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736285034986-5be6ec8054b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

function MyAwesomeNavbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark' aria-label='Third navbar example'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>MyAwesomeNavbar</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarsExample03' aria-controls='navbarsExample03' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
            <form role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </div>
      </div>
    </nav>
  )
}
/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "Slideshow", and have it return a 
 * Slideshow component.
 * 
 * Afterward, render it on the line below MyAwesomeNavbar
 */

root.render(
  <>
    <MyAwesomeNavbar />
    <Slideshow images={images}/>
  </>
)