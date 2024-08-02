const { v4: uuidv4 } = require('uuid');
const emailService = require('../services/emailService');

const scheduleEmail = (req, res) => {
    const emailDetails = {
        id: uuidv4(),
        recipient: req.body.recipient,
        subject: req.body.subject,
        body: req.body.body,
        scheduleTime: req.body.scheduleTime,
        recurrence: req.body.recurrence,
        recurrenceDetails: req.body.recurrenceDetails,
        attachments: req.body.attachments || []
    };

    emailService.scheduleEmail(emailDetails);

    res.status(201).json(emailDetails);
};

const getScheduledEmails = (req, res) => {
    res.status(200).json(emailService.getAllScheduledEmails());
};

const getScheduledEmailById = (req, res) => {
    const emailDetails = emailService.getScheduledEmailById(req.params.id);
    if (!emailDetails) {
        return res.status(404).json({ error: 'Email not found' });
    }
    res.status(200).json(emailDetails);
};

const deleteScheduledEmail = (req, res) => {
    const emailDetails = emailService.deleteScheduledEmail(req.params.id);
    if (!emailDetails) {
        return res.status(404).json({ error: 'Email not found' });
    }
    res.status(200).json({ message: 'Email schedule deleted' });
};

module.exports = {
    scheduleEmail,
    getScheduledEmails,
    getScheduledEmailById,
    deleteScheduledEmail
};
