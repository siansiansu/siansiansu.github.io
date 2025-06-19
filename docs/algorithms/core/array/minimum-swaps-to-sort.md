# Minimum Swaps to Sort

https://www.geeksforgeeks.org/problems/minimum-swaps/1

Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order.

**Example 1:**

```
Input:
nums = {2, 8, 5, 4}

Output:
1

Explanation:
swap 8 with 4.
```

**Example 2:**

```
Input:
nums = {10, 19, 6, 3, 5}

Output:
2

Explanation:
swap 10 with 3 and swap 19 with 5.
```

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <utility>

using namespace std;

int minSwapsAscending(vector<int>& nums)
{
    int n = nums.size();

    vector<pair<int, int>> arr(n);
    for (int i = 0; i < n; i++)
    {
        arr[i] = {nums[i], i};
    }

    sort(arr.begin(), arr.end());

    vector<bool> seen(n);

    int swaps = 0;

    for (int i = 0; i < n; i++)
    {
        // If the element is already in the correct position or already visited
        if (seen[i] || arr[i].second == i)
            continue;

        int cycleSize = 0;
        int j = i;

        while (!seen[j])
        {
            seen[j] = true;
            j = arr[j].second;
            cycleSize++;
        }

        if (cycleSize > 0)
        {
            swaps += (cycleSize - 1);
        }
    }
    return swaps;
}

int minSwapsDescending(vector<int>& nums)
{
    int n = nums.size();

    vector<pair<int, int>> arrPos(n);
    for (int i = 0; i < n; i++)
    {
        arrPos[i] = {nums[i], i};
    }

    sort(arrPos.rbegin(), arrPos.rend());

    vector<bool> seen(n);

    int swaps = 0;

    for (int i = 0; i < n; i++)
    {
        if (seen[i] || arrPos[i].second == i)
        {
            continue;
        }

        int numOfCycles = 0;
        int j = i;

        while (!seen[j])
        {
            seen[j] = true;
            j = arrPos[j].second;
            numOfCycles++;
        }

        if (numOfCycles > 0)
        {
            swaps += (numOfCycles - 1);
        }
    }
    return swaps;
}

int main()
{
    vector<int> nums = {2, 8, 5, 4};
    int r1 = minSwapsAscending(nums); // swap 8 and 4
    int r2 = minSwapsDescending(nums); // swap 8 and 2, swap 2 and 5, swap 2 amd 4
    printf("Ascending: %d, Descending: %d\n", r1, r2);
}
```

- T: $O(n \cdot \log n)$
- S: $O(n)$
