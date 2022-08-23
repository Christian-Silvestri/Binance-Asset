import { useFetch } from './useFetch';


function TableData() {
    const {data} = useFetch()
    return (
        <div>

            <tbody>
                <tr>
                    <th>SYMBOL</th>
                    <th>BASE ASSET</th>
                    <th>QUOTE ASSET</th>
                    <th>PRICE</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.symbol}</td>
                        <td>{item.baseAsset}</td>
                        <td>{item.quoteAsset}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>

        </div>
    );
}

export default TableData;