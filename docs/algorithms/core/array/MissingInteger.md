---
title: MissingInteger
---

# [MissingInteger](https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/)

- 找第一個出現的正整數

:::note
```cpp
#include <bits/stdc++.h>

using namespace std;

int solution(vector<int> &A) {
    int n = A.size();

    // 建立一個 n + 1 長度的 vector
    // 如果數字出現過就 mark true
    vector<bool> seen(n + 1);

    for (int a : A)
    {
        // 因為題目只要求正整數，所以只求這個範圍內的
        if (1 <= a && a <= n + 1)
        {
            // 因為 N 最小的長度是 1
            // 所以要 - 1 從 0 開始算
            seen[a - 1] = true;
        }
    }

    // 從最前面開始找
    for (int i = 0; i < n + 1; ++i)
    {
        // 找沒出現過的數字，return i + 1
        if (!seen[i])
        {
            return i + 1;
        }
    }
    return -1;
}
```
- T: $O(n)$
- S: $O(n)$
:::
