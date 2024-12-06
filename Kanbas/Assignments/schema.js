import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    {
        title: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        points: Number,
        due: Date,
        available: Date,
        description: String,
        modules: Number,
    },
    { collection: "assignments" }
);
export default assignmentSchema;

