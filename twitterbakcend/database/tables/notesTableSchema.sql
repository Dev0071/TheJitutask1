CREATE TABLE notesTable (
    id NVARCHAR(36) PRIMARY KEY,
    content NVARCHAR(MAX) NOT NULL,
    title NVARCHAR(255) NOT NULL,
    createdAt DATETIME2 NOT NULL
);

DROP TABLE notesTable