import StudentCard from './StudentCard';

function StudentsList({studentsArray}) {

    return (
        <ul>
            {
                studentsArray.map((student, index) => {
                    return <StudentCard key={index} student={student} />;
                })
            }
        </ul>
    )
}

export default StudentsList;