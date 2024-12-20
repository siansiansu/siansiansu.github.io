# Binary Search

[The Algorithms - Binary Search](https://the-algorithms.com/algorithm/binary-search?lang=c-plus-plus)

## Approach

- Search for the array by dividing the array in half repeatedly.
- Initially consider the actual array and pick the element at the middle index
- Keep a lower index i.e. 0 and higher index i.e. length of array
- If it is equal to the target element then return the index
- Else if it is greater than the target element then consider only the left half of array. (lower index = 0, higher = middle - 1)
- Else if it is less than the target element then consider only the right half of array. (lower index = middle + 1, higher = length of array)
- Return -(insertion index + 1) if the target element is not found in the array (If the lower index is greater than or equal to higher index). Some simpler implementations just return -1 if the element is not found. The offset of 1 must be added as the insertion index might be 0 (the searched value might be smaller than all elements in the array). As indexing starts at 0, this must be distinguishable from the case where the target element has the index 0.

## Time Complexity

- $O(\log n)$ Worst Case
- $O(1)$ Best Case (If middle element of initial array is the target element)

## Space Complexity

- O(1) For iterative approach
- O(1) For recursive approach _if tail call optimization is used_, $O(log n)$ due to recursion call stack, otherwise

```cpp
#include <iostream>
#include <vector>

using namespace std;

int binarySearch(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while(left <= right) {
        // 找到數列的中心點
        int mid = (left + right) / 2;
        // 如果等於 target 的話直接返回
        if(nums[mid] == target) {
            return mid;    
        } else if(nums[mid] < target) {
            // 如果數字比 target 小的話，說明要找的數字在右邊
            // left = mid + 1 繼續找            
            left = mid + 1;    
        } else {
            // 如果數字比 target 大的話，說明要找的數字在左邊
            // right = mid - 1
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    int target = 3;
    cout << binarySearch(nums, target) << endl;
}
```
