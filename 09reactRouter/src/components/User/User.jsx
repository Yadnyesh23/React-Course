import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'

function User(){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/yadnyesh23')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    }, [])
    const {userid} = useParams()
    return (
        <div>User : {usrid} </div>
    )
}

export default Usere