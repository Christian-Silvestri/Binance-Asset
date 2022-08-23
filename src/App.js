import DataTableComponent from "./Table";
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to='asset'>Asset</Link> | <Link to='market'>Market</Link>
      <Routes>
        <Route path='asset' element={<DataTableComponent />} />
      </Routes>
    </div>
  )
}


export default App
