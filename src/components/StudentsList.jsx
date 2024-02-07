import studentsJson from '../students.json';
import StudentCard from './StudentCard';

function StudentsList() {


    return (
        <ul>
            {
                studentsJson.map((student, index) => {
                    return <StudentCard key={index} student={student} />;
                })
            }
        </ul>
    )
}

export default StudentsList;