import * as courseService from '../services/courseService.js';

export const getAll = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const newCourse = await courseService.createCourse(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const updatedCourse = await courseService.updateCourse(req.params.id, req.body);
        if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const deletedCourse = await courseService.deleteCourse(req.params.id);
        if (!deletedCourse) return res.status(404).json({ message: "Course not found" });
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};