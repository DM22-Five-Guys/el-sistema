INSERT INTO blogposts
(title, subtitle, blogcontent, entrydate, headerimg)
VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4)
RETURNING *;