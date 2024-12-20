# Quick Sort

[The Algorithms - Quick Sort](https://the-algorithms.com/algorithm/quick-sort)

## Approach

- Make the right-most index value pivot
- partition the array using pivot value
- quicksort left partition recursively
- quicksort right partition recursively

## Time Complexity

- $O(n^2)$ Worst case performance
- $O(n \cdot \log n)$ Best-case performance
- $O(n \cdot \log n)$ Average performance

## Space Complexity

- $O(\log n)$ Worst case

## Implementation

:::spoiler Hint
```cpp=
#include <bits/stdc++.h>

using namespace std;

// Function to partition the array around a pivot element
int partition()
{
    // Choose the rightmost element as the pivot
    // Pointer to track the boundary of elements <= pivot
    
    // Iterate through the range from left to right-1
    for ()
    {
        // If current element is less than or equal to pivot, swap it with the element at 'pointer'
        if ()
        {
            // Increment pointer after swap
        }
    }
    
    // Swap the pivot element with the element at 'pointer' to place the pivot in its correct position
    // Return the index of the pivot element
}

// Function to perform quicksort on the array
void quickSort()
{
    // Base case: if the range is valid
    // Partition the array and get the pivot index
    
    // Recursively apply quicksort to the sub-arrays
    // Left sub-array
    // Right sub-array
}
```
:::

:::spoiler Solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int partition(vector<int>& nums, int left, int right)
{
    int pivot = nums[right];
    int pointer = left;
    
    for (int i = left; i < right; i++)
    {
        if (nums[i] <= pivot)
        {
            swap(nums[pointer++], nums[i]);
        }
    }
    swap(nums[pointer], nums[right]);
    return pointer;    
}

void quickSort(vector<int>& nums, int left, int right)
{
    if(left >= right) return;
    int pivot = partition(nums, left, right);
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
}

int main()
{
    vector<int> nums = {5, 4, 3, 2, 1};
    quickSort(nums, 0, nums.size() - 1);
    
    for (auto& num : nums) printf("%d ", num);
    return 0;
}
```
