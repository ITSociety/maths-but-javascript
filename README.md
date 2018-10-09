# Maths but with Javascript
There is no point to this at all, except to have a little fun. If you would like to contribute please open a pull request. 

### Sets
A set is a collection of distinct objects, considered as an object in its own right. For example, the number 1, 2 and 3 are but together they form an set of size three, written `{1,2,3}`

For the ease of development, a set in this repository is represented using array syntax. The following is how we will represent sets `A = {3, 8, 7, 16, 10, 15}` and `B = {1, 2, 8, 10, 15}`.
```javascript
const a = [3, 8, 7, 16, 10, 15];
const b = [1, 2, 8, 10, 15];
```

#### Equality
It is worth noting that the sets `A = {1,2,3}` and `B = {3, 1, 2}` are in fact equal as set theory does not care about order. In javascript however, comparing `[1,2,3]` and `[3, 1, 2]` would be false. Hell, even comparing `[1,2,3]` with `[1,2,3]` would produce false. Javascript `/shrug`

### Union
The Union of two sets produces a new set which are in a, b or both a and b. 

```javascript
const a = [3, 8, 7, 16, 10, 15];
const b = [1, 2, 8, 10, 15];

const c = union(a, b);
// = [1, 2, 3, 7, 8, 10, 15, 16]
```
### Intersection

### Subset