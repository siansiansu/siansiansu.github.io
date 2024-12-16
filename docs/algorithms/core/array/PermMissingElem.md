# [PermMissingElem](https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/)

```cpp
#include <bits/stdc++.h>

using namespace std;

int solution(vector<int> &A)
{
    int n = A.size();

    if (n == 0) return 0;

    sort(A.begin(), A.end());

    for (int i = 0; i < n; ++i)
    {
        if (i + 1 != A[i]) return i + 1;
    }
    return A.back() + 1;
}
```

- T: $O()$
- S: $O()$
