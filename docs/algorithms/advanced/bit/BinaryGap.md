# [BinaryGap](https://app.codility.com/programmers/lessons/1-iterations/binary_gap/)

找出一個整數的二進位表示中，兩個 `1` 之間的最大 `0` 的數量。

- 初始化 `maxGap`, `curGap`
- 要怎麼略過 leading zero 的部分？

:::spoiler Solution
```cpp=
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
- 時間複雜度：$O()$
- 空間複雜度：$O()$
:::
