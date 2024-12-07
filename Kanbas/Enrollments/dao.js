import Database from "../Database/index.js";
import enrollments from "../Database/enrollments.js";
import model from "./model.js";
export async function findEnrollmentsForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}

export function enrollUserInCourse(userId, courseId) {
    return model.create({ userId, courseId });
}

export function deleteEnrollment(enrollmentId) {
    return model.deleteOne({ enrollmentId });

}

export function createEnrollment(enrollment) {
    delete enrollment._id
    return model.create(enrollment);
}


export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}


