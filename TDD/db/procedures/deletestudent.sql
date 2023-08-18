CREATE PROCEDURE deletestudent
  @studentId INT
AS
BEGIN
  UPDATE Students
  SET isDeleted = 1
  WHERE id = @studentId;
END;
