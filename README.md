# Pagination

Pagination in React JS is a function of apps that allows them to show data on a series of pages. The information can be seen by going from one page to the next.

## Details
This application is an implementation of pagination in which the data gets loaded into the table after an API call, and a maximum of 10 items is seen on the screen at a time. The back and forth movement of the pages and the value of the current page is maintained by using useState hook. A useEffect hook with an empty dependency array is used to call API on initial load. A second useEffect hook is to update paginated list to show on screen usin slice() function.


