CREATE OR ALTER PROCEDURE checkIfUserExistsProc
    @username NVARCHAR(255),
    @email NVARCHAR(255)
AS
BEGIN
    SELECT COUNT(*) AS count
    FROM usersTable
    WHERE username = @username OR email = @email;
END