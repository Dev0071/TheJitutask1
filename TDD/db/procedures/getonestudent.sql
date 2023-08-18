CREATE PROCEDURE getstudent
  @studentId INT
AS
BEGIN
  SELECT id, name, email, regNo, class, fee_balance
  FROM Students
  WHERE id = @studentId;
END;
