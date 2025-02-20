# pagination-lite.js
An ultra lightweight pagination "enginge" writen in lean JS.

# Usage
Currently, the reccomended usage is simply copy the pageinate(...) function from `paginate-lite.js` into your project.

Code is Licensed MIT, 2025 Andrew Humphreys

```
let my_list = paginate(
  N=100,
  current_page = 19,
  max_elements=5
);
```

Will return a list of length `max_elements` that contains the elements `1` (first page), `current_page` and `N` (last page) 100% of the time. 
The array will have up to 2 `0` elements which represent ellipsis.

# Parameters
```
pageinate(
N,
current_page,
max_elements
);
```

- `N` This is the total number of elements, in the list `[1,2,3,...,N]`.
- `current_page` is the current page of the user
- `max_elements` is the maximum number of elements in the list returned by paginate. Note that 5 is the minimum, but requires seperate implementation of "previous" and "last". With `max_elements>=7`, users can always find the next and previous elements.

Demo: [https://codepen.io/SlicesOfPi/pen/bNGpqmQ](https://codepen.io/SlicesOfPi/pen/bNGpqmQ)
