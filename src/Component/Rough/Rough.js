import React, { useEffect, useState } from 'react';

const Rough = () => {

    let [search, setSearch] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>
                setSearch(data)
            );
    }, []);

    return (
        <div>
            {
                search.map((d) =>
                    <li>
                        {d.name}
                    </li>
                )
            }
        </div>
    );
};

export default Rough;