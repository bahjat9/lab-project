import students from "../students.json" with { type: "json" };

export const getAllStudents = () => {
    return students;
};