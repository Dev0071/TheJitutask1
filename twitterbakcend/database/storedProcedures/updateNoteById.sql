CREATE OR ALTER PROCEDURE updateNoteById
    @id NVARCHAR(36),
    @content NVARCHAR(MAX),
    @title NVARCHAR(255),
    @createdAt DATETIME2
AS
BEGIN
    UPDATE notesTable
    SET content = @content,
        title = @title,
        createdAt = @createdAt
    WHERE id = @id;
END
