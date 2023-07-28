CREATE OR ALTER PROCEDURE registerUserProc
    @id NVARCHAR(100),
    @username NVARCHAR(50),
    @email NVARCHAR(100),
    @password NVARCHAR(100)
AS
BEGIN
    INSERT INTO usersTable (id,username, email, password)
    VALUES (@id,@username, @email, @password);
    
END

SELECT * FROM usersTable