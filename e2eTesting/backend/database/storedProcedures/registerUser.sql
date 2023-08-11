

CREATE TABLE Users2 (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    Email NVARCHAR(100) NOT NULL,
    Cohort NVARCHAR(50) NOT NULL,
    Username NVARCHAR(50) NOT NULL,
    Password NVARCHAR(100) NOT NULL
);









-- CREATE OR ALTER PROCEDURE registerUser
--     @Email NVARCHAR(100),
--     @Cohort NVARCHAR(50),
--     @Username NVARCHAR(50),
--     @Password NVARCHAR(100)
-- AS
-- BEGIN
--     -- Check if the email already exists
--     IF EXISTS (SELECT 1 FROM Users WHERE Email = @Email)
--     BEGIN
--         -- Email already exists, return an error code
--         RETURN 1;
--     END

--     -- Insert the new user into the Users table
--     INSERT INTO Users2 (Email, Cohort, Username, Password)
--     VALUES (@Email, @Cohort, @Username, @Password);

--     -- Return success code
--     RETURN 0;
-- END;

-- DROP TABLE IF EXISTS Users;

SELECT * FROM Users2;
DELETE Users2;