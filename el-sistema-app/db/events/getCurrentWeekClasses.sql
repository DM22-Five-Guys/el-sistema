-- SELECT * FROM singleevents
-- WHERE extract(week FROM startdate) = extract(week FROM current_date) AND catagoryid = 1;

SELECT * FROM singleevents
WHERE categoryid = 1;
