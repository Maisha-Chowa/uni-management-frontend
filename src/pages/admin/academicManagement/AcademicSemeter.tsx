import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemester";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
   console.log(data);

  return (
    <div>
      <h1> This is AcademicSemester component </h1>
    </div>
  );
};

export default AcademicSemester;
