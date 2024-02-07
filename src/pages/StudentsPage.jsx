import { useState } from 'react';
import StudentsList from '../components/StudentsList'
import { useSearchParams } from 'react-router-dom';
import studentsJson from '../students.json';

function StudentsPage() {
    const [studentsArray, setStudentsArray] = useState(studentsJson);
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryInput, setQueryInput] = useState("")

    console.log(searchParams.get("dittoName"));
    const handleInputChange = (e) => {
        setQueryInput(e.target.value)
        setSearchParams({ dittoName: queryInput })
    }


    const handleSearch = () => {
        if(queryInput.length === 0){
            return setStudentsArray(studentsJson);
        }
        const nameWeWantToSearch = searchParams.get("dittoName");
        console.log("NAME WE WANT TO SEARCH: ", nameWeWantToSearch);
        const newStudentsArray = studentsJson.filter((student) => {
            return student.name.includes(nameWeWantToSearch)
        })
        setStudentsArray(newStudentsArray);
    }


    return (
        <>
            <h1>Students page</h1>
            <label >Search student</label>
            <input onChange={(e) => handleInputChange(e)} type="text" />
            <button onClick={() => handleSearch()}>🔎</button>
            <StudentsList studentsArray={studentsArray} />
        </>
    )
}

export default StudentsPage;