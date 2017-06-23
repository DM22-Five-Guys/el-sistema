select * from singleevents
where extract(week from scheduledate) = extract(week from current_date)