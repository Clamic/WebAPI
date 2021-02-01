create table Client (
	ClientId int identity(1, 1),
	FirstName varchar(255),
	Surname varchar(255),
	DateOfBirth Date,
	Address varchar(255),
	Suburb varchar(255),
	State varchar(255),
	PostCode varchar(4),
	Telephone varchar(15),
	PRIMARY KEY (ClientID)
);

create table Invoice (
	InvoiceId int identity(1, 1),
	ClientId int,
	InvoiceDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	InvoiceNo varchar(255),
	InvoiceAmount int,
	FOREIGN KEY (ClientID) REFERENCES Client(ClientId)
);
Go

CREATE PROCEDURE selectAllInvoices
as
Select * from Invoice;
Go

CREATE PROCEDURE selectAllClients
as
Select * from Client;
Go

CREATE PROCEDURE insertInvoice
	@ClientId int,
	@InvoiceNo varchar(255),
	@InvoiceAmount int
AS
insert into Invoice
values (@ClientId, DEFAULT, @InvoiceNo, @InvoiceAmount);
Go

CREATE PROCEDURE insertClient
	@FirstName varchar(255),
	@Surname varchar(255),
	@DateOfBirth Date,
	@Address varchar(255),
	@Suburb varchar(255),
	@State varchar(255),
	@PostCode varchar(4),
	@Telephone varchar(15)
AS
insert into Client
values (@FirstName, @Surname, @DateOfBirth, @Address, @Suburb, @State, @PostCode, @Telephone);
Go

CREATE VIEW InvoiceView
AS
SELECT i.InvoiceId, i.InvoiceDate, i.InvoiceNo, i.ClientId, (CONCAT(c.FirstName, ' ',c.Surname)) as ClientName
FROM Invoice as i
LEFT JOIN
Client as c
ON
i.ClientId = c.ClientID;
Go

CREATE PROCEDURE selectInvoiceView
AS
select * from InvoiceView;
Go
