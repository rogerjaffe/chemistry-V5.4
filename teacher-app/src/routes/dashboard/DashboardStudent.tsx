function DashboardStudent(props: any) {
  const { student } = props;
  return (
    <td
      key={"stu" + student.studentId}
      title={"Per " + student.period + ": " + student.className}
    >
      {student.lastName}, {student.firstName} ({student.studentId})
    </td>
  );
}

export default DashboardStudent;
