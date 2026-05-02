import Course from '../models/courseModel.js';

export const getAllCourses = async () => {
    return await Course.find();
};

export const getCourseById = async (id) => {
    return await Course.findById(id);
};

export const createCourse = async (courseData) => {
    return await Course.create(courseData);
};

export const updateCourse = async (id, courseData) => {
    return await Course.findByIdAndUpdate(id, courseData, { new: true });
};

export const deleteCourse = async (id) => {
    return await Course.findByIdAndDelete(id);
};