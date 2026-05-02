import * as studentService from "../services/studentsService.js";

export const getStudents = (req, res) => {
    const data = studentService.getAllStudents();
    res.json(data);
};

// The rest of the CRUD signatures
export const getStudentById = (req, res) => { /* ... */ };
export const createStudent = (req, res) => { /* ... */ };
export const updateStudent = (req, res) => { /* ... */ };
export const deleteStudent = (req, res) => { /* ... */ };