import StudentCard from "../components/StudentCard";
import { useParams } from "react-router-dom";
import studentsJson from '../students.json'

function StudentDetailsPage() {
    const { dittoId } = useParams()

    const student = studentsJson.find((student) => student.id === Number(dittoId));

    console.log("THis is the ID:", dittoId);
    return (
        <>
            <h3>This is the student details page</h3>
            <StudentCard student={student} />
        </>
    )
}
export default StudentDetailsPage;