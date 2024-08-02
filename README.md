Automated Email Scheduling API
Objective
The goal of this API is to allow users to schedule emails for automatic delivery at specified times. Users can schedule one-time emails as well as recurring emails on a daily, weekly, monthly, or quarterly basis. The API handles the scheduling, sending, and management of these emails.

Features
Email Scheduling
One-time Scheduling: Schedule emails to be sent at a specific date and time.
Recurring Emails
Daily Recurrence: Users can select multiple times in a day (e.g., 2 PM and 4 PM).
Weekly Recurrence: Users can choose specific days of the week and times (e.g., Monday, Tuesday).
Monthly Recurrence: Users can select specific days of the month and times (e.g., 28th or 23rd).
Quarterly Recurrence: Users can choose specific days in the quarter and times (e.g., 14th or 9th).
Email Details
Accepts payloads with the following information:
Recipient email address
Subject of the email
Body of the email
Schedule time for the email
Attachments (optional)
API Specification
The API is designed using REST principles and includes the following endpoints:

Endpoints
POST /schedule-email

Description: Schedule a new email.
Request Body:
json
Copy code
{
  "recipient": "example@example.com",
  "subject": "Email Subject",
  "body": "Email Body",
  "scheduleTime": "2024-08-10T14:00:00Z",
  "recurrence": {
    "type": "daily",
    "times": ["14:00", "16:00"]
  },
  "attachments": [
    {
      "filename": "attachment.pdf",
      "content": "base64encodedcontent"
    }
  ]
}
Response:
json
Copy code
{
  "id": "unique-scheduled-email-id",
  "status": "scheduled"
}
GET /scheduled-emails

Description: Retrieve a list of all scheduled emails.
Response:
json
Copy code
[
  {
    "id": "unique-scheduled-email-id",
    "recipient": "example@example.com",
    "subject": "Email Subject",
    "scheduleTime": "2024-08-10T14:00:00Z",
    "recurrence": "daily",
    "status": "scheduled"
  }
]
GET /scheduled-emails/{id}

Description: Retrieve details of a specific scheduled email.
Response:
json
Copy code
{
  "id": "unique-scheduled-email-id",
  "recipient": "example@example.com",
  "subject": "Email Subject",
  "body": "Email Body",
  "scheduleTime": "2024-08-10T14:00:00Z",
  "recurrence": {
    "type": "daily",
    "times": ["14:00", "16:00"]
  },
  "attachments": [
    {
      "filename": "attachment.pdf",
      "content": "base64encodedcontent"
    }
  ],
  "status": "scheduled"
}
DELETE /scheduled-emails/{id}

Description: Cancel a scheduled email.
Response:
json
Copy code
{
  "id": "unique-scheduled-email-id",
  "status": "cancelled"
}
Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/automated-email-scheduling-api.git
Navigate to the Project Directory:

bash
Copy code
cd automated-email-scheduling-api
Install Dependencies:

bash
Copy code
npm install
Configure Environment Variables:
Create a .env file and configure your environment variables for email service credentials and database connection.

Start the Server:

bash
Copy code
npm start
Testing
You can test the API endpoints using tools like Postman or cURL.

Example cURL Commands
Schedule an Email:

bash
Copy code
curl -X POST http://localhost:3000/schedule-email \
-H "Content-Type: application/json" \
-d '{
  "recipient": "example@example.com",
  "subject": "Email Subject",
  "body": "Email Body",
  "scheduleTime": "2024-08-10T14:00:00Z",
  "recurrence": {
    "type": "daily",
    "times": ["14:00", "16:00"]
  },
  "attachments": [
    {
      "filename": "attachment.pdf",
      "content": "base64encodedcontent"
    }
  ]
}'
Retrieve Scheduled Emails:

bash
Copy code
curl -X GET http://localhost:3000/scheduled-emails
Retrieve a Specific Scheduled Email:

bash
Copy code
curl -X GET http://localhost:3000/scheduled-emails/{id}
Cancel a Scheduled Email:

bash
Copy code
curl -X DELETE http://localhost:3000/scheduled-emails/{id}
