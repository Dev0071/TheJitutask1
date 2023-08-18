CREATE OR ALTER PROCEDURE addstudent
  @name NVARCHAR(255),
  @email NVARCHAR(255),
  @regNo NVARCHAR(50),
  @classNo NVARCHAR(50),
  @fee_balance DECIMAL(10, 2)
AS
BEGIN
  INSERT INTO Students (name, email, regNo, classNo, fee_balance)
  VALUES (@name, @email, @regNo, @classNo, @fee_balance);
END;
