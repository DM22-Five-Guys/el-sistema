select *, extract(month from scheduledate) from singleevents
where extract(month from scheduledate) = $1