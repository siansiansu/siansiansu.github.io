---
title: OddOccurrencesInArray
---

# [OddOccurrencesInArray](https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/)

:::note
```cpp
#include <bits/stdc++.h>

using namespace std;

int solution(vector<int> &A)
{
    unordered_map<int, int> countMap;
    for (auto a : A) ++countMap[a];

    for (auto [k, v] : countMap)
    {
        if (v % 2 == 0) continue;
        return k;
    }
}

```
- T: $O(n)$
- S: $O(n)$
:::
