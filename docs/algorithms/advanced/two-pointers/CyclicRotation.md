# [CyclicRotation](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/)

:::note
```cpp
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> &A, int K)
{
    int n = A.size();
    if (n == 0) return A;

    reverse(A.begin(), A.end());

    K %= n;

    reverse(A.begin(), A.begin() + K);
    reverse(A.begin() + K, A.end());
    return A;
}

```
- T: $O(n)$
- S: $O(1)$
:::
