---
title: FrogRiverOne
---

# [FrogRiverOne](https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/)

:::spoiler Solution
```cpp=
#include <bits/stdc++.h>

using namespace std;

int solution(int X, vector<int> &A)
{
    set<int> st;
    int n = A.size();
    for (int i = 0; i < n; ++i)
    {
        st.insert(A[i]);
        if (st.size() == X)
        {
            return i;
        }
    }
    return -1;
}

```
- 時間複雜度：$O()$
- 空間複雜度：$O()$
:::