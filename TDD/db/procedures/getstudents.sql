CREATE OR ALTER PROCEDURE getstudents
AS
BEGIN
  SELECT id, name, email, regNo, classNo, fee_balance
  FROM Students;
END;
