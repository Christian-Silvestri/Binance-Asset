import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
import { useFetch } from "./useFetch";
import { useState, useEffect } from 'react';

const columns = [
    {
        name: "Symbol",
        selector: row => row.symbol,
        sortable: true
    },
    {
        name: "Base asset",
        selector: row => row.baseAsset,
        sortable: true
    },
    {
        name: "Quuote asset",
        selector: row => row.quoteAsset,
        sortable: true,

    },
    {
        name: "Price",
        selector: row => row.price,
        sortable: true
    }
];


function DataTableComponent() {
    const { data } = useFetch()

    const dataArray = data
    const tableData = {
        columns,
        dataArray
    };
    const [filteredList, setFilteredList] = useState(dataArray);

    const filterBySearch = (event) => {
        const query = event.target.value;
        let updatedList = [...dataArray];
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredList(updatedList);
    };

    return (
        <div className='flex justify-between w-full'>
            <DataTable {...tableData}
                columns={columns}
                data={data}
                noHeader
                defaultSortField="id"
                defaultSortAsc={false}
                pagination
                highlightOnHover
            />
            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>
            <div id="item-list">
                {filteredList.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <Link to='/'>Home</Link>
        </div>

    );
}


export default DataTableComponent
