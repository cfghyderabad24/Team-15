# Team-15
## Challenge Statement

The project monitoring system that is currently in use is fragmented over multiple modes of communication and is not very efficient. The NGO is looking for a solution that will enhance the efficiency of both CRY frontliners and partner NGOs by sending prompt alerts and notifications 7 days before an action item is due to be completed to aid the successful completion of the project. A project takes place
over an annual cycle starting in either January and July. CRY has a fixed set of procedures that they need to adhere to during the

## Cry Dashboard

Welcome to Cry Dashboard! This is a Vite-powered React application for displaying cryptocurrency data.

## Getting Started

To get started with Cry Dashboard, follow these steps:

### Prerequisites

Make sure you have Node.js (v14 or later) and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd cry-dashboard
   ```

2. Run the command:

   ```bash
    npm install
   ```

3. Create the `.env` file:

   ```bash
    VITE_APP_CLIENT="YOUR_AUTH0_CLIENT"
    VITE_APP_DOMAIN="YOUR_AUTH0_DOMAIN"
   ```
### Running the application

1. Run the app using the command:

   ```bash
    npm run dev
   ```


## API Guide For Backend:

Path: ''
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns a welcome message.

---

Path: 'ngo/viewprojects'
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns a list of all projects.

---

Path: 'higher/viewapprovals'
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns a list of projects that are not approved.

---

Path: 'view/userngo'
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns a list of all NGO users.

---

Path: 'view/userhigher'
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns a list of all Higher users.

---

Path: 'ngo/createreport'
Type: ['POST']
Parameters: 
{
  "report_name": "string",
  "upload_time": "datetime (optional)",
  "attachments": "file (optional)",
  "created_by": "string"
}
Example JSON: 
{
  "report_name": "Monthly Report",
  "created_by": "user123"
}
Functionality: Creates a new report.

---

Path: 'ngo/createproject'
Type: ['POST']
Parameters: 
{
  "project_id": "string",
  "project_name": "string",
  "desc": "string",
  "budget": "integer",
  "isApproved": "boolean (optional)",
  "created_date": "datetime (optional)",
  "delivery_date": "datetime"
}
Example JSON: 
{
  "project_id": "proj123",
  "project_name": "Water Well Project",
  "desc": "A project to build a water well.",
  "budget": 5000,
  "delivery_date": "2024-12-31T23:59:59Z"
}
Functionality: Creates a new project.

---

Path: 'createuserngo'
Type: ['POST']
Parameters: 
{
  "id": "string",
  "username": "string",
  "password": "string",
  "email": "string",
  "created_time": "datetime (optional)",
  "level": "string (optional)"
}
Example JSON: 
{
  "id": "user123",
  "username": "ngo_user",
  "password": "password123",
  "email": "ngo_user@example.com"
}
Functionality: Creates a new NGO user.

---

Path: 'createuserhigher'
Type: ['POST']
Parameters: 
{
  "id": "string",
  "username": "string",
  "password": "string",
  "email": "string",
  "created_time": "datetime (optional)",
  "level": "string (optional)"
}
Example JSON: 
{
  "id": "user456",
  "username": "higher_user",
  "password": "password456",
  "email": "higher_user@example.com"
}
Functionality: Creates a new Higher user.

---

Path: 'tickets/'
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns a list of all tickets.

---

Path: 'tickets/<str:id>/'
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns the details of a specific ticket.

---

Path: 'tickets/create'
Type: ['POST']
Parameters: 
{
  "id": "string",
  "raised_by": "string",
  "assigned_to": "string",
  "desc": "string",
  "escalation_level": "string",
  "upload_time": "datetime (optional)",
  "solved_time": "datetime (optional)",
  "deadline_time": "datetime (optional)"
}
Example JSON: 
{
  "id": "ticket123",
  "raised_by": "user123",
  "assigned_to": "user456",
  "desc": "Issue with project approval",
  "escalation_level": "High"
}
Functionality: Creates a new ticket.

---

Path: 'tickets/update/<str:id>/'
Type: ['PUT']
Parameters: 
{
  "raised_by": "string",
  "assigned_to": "string",
  "desc": "string",
  "escalation_level": "string",
  "upload_time": "datetime (optional)",
  "solved_time": "datetime (optional)",
  "deadline_time": "datetime (optional)"
}
Example JSON: 
{
  "raised_by": "user123",
  "assigned_to": "user456",
  "desc": "Updated issue with project approval",
  "escalation_level": "Medium"
}
Functionality: Updates an existing ticket.

---

Path: 'tickets/delete/<str:id>/'
Type: ['DELETE']
Parameters: {}
Example JSON: N/A
Functionality: Deletes an existing ticket.

---

Path: 'projects/<str:project_id>/edit/approval'
Type: ['PUT']
Parameters: 
{
  "isApproved": "boolean"
}
Example JSON: 
{
  "isApproved": true
}
Functionality: Edits the approval status of a project.

---

Path: 'projects/approved_count/'
Type: ['GET']
Parameters: {}
Example JSON: N/A
Functionality: Returns the total number of projects and the count of approved projects.

---

Path: 'ngo/emails'
Type: ['GET', 'POST']
Parameters (GET): {}
Example JSON (GET): N/A
Functionality (GET): Returns a message indicating the email functionality is not implemented yet.

Parameters (POST): {}
Example JSON (POST): N/A
Functionality (POST): Placeholder for email functionality, returns a not implemented status.
 <br /> <br /> The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC"). JPMC did not create or contribute to the development of the Code. This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code, including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.