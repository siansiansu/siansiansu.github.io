# Linear Search

[The Algorithms - Linear Search](https://the-algorithms.com/algorithm/linear-search?lang=c-plus-plus)

## Approach

- Start iterating with the first element in the array.
- Compare it with the target element
- If it is equal to the target element then return the index
- Else continue iterating
- Return -1 if target element is not found in the array

## Time Complexity

- $O(n)$ Worse Case
- $O(1)$ Best Case (If first element of array is the target element)

## Space Complexity

- $O(1)$

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int linearSearch(vector<int>& nums, int target) {
    for(int i = 0; i < nums.size(); i++) {
        if(nums[i] == target) {
            return i;
        }    
    }
    return -1;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    int target = 3;
    
    cout << linearSearch(nums, target) << endl;
}
```
