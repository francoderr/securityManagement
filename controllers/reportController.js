import ReportModel from "../models/Report.js";
import bcrypt from "bcryptjs";

export const createReport = async (req, res) => {
  const name = req.body.officerName;
  const date = req.body.reportDate;
  const post = req.body.assignedPost;
  const title = req.body.reportSubject;
  const content = req.body.reportDetails;

  try {
    const newReport = new ReportModel({
      name,
      date,
      post,
      title,
      content,
    });

    await newReport.save();
    res.status(200).json({
      Status: "Success",
      message: "Report Created successfully!",
      user: newReport,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await ReportModel.aggregate([
      {
        $match: {},
      },
      {
        $project: {
          name: 1,
          title: 1,
          content: 1,
          date: 1,
          post: 1,
        },
      },
    ]);

    return res.status(200).json({
      Status: "Success",
      message: "Fetched Reports!",
      reports,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
