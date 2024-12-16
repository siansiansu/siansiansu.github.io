---
title: TapeEquilibrium
---
# [TapeEquilibrium](https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/)

- 初始化 `head = A[0]` 和 `tail = accumulate(A.begin() + 1, A.end(), 0)`
- 再用一個迴圈加一個元素、減一個元素，比 `minDiff` 的大小

:::note
```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> &A)
{
    int n = A.size();
    int head = A[0];
    int tail = accumulate(A.begin() + 1, A.end(), 0);

    int minDiff = abs(head - tail);

    for (int i = 1; i < n - 1; ++i)
    {
        head += A[i];
        tail -= A[i];
        int cur = abs(head - tail);
        minDiff = min(minDiff, cur);
    }
    return minDiff;
}
```
- T: $O(n)$
- S: $O(1)$
:::
