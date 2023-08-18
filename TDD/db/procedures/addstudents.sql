CREATE PROCEDURE addstudent
  @name NVARCHAR(255),
  @email NVARCHAR(255),
  @regNo NVARCHAR(50),
  @class NVARCHAR(50),
  @fee_balance DECIMAL(10, 2)
AS
BEGIN
  INSERT INTO Students (name, email, regNo, class, fee_balance)
  VALUES (@name, @email, @regNo, @class, @fee_balance);
END;
