CREATE OR Alter PROCEDURE updateStudent
  @studentId INT,
  @name NVARCHAR(255),
  @email NVARCHAR(255),
  @regNo NVARCHAR(50),
  @class NVARCHAR(50),
  @fee_balance DECIMAL(10, 2)
AS
BEGIN
  UPDATE Students
  SET name = @name,
      email = @email,
      regNo = @regNo,
      class = @class,
      fee_balance = @fee_balance
  WHERE id = @studentId;
END;
