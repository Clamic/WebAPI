# Documentation

### Setup

The architecture is a .NET web api that executes SQL procs seen in the .sql script file.
The front end is an Angular application using Bootstrap. The application has 3 pages, a dashboard, a client add and edit page and a purchase page which can be used to generate invoices

Site navigation: when you navigate to either the client add/edit page or the purchase page, a back button will appear in the web page header bar. You can click this or just use the browsers native back button to go back to the homepage

To setup this app:
1. Create a database called 'Ebix' and then run the scripts in 'SQL SCRIPTS/Table creation and proc scripts.sql'.
2. Run an IIS Express instance in VS for the WebAPI
3. Navigate to the angular-app folder and run npm i, followed by ng serve

Note: I didnt have time to add validation to the client add/edit page however I do showcase validation logic in the purchase page.
The solution is also missing unit tests. 

### Task 1 - Database

Data Types:
Int was assigned to fields that only made sense to be a number e.g. Ids. Telephone, PostCode, InvoiceNo were left as varchar since no math operations are going to be performed on them, and this way its easier to set a max length.

The reason I created the procedures was for the sake of SQL injection attacks. That and theres less coupling with the web api not needing to know what query to run

I did not sort the View I created by InvoiceDate because it is my understanding that it isnt the job of a view to sort its contents. I left this job to the front end which is very easy to do through Angular

### Task 2 - Web Page

Web page demonstrates use of Bootstrap UI elements such as tables and buttons as well as spacing classes (e.g. mx-2, d-flex)

Dates were formatted using the angular date pipe to be of format DD-MM-YYYY

Bootstrap icons were used for a loading spinner in the purchase app page and the left angle back button 

SCSS was used for styling which is the most convinient and clear CSS framework in my opinion

### Task 3 - API

You will find the web API routes inside WebAPI/Controllers/ClientController and InvoiceController

Time permitting I would have added unit tests to the .spec files and also made the Client component a reactive form to ensure no invalid inputs could be entered by the user.


