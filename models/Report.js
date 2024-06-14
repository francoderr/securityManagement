import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Reports = mongoose.model('Report', ReportSchema);

export default Reports;