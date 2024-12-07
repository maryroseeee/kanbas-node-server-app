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
    return model.deleteOne({ user, course });

}

export function createEnrollment(enrollment) {
    const newEnrollment = { ...enrollment, _id: Date.now().toString() };
    Database.enrollments = [...Database.enrollments, newEnrollment];
    return newEnrollment;
}


export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}


