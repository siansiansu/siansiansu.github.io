# BinaryGap

https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

```cpp
#include <bits/stdc++.h>

using namespace std;

int solution(int N)
{
    int maxGap = 0, curGap = 0;

    // 這個 loop 移除 N 前面的所有 0，直到遇到第一個 1 為止。這是因為 leading zero 不會形成有效的間隙。
    while (N > 0 && N % 2 == 0)
    {
         N /= 2;
    }

    // 走訪剩餘的二進位數字
    while (N > 0)
    {
        int digits = N % 2;

        // digits 等於 0 代表是在 gap 中
        if (digits == 0)
        {
            ++curGap;
        }
        else
        {
            // digits 不等於 0 代表 gap 結束
            if (curGap)
            {
                // 這時候計算 maxGap 最大是多少，並且 reset curGap
                maxGap = max(curGap, maxGap);
                curGap = 0;
            }

        }
        N /= 2;
    }
    return maxGap;
}
```

- T: $O()$
- S: $O()$
