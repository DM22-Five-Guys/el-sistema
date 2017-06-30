INSERT INTO blogposts
(title, subtitle, headerimg, entrydate)
VALUES ($1, $2, 'https://wyncode.co/wp-content/uploads/2014/08/171.jpg', CURRENT_TIMESTAMP)
RETURNING *;