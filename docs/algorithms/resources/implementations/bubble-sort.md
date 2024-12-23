# Bubble Sort

[The Algorithms - Bubble Sort](https://the-algorithms.com/algorithm/bubble-sort)

## Approach

- select the first element of the array
- compare it with its next element
- if it is larger than the next element then swap them
- else do nothing
- keep doing this for every index of the array
- repeat the above process n times.

## Time Complexity

- $O(n^2)$ Worst case performance
- $O(n)$ Best-case performance
- $O(n^2)$ Average performance

## Space Complexity

- $O(1)$ Worst case

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<int> bubbleSort(vector<int>& nums) {
    int n = nums.size();
    bool swapped = false;
    for(int i = 0; i < n; i++) {
        swapped = false;
        // 第二根指標
        for(int j = 0; j < n - 1 - i; j++) {
            // 如果目前的數字比下一個數字大的話
            if(nums[j] > nums[j + 1]) {
                // 交換 j 和 j + 1 的位置
                swap(nums[j], nums[j + 1]);
                
                // 並且標記已經 swap 過
                swapped = true;
            }    
        }
        if(!swapped) break;
    }
    return nums;
}

int main() {
    vector<int> nums = {5, 4, 3, 2, 1};
    vector<int> arr;
    arr = bubbleSort(nums);
    for(auto& c : arr) {
        cout << c << ", ";
    }
}
```
