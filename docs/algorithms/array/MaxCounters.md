---
title: MaxCounters
---

# [MaxCounters](https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/)

:::spoiler Solution
```cpp=
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(int N, vector<int> &A)
{
    vector<int> res(N);

    int max = 0;

    for (auto a : A)
    {
        if (1 <= a && a <= N)
        {
            ++res[a - 1];
            if (res[a - 1] > max)
            {
                max = res[a - 1];
            }
        }
        else if (a == N + 1)
        {
            for (int i = 0; i < N; ++i)
            {
                res[i] = max;
            }
        }
    }
    return res;
}

```
- 時間複雜度：$O()$
- 空間複雜度：$O()$
:::
