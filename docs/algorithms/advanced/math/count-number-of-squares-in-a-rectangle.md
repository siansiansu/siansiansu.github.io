## Count number of squares in a rectangle

Given a m x n rectangle, how many squares are there in it?

```cpp
class Solution {
public:
    int countSquares(int m, int n) {
        int count = 0;
        for (int i = 1; i <= min(m, n); ++i) {
            count += (m - i + 1) * (n - i + 1);
        }
        return count;
    }
};
```

- T: $O(N)$
- S: $O(1)$
