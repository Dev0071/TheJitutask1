CREATE TABLE Students (
  id INT PRIMARY KEY IDENTITY(1,1),
  name NVARCHAR(255) NOT NULL,
  email NVARCHAR(255) NOT NULL,
  regNo NVARCHAR(50) NOT NULL,
  class NVARCHAR(50) NOT NULL,
  fee_balance DECIMAL(10, 2) NOT NULL
);

ALTER TABLE Students
ADD isDeleted BIT NOT NULL DEFAULT 0;

EXEC sp_rename 'Students.[class]', 'classNo', 'COLUMN';




INSERT INTO Students (name, email, regNo, class, fee_balance)
VALUES
  ('John Doe', 'john.doe@example.com', '12345', '10A', 1000.00),
  ('Jane Smith', 'jane.smith@example.com', '54321', '11B', 1200.00),
  ('Michael Johnson', 'michael.johnson@example.com', '98765', '9C', 800.00),
  ('Emily Brown', 'emily.brown@example.com', '56789', '12A', 1500.00),
  ('William Davis', 'william.davis@example.com', '43210', '10B', 1100.00),
  ('Olivia Martinez', 'olivia.martinez@example.com', '34567', '11A', 1300.00),
  ('James Wilson', 'james.wilson@example.com', '87654', '9A', 900.00),
  ('Sophia Taylor', 'sophia.taylor@example.com', '21098', '12B', 1600.00),
  ('Liam Miller', 'liam.miller@example.com', '67890', '10C', 1000.00),
  ('Isabella Anderson', 'isabella.anderson@example.com', '10987', '11C', 1400.00);

SELECT * FROM Students;
