CREATE OR ALTER PROCEDURE deleteNoteById
    @id NVARCHAR(36)
AS
BEGIN
    DELETE FROM notesTable
    WHERE id = @id;
END
