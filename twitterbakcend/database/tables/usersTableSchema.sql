BEGIN 
TRY
    CREATE TABLE usersTable(
        id VARCHAR(200) PRIMARY KEY,
        username VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(500) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
    
    )
END TRY
BEGIN CATCH
    THROW 50002, 'Table already exists', 1;
END CATCH