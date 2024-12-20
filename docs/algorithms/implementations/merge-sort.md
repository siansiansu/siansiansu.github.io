## Merge Sort

[The Algorithms - Merge Sort](https://the-algorithms.com/algorithm/mergesort?lang=c-plus-plus)

## Approach

- Find a mid point and divide the array into to halves based on the mid point
- Recursively call the merge sort function for both the halves
- Merge the two sorted halves to get the sorted array

## Time Complexity

- Best case - $O(n \log n)$
- Average - $O(n \log n)$
- Worst case - $O(n \log n)$

## Space Complexity

- $O(n)$

## Implementation

:::spoiler Hint
```cpp=

```
:::

:::spoiler Solution
```cpp=
#include <bits/stdc++.h>

using namespace std;

void merge(vector<int>& nums, int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;
        
    vector<int> l1(n1), l2(n2);

    for (int i = 0; i < n1; ++i) l1[i] = nums[left + i];
    for (int i = 0; i < n2; ++i) l2[i] = nums[mid + 1 + i];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2)
    {
        if (l1[i] <= l2[j]) nums[k] = l1[i++];
        else nums[k] = l2[j++];
        ++k;
    }

    while (i < n1) nums[k++] = l1[i++];
    while (j < n2) nums[k++] = l2[j++];
}

void mergeSort(vector<int>& nums, int left, int right)
{
    if (left >= right) return;
    int mid = (left + right) / 2;
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);
}

int main()
{
    vector<int> nums = {5, 4, 3, 2, 1};
    mergeSort(nums, 0, nums.size() - 1);
    for (auto num : nums) printf("%d ", num);
    return 0;
}
```
:::
