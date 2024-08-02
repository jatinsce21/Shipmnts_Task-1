const cron = require('node-cron');

const scheduleCronJob = (emailDetails, sendEmail) => {
    const { scheduleTime, recurrence, recurrenceDetails } = emailDetails;
    
    let cronTime;
    switch (recurrence) {
        case 'daily':
            cronTime = `0 ${recurrenceDetails.times.join(',')} * * *`;
            break;
        case 'weekly':
            cronTime = `0 ${recurrenceDetails.times.join(',')} * * ${recurrenceDetails.days.join(',')}`;
            break;
        case 'monthly':
            cronTime = `0 ${recurrenceDetails.times.join(',')} ${recurrenceDetails.days.join(',')} * *`;
            break;
        case 'quarterly':
            cronTime = `0 ${recurrenceDetails.times.join(',')} ${recurrenceDetails.days.join(',')} */3 *`;
            break;
        default:
            cronTime = new Date(scheduleTime).toISOString();
            break;
    }

    cron.schedule(cronTime, () => {
        sendEmail(emailDetails);
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    }).start();
};

module.exports = {
    scheduleCronJob
};
