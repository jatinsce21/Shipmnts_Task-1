const scheduledEmails = {};

const addEmail = (emailDetails) => {
    scheduledEmails[emailDetails.id] = emailDetails;
};

const getAllEmails = () => {
    return Object.values(scheduledEmails);
};

const getEmailById = (id) => {
    return scheduledEmails[id];
};

const deleteEmailById = (id) => {
    const emailDetails = scheduledEmails[id];
    if (emailDetails) {
        delete scheduledEmails[id];
    }
    return emailDetails;
};

module.exports = {
    addEmail,
    getAllEmails,
    getEmailById,
    deleteEmailById
};
