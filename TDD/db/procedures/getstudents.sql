CREATE PROCEDURE getstudents
AS
BEGIN
  SELECT id, name, email, regNo, class, fee_balance
  FROM Students;
END;
