CREATE OR ALTER PROCEDURE getstudent
  @studentId INT
AS
BEGIN
  SELECT id, name, email, regNo, classNo, fee_balance
  FROM Students
  WHERE id = @studentId;
END;
