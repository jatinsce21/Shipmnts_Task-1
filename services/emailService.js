const emailModel = require('../models/emailModel');
const cronUtils = require('../utils/cronUtils');
const transporter = require('../config/transporter');

const sendEmail = (emailDetails) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: emailDetails.recipient,
        subject: emailDetails.subject,
        text: emailDetails.body,
        attachments: emailDetails.attachments.map(attachment => ({
            filename: attachment.filename,
            path: attachment.path
        }))
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error while sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
};

const scheduleEmail = (emailDetails) => {
    emailModel.addEmail(emailDetails);
    cronUtils.scheduleCronJob(emailDetails, sendEmail);
};

const getAllScheduledEmails = () => {
    return emailModel.getAllEmails();
};

const getScheduledEmailById = (id) => {
    return emailModel.getEmailById(id);
};

const deleteScheduledEmail = (id) => {
    return emailModel.deleteEmailById(id);
};

module.exports = {
    scheduleEmail,
    getAllScheduledEmails,
    getScheduledEmailById,
    deleteScheduledEmail
};
